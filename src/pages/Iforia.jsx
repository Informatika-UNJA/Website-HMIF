import { motion } from "framer-motion";
import { GitBranch, Target, Sparkle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import BackgroundSlider from "../components/BackgroundSlider";
import { iforiaInfo, backgroundImages } from "../data/content";

export default function Iforia() {
  const latest = iforiaInfo.timeline[iforiaInfo.timeline.length - 1];

  return (
    <PageTransition>
      {/* Ini Hero khusus IFORIA */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
        <BackgroundSlider images={backgroundImages} interval={8000} overlay="strong" />
        <div className="container-hmif relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-mono text-xs tracking-widest text-ink-950 bg-gold-400 rounded-full px-3 py-1 mb-6"
          >
            {latest.versi} · {latest.status}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="font-display font-semibold text-paper text-5xl sm:text-7xl tracking-tight"
          >
            IFORIA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-4 font-mono text-teal-400 text-sm sm:text-base tracking-wide"
          >
            {iforiaInfo.singkatan}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="mt-5 max-w-2xl text-ink-200 text-base sm:text-lg leading-relaxed"
          >
            {iforiaInfo.tagline}. PKK tingkat Program Studi Informatika yang terus berlanjut
            dari tahun ke tahun.
          </motion.p>
        </div>
      </section>

      {/* Deskripsi */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-hmif grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-teal-600 mb-4">Apa itu IFORIA?</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 mb-5">
              Gerbang pertama mahasiswa baru Informatika
            </h2>
            <p className="text-ink-500 leading-relaxed">{iforiaInfo.deskripsi}</p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-sm h-full">
              <Target className="text-gold-500 mb-4" size={24} />
              <p className="eyebrow text-ink-400 mb-3">Tujuan Utama</p>
              <ul className="space-y-3">
                {iforiaInfo.tujuan.map((t, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-ink-600 leading-relaxed">
                    <Sparkle size={14} className="text-teal-500 mt-1 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Rangkaian Acara */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container-hmif">
          <Reveal className="max-w-2xl mb-14">
            <p className="eyebrow text-gold-400 mb-4">Rangkaian Acara</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper">
              Alur kegiatan IFORIA
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {iforiaInfo.rangkaian.map((r, i) => (
              <StaggerItem key={r.judul}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="font-mono text-xs text-gold-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-medium text-paper text-sm mt-3 mb-2">
                    {r.judul}
                  </h3>
                  <p className="text-xs text-ink-300 leading-relaxed">{r.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline edisi tahunan — signature: gaya git-log / changelog */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-hmif max-w-3xl">
          <Reveal className="mb-14">
            <p className="eyebrow text-teal-600 mb-4 flex items-center gap-2">
              <GitBranch size={14} /> Riwayat Edisi
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900">
              IFORIA dari tahun ke tahun
            </h2>
            <p className="text-ink-500 mt-3 leading-relaxed">
              Setiap tahun, IFORIA diwariskan dan disempurnakan oleh kepanitiaan baru —
              melanjutkan semangat yang sama dengan cerita yang terus bertambah.
            </p>
          </Reveal>

          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-ink-100" />
            <div className="space-y-10">
              {iforiaInfo.timeline.map((edisi, i) => (
                <Reveal key={edisi.tahun} delay={i * 0.05} className="relative">
                  <span
                    className={`absolute -left-8 sm:-left-10 top-1.5 h-4 w-4 rounded-full border-4 border-paper ${
                      edisi.status === "Segera Hadir" ? "bg-teal-400" : "bg-gold-400"
                    }`}
                  />
                  <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-sm font-semibold text-ink-900">
                        {edisi.versi}
                      </span>
                      <span
                        className={`font-mono text-[11px] tracking-wide px-2 py-0.5 rounded-full ${
                          edisi.status === "Segera Hadir"
                            ? "bg-teal-100 text-teal-700"
                            : "bg-gold-100 text-gold-700"
                        }`}
                      >
                        {edisi.status}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-ink-900 mb-1.5">
                      {edisi.tema}
                    </h3>
                    <p className="text-sm text-ink-500 leading-relaxed">{edisi.deskripsi}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container-hmif">
          <Reveal className="rounded-3xl bg-gradient-to-br from-gold-500/10 via-transparent to-teal-500/10 border border-white/10 px-8 py-14 sm:px-16 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper mb-4">
              Ingin tahu lebih banyak soal IFORIA tahun ini?
            </h2>
            <p className="text-ink-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Ikuti kanal resmi HMIF untuk info pendaftaran, jadwal, dan pengumuman IFORIA
              terbaru.
            </p>
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 text-ink-950 font-semibold px-6 py-3 text-sm hover:bg-gold-300 transition-colors"
            >
              Hubungi Panitia <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
