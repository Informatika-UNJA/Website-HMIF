import { Target, Compass, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import { aboutHmif, prodiInfo, siteInfo } from "../data/content";

export default function Tentang() {
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
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-48 sm:w-64 md:w-72 lg:w-80 object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.08)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 font-display text-xl sm:text-2xl md:text-3xl font-semibold text-paper tracking-tight text-center"
          >
            {siteInfo.fullName}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            <p className="text-ink-500 leading-relaxed mb-4">{aboutHmif.sejarah}</p>
            <p className="text-ink-500 leading-relaxed">{aboutHmif.intro}</p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-sm h-full">
              <Compass className="text-teal-500 mb-4" size={26} />
              <p className="eyebrow text-ink-400 mb-2">Visi</p>
              <p className="text-ink-700 leading-relaxed">{aboutHmif.visi}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Misi */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container-hmif">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-gold-400 mb-4">Misi</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper">
              Langkah nyata menuju visi bersama
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutHmif.misi.map((m, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-teal-100 p-6 h-full hover:border-teal-300 transition-colors">
                  <span className="font-mono text-teal-600 text-sm shrink-0 font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-ink-900 text-sm font-medium leading-relaxed">{m}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Nilai */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-hmif">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-teal-600 mb-4">Nilai Kami</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900">
              Prinsip yang kami pegang
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutHmif.nilai.map((n) => (
              <StaggerItem key={n.title}>
                <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-teal-400/40 hover:-translate-y-1 transition-all duration-300">
                  <Sparkles className="text-teal-400 mb-4" size={22} />
                  <h3 className="font-display font-semibold text-ink-900 mb-2">{n.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{n.desc}</p>
                </div>
              </StaggerItem>
            ))}
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
            <p className="text-ink-300 leading-relaxed">{prodiInfo.intro}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prodiInfo.fokus.map((f) => (
                <div key={f.title} className="rounded-xl border border-white/10 bg-teal-100 p-5">
                  <Target className="text-teal-600 mb-3" size={18} />
                  <h4 className="font-display text-ink-900 font-medium text-sm mb-1.5">{f.title}</h4>
                  <p className="text-xs text-ink-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
