import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  User,
  X,
  ChevronRight,
  BookOpen,
  Share2,
  Check,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { beritaCategories, beritaList } from "../data/content";

export default function Berita() {
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copied, setCopied] = useState(false);

  // Close modal on Escape key (R-32 Keyboard Accessibility)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedArticle(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedArticle]);

  // Filter articles based on category and search query
  const filteredArticles = beritaList.filter((item) => {
    const matchesCategory =
      selectedCategory === "semua" || item.kategori === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      query === "" ||
      item.judul.toLowerCase().includes(query) ||
      item.ringkasan.toLowerCase().includes(query) ||
      item.penulis.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  // Featured article (first featured article or first in list)
  const featuredArticle =
    selectedCategory === "semua" && searchQuery.trim() === ""
      ? beritaList.find((b) => b.featured) || beritaList[0]
      : null;

  // Supporting articles (excluding featured when displayed in normal view)
  const gridArticles = featuredArticle
    ? filteredArticles.filter((b) => b.id !== featuredArticle.id)
    : filteredArticles;

  const handleShare = (article) => {
    if (navigator.share) {
      navigator.share({
        title: article.judul,
        text: article.ringkasan,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const resetFilters = () => {
    setSelectedCategory("semua");
    setSearchQuery("");
  };

  return (
    <PageTransition>
      <main>
        <PageHeader
          eyebrow="Kabar & Publikasi"
          title="Warta Informatika UNJA"
          subtitle="Informasi resmi, agenda kegiatan, liputan organisasi, dan perkembangan teknologi di lingkungan HMIF."
        />

        <section className="bg-paper py-14 sm:py-20">
          <div className="container-hmif">
            {/* Control Bar: Search & Category Filter */}
            <div className="mb-12 space-y-6">
              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400 pointer-events-none"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari judul berita, topik, atau divisi..."
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-ink-200 bg-white text-ink-900 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all shadow-xs"
                    aria-label="Cari berita"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700 p-1 rounded-md"
                      aria-label="Hapus pencarian"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <div className="text-xs font-mono text-ink-500 flex items-center gap-1.5 self-end sm:self-center">
                  <span>Total Berita:</span>
                  <span className="font-bold text-ink-900 bg-white px-2 py-0.5 rounded-md border border-ink-200">
                    {filteredArticles.length} artikel
                  </span>
                </div>
              </div>

              {/* Category Pills */}
              <div
                role="group"
                aria-label="Filter kategori berita"
                className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide"
              >
                {beritaCategories.map((c) => {
                  const count =
                    c.key === "semua"
                      ? beritaList.length
                      : beritaList.filter((b) => b.kategori === c.key).length;
                  const isActive = selectedCategory === c.key;

                  return (
                    <button
                      key={c.key}
                      onClick={() => setSelectedCategory(c.key)}
                      aria-pressed={isActive}
                      className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-ink-950 text-paper shadow-md shadow-ink-950/20"
                          : "bg-white text-ink-600 border border-ink-200/80 hover:border-ink-400 hover:text-ink-900"
                      }`}
                    >
                      <span>{c.label}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          isActive
                            ? "bg-white/20 text-paper"
                            : "bg-ink-100 text-ink-500"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Empty State (R-27 Resilience) */}
            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 px-4 bg-white rounded-2xl border border-ink-200 max-w-lg mx-auto shadow-xs">
                <div className="w-14 h-14 rounded-2xl bg-ink-100/80 text-ink-500 flex items-center justify-center mx-auto mb-4">
                  <Search size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-ink-900 mb-2">
                  Berita Tidak Ditemukan
                </h3>
                <p className="text-xs sm:text-sm text-ink-500 max-w-sm mx-auto mb-6 leading-relaxed">
                  Tidak ada artikel yang cocok dengan pencarian &ldquo;{searchQuery}&rdquo;
                  {selectedCategory !== "semua" && ` pada kategori ${selectedCategory}`}.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-ink-900 text-paper rounded-xl text-xs font-medium hover:bg-ink-800 transition-colors cursor-pointer"
                >
                  Reset Pencarian & Kategori
                </button>
              </div>
            ) : (
              <div className="space-y-12">
                {/* 1. Featured Article (Hero Editorial) */}
                {featuredArticle && (
                  <Reveal>
                    <div
                      onClick={() => setSelectedArticle(featuredArticle)}
                      className="group relative rounded-3xl overflow-hidden bg-white border border-ink-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12"
                    >
                      <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-ink-100">
                        <img
                          src={featuredArticle.gambar}
                          alt={featuredArticle.judul}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-ink-950/80 backdrop-blur-sm text-gold-400 rounded-lg text-xs font-mono font-medium tracking-wide uppercase border border-white/10">
                            Sorotan Utama
                          </span>
                        </div>
                      </div>

                      <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 text-xs text-ink-400 font-mono mb-3">
                            <span className="text-gold-600 font-semibold uppercase">
                              {featuredArticle.kategoriLabel}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Calendar size={13} />
                              {featuredArticle.tanggal}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock size={13} />
                              {featuredArticle.waktuBaca}
                            </span>
                          </div>

                          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-ink-950 leading-tight group-hover:text-gold-600 transition-colors">
                            {featuredArticle.judul}
                          </h2>

                          <p className="text-ink-600 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                            {featuredArticle.ringkasan}
                          </p>
                        </div>

                        <div className="pt-6 mt-6 border-t border-ink-100 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-ink-100 flex items-center justify-center text-ink-600">
                              <User size={14} />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-ink-900 leading-none">
                                {featuredArticle.penulis}
                              </p>
                              <p className="text-[10px] text-ink-400 font-mono mt-0.5">
                                Redaksi HMIF
                              </p>
                            </div>
                          </div>

                          <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-900 group-hover:text-gold-600 group-hover:translate-x-1 transition-all">
                            <span>Baca Lengkap</span>
                            <ChevronRight size={16} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )}

                {/* 2. Supporting News Grid */}
                <div>
                  {featuredArticle && gridArticles.length > 0 && (
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-ink-900">
                        Warta Terbaru
                      </h3>
                      <span className="text-xs font-mono text-ink-400">
                        Menampilkan {gridArticles.length} artikel lainnya
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                      {gridArticles.map((article, index) => (
                        <motion.article
                          layout="position"
                          key={article.id}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3, delay: index * 0.04 }}
                          onClick={() => setSelectedArticle(article)}
                          className="group flex flex-col bg-white rounded-2xl border border-ink-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                          {/* Image Box */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                            <img
                              src={article.gambar}
                              alt={article.judul}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="px-2.5 py-1 bg-ink-950/80 backdrop-blur-sm text-gold-400 text-[10px] font-mono tracking-wider uppercase rounded-md shadow-sm border border-white/10">
                                {article.kategoriLabel}
                              </span>
                            </div>
                          </div>

                          {/* Content Box */}
                          <div className="p-5 flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-2 text-[11px] font-mono text-ink-400 mb-2">
                                <span className="flex items-center gap-1">
                                  <Calendar size={12} />
                                  {article.tanggal}
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <Clock size={12} />
                                  {article.waktuBaca}
                                </span>
                              </div>

                              <h4 className="font-display font-bold text-ink-900 text-sm sm:text-base leading-snug group-hover:text-gold-600 transition-colors line-clamp-2">
                                {article.judul}
                              </h4>

                              <p className="text-ink-600 text-xs mt-2 line-clamp-3 leading-relaxed">
                                {article.ringkasan}
                              </p>
                            </div>

                            <div className="pt-4 mt-4 border-t border-ink-100 flex items-center justify-between text-xs">
                              <span className="text-ink-500 font-mono text-[11px]">
                                {article.penulis}
                              </span>
                              <span className="font-medium text-ink-900 group-hover:text-gold-600 group-hover:translate-x-0.5 transition-all inline-flex items-center gap-1">
                                <span>Baca</span>
                                <ChevronRight size={14} />
                              </span>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 3. Detail Article Reader Modal (Accessible & Responsive) */}
        <AnimatePresence>
          {selectedArticle && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-article-title"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm cursor-pointer"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-ink-200"
              >
                {/* Modal Header Bar */}
                <div className="p-4 sm:px-6 py-3.5 border-b border-ink-100 flex items-center justify-between bg-paper/60">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase bg-gold-400/20 text-ink-900 font-semibold border border-gold-400/30">
                      {selectedArticle.kategoriLabel}
                    </span>
                    <span className="text-xs text-ink-400 font-mono hidden sm:inline">
                      • {selectedArticle.tanggal}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare(selectedArticle)}
                      className="p-2 rounded-xl text-ink-600 hover:text-ink-900 hover:bg-ink-100 transition-colors cursor-pointer"
                      title="Bagikan tautan"
                      aria-label="Bagikan artikel"
                    >
                      {copied ? <Check size={18} className="text-emerald-600" /> : <Share2 size={18} />}
                    </button>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="p-2 rounded-xl text-ink-500 hover:text-ink-900 hover:bg-ink-100 transition-colors cursor-pointer"
                      aria-label="Tutup jendela baca"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Modal Body (Scrollable) */}
                <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                  {/* Article Title */}
                  <div>
                    <h2
                      id="modal-article-title"
                      className="font-display text-2xl sm:text-3xl font-bold text-ink-950 leading-tight"
                    >
                      {selectedArticle.judul}
                    </h2>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-500 mt-3 pt-3 border-t border-ink-100">
                      <span className="flex items-center gap-1.5 font-medium text-ink-800">
                        <User size={14} className="text-gold-600" />
                        {selectedArticle.penulis}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {selectedArticle.tanggal}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        Estimasi baca: {selectedArticle.waktuBaca}
                      </span>
                    </div>
                  </div>

                  {/* Article Image Banner */}
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-ink-100 shadow-xs border border-ink-100">
                    <img
                      src={selectedArticle.gambar}
                      alt={selectedArticle.judul}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Article Paragraphs */}
                  <div className="space-y-4 text-ink-800 text-sm sm:text-base leading-relaxed">
                    <p className="font-medium text-ink-900 text-base sm:text-lg leading-relaxed bg-ink-50/80 p-4 rounded-xl border-l-4 border-gold-500">
                      {selectedArticle.ringkasan}
                    </p>
                    {selectedArticle.isi.map((paragraf, pIdx) => (
                      <p key={pIdx} className="text-justify sm:text-left">
                        {paragraf}
                      </p>
                    ))}
                  </div>

                  {/* Footer note inside article */}
                  <div className="p-4 rounded-xl bg-paper/80 border border-ink-200/80 text-xs text-ink-500 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} className="text-gold-600" />
                      <span>Publikasi Resmi Himpunan Mahasiswa Informatika Universitas Jambi</span>
                    </div>
                    <span className="font-mono text-[10px]">HMIF Press</span>
                  </div>
                </div>

                {/* Modal Footer Bar */}
                <div className="p-4 sm:px-6 border-t border-ink-100 bg-paper/60 flex items-center justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-5 py-2 bg-ink-950 text-paper rounded-xl text-xs font-semibold hover:bg-ink-800 transition-colors cursor-pointer"
                  >
                    Tutup
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </PageTransition>
  );
}
