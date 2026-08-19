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
            <h3 className="mt-3 text-lg font-bold text-white tracking-wide">
              {siteInfo.fullName}
            </h3>
            <p className="text-sm text-ink-400 mt-1">
              {siteInfo.university}
            </p>
            <a
              href={`https://instagram.com/hmifunja/${siteInfo.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram HMIF UNJA"
              className="mt-4 inline-flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-gold-400 text-ink-950 hover:bg-gold-500 hover:scale-100 shadow-md shadow-gold-400/20 transition-all duration-300 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
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
