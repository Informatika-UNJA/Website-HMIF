import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ImageModal from "../components/ImageModal";
import { galleryCategories, galleryPlaceholder } from "../data/content";

export default function Galeri() {
  const [active, setActive] = useState("semua");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filtered =
    active === "semua"
      ? galleryPlaceholder
      : galleryPlaceholder.filter((g) => g.category === active);

  return (
    <main>
      <PageHeader
        eyebrow="Galeri"
        title="Momen-Momen HMIF"
        subtitle="Dokumentasi kegiatan himpunan. Letakkan foto asli di folder /public/gallery lalu perbarui data pada src/data/content.js."
      />

      <section className="bg-paper py-16 sm:py-20">
        <div className="container-hmif">
          <div role="group" aria-label="Filter galeri">
            <Reveal className="flex flex-wrap gap-2.5 mb-10">
              <button
                onClick={() => setActive("semua")}
                aria-pressed={active === "semua"}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-colors cursor-pointer ${
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
                  aria-pressed={active === c.key}
                  className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-colors cursor-pointer ${
                    active === c.key
                      ? "bg-ink-900 text-paper border-ink-900"
                      : "border-ink-200 text-ink-500 hover:border-ink-400"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </Reveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((g, idx) => (
                <motion.div
                  layout="position"
                  key={g.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  onClick={() => setSelectedIndex(idx)}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-ink-900 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ring-0 hover:ring-2 hover:ring-gold-400/50"
                >
                  <img
                    src={g.src}
                    alt={g.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5">
                    <div className="flex justify-end">
                      <span className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm shadow-md group-hover:scale-110 transition-transform">
                        <ZoomIn size={16} />
                      </span>
                    </div>
                    <div>
                      <span className="inline-block font-mono text-[10px] uppercase tracking-wider text-gold-300 bg-black/40 px-2 py-0.5 rounded mb-1">
                        {g.category}
                      </span>
                      <p className="text-xs font-medium text-white line-clamp-2">{g.caption}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        images={filtered}
        currentIndex={selectedIndex ?? 0}
        setCurrentIndex={setSelectedIndex}
      />
    </main>
  );
}
