import { Link } from "react-router-dom";
import { Mail, AtSign, MapPin } from "lucide-react";
import { navLinks, siteInfo } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 border-t border-white/10 text-ink-200">
      <div className="container-hmif py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="mb-4">
            <img
              src="/logo-hmif.png"
              alt="Logo HMIF UNJA"
              className="h-14 object-contain mix-blend-screen grayscale contrast-[2.5] opacity-90"
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-teal-400 mb-4">Navigasi</p>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-teal-400 mb-4">Kontak</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 text-gold-400 shrink-0" />
              <span>{siteInfo.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <AtSign size={16} className="mt-0.5 text-gold-400 shrink-0" />
              <span>{siteInfo.instagram}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-gold-400 shrink-0" />
              <span>{siteInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-hmif py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-400">
          <p>© {new Date().getFullYear()} {siteInfo.fullName}, {siteInfo.university}</p>
          <p className="font-mono">status: <span className="text-teal-400">aktif</span></p>
        </div>
      </div>
    </footer>
  );
}
