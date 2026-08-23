import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Layers,
  Code2,
  Cpu,
  Network,
  Brain,
  Share2,
  Briefcase,
  ZoomIn,
  ArrowUpRight,
} from "lucide-react";
import BackgroundSlider from "../components/BackgroundSlider";
import PageTransition from "../components/PageTransition";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import ImageModal from "../components/ImageModal";
import {
  siteInfo,
  backgroundImages,
  aboutHmif,
  prodiInfo,
  programKerja,
  galleryPlaceholder,
} from "../data/content";
import { formatNewsDate, newsArticles } from "../utils/news";

const fokusIcons = [Code2, Brain, Network, Cpu];

const bidangIcons = {
  PSDA: Users,
  MIT: Code2,
  HUMAS: Share2,
  DANUS: Briefcase,
};

export default function Home() {
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);
  const homeGallery = galleryPlaceholder.slice(0, 4);
  const latestNews = newsArticles.slice(0, 3);

  return (
    <PageTransition>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <BackgroundSlider images={backgroundImages} interval={5000} />

        <div className="container-hmif relative z-10 pb-16 pt-40 sm:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-teal-400 mb-4 flex items-center gap-2"
          >
            <span className="text-gold-400">&gt;</span> whoami? {siteInfo.fullName}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-semibold text-paper text-4xl sm:text-6xl md:text-7xl tracking-tight max-w-4xl leading-[1.05]"
          >
            {siteInfo.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-xl text-ink-200 text-base sm:text-lg leading-relaxed"
          >
            {siteInfo.shortName} adalah rumah bagi mahasiswa Program Studi Informatika{" "}
            {siteInfo.university} untuk belajar, berkarya, dan bertumbuh bersama.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/tentang"
              className="group inline-flex items-center gap-2 rounded-full bg-teal-400 text-ink-950 font-semibold px-6 py-3 text-sm hover:bg-teal-300 transition-colors"
            >
              Tentang Kami
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-14 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-ink-300 uppercase tracking-wider"
          >
            <span>{siteInfo.university}</span>
            <span className="text-teal-500">·</span>
            <span>Program Studi Informatika</span>
          </motion.div>
        </div>
      </section>

      {/* ============ TENTANG HMIF — RINGKAS ============ */}
      <section className="relative bg-paper py-24 sm:py-28">
        <div className="container-hmif grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7" y={28}>
            <p className="eyebrow text-teal-600 mb-4">01. Tentang Himpunan</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 tracking-tight mb-6">
              Satu himpunan, satu keluarga besar Informatika
            </h2>
            <p className="text-ink-500 text-base sm:text-lg leading-relaxed mb-6">
              {aboutHmif.intro}
            </p>
            <Link
              to="/tentang"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 border-b-2 border-gold-400 pb-0.5 hover:text-teal-600 transition-colors"
            >
              Selengkapnya tentang kami <ArrowRight size={15} />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl shadow-ink-900/10">
              <img
                src={aboutHmif.image}
                alt="Gambar Pengurus HMIF"
                className="w-full h-[360px] sm:h-[360px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PRODI INFORMATIKA ============ */}
      <section className="relative bg-ink-950 py-24 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

        <div className="container-hmif relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow text-gold-400 mb-4">02. Program Studi</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper tracking-tight mb-6">
                Program Studi Informatika {siteInfo.university}
              </h2>
              <p className="text-ink-300 text-base sm:text-lg leading-relaxed">
                {prodiInfo.intro}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5 flex justify-center lg:justify-center">
              <img
                src={prodiInfo.logo}
                alt={`Logo Program Studi Informatika ${siteInfo.university}`}
                className="max-h-48 sm:max-h-60 w-auto object-contain transition-transform duration-500 hover:scale-105 drop-shadow-[0_0_25px_rgba(255,255,255,0.08)]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/logo-hmif.png";
                }}
              />
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {prodiInfo.fokus.map((item, i) => {
              const Icon = fokusIcons[i % fokusIcons.length];
              return (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-2xl border border-white/10 bg-teal-100 p-6 hover:border-white/40 hover:bg-teal-100/[0.9] transition-colors">
                    <Icon className="text-teal-600 mb-4" size={23} />
                    <h3 className="font-display font-semibold text-ink-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-ink-500 leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ============ PROGRAM KERJA PREVIEW ============ */}
      <section className="relative bg-paper py-24 sm:py-28">
        <div className="container-hmif">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow text-teal-600 mb-4">03. Program Kerja</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 tracking-tight max-w-xl">
                Divisi & Fokus Program Kerja HMIF
              </h2>
            </div>
            <Link
              to="/program-kerja"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 border-b-2 border-gold-400 pb-0.5 w-fit hover:text-teal-600 transition-colors"
            >
              Lihat semua program <ArrowRight size={15} />
            </Link>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programKerja.map((bidang) => {
              const IconComponent = bidangIcons[bidang.kode] || Layers;
              return (
                <StaggerItem key={bidang.kode}>
                  <Link
                    to="/program-kerja"
                    className="group flex h-full flex-col justify-between rounded-2xl border border-ink-100 bg-white p-7 shadow-sm hover:shadow-md hover:border-teal-500/40 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                          <IconComponent size={22} />
                        </div>
                        <span className="font-mono text-xs font-semibold tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                          {bidang.kode}
                        </span>
                      </div>

                      <h3 className="font-display font-semibold text-xl text-ink-900 mb-2 group-hover:text-teal-600 transition-colors">
                        {bidang.nama}
                      </h3>
                      <p className="text-sm text-ink-600 leading-relaxed mb-2">
                        {bidang.deskripsi}
                      </p>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ============ BERITA TERBARU ============ */}
      <section id="berita-terbaru" className="relative scroll-mt-16 overflow-hidden bg-ink-950 py-24 sm:scroll-mt-20 sm:py-28">
        <div className="container-hmif">
          <Reveal className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow mb-4 text-gold-400">04. Berita Terbaru</p>
              <h2 className="max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                Kabar terbaru dari HMIF
              </h2>
            </div>
            <Link
              to="/berita"
              className="inline-flex min-h-11 w-fit items-center gap-2 border-b-2 border-gold-400 pb-0.5 text-sm font-semibold text-paper transition-colors duration-150 hover:text-gold-300"
            >
              Lihat semua berita
              <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
            </Link>
          </Reveal>

          {latestNews.length > 0 ? (
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <Reveal as="article" className="lg:col-span-7">
                <Link to={`/berita/${latestNews[0].slug}`} className="group block">
                  <div className="overflow-hidden rounded-3xl shadow-[0_0_0_1px_oklch(1_0_0/0.08),0_20px_48px_-28px_oklch(0_0_0/0.8)]">
                    <img
                      src={latestNews[0].cover}
                      alt={latestNews[0].coverAlt}
                      className="aspect-[16/10] w-full object-cover outline outline-1 -outline-offset-1 outline-white/10 transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="mt-7 flex items-start justify-between gap-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="eyebrow text-gold-400">{latestNews[0].category}</span>
                        <span aria-hidden="true" className="text-ink-500">·</span>
                        <time dateTime={latestNews[0].date} className="text-sm text-ink-300">
                          {formatNewsDate(latestNews[0].date)}
                        </time>
                      </div>
                      <h3 className="mt-3 max-w-2xl text-balance font-display text-2xl font-semibold leading-tight tracking-tight text-paper transition-colors duration-150 group-hover:text-gold-300 sm:text-3xl">
                        {latestNews[0].title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-ink-300">
                        {latestNews[0].excerpt}
                      </p>
                    </div>
                    <span className="mt-1 hidden size-11 shrink-0 items-center justify-center rounded-full text-paper shadow-[0_0_0_1px_oklch(1_0_0/0.18)] transition-[background-color,color] duration-150 group-hover:bg-gold-400 group-hover:text-ink-950 sm:flex">
                      <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
              </Reveal>

              <div className="flex flex-col divide-y divide-white/10 border-y border-white/10 lg:col-span-5 lg:border-t-0">
                {latestNews.slice(1).map((article, index) => (
                  <Reveal as="article" key={article.slug} delay={0.1 + index * 0.08} className="flex-1">
                    <Link
                      to={`/berita/${article.slug}`}
                      className="group/row grid h-full gap-5 py-7 sm:grid-cols-[9rem_1fr] sm:items-center lg:grid-cols-1 xl:grid-cols-[9rem_1fr]"
                    >
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={article.cover}
                          alt={article.coverAlt}
                          loading="lazy"
                          className="aspect-[16/10] w-full object-cover outline outline-1 -outline-offset-1 outline-white/10 transition-transform duration-300 ease-out group-hover/row:scale-[1.025]"
                        />
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="eyebrow text-gold-400">{article.category}</span>
                            <span aria-hidden="true" className="text-ink-500">·</span>
                            <time dateTime={article.date} className="text-xs text-ink-400">
                              {formatNewsDate(article.date)}
                            </time>
                          </div>
                          <h3 className="mt-3 text-balance font-display text-xl font-semibold leading-tight text-paper transition-colors duration-150 group-hover/row:text-gold-300">
                            {article.title}
                          </h3>
                          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-300">
                            {article.excerpt}
                          </p>
                        </div>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="mt-1 shrink-0 text-ink-400 transition-[color,scale] duration-150 group-hover/row:text-gold-300 group-active/row:scale-[0.96]"
                          size={20}
                          strokeWidth={1.5}
                        />
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          ) : (
            <Reveal className="py-12 text-center">
              <p className="text-ink-300">Belum ada berita yang diterbitkan.</p>
            </Reveal>
          )}
        </div>
      </section>


      {/* ============ GALERI PREVIEW ============ */}
      <section className="relative bg-ink-50 py-24 sm:py-28">
        <div className="container-hmif">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow text-teal-600 mb-4">05. Galeri</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 tracking-tight">
                Momen-momen HMIF
              </h2>
            </div>
            <Link
              to="/galeri"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 border-b-2 border-gold-400 pb-0.5 w-fit hover:text-teal-600 transition-colors"
            >
              Buka galeri <ArrowRight size={15} />
            </Link>
          </Reveal>

          <Stagger className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {homeGallery.map((g, idx) => (
              <StaggerItem key={g.id}>
                <div
                  onClick={() => setSelectedGalleryIndex(idx)}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-ink-900 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ring-0 hover:ring-2 hover:ring-gold-400/50"
                >
                  <img
                    src={g.src}
                    alt={g.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                    <div className="flex justify-end">
                      <span className="p-1.5 rounded-full bg-black/50 text-white backdrop-blur-sm shadow-md group-hover:scale-110 transition-transform">
                        <ZoomIn size={14} />
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white line-clamp-1">{g.caption}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ CTA PENUTUP ============ */}
      <section className="relative bg-ink-950 py-24 sm:py-28">
        <div className="container-hmif">
          <Reveal className="rounded-3xl bg-gradient-to-br from-teal-500/10 via-transparent to-gold-500/10 border border-white/10 px-8 py-14 sm:px-16 sm:py-16 text-center">
            <Users className="mx-auto text-teal-400 mb-5" size={30} />
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper tracking-tight mb-4">
              Jadilah bagian dari cerita ini
            </h2>
            <p className="text-ink-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Mahasiswa baru maupun aktif, HMIF selalu terbuka untuk berkolaborasi dan
              berkembang bersama.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/kontak"
                className="inline-flex items-center gap-2 rounded-full bg-teal-400 text-ink-950 font-semibold px-6 py-3 text-sm hover:bg-teal-300 transition-colors"
              >
                Hubungi Kami <ArrowRight size={16} />
              </Link>
              <Link
                to="/struktur-organisasi"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 text-paper font-semibold px-6 py-3 text-sm hover:bg-white/10 transition-colors"
              >
                <Layers size={16} /> Struktur Organisasi
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ImageModal
        isOpen={selectedGalleryIndex !== null}
        onClose={() => setSelectedGalleryIndex(null)}
        images={homeGallery}
        currentIndex={selectedGalleryIndex ?? 0}
        setCurrentIndex={setSelectedGalleryIndex}
      />
    </PageTransition>
  );
}
