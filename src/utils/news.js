const markdownFiles = import.meta.glob(
  ["../content/news/*.md", "!../content/news/README.md"],
  {
  eager: true,
  import: "default",
  query: "?raw",
  },
);

function cleanValue(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseMarkdown(raw, filePath) {
  const frontmatterMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

  if (!frontmatterMatch) {
    throw new Error(`Frontmatter tidak ditemukan pada ${filePath}`);
  }

  const metadata = {};
  for (const line of frontmatterMatch[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();
    const value = cleanValue(line.slice(separator + 1));
    metadata[key] = value;
  }

  const filename = filePath.split("/").pop().replace(/\.md$/, "");
  const content = frontmatterMatch[2].trim();
  const wordCount = content
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  return {
    ...metadata,
    slug: metadata.slug || filename,
    featured: metadata.featured === "true",
    readTime: Math.max(1, Math.ceil(wordCount / 200)),
    content,
  };
}

export const newsArticles = Object.entries(markdownFiles)
  .map(([path, raw]) => parseMarkdown(raw, path))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getNewsBySlug(slug) {
  return newsArticles.find((article) => article.slug === slug);
}

export function formatNewsDate(date) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
