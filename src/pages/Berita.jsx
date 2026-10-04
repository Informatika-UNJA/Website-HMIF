import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Newspaper, Search, X } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import NewsMeta from "../components/NewsMeta";
import { newsArticles } from "../utils/news";

export default function Berita() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const categories = useMemo(
    () => ["Semua", ...new Set(newsArticles.map((article) => article.category))],
    [],
  );
  const featured = newsArticles.find((article) => article.featured) || newsArticles[0];
  const filteredArticles = newsArticles.filter((article) => {
    const haystack = `${article.title} ${article.excerpt} ${article.category} ${article.author}`.toLowerCase();
    if (q && !haystack.includes(q)) return false;
    if (activeCategory !== "Semua" && article.category !== activeCategory) return false;
    // Saat mencari, semua artikel (termasuk yang featured di hero) ikut tampil di daftar hasil.
    if (q) return true;
    return article.slug !== featured?.slug || activeCategory !== "Semua";
  });

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
            <Reveal as="article" className="group relative overflow-hidden rounded-[2rem] bg-white shadow-[0_0_0_1px_oklch(0_0_0/0.08),0_16px_40px_-24px_oklch(0_0_0/0.35)]">
              <div className="grid lg:min-h-[26rem] lg:grid-cols-12">
                <div className="relative min-h-56 overflow-hidden lg:col-span-7 lg:min-h-full">
                  <img
                    src={featured.cover}
                    alt={featured.coverAlt}
                    className="absolute inset-0 h-full w-full object-cover outline outline-1 -outline-offset-1 outline-black/10 transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  />
                </div>

                <div className="flex flex-col justify-between gap-8 p-7 sm:p-9 lg:col-span-5">
                  <div>
                    <span className="eyebrow inline-flex rounded-full bg-gold-400 px-3 py-1.5 text-ink-950">
                      Berita utama · {featured.category}
                    </span>
                    <h2 className="mt-5 text-balance font-display text-2xl font-semibold leading-[1.25] tracking-tight text-ink-900 sm:text-3xl">
                      <Link
                        to={`/berita/${featured.slug}`}
                        className="after:absolute after:inset-0 after:content-[''] decoration-gold-500 decoration-2 underline-offset-4 hover:underline"
                      >
                        {featured.title}
                      </Link>
                    </h2>
                    <p className="mt-4 text-pretty text-base leading-relaxed text-ink-500">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <NewsMeta article={featured} />
                    <Link
                      to={`/berita/${featured.slug}`}
                      className="relative inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-200 ps-5 pe-[18px] py-2.5 text-sm font-semibold text-ink-950 transition-[background-color,scale] duration-150 ease-out hover:bg-teal-300 active:scale-[0.96]"
                    >
                      Baca berita utama
                      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          <div className="mt-20 sm:mt-20">
            <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-teal-600">Arsip berita</p>
                <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                  Kabar terbaru dari himpunan
                </h2>
              </div>

              <div className="flex w-full flex-col gap-4 sm:w-auto sm:min-w-72">
                <div role="search">
                  <label htmlFor="cari-berita" className="sr-only">
                    Cari berita
                  </label>
                  <div className="relative">
                    <Search
                      aria-hidden="true"
                      size={16}
                      strokeWidth={1.5}
                      className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-ink-500"
                    />
                    <input
                      id="cari-berita"
                      type="text"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Escape") setQuery("");
                      }}
                      placeholder="Cari judul, ringkasan, atau penulis…"
                      className="min-h-11 w-full rounded-full bg-white py-2.5 ps-11 pe-11 text-sm text-ink-900 shadow-[0_0_0_1px_oklch(0_0_0/0.12)] placeholder:text-ink-500"
                    />
                    {query && (
                      <button
                        type="button"
                        onClick={() => setQuery("")}
                        aria-label="Hapus pencarian"
                        className="absolute end-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-ink-500 transition-[background-color,color] duration-150 ease-out hover:bg-paper hover:text-ink-900"
                      >
                        <X aria-hidden="true" size={16} strokeWidth={1.5} />
                      </button>
                    )}
                  </div>
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
              </div>
            </Reveal>

            <p className="sr-only" role="status">
              {q
                ? `${filteredArticles.length} berita ditemukan untuk pencarian "${query.trim()}" di kategori ${activeCategory}.`
                : `${filteredArticles.length} berita ditampilkan untuk kategori ${activeCategory}.`}
            </p>
            <div className="mt-10">
              {q && filteredArticles.length > 0 && (
                <p className="mb-4 text-sm text-ink-500" aria-hidden="true">
                  Menampilkan {filteredArticles.length} dari {newsArticles.length} berita untuk "{query.trim()}"
                </p>
              )}
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
              ) : q ? (
                <div className="py-20 text-center">
                  <Search aria-hidden="true" className="mx-auto text-ink-300" size={40} strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">
                    Tidak ada berita yang cocok
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-pretty text-ink-500">
                    Tidak ditemukan berita untuk "{query.trim()}"{" "}
                    {activeCategory === "Semua" ? "di semua kategori" : `di kategori ${activeCategory}`}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="mt-6 inline-flex min-h-11 items-center rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-paper transition-[background-color,scale] duration-150 ease-out hover:bg-ink-800 active:scale-[0.96]"
                  >
                    Tampilkan semua berita
                  </button>
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
