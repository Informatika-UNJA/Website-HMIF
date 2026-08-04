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
  Share2,
  Briefcase,
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
  galleryPlaceholder,
} from "../data/content";

const fokusIcons = [Code2, Brain, Network, Cpu];

const bidangIcons = {
  PSDA: Users,
  MIT: Code2,
  HUMAS: Share2,
  DANUS: Briefcase,
};

export default function Home() {
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


      {/* ============ GALERI PREVIEW ============ */}
      <section className="relative bg-paper py-24 sm:py-28">
        <div className="container-hmif">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow text-teal-600 mb-4">04. Galeri</p>
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
