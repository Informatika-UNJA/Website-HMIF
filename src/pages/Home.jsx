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
  ImageIcon,
} from "lucide-react";
import BackgroundSlider from "../components/BackgroundSlider";
import PageTransition from "../components/PageTransition";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import {
  siteInfo,
  backgroundImages,
  aboutHmif,
  prodiInfo,
  programKerja,
  iforiaInfo,
  galleryPlaceholder,
} from "../data/content";

const fokusIcons = [Code2, Brain, Network, Cpu];

export default function Home() {
  return (
    <PageTransition>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <BackgroundSlider images={backgroundImages} interval={6000} overlay="strong" />

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
            <Link
              to="/iforia"
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/50 text-gold-300 font-semibold px-6 py-3 text-sm hover:bg-gold-400 hover:text-ink-950 transition-colors"
            >
              Lihat IFORIA
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
        <div className="container-hmif grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-7" y={28}>
            <p className="eyebrow text-teal-600 mb-4">Tentang Himpunan</p>
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
            <div className="rounded-2xl border border-ink-100 bg-white p-6 sm:p-8 shadow-lg shadow-ink-900/5">
              <p className="font-display text-center font-semibold text-ink-900 text-base sm:text-lg mb-6">
                Anggota Kepengurusan HMIF
              </p>
              <div className="grid grid-cols-3 gap-4">
                {/* Pengurus Aktif */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gold-400/15 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-ink-900">50</span>
                  <span className="text-[11px] sm:text-xs text-ink-500 mt-1 leading-tight">Total Kepengurusan Aktif</span>
                </div>
                {/* Total Divisi */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-400/15 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                      <rect width="7" height="7" x="3" y="3" rx="1"/>
                      <rect width="7" height="7" x="14" y="3" rx="1"/>
                      <rect width="7" height="7" x="3" y="14" rx="1"/>
                      <rect width="7" height="7" x="14" y="14" rx="1"/>
                    </svg>
                  </div>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-ink-900">4</span>
                  <span className="text-[11px] sm:text-xs text-ink-500 mt-1 leading-tight">Total Divisi</span>
                </div>
                {/* Total Anggota */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-ink-200/30 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink-600">
                      <path d="M18 21a8 8 0 0 0-16 0"/>
                      <circle cx="10" cy="8" r="5"/>
                      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/>
                    </svg>
                  </div>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-ink-900">180</span>
                  <span className="text-[11px] sm:text-xs text-ink-500 mt-1 leading-tight">Anggota HMIF</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PRODI INFORMATIKA ============ */}
      <section className="relative bg-ink-950 py-24 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

        <div className="container-hmif relative">
          <Reveal className="max-w-2xl mb-14">
            <p className="eyebrow text-gold-400 mb-4">02 — Program Studi</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper tracking-tight mb-6">
              Program Studi Informatika {siteInfo.university}
            </h2>
            <p className="text-ink-300 text-base sm:text-lg leading-relaxed">
              {prodiInfo.intro}
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {prodiInfo.fokus.map((item, i) => {
              const Icon = fokusIcons[i % fokusIcons.length];
              return (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-teal-400/40 hover:bg-white/[0.05] transition-colors">
                    <Icon className="text-teal-400 mb-4" size={22} />
                    <h3 className="font-display font-semibold text-paper mb-2">{item.title}</h3>
                    <p className="text-sm text-ink-300 leading-relaxed">{item.desc}</p>
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
              <p className="eyebrow text-teal-600 mb-4">03 — Program Kerja</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 tracking-tight max-w-xl">
                Enam bidang, satu tujuan bersama
              </h2>
            </div>
            <Link
              to="/program-kerja"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 border-b-2 border-gold-400 pb-0.5 w-fit hover:text-teal-600 transition-colors"
            >
              Lihat semua program <ArrowRight size={15} />
            </Link>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {programKerja.slice(0, 4).map((bidang) => (
              <StaggerItem key={bidang.kode}>
                <Link
                  to="/program-kerja"
                  className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="font-mono text-xs tracking-widest text-gold-600 mb-3">
                    {bidang.kode}
                  </span>
                  <h3 className="font-display font-semibold text-ink-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {bidang.nama}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{bidang.deskripsi}</p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ IFORIA SPOTLIGHT ============ */}
      <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/3 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
        </div>
        <div className="container-hmif relative">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl border border-gold-400/20 bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-12">
            <div className="lg:col-span-8">
              <span className="inline-block font-mono text-xs tracking-widest text-ink-950 bg-gold-400 rounded-full px-3 py-1 mb-5">
                {iforiaInfo.timeline[iforiaInfo.timeline.length - 1].versi}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper tracking-tight mb-4">
                IFORIA: {iforiaInfo.tagline}
              </h2>
              <p className="text-ink-300 leading-relaxed max-w-2xl">{iforiaInfo.deskripsi}</p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/iforia"
                className="group inline-flex items-center gap-2 rounded-full bg-gold-400 text-ink-950 font-semibold px-6 py-3 text-sm hover:bg-gold-300 transition-colors"
              >
                Selengkapnya
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ GALERI PREVIEW ============ */}
      <section className="relative bg-paper py-24 sm:py-28">
        <div className="container-hmif">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow text-teal-600 mb-4">04 — Galeri</p>
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
            {galleryPlaceholder.slice(0, 4).map((g) => (
              <StaggerItem key={g.id}>
                <Link
                  to="/galeri"
                  className="group relative aspect-square rounded-xl overflow-hidden bg-ink-100 flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-ink-700 to-ink-900 opacity-90 group-hover:scale-105 transition-transform duration-500" />
                  <ImageIcon className="relative text-ink-300" size={28} />
                </Link>
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
    </PageTransition>
  );
}
