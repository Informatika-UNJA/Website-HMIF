import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Users, ChevronRight, CircleCheck, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SpotlightCard from "../components/SpotlightCard";
import { divisiOrganisasi } from "../data/content";
import usePageMeta from "../utils/usePageMeta";

const EASE = [0.22, 1, 0.36, 1];

/* ---------- helper ---------- */

const initials = (nama) =>
  nama
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

// 0 = pimpinan, 1 = pengurus inti (wakil/sekretaris/bendahara), 2 = ketua bidang, 3 = anggota
const tierOf = (jabatan = "") => {
  if (/^Ketua (Divisi|Himpunan)$/.test(jabatan)) return 0;
  if (/^Ketua Bidang/.test(jabatan)) return 2;
  if (/^Anggota$/.test(jabatan)) return 3;
  return 1;
};
const TIER_LABEL = ["Pimpinan", "Pengurus Inti", "Ketua Bidang", "Anggota"];
const TIER_WIDTH = [
  "w-48 sm:w-56",
  "w-[calc(50%-0.5rem)] sm:w-44 lg:w-48",
  "w-[calc(50%-0.5rem)] sm:w-44 lg:w-48",
  "w-[calc(50%-0.5rem)] sm:w-40 lg:w-44",
];

function groupByTier(anggota) {
  const tiers = [[], [], [], []];
  anggota.forEach((a) => tiers[tierOf(a.jabatan)].push(a));
  return tiers.map((list, i) => ({ tier: i, label: TIER_LABEL[i], list })).filter((t) => t.list.length);
}

/* ---------- kartu anggota ---------- */

function Avatar({ member }) {
  const [failed, setFailed] = useState(false);
  if (member.foto && !failed) {
    return (
      <img
        src={member.foto}
        alt={member.nama}
        onError={() => setFailed(true)}
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink-200 via-ink-100 to-ink-50">
      <span className="font-display text-4xl font-bold text-ink-400/80 sm:text-5xl">{initials(member.nama)}</span>
    </div>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

function MemberCard({ member, tier }) {
  return (
    <motion.div variants={itemVariants} className={`group ${TIER_WIDTH[tier]}`}>
      <div
        className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
          tier === 0 ? "border-gold-400/60 shadow-lg shadow-gold-400/10" : "border-ink-100 shadow-sm"
        }`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-ink-50">
          <Avatar member={member} />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center border-t border-ink-100/60 px-3 py-3.5 text-center">
          <h4 className="font-display text-sm font-semibold leading-snug text-ink-900 text-balance">{member.nama}</h4>
          <p className="mt-1 text-[11px] leading-snug text-ink-500 text-balance sm:text-xs">{member.jabatan}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- node bagan ---------- */

function BaganNode({ title, name, accent = false, onClick }) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      onClick={onClick}
      className={`rounded-xl border px-5 py-3 text-center transition-colors ${
        accent ? "border-gold-400/40 bg-gold-400/10" : "border-white/10 bg-white/[0.04]"
      } ${onClick ? "hover:border-gold-400/50 hover:bg-white/[0.08]" : ""}`}
    >
      <p className="font-display text-sm font-semibold text-paper">{title}</p>
      {name && <p className={`mt-0.5 font-mono text-[11px] ${accent ? "text-gold-400" : "text-ink-300"}`}>{name}</p>}
    </Tag>
  );
}
const VLine = () => <div className="h-6 w-px bg-gradient-to-b from-gold-400/60 to-white/15" />;

/* ---------- halaman ---------- */

export default function StrukturOrganisasi() {
  const [params, setParams] = useSearchParams();
  const idParam = params.get("divisi");
  const activeDivisi = Math.max(0, divisiOrganisasi.findIndex((d) => d.id === idParam));
  const current = divisiOrganisasi[activeDivisi];
  const pk = current.programKerja;
  const tiers = groupByTier(current.anggota);
  const judulDivisi = current.id === "bph" ? current.nama : `Divisi ${current.nama}`;

  usePageMeta({
    title: "Struktur | HMIF UNJA",
    description:
      "Susunan kepengurusan HMIF UNJA beserta program kerja tiap divisi: BPH, Danus, Humas, PSDA, dan MIT — Himpunan Mahasiswa Informatika Universitas Jambi.",
    path: "/struktur-organisasi",
  });

  const selectDivisi = (id) => setParams({ divisi: id }, { replace: true });
  const goToTabs = () => document.getElementById("pilih-divisi")?.scrollIntoView({ behavior: "smooth", block: "center" });

  // data bagan diturunkan otomatis dari divisiOrganisasi (tidak perlu diedit manual)
  const bph = divisiOrganisasi.find((d) => d.id === "bph");
  const ketua = bph.anggota.find((a) => /^Ketua/.test(a.jabatan));
  const wakil = bph.anggota.find((a) => /^Wakil/.test(a.jabatan));
  const sekbend = bph.anggota.filter((a) => a !== ketua && a !== wakil);
  const divisiBagan = divisiOrganisasi
    .filter((d) => d.id !== "bph")
    .map((d) => ({ id: d.id, singkatan: d.singkatan, ketua: d.anggota.find((a) => a.jabatan === "Ketua Divisi")?.nama }));

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Struktur Organisasi"
        title="Struktur Organisasi HMIF UNJA"
        subtitle="Susunan pengurus, program kerja tiap divisi, dan garis koordinasi periode berjalan."
      />

      <section className="bg-paper py-16 sm:py-20">
        <div className="container-hmif">
          <Reveal className="mb-8 text-center">
            <p className="eyebrow mb-2 text-teal-600">Divisi Kepengurusan</p>
            <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
              Pilih divisi untuk melihat pengurus &amp; program kerjanya
            </h2>
          </Reveal>

          {/* Tab divisi: satu baris rapi, pil aktif meluncur antar tab */}
          <div
            id="pilih-divisi"
            role="tablist"
            aria-label="Pilih divisi"
            className="scrollbar-hide mx-auto mb-14 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-ink-100 bg-white p-1.5 shadow-sm"
          >
            {divisiOrganisasi.map((d, i) => {
              const active = activeDivisi === i;
              return (
                <button
                  key={d.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => selectDivisi(d.id)}
                  className={`relative shrink-0 rounded-full px-4 py-2.5 font-mono text-xs font-semibold transition-colors duration-200 sm:px-7 sm:text-sm ${
                    active ? "text-gold-300" : "text-ink-600 hover:text-ink-900"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="divisi-pill"
                      className="absolute inset-0 rounded-full bg-ink-950 shadow-lg shadow-ink-950/25"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{d.singkatan}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              {/* 1. Judul */}
              <div className="mb-8 text-center sm:mb-10">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/15 px-3.5 py-1 font-mono text-xs tracking-wider text-gold-700">
                  <span>HMIF UNJA</span>
                  <span>•</span>
                  <span>{current.singkatan}</span>
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
                  {judulDivisi}
                </h2>
              </div>

              {/* 2. Foto bersama */}
              <div className="mx-auto mb-10 max-w-4xl sm:mb-12">
                <div className="group relative overflow-hidden rounded-2xl border border-ink-200/80 bg-white shadow-xl shadow-ink-950/5 sm:rounded-3xl">
                  {current.fotoBersama ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-100 sm:aspect-[16/9]">
                      <img
                        src={current.fotoBersama}
                        alt={`Foto bersama ${current.nama}`}
                        onError={(e) => (e.currentTarget.style.display = "none")}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-70" />
                      <div className="pointer-events-none absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                        <p className="font-mono text-[11px] uppercase tracking-widest text-gold-400">Foto Bersama</p>
                        <h4 className="font-display text-base font-bold text-white sm:text-xl">
                          Keluarga Besar {current.nama} HMIF UNJA
                        </h4>
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex aspect-[16/10] w-full flex-col items-center justify-center bg-gradient-to-b from-white via-ink-50/40 to-ink-100/30 p-6 text-center sm:aspect-[16/9]">
                      <Users size={32} className="mb-3 text-ink-500" />
                      <h4 className="font-display text-lg font-bold text-ink-900 sm:text-2xl">Foto Bersama {current.singkatan}</h4>
                      <p className="mt-2 max-w-md text-xs text-ink-600 sm:text-sm">
                        Isi properti <code>fotoBersama</code> di <code>src/data/content.js</code> (rasio 16:9).
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Deskripsi divisi */}
              <div className="mx-auto mb-14 max-w-3xl px-1 sm:mb-16">
                <p className="text-justify text-sm leading-relaxed text-ink-700 [text-align-last:center] sm:text-base">
                  {current.deskripsi}
                </p>
                {pk && (
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={() => document.getElementById("program-kerja")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                      className="group/btn inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-sm transition-all hover:border-gold-400 hover:shadow-md"
                    >
                      Lihat program kerja {current.singkatan}
                      <ArrowDown size={15} className="transition-transform group-hover/btn:translate-y-0.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* 4. Struktur divisi — dikelompokkan per tingkat jabatan */}
              <div className="mb-12 text-center">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">Struktur Divisi</h3>
                <div className="mx-auto mt-2.5 h-1 w-12 rounded-full bg-gold-500" />
                <p className="mt-2 font-mono text-xs text-ink-500 sm:text-sm">Susunan pengurus {current.nama}</p>
              </div>

              <div className="space-y-12">
                {tiers.map((t) => (
                  <div key={t.label}>
                    <div className="mb-6 flex items-center gap-4">
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-ink-200" />
                      <span className="font-mono text-xs tracking-wider text-ink-500">{t.label}</span>
                      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-ink-200" />
                    </div>
                    <motion.div
                      initial="hidden"
                      animate="show"
                      variants={{ show: { transition: { staggerChildren: 0.05 } } }}
                      className="flex flex-wrap justify-center gap-4 sm:gap-5"
                    >
                      {t.list.map((m) => (
                        <MemberCard key={m.nama} member={m} tier={t.tier} />
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* 5. PROGRAM KERJA divisi ini saja — tepat di bawah struktur, sebelum Bagan Organisasi */}
              {pk && (
                <div id="program-kerja" className="mt-20 scroll-mt-24 sm:mt-24">
                  <div className="relative overflow-hidden rounded-3xl border border-ink-200/80 bg-ink-50 px-5 py-12 shadow-xl shadow-ink-950/5 sm:px-12 sm:py-16">
                    <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-400/40 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold-400/30 blur-3xl" />

                    <div className="relative mx-auto mb-10 max-w-2xl text-center sm:mb-12">
                      <p className="eyebrow mb-3 text-gold-700">Program Kerja</p>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-ink-900 text-balance sm:text-4xl">
                        Program Kerja {current.singkatan}
                      </h3>
                      <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gold-500" />
                      <p className="mt-5 text-justify text-sm leading-relaxed text-ink-600 [text-align-last:center] sm:text-base">
                        {pk.deskripsi}
                      </p>
                    </div>

                    <motion.ul
                      initial="hidden"
                      animate="show"
                      variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
                      className="relative flex flex-wrap justify-center gap-4"
                    >
                      {pk.program.map((p, i) => (
                        <motion.li
                          key={i}
                          variants={itemVariants}
                          className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]"
                        >
                          <SpotlightCard
                            className="h-full rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-gold-400 hover:shadow-md"
                          >
                            <div className="flex items-start gap-4">
                              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gold-400/30 text-gold-700">
                                <CircleCheck size={18} />
                              </span>
                              <p className="text-justify text-sm leading-relaxed text-ink-800">{p}</p>
                            </div>
                          </SpotlightCard>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bagan Organisasi */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container-hmif max-w-4xl">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow mb-4 text-gold-400">Bagan Organisasi</p>
            <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">Garis koordinasi HMIF</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-ink-300">Klik salah satu divisi untuk melihat pengurus dan program kerjanya.</p>
          </Reveal>

          <Reveal>
            <div className="flex flex-col items-center">
              <BaganNode title={ketua.jabatan} name={ketua.nama} accent />
              <VLine />
              <BaganNode title={wakil.jabatan} name={wakil.nama} />
              <VLine />
              <div className="flex flex-wrap justify-center gap-3">
                {sekbend.map((a) => (
                  <BaganNode key={a.nama} title={a.jabatan.replace(" Himpunan", "")} name={a.nama} />
                ))}
              </div>
              <VLine />

              <div className="relative w-full">
                <div className="absolute inset-x-[12.5%] top-0 hidden h-px bg-white/15 lg:block" />
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:pt-6">
                  {divisiBagan.map((d) => (
                    <div key={d.id} className="relative">
                      <span className="absolute -top-6 left-1/2 hidden h-6 w-px bg-white/15 lg:block" />
                      <button
                        onClick={() => {
                          selectDivisi(d.id);
                          goToTabs();
                        }}
                        className="h-full w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3.5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:bg-white/[0.08]"
                      >
                        <p className="mb-1 font-mono text-xs text-gold-400">{d.singkatan}</p>
                        <p className="font-display text-xs font-medium leading-tight text-paper">{d.ketua}</p>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Navigasi cepat */}
      <section className="bg-paper py-14 sm:py-16">
        <div className="container-hmif">
          <Reveal>
            <p className="eyebrow mb-6 text-center text-teal-600">Navigasi Cepat</p>
            <div className="flex flex-wrap justify-center gap-3">
              {divisiOrganisasi.map((d) => (
                <button
                  key={d.id}
                  onClick={() => {
                    selectDivisi(d.id);
                    goToTabs();
                  }}
                  className="group flex w-full items-center gap-4 rounded-xl border border-ink-100 bg-white p-4 text-left transition-all duration-300 hover:border-ink-200 hover:shadow-md sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)]"
                >
                  <div className="flex h-10 min-w-10 shrink-0 items-center justify-center rounded-lg bg-ink-950 px-2 font-mono text-xs font-bold text-gold-400">
                    {d.singkatan}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-sm font-semibold text-ink-900">{d.nama}</p>
                    <p className="mt-0.5 text-xs text-ink-400">
                      {d.anggota.length} anggota{d.programKerja ? ` · ${d.programKerja.program.length} program kerja` : ""}
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-ink-300 transition-all group-hover:translate-x-0.5 group-hover:text-ink-600" />
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
