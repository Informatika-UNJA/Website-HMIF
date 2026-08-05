import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageModal({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  setCurrentIndex,
}) {
  const currentImage = images[currentIndex];

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length, setCurrentIndex]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length, setCurrentIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
        >
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Tutup foto"
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 cursor-pointer"
          >
            <X size={22} />
          </button>

          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Wrapper */}
            <div className="relative w-full flex items-center justify-center max-h-[72vh] overflow-hidden rounded-2xl bg-ink-950/50 border border-white/10 shadow-2xl">
              <motion.img
                key={currentImage.id || currentIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                src={currentImage.src}
                alt={currentImage.caption || "Foto Galeri HMIF"}
                className="max-h-[72vh] max-w-full object-contain rounded-2xl select-none"
              />

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    aria-label="Foto sebelumnya"
                    className="absolute left-3 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 cursor-pointer"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Foto selanjutnya"
                    className="absolute right-3 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 cursor-pointer"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Info Footer */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 px-2 text-center sm:text-left">
              <div>
                {currentImage.category && (
                  <span className="inline-block px-2.5 py-0.5 mb-1 text-[11px] font-mono uppercase tracking-wider rounded-md bg-gold-400/20 text-gold-300 border border-gold-400/30">
                    {currentImage.category}
                  </span>
                )}
                {currentImage.caption && (
                  <p className="text-sm sm:text-base text-gray-200 font-medium">
                    {currentImage.caption}
                  </p>
                )}
              </div>

              {images.length > 1 && (
                <span className="font-mono text-xs text-gray-400 shrink-0">
                  {currentIndex + 1} / {images.length}
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
