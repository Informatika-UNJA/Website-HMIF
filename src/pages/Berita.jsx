import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Newspaper } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import NewsMeta from "../components/NewsMeta";
import { newsArticles } from "../utils/news";

export default function Berita() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const categories = useMemo(
    () => ["Semua", ...new Set(newsArticles.map((article) => article.category))],
    [],
  );
  const featured = newsArticles.find((article) => article.featured) || newsArticles[0];
  const filteredArticles = newsArticles.filter(
    (article) =>
      (article.slug !== featured?.slug || activeCategory !== "Semua") &&
      (activeCategory === "Semua" || article.category === activeCategory),
  );

  return (
    <main id="main-content">
      <PageHeader
        eyebrow="Kabar HMIF"
        title="Berita, gagasan, dan jejak kegiatan"
        subtitle="Ikuti perkembangan terbaru dari HMIF Informatika Universitas Jambi—mulai dari kegiatan, prestasi, hingga cerita dari balik layar organisasi."
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="container-hmif">
          {featured && (
            <Reveal as="article" className="group relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink-950 shadow-[0_0_0_1px_oklch(0_0_0/0.06),0_16px_40px_-24px_oklch(0_0_0/0.45)]">
              <div className="grid min-h-[31rem] lg:grid-cols-12">
                <div className="relative min-h-72 overflow-hidden lg:col-span-7 lg:min-h-full">
                  <img
                    src={featured.cover}
                    alt={featured.coverAlt}
                    className="absolute inset-0 h-full w-full object-cover outline outline-1 -outline-offset-1 outline-black/10 transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink-950/25" />
                </div>

                <div className="relative flex flex-col justify-between gap-10 p-7 sm:p-10 lg:col-span-5">
                  <div>
                    <span className="eyebrow inline-flex rounded-full bg-gold-400 px-3 py-1.5 text-ink-950">
                      Berita utama · {featured.category}
                    </span>
                    <h2 className="mt-6 text-balance font-display text-2xl font-semibold leading-[1.25] tracking-tight text-paper sm:text-4xl">
                      {featured.title}
                    </h2>
                    <p className="mt-5 text-pretty text-base leading-relaxed text-ink-200">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <NewsMeta article={featured} light />
                    <Link
                      to={`/berita/${featured.slug}`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-400 ps-5 pe-[18px] py-2.5 text-sm font-semibold text-ink-950 transition-[background-color,scale] duration-150 ease-out hover:bg-teal-300 active:scale-[0.96]"
                    >
                      Baca berita utama
                      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          <div className="mt-20 sm:mt-28">
            <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-teal-600">Arsip berita</p>
                <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                  Kabar terbaru dari himpunan
                </h2>
              </div>

              <div className="flex max-w-full gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter kategori berita">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                    className={`min-h-11 shrink-0 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-[background-color,color,box-shadow,scale] duration-150 ease-out active:scale-[0.96] ${
                      activeCategory === category
                        ? "bg-ink-900 text-paper shadow-[0_0_0_1px_oklch(0_0_0/0.08),0_2px_4px_oklch(0_0_0/0.08)]"
                        : "bg-paper text-ink-600 shadow-[0_0_0_1px_oklch(0_0_0/0.12)] hover:bg-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Reveal>

            <p className="sr-only" role="status">
              {filteredArticles.length} berita ditampilkan untuk kategori {activeCategory}.
            </p>
            <div className="mt-10">
              {filteredArticles.length > 0 ? (
                <div className="divide-y divide-ink-200">
                  {filteredArticles.map((article, index) => (
                    <Reveal as="article" key={article.slug} delay={Math.min(index * 0.05, 0.15)}>
                      <Link
                        to={`/berita/${article.slug}`}
                        className="group/item grid gap-6 py-8 transition-colors duration-150 hover:bg-white/60 sm:-mx-4 sm:grid-cols-[12rem_1fr_auto] sm:items-center sm:px-4"
                      >
                        <img
                          src={article.cover}
                          alt={article.coverAlt}
                          loading="lazy"
                          className="aspect-[16/10] w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-black/10 sm:h-28"
                        />
                        <div>
                          <p className="eyebrow text-teal-600">{article.category}</p>
                          <h3 className="mt-2 text-balance font-display text-xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-2xl">
                            {article.title}
                          </h3>
                          <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-ink-500 sm:text-base">
                            {article.excerpt}
                          </p>
                          <div className="mt-4">
                            <NewsMeta article={article} />
                          </div>
                        </div>
                        <span className="hidden size-11 items-center justify-center rounded-full text-ink-700 shadow-[0_0_0_1px_oklch(0_0_0/0.12)] transition-[background-color,color,scale] duration-150 ease-out group-hover/item:bg-ink-900 group-hover/item:text-paper group-active/item:scale-[0.96] sm:flex">
                          <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.5} />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <Newspaper aria-hidden="true" className="mx-auto text-ink-300" size={40} strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">
                    Belum ada berita di kategori ini
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-pretty text-ink-500">
                    Pilih kategori lain untuk melihat kabar terbaru dari HMIF.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
