import { useState } from "react";
import { UserRound, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { divisiOrganisasi, strukturBidang } from "../data/content";

export default function StrukturOrganisasi() {
  const [activeDivisi, setActiveDivisi] = useState(0);
  const current = divisiOrganisasi[activeDivisi];

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Struktur Organisasi"
        title="Orang-orang di balik HMIF"
        subtitle="Susunan pengurus dan koordinator bidang periode berjalan."
      />

      {/* Divisi Tabs + Content */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="container-hmif">
          <Reveal className="mb-10">
            <p className="eyebrow text-teal-600 mb-4">Divisi Kepengurusan</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900">
              Pilih divisi untuk melihat anggotanya
            </h2>
          </Reveal>

          {/* Tab Navigation — horizontal scroll on mobile */}
          <div className="mb-10 -mx-6 sm:mx-0 px-6 sm:px-0 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 w-max sm:w-auto sm:flex-wrap">
              {divisiOrganisasi.map((d, i) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDivisi(i)}
                  className={`relative shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeDivisi === i
                      ? "bg-ink-950 text-paper shadow-lg shadow-ink-950/20"
                      : "bg-white text-ink-600 border border-ink-100 hover:border-ink-300 hover:text-ink-900"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className={`font-mono text-xs ${activeDivisi === i ? "text-gold-400" : "text-ink-400"}`}>
                      {d.singkatan}
                    </span>
                    <span className="hidden sm:inline">—</span>
                    <span className="hidden sm:inline">{d.nama}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Divisi Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Divisi Header Card */}
              <div className="rounded-2xl bg-ink-950 p-6 sm:p-8 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold-400/10 border border-gold-400/20">
                    <span className="font-mono text-gold-400 text-sm font-bold">{current.singkatan}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-paper">
                      {current.nama}
                    </h3>
                    <p className="text-ink-300 text-sm mt-1 leading-relaxed max-w-xl">
                      {current.deskripsi}
                    </p>
                  </div>
                </div>
              </div>

              {/* Members Grid */}
              <div className={`grid gap-4 ${
                current.anggota.length <= 4
                  ? "grid-cols-2 sm:grid-cols-4"
                  : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
              }`}>
                {current.anggota.map((member, i) => (
                  <motion.div
                    key={`${current.id}-${member.nama}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group"
                  >
                    <div className="rounded-2xl border border-ink-100 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      {/* Photo area */}
                      <div className="relative aspect-[3/4] bg-gradient-to-b from-ink-100 to-ink-50 overflow-hidden">
                        {member.foto ? (
                          <img
                            src={member.foto}
                            alt={member.nama}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-ink-200/50 flex items-center justify-center mb-2">
                              <UserRound className="text-ink-400" size={28} />
                            </div>
                            <span className="text-[10px] font-mono text-ink-400">foto belum tersedia</span>
                          </div>
                        )}
                        {/* Jabatan badge overlay */}
                        {member.jabatan !== "Anggota" && (
                          <div className="absolute top-2 left-2">
                            <span className="inline-block px-2.5 py-1 bg-ink-950/80 backdrop-blur-sm text-gold-400 text-[10px] font-mono tracking-wider uppercase rounded-full">
                              {member.jabatan === "Koordinator" ? "Koordinator" : member.jabatan.replace(" Himpunan", "")}
                            </span>
                          </div>
                        )}
                      </div>
                      {/* Info */}
                      <div className="p-3 sm:p-4 text-center">
                        <h4 className="font-display font-semibold text-ink-900 text-xs sm:text-sm leading-tight">
                          {member.nama}
                        </h4>
                        <p className="text-[11px] text-ink-500 mt-1 font-mono">
                          {member.jabatan}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bagan Organisasi */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container-hmif max-w-4xl">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow text-gold-400 mb-4">Bagan Organisasi</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper">
              Garis koordinasi HMIF
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col items-center gap-3">
              {/* Ketua */}
              <div className="rounded-xl border border-gold-400/30 bg-gold-400/10 px-6 py-3 text-center">
                <p className="font-display font-semibold text-paper text-sm">Ketua Himpunan</p>
                <p className="font-mono text-[11px] text-gold-400 mt-0.5">Nicky Pradithiya Dinata</p>
              </div>
              <div className="w-px h-5 bg-white/20" />

              {/* Wakil */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-center">
                <p className="font-display font-semibold text-paper text-sm">Wakil Ketua Himpunan</p>
                <p className="font-mono text-[11px] text-ink-300 mt-0.5">Fabianto Dwitama</p>
              </div>
              <div className="w-px h-5 bg-white/20" />

              {/* Sekretaris & Bendahara */}
              <div className="flex gap-3 flex-wrap justify-center">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-center">
                  <p className="font-display font-medium text-paper text-sm">Sekretaris</p>
                  <p className="font-mono text-[11px] text-ink-300 mt-0.5">Artika Sari Kosasih</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-center">
                  <p className="font-display font-medium text-paper text-sm">Bendahara</p>
                  <p className="font-mono text-[11px] text-ink-300 mt-0.5">Ela Febriani</p>
                </div>
              </div>
              <div className="w-px h-5 bg-white/20" />

              {/* Divisi */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3">
                {strukturBidang.map((b) => (
                  <div
                    key={b.bidang}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center hover:bg-white/[0.06] transition-colors"
                  >
                    <p className="font-mono text-[11px] text-gold-400 mb-1">{b.bidang}</p>
                    <p className="font-display text-paper text-xs font-medium leading-tight">{b.koordinator}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick Nav — bottom links to all divisi */}
      <section className="bg-paper py-14 sm:py-16">
        <div className="container-hmif">
          <Reveal>
            <p className="eyebrow text-teal-600 mb-6">Navigasi Cepat</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {divisiOrganisasi.map((d, i) => (
                <button
                  key={d.id}
                  onClick={() => {
                    setActiveDivisi(i);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-4 rounded-xl border border-ink-100 bg-white p-4 text-left hover:shadow-md hover:border-ink-200 transition-all duration-300 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-950 text-gold-400 font-mono text-xs font-bold">
                    {d.singkatan}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display font-semibold text-ink-900 text-sm truncate">{d.nama}</p>
                    <p className="text-xs text-ink-400 mt-0.5">{d.anggota.length} anggota</p>
                  </div>
                  <ChevronRight size={16} className="text-ink-300 group-hover:text-ink-600 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
