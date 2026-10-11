import { Target, Compass, Users, Zap, ShieldCheck, Sprout, Handshake, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import SpotlightCard from "../components/SpotlightCard";
import { aboutHmif, prodiInfo, siteInfo } from "../data/content";
import usePageMeta from "../utils/usePageMeta";

// Tiap nilai punya ikon, warna, dan gerakan hover sendiri — sesuai maknanya.
const nilaiTheme = {
  kolaboratif: {
    Icon: Handshake,
    chip: "bg-amber-100 text-amber-700",
    border: "hover:border-amber-400/70",
    glow: "rgba(245,158,11,0.16)",
    hover: { scale: [1, 1.22, 1.12], transition: { duration: 0.45 } }, // berkumpul
  },
  adaptif: {
    Icon: RefreshCw,
    chip: "bg-sky-100 text-sky-700",
    border: "hover:border-sky-400/70",
    glow: "rgba(14,165,233,0.16)",
    hover: { rotate: [0, -14, 14, -6, 0], scale: 1.15, transition: { duration: 0.5 } }, // menyambar
  },
  integritas: {
    Icon: ShieldCheck,
    chip: "bg-indigo-100 text-indigo-700",
    border: "hover:border-indigo-400/70",
    glow: "rgba(99,102,241,0.16)",
    hover: { y: -4, scale: 1.12, transition: { type: "spring", stiffness: 300, damping: 14 } }, // kokoh
  },
  berkelanjutan: {
    Icon: Sprout,
    chip: "bg-emerald-100 text-emerald-700",
    border: "hover:border-emerald-400/70",
    glow: "rgba(16,185,129,0.16)",
    hover: { scale: 1.25, y: -3, rotate: 8, transformOrigin: "50% 100%", transition: { duration: 0.5 } }, // tumbuh
  },
};

export default function Tentang() {
  usePageMeta({
    title: "Tentang | HMIF UNJA",
    description:
      "Sejarah, visi, misi, dan nilai Himpunan Mahasiswa Informatika (HMIF) Universitas Jambi — rumah bagi mahasiswa Informatika untuk berkarya dan bertumbuh.",
    path: "/tentang",
  });

  return (
    <main>
      <PageHeader
        eyebrow="Tentang HMIF"
        title="Mengenal HMIF Universitas Jambi"
        subtitle="Sejarah singkat, visi, misi, dan nilai yang membentuk arah organisasi kami."
      />

      {/* Logo Showcase */}
      <section className="relative bg-ink-950 overflow-hidden">
        {/* Gradient overlay top — menyambung dari PageHeader */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink-950/80 to-transparent z-10" />

        {/* Konten logo */}
        <div className="relative z-20 flex flex-col items-center justify-center py-16 sm:py-24">
          {/* Glow effect di belakang logo */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gold-400/10 blur-[100px] pointer-events-none" />
          
          <motion.img
            src="/logo-hmif.png"
            alt="Logo HMIF Universitas Jambi"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-48 sm:w-64 md:w-72 lg:w-80 object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.08)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 font-display text-xl sm:text-2xl md:text-3xl font-semibold text-paper tracking-tight text-center"
          >
            {siteInfo.fullName}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-2 font-mono text-sm text-gold-400 tracking-wider uppercase"
          >
            {siteInfo.university}
          </motion.p>
        </div>

        {/* Curved bottom edge — transisi ke section berikutnya */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 40V80H0Z" className="fill-paper" />
          </svg>
        </div>
      </section>

      {/* Sejarah & Intro */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-hmif grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-teal-600 mb-4">Sejarah Singkat</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 mb-5">
              Dari nol, membangun tradisi
            </h2>
            <p className="text-ink-500 leading-relaxed mb-4 text-justify">{aboutHmif.sejarah}</p>
            <p className="text-ink-500 leading-relaxed text-justify">{aboutHmif.intro}</p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-sm h-full">
              <Compass className="text-teal-500 mb-4" size={26} />
              <p className="eyebrow text-ink-400 mb-2">Visi</p>
              <p className="text-ink-700 leading-relaxed text-justify">{aboutHmif.visi}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Misi */}
 <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

        <div className="container-hmif relative">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow text-gold-400 mb-4">Misi</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper">
              Langkah nyata menuju visi bersama
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold-500" />
          </Reveal>

          {/* flex-wrap + justify-center: berapa pun jumlah misi, baris terakhir selalu rata tengah.
              Lebar kartu: 1 kolom (HP), 2 kolom (tablet), 3 kolom (desktop). */}
          <Stagger className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 sm:gap-5">
            {aboutHmif.misi.map((m, i) => (
              <StaggerItem
                key={i}
                className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.84rem)]"
              >
                <div className="group flex h-full flex-col items-center rounded-2xl border border-white/10 border-t-2 border-t-gold-500 bg-teal-100 px-6 pb-7 pt-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
                  <span className="mb-4 flex size-11 items-center justify-center rounded-full bg-ink-950 font-mono text-sm font-semibold text-gold-400 ring-4 ring-gold-500/20 transition-transform duration-300 group-hover:scale-110">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-ink-900 text-sm sm:text-base font-medium leading-relaxed">{m}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Nilai */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-hmif">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow text-teal-600 mb-4">Nilai Kami</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 text-balance">
              Prinsip yang kami pegang
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold-500" />
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutHmif.nilai.map((n) => {
              const t = nilaiTheme[n.icon] ?? nilaiTheme.kolaboratif;
              const Icon = t.Icon;
              return (
                <StaggerItem key={n.title} className="h-full">
                  <motion.div initial="rest" animate="rest" whileHover="hover" className="h-full">
                    <SpotlightCard
                      glow={t.glow}
                      className={`h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${t.border}`}
                    >
                      <motion.span
                        variants={{ rest: { scale: 1, y: 0, rotate: 0 }, hover: t.hover }}
                        className={`mb-5 flex size-12 items-center justify-center rounded-xl ${t.chip}`}
                      >
                        <Icon size={24} strokeWidth={1.75} />
                      </motion.span>
                      <h3 className="font-display font-semibold text-ink-900 mb-2">{n.title}</h3>
                      <p className="text-sm text-ink-500 leading-relaxed text-justify">{n.desc}</p>
                    </SpotlightCard>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Prodi Informatika */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container-hmif grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-gold-400 mb-4">Program Studi</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper mb-5">
              Informatika {siteInfo.university}
            </h2>
            <p className="text-ink-300 leading-relaxed text-justify">{prodiInfo.intro}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prodiInfo.fokus.map((f) => (
                <div key={f.title} className="rounded-xl border border-white/10 bg-teal-100 p-5">
                  <h4 className="font-display text-ink-900 font-medium text-sm mb-1.5">{f.title}</h4>
                  <p className="text-xs text-ink-500 leading-relaxed text-justify">{f.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
