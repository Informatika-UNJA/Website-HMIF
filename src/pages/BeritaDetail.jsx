import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import NewsMeta from "../components/NewsMeta";
import { getNewsBySlug, newsArticles } from "../utils/news";

const markdownComponents = {
  h2: ({ children }) => (
    <h2 className="scroll-mt-28 text-balance font-display text-2xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="scroll-mt-28 text-balance font-display text-xl font-semibold leading-snug text-ink-900 sm:text-2xl">
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="text-base leading-[1.75] text-ink-600 sm:text-lg">{children}</p>,
  ul: ({ children }) => <ul className="list-disc space-y-2 ps-6 text-base leading-[1.75] text-ink-600 marker:text-gold-600 sm:text-lg">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal space-y-2 ps-6 text-base leading-[1.75] text-ink-600 marker:font-semibold marker:text-gold-600 sm:text-lg">{children}</ol>,
  blockquote: ({ children }) => (
    <blockquote className="my-10 border-s-4 border-gold-500 py-2 ps-6 font-display text-xl leading-relaxed text-ink-800 sm:text-2xl">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-semibold text-teal-700 underline decoration-gold-500 decoration-2 underline-offset-4 transition-colors duration-150 hover:text-ink-900"
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt || ""}
      loading="lazy"
      className="my-10 w-full rounded-2xl object-cover outline outline-1 -outline-offset-1 outline-black/10"
    />
  ),
  hr: () => <hr className="my-12 border-ink-200" />,
  strong: ({ children }) => <strong className="font-semibold text-ink-900">{children}</strong>,
  code: ({ children }) => <code className="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-[0.9em] text-ink-800">{children}</code>,
  table: ({ children }) => (
    <div className="my-10 overflow-x-auto">
      <table className="w-full border-collapse text-start text-sm sm:text-base">{children}</table>
    </div>
  ),
  th: ({ children }) => <th className="border-b-2 border-ink-300 px-4 py-3 text-start font-semibold text-ink-900">{children}</th>,
  td: ({ children }) => <td className="border-b border-ink-200 px-4 py-3 text-ink-600">{children}</td>,
};

export default function BeritaDetail() {
  const { slug } = useParams();
  const article = getNewsBySlug(slug);

  useEffect(() => {
    if (!article) return undefined;
    const previousTitle = document.title;
    document.title = `${article.title} — HMIF UNJA`;
    return () => {
      document.title = previousTitle;
    };
  }, [article]);

  if (!article) {
    return (
      <main id="main-content" className="flex min-h-[75svh] items-center justify-center bg-ink-950 px-6 pt-24 text-center">
        <div>
          <p className="eyebrow text-gold-400">404 · Berita</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold text-paper sm:text-5xl">
            Berita tidak ditemukan
          </h1>
          <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-ink-300">
            Tautan mungkin sudah berubah atau artikel tersebut belum diterbitkan.
          </p>
          <Link
            to="/berita"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-[background-color,scale] duration-150 hover:bg-teal-300 active:scale-[0.96]"
          >
            <ArrowLeft aria-hidden="true" size={18} strokeWidth={2} />
            Kembali ke semua berita
          </Link>
        </div>
      </main>
    );
  }

  const relatedArticles = newsArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  return (
    <main id="main-content">
      <article>
        <header className="relative overflow-hidden bg-ink-950 pb-16 pt-32 sm:pb-24 sm:pt-40">
          <div className="container-hmif relative z-10">
            <Link
              to="/berita"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-200 transition-colors duration-150 hover:text-paper"
            >
              <ArrowLeft aria-hidden="true" size={18} strokeWidth={2} />
              Semua berita
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="eyebrow text-gold-400">{article.category}</p>
                <h1 className="mt-5 max-w-5xl text-balance font-display text-4xl font-semibold leading-[1.06] tracking-tight text-paper sm:text-5xl lg:text-6xl">
                  {article.title}
                </h1>
                <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-ink-200 sm:text-xl">
                  {article.excerpt}
                </p>
              </div>
              <div className="lg:col-span-4 lg:pb-1">
                <NewsMeta article={article} light />
              </div>
            </div>
          </div>
        </header>

        <div className="bg-paper">
          <div className="container-hmif py-10 sm:py-14">
            <img
              src={article.cover}
              alt={article.coverAlt}
              className="aspect-[16/8] w-full rounded-2xl object-cover outline outline-1 -outline-offset-1 outline-black/10 sm:rounded-[2rem]"
            />
          </div>

          <div className="container-hmif pb-20 sm:pb-28">
            <div className="mx-auto max-w-[68ch] space-y-7">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <aside className="bg-ink-100 py-16 sm:py-20" aria-labelledby="related-news-title">
          <div className="container-hmif">
            <p className="eyebrow text-teal-600">Lanjut membaca</p>
            <h2 id="related-news-title" className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900">
              Berita lainnya
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {relatedArticles.map((item) => (
                <Link key={item.slug} to={`/berita/${item.slug}`} className="group block">
                  <img
                    src={item.cover}
                    alt={item.coverAlt}
                    loading="lazy"
                    className="aspect-[16/9] w-full rounded-2xl object-cover outline outline-1 -outline-offset-1 outline-black/10 transition-transform duration-300 ease-out group-hover:-translate-y-1"
                  />
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <p className="eyebrow text-teal-600">{item.category}</p>
                      <h3 className="mt-2 text-balance font-display text-2xl font-semibold leading-tight text-ink-900">
                        {item.title}
                      </h3>
                    </div>
                    <ArrowUpRight aria-hidden="true" className="mt-1 shrink-0 text-ink-500 transition-colors duration-150 group-hover:text-ink-900" size={22} strokeWidth={1.5} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      )}
    </main>
  );
}
