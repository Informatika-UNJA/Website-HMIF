import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveal — membungkus konten agar muncul dengan fade + slide saat discroll
 * ke dalam viewport. Pada prefers-reduced-motion, konten langsung ditampilkan
 * tanpa state transform awal.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className = "",
  as = "div",
}) {
  const Comp = motion[as] || motion.div;
  const shouldReduceMotion = useReducedMotion();
  return (
    <Comp
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}

export function Stagger({ children, className = "", stagger = 0.1, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", y = 20 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
