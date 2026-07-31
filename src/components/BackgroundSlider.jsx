import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * BackgroundSlider
 * Menampilkan satu latar penuh (full-bleed) yang berganti-ganti foto secara
 * otomatis dengan transisi crossfade halus, lalu dilapisi overlay gradasi
 * agar teks di atasnya tetap terbaca.
 *
 * Untuk mengganti foto: cukup timpa file di /public/backgrounds/ atau ubah
 * array `backgroundImages` di /src/data/content.js — komponen ini otomatis
 * menyesuaikan.
 */
export default function BackgroundSlider({
  images = [],
  interval = 6000,
  overlay = "strong",
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  const overlayClass =
    overlay === "strong"
      ? "bg-gradient-to-b from-ink-950/90 via-ink-900/80 to-ink-950/95"
      : "bg-gradient-to-b from-ink-950/70 via-ink-900/60 to-ink-950/80";

  if (images.length === 0) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt=""
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 1.6, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="absolute inset-0 grain" />
      {/* indikator titik */}
      {images.length > 1 && (
        <div className="absolute bottom-6 right-6 z-10 flex gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-6 bg-gold-400" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
