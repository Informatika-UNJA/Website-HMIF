import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/**
 * Teks berjalan yang bereaksi pada scroll: makin cepat kamu scroll, makin cepat jalannya,
 * dan arahnya berbalik saat scroll ke atas. `children` harus berupa SATU rangkaian item yang
 * cukup panjang untuk memenuhi lebar layar — komponen ini menduplikasinya sendiri.
 */
export default function VelocityMarquee({ children, speed = 2.5, className = "" }) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const dir = useRef(1);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    let move = -speed * (delta / 1000) * dir.current;
    move += dir.current * move * Math.abs(f);
    baseX.set(baseX.get() + move);
  });

  return (
    <div className="overflow-hidden">
      <motion.div style={{ x }} className={`flex w-max ${className}`}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
