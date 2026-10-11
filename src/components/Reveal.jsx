/**
 * Reveal / Stagger / StaggerItem
 *
 * Dulu membungkus konten dengan animasi fade-naik saat di-scroll. Efek itu sengaja DIHAPUS
 * (terasa seperti "loading" dan terlalu generik). Komponen ini dipertahankan sebagai pembungkus
 * biasa supaya semua halaman yang memakainya tetap berfungsi tanpa perubahan; konten kini
 * langsung tampil penuh saat di-scroll.
 */
export default function Reveal({ children, className = "", as: Tag = "div" }) {
  return <Tag className={className}>{children}</Tag>;
}

export function Stagger({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
