import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

/** Tombol kembali ke atas dengan cincin progres scroll. Muncul setelah scroll cukup jauh. */
export default function BackToTop() {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Kembali ke atas"
          className="fixed bottom-5 right-5 z-50 flex size-12 items-center justify-center rounded-full bg-ink-950/90 text-gold-400 shadow-lg shadow-ink-950/30 backdrop-blur-md sm:bottom-8 sm:right-8"
        >
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            <motion.circle cx="24" cy="24" r="21" fill="none" stroke="#D4A657" strokeWidth="2" strokeLinecap="round" style={{ pathLength }} />
          </svg>
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
