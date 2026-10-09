import { useState } from "react";
import { UserRound, Users, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { divisiOrganisasi, strukturBidang } from "../data/content";
import usePageMeta from "../utils/usePageMeta";

export default function StrukturOrganisasi() {
  const [activeDivisi, setActiveDivisi] = useState(0);
  const current = divisiOrganisasi[activeDivisi];
  usePageMeta({
    title: "Struktur Organisasi HMIF UNJA — Pengurus Inti & Divisi",
    description:
      "Susunan kepengurusan HMIF UNJA: pengurus inti BPH, enam divisi, koordinator bidang, dan anggota Himpunan Mahasiswa Informatika Universitas Jambi.",
    path: "/struktur-organisasi",
  });

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Struktur Organisasi"
        title="Struktur Organisasi HMIF UNJA"
        subtitle="Susunan pengurus dan koordinator bidang periode berjalan."
      />

      {/* Divisi Tabs + Content */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="container-hmif">
          <Reveal className="mb-10 text-center">
            <p className="eyebrow text-teal-600 mb-2">Divisi Kepengurusan</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900">
              Pilih divisi untuk melihat kepengurusan
            </h2>
          </Reveal>

          {/* Tab Navigation — horizontal scroll on mobile, 3 atas + 2 bawah (centered) di sm ke atas */}
          <div className="mb-12 -mx-6 sm:mx-0 px-6 sm:px-0 overflow-x-auto scrollbar-hide sm:overflow-visible">
            <div className="flex gap-2 w-max sm:hidden">
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
                    <span className="hidden sm:inline">:</span>
                    <span className="hidden sm:inline">{d.nama}</span>
                  </span>
                </button>
              ))}
            </div>

            <div className="hidden sm:flex sm:flex-col sm:items-center sm:gap-2">
              <div className="flex flex-wrap justify-center gap-2">
                {divisiOrganisasi.slice(0, 3).map((d, i) => (
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
                      <span>:</span>
                      <span>{d.nama}</span>
                    </span>
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {divisiOrganisasi.slice(3, 5).map((d, iOffset) => {
                  const i = iOffset + 3;
                  return (
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
                        <span>:</span>
                        <span>{d.nama}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
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
              {/* 1. Judul Divisi (Centered) */}
              <div className="text-center mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-wider bg-gold-400/15 text-gold-700 border border-gold-400/30 mb-3">
                  <span>HMIF UNJA</span>
                  <span>•</span>
                  <span>{current.singkatan}</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight">
                  {current.id === "bph" ? "Badan Pengurus Harian" : `Divisi ${current.nama}`}
                </h2>
              </div>

              {/* 2. Space Khusus Foto Pengurus Bersama */}
              <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-ink-200/80 bg-white shadow-xl shadow-ink-950/5 group">
                  {current.fotoBersama ? (
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-ink-100">
                      <img
                        src={current.fotoBersama}
                        alt={`Foto Bersama ${current.nama}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent pointer-events-none opacity-70" />
                      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-paper pointer-events-none">
                        <p className="text-[11px] font-mono uppercase tracking-widest text-gold-400">Foto Bersama</p>
                        <h4 className="font-display text-base sm:text-xl font-bold text-white">
                          Keluarga Besar {current.nama} HMIF UNJA
                        </h4>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full flex flex-col items-center justify-center p-6 sm:p-12 text-center bg-gradient-to-b from-white via-ink-50/40 to-ink-100/30">
                      <div className="absolute inset-0 bg-[radial-gradient(#C69A74_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />
                      <div className="relative z-10 flex flex-col items-center max-w-lg">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-ink-200 shadow-md flex items-center justify-center mb-4 text-ink-600 group-hover:scale-105 transition-transform duration-300">
                          <Users size={32} className="text-ink-600" />
                        </div>
                        <span className="px-3 py-1 bg-gold-400/20 text-ink-900 border border-gold-400/30 rounded-full font-mono text-[11px] font-semibold uppercase tracking-wider mb-2">
                          Space Foto Bersama
                        </span>
                        <h4 className="font-display text-lg sm:text-2xl font-bold text-ink-900 mb-2">
                          Foto Bersama {current.id === "bph" ? "BPH" : current.nama}
                        </h4>
                        <p className="text-xs sm:text-sm text-ink-600 leading-relaxed max-w-md">
                          Space khusus foto bersama pengurus {current.nama}. Letakkan foto di folder public (rasio lanskap 16:9).
                        </p>
                        <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ink-100/90 text-ink-700 text-[11px] font-mono border border-ink-200 shadow-xs">
                          <span>Konfigurasi di <code>content.js</code> → <code>fotoBersama</code></span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Penjelasan untuk Setiap Divisi di Bawah Foto Bersama */}
              <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16 px-4">
                <h4 className="font-display font-semibold text-xs sm:text-sm uppercase tracking-wider text-ink-400 mb-3">
                  {current.id === "bph" ? "Badan Pengurus Harian" : `Divisi ${current.nama}`}
                </h4>
                <p className="text-ink-700 text-sm sm:text-base leading-relaxed text-justify sm:text-center font-normal">
                  {current.deskripsi}
                </p>
              </div>

              {/* 4. Subtitle / Heading Baru: Struktur Divisi */}
              <div className="text-center mb-10 sm:mb-12">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
                  Struktur Divisi
                </h3>
                <div className="w-12 h-1 bg-gold-500 mx-auto mt-2.5 rounded-full" />
                <p className="text-ink-500 text-xs sm:text-sm mt-2 font-mono">
                  Susunan pengurus dan personalia {current.nama}
                </p>
              </div>

              {/* 5. Foto Struktur Pengurus Sendiri-Sendiri */}
              <div className={`grid gap-4 sm:gap-6 ${
                current.anggota.length <= 4
                  ? "grid-cols-2 sm:grid-cols-4"
                  : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
              }`}>
                {current.anggota.map((member, i) => (
                  <motion.div
                    key={`${current.id}-${member.nama}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group"
                  >
                    <div className="rounded-2xl border border-ink-100 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                      {/* Photo area */}
                      <div className="relative aspect-[3/4] bg-gradient-to-b from-ink-100 to-ink-50 overflow-hidden">
                        {member.foto ? (
                          <img
                            src={member.foto}
                            alt={member.nama}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-ink-200/50 flex items-center justify-center mb-2">
                              <UserRound className="text-ink-400" size={28} />
                            </div>
                            <span className="text-[10px] font-mono text-ink-400">foto belum tersedia</span>
                          </div>
                        )}
                        {/* Jabatan badge overlay */}
                        {member.jabatan && (
                          <div className="absolute top-2.5 left-2.5 z-10">
                            <span className="inline-block px-2.5 py-1 bg-ink-950/85 backdrop-blur-sm text-gold-400 text-[10px] font-mono tracking-wider uppercase rounded-md shadow-sm border border-white/10">
                              {member.jabatan === "Koordinator" ? "Koordinator" : member.jabatan.replace(" Himpunan", "")}
                            </span>
                          </div>
                        )}
                      </div>
                      {/* Info */}
                      <div className="p-3.5 sm:p-4 text-center flex-1 flex flex-col justify-center bg-white border-t border-ink-100/50">
                        <h4 className="font-display font-semibold text-ink-900 text-xs sm:text-sm leading-snug">
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
            <div className="flex flex-wrap justify-center gap-3">
              {divisiOrganisasi.map((d, i) => (
                <button
                  key={d.id}
                  onClick={() => {
                    setActiveDivisi(i);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-4 rounded-xl border border-ink-100 bg-white p-4 text-left hover:shadow-md hover:border-ink-200 transition-all duration-300 group w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)]"
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
