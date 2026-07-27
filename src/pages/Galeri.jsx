import { useState } from "react";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { galleryCategories, galleryPlaceholder } from "../data/content";

export default function Galeri() {
  const [active, setActive] = useState("semua");

  const filtered =
    active === "semua"
      ? galleryPlaceholder
      : galleryPlaceholder.filter((g) => g.category === active);

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Galeri"
        title="Momen-Momen HMIF"
        subtitle="Dokumentasi kegiatan himpunan. Letakkan foto asli di folder /public/gallery lalu perbarui data pada src/data/content.js."
      />

      <section className="bg-paper py-16 sm:py-20">
        <div className="container-hmif">
          <Reveal className="flex flex-wrap gap-2.5 mb-10">
            <button
              onClick={() => setActive("semua")}
              className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-colors ${
                active === "semua"
                  ? "bg-ink-900 text-paper border-ink-900"
                  : "border-ink-200 text-ink-500 hover:border-ink-400"
              }`}
            >
              Semua
            </button>
            {galleryCategories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-colors ${
                  active === c.key
                    ? "bg-ink-900 text-paper border-ink-900"
                    : "border-ink-200 text-ink-500 hover:border-ink-400"
                }`}
              >
                {c.label}
              </button>
            ))}
          </Reveal>

          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filtered.map((g) => (
              <motion.div
                layout
                key={g.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="group relative aspect-square rounded-xl overflow-hidden bg-ink-900"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-ink-400">
                  <ImageIcon size={26} />
                  <span className="font-mono text-[10px] uppercase tracking-wider">
                    {g.category}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs text-white truncate">{g.caption}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
