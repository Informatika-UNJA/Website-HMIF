import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/** Memiringkan elemen 3D mengikuti posisi kursor. Di layar sentuh tidak aktif (tampil normal). */
export default function Tilt({ children, className = "", max = 7 }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 18 });
  const sy = useSpring(my, { stiffness: 180, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div style={{ perspective: 900 }} className={className}>
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
