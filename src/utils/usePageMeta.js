import { useEffect } from "react";

// Host kanonik — harus konsisten dengan canonical/og:url di index.html.
const SITE_URL = "https://www.hmifunja.my.id";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * SEO per halaman (SPA): judul, deskripsi, canonical, og:url, dan og/twitter
 * dihitung dari `path`. `image` diawali "/" (contoh: "/gallery/pengukuhan-1.jpg")
 * dan hanya dipakai bila ada. `noindex` untuk halaman seperti 404.
 */
export default function usePageMeta({ title, description, path, image, imageAlt, noindex = false }) {
  const url = `${SITE_URL}${path}`;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    upsertMeta("name", "description", description);
    upsertLink("canonical", noindex ? null : url);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", noindex ? null : url);
    if (image) {
      upsertMeta("property", "og:image", `${SITE_URL}${image}`);
      upsertMeta("name", "twitter:image", `${SITE_URL}${image}`);
      // dimensi default di index.html menggambarkan banner utama, bukan gambar
      // per-halaman. hapus agar crawler memeriksa gambar secara langsung
      ["og:image:width", "og:image:height"].forEach((key) =>
        document.head.querySelector(`meta[property="${key}"]`)?.remove(),
      );
      if (imageAlt) {
        upsertMeta("property", "og:image:alt", imageAlt);
        upsertMeta("name", "twitter:image:alt", imageAlt);
      }
    }
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    if (noindex) upsertMeta("name", "robots", "noindex, nofollow");
    return () => {
      document.title = previousTitle;
      if (noindex) {
        document.head.querySelector('meta[name="robots"]')?.remove();
      }
    };
  }, [title, description, url, image, imageAlt, noindex]);
}
