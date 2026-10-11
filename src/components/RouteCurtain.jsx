import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const BROWN = "#140D08"; // warna tirai
const BROWN_CLEAR = "rgba(20, 13, 8, 0)"; // cokelat yang sama, tapi transparan
const FADE = "10rem"; // tinggi area fade di tepi bawah tirai

export default function RouteCurtain() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();
  const firstPath = useRef(pathname);
  const hasNavigated = useRef(false);

  const isInitialLoad = !hasNavigated.current && pathname === firstPath.current;

  useEffect(() => {
    if (pathname !== firstPath.current) hasNavigated.current = true;
  }, [pathname]);

  if (reduceMotion || isInitialLoad) return null;

  return (
    <motion.div
      key={pathname}
      aria-hidden="true"
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
      style={{ height: `calc(100% + ${FADE})` }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[70]"
    >
      {/* Badan tirai (solid) */}
      <div className="absolute inset-x-0 top-0" style={{ bottom: FADE, backgroundColor: BROWN }} />

      {/* Tepi bawah memudar: cokelat -> transparan */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{ height: FADE, background: `linear-gradient(to bottom, ${BROWN}, ${BROWN_CLEAR})` }}
      />

      {/* Logo di tengah layar */}
      <div className="absolute inset-x-0 top-0 flex h-screen items-center justify-center">
        <motion.img
          src="/logo-hmif.png"
          alt=""
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1.05] }}
          transition={{ duration: 0.7, times: [0, 0.3, 0.7, 1], ease: "easeOut" }}
          className="h-20 w-auto object-contain sm:h-24"
        />
      </div>
    </motion.div>
  );
}