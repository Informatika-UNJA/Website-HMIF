import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CircleCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { programKerja } from "../data/content";

export default function ProgramKerja() {
  const [openKode, setOpenKode] = useState(programKerja[0]?.kode);

  return (
    <main>
      <PageHeader
        eyebrow="Program Kerja"
        title="Enam bidang, satu arah tujuan"
        subtitle="Setiap bidang memiliki fokus dan program kerja masing-masing yang saling melengkapi untuk mendukung mahasiswa Informatika."
      />

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-hmif max-w-3xl">
          <div className="flex flex-col gap-4">
            {programKerja.map((bidang, i) => {
              const open = openKode === bidang.kode;
              return (
                <Reveal key={bidang.kode} delay={i * 0.04}>
                  <div className="rounded-2xl border border-ink-100 bg-white overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenKode(open ? null : bidang.kode)}
                      className="w-full flex items-center gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-mono text-xs sm:text-sm text-gold-600 tracking-widest w-16 sm:w-20 shrink-0">
                        {bidang.kode}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-semibold text-ink-900">{bidang.nama}</h3>
                        <p className="text-sm text-ink-500 mt-0.5">{bidang.deskripsi}</p>
                      </div>
                      <motion.span
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-ink-400 shrink-0"
                      >
                        <ChevronDown size={20} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <ul className="px-6 sm:pl-[6.5rem] pb-6 space-y-3">
                            {bidang.program.map((p, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-ink-600">
                                <CircleCheck size={16} className="text-teal-500 mt-0.5 shrink-0" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
