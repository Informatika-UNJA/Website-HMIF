import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Elemen (tombol/link) yang sedikit tertarik ke arah kursor saat didekati. */
export default function Magnetic({ children, strength = 0.3, className = "" }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.4 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={reset} style={{ x, y }} className={`inline-block ${className}`}>
      {children}
    </motion.div>
  );
}
