// SEO
import { execFile } from "node:child_process";
import { createServer } from "node:http";
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const SITE_URL = "https://www.hmifunja.my.id";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".woff2": "font/woff2",
};

function findChrome() {
  if (process.env.CHROME_PATH && existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }
  const candidates =
    process.platform === "win32"
      ? [
          "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
          "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
          "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
          "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
        ]
      : [
          "/usr/bin/google-chrome",
          "/usr/bin/chromium-browser",
          "/usr/bin/chromium",
        ];
  return candidates.find((p) => existsSync(p)) || null;
}

// Route statis + slug berita dibaca dari frontmatter (sinkron dengan src/utils/news.js)
const STATIC_ROUTES = ["/", "/tentang", "/program-kerja", "/struktur-organisasi", "/galeri", "/berita", "/kontak"];

async function newsRoutes() {
  const dir = path.join(ROOT, "src", "content", "news");
  const files = (await readdir(dir)).filter((f) => f.endsWith(".md") && f !== "README.md");
  const routes = [];
  for (const file of files) {
    const raw = await readFile(path.join(dir, file), "utf8");
    const front = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    const slugMeta = front?.[1].match(/^slug:\s*(.+)$/m)?.[1]?.trim().replace(/^["']|["']$/g, "");
    const slug = slugMeta || file.replace(/\.md$/, "");
    routes.push(`/berita/${slug}`);
  }
  return routes;
}

function startStaticServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
        let filePath = path.join(DIST, urlPath);
        if (filePath.endsWith(path.sep) || !path.extname(filePath)) {
          filePath = path.join(filePath, "index.html");
        }
        if (!filePath.startsWith(DIST) || !existsSync(filePath)) {
          // fallback SPA: route tanpa ekstensi dilayani shell index.html
          filePath = path.join(DIST, "index.html");
        }
        const data = await readFile(filePath);
        res.writeHead(200, { "Content-Type": MIME[path.extname(filePath)] || "application/octet-stream" });
        res.end(data);
      } catch {
        res.writeHead(500);
        res.end("error");
      }
    });
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

function dumpDom(chrome, url) {
  return new Promise((resolve, reject) => {
    execFile(
      chrome,
      ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--virtual-time-budget=15000", "--dump-dom", url],
      { maxBuffer: 64 * 1024 * 1024 },
      (err, stdout) => (err ? reject(err) : resolve(stdout)),
    );
  });
}

async function main() {
  if (!existsSync(path.join(DIST, "index.html"))) {
    console.warn("[prerender] dist/ tidak ditemukan — jalankan `vite build` dulu. Prerender dilewati.");
    process.exit(0);
  }
  const chrome = findChrome();
  if (!chrome) {
    console.warn("[prerender] Chrome/Edge tidak ditemukan (set CHROME_PATH untuk memaksa). Prerender dilewati.");
    process.exit(0);
  }

  const routes = [...STATIC_ROUTES, ...(await newsRoutes())];
  const server = await startStaticServer();
  const port = server.address().port;

  let ok = 0;
  for (const route of routes) {
    const html = await dumpDom(chrome, `http://127.0.0.1:${port}${route}`);
    const rel = route === "/" ? "index.html" : path.join(route.replace(/^\//, ""), "index.html");
    const out = path.join(DIST, rel);
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, html);
    ok++;
    console.log(`[prerender] ${route} -> dist/${rel.split(path.sep).join("/")} (${(html.length / 1024).toFixed(0)} KB)`);
  }

  server.close();
  console.log(`[prerender] selesai: ${ok}/${routes.length} route ke ${SITE_URL}`);
}

main().catch((err) => {
  console.warn(`[prerender] gagal: ${err.message} — dist/ tetap berupa SPA biasa.`);
  process.exit(0);
});
