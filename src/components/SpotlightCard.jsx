import { useRef } from "react";

/**
 * SpotlightCard — kartu dengan cahaya lembut yang mengikuti kursor (desktop).
 * Cahaya hanya muncul saat hover, tidak memengaruhi layout.
 * Props `glow` = warna cahaya (CSS color), `as` = tag pembungkus.
 */
export default function SpotlightCard({
  children,
  className = "",
  glow = "rgba(212,166,87,0.18)",
  as: Tag = "div",
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${e.clientX - r.left}px`);
    el.style.setProperty("--sy", `${e.clientY - r.top}px`);
  };

  return (
    <Tag ref={ref} onMouseMove={onMove} className={`spotlight group/spot relative overflow-hidden ${className}`} style={{ "--glow": glow }}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{ background: "radial-gradient(260px circle at var(--sx,50%) var(--sy,50%), var(--glow), transparent 70%)" }}
      />
      <div className="relative h-full">{children}</div>
    </Tag>
  );
}
