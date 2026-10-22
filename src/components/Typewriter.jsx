import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Mengetik dan menghapus kata bergantian (gaya terminal). Statis bila "reduce motion" aktif. */
export default function Typewriter({ words, className = "", typeMs = 85, eraseMs = 45, holdMs = 1500 }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const w = words[i];
    let t;
    if (!erasing && n < w.length) t = setTimeout(() => setN(n + 1), typeMs);
    else if (!erasing) t = setTimeout(() => setErasing(true), holdMs);
    else if (n > 0) t = setTimeout(() => setN(n - 1), eraseMs);
    else {
      setErasing(false);
      setI((i + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [n, erasing, i, words, reduce, typeMs, eraseMs, holdMs]);

  return (
    <span className={className} aria-label={words.join(", ")}>
      <span aria-hidden="true" className="caret">
        {reduce ? words[0] : words[i].slice(0, n)}
      </span>
    </span>
  );
}
