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
           <div className="mt-4 flex items-center gap-3"> 
              <a // Siapopun yang lihat kode nyo sorry kalau berantakan aokwoakwoa
  href={`https://github.com/${siteInfo.github}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub HMIF UNJA"
  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold-400 text-ink-950 hover:bg-gold-500 shadow-md shadow-gold-400/20 transition-all duration-300"
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
</a>

<a
  href={`https://linkedin.com/company/${siteInfo.linkedin}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn HMIF UNJA"
  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold-400 text-ink-950 hover:bg-gold-500 shadow-md shadow-gold-400/20 transition-all duration-300"
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
</a>
              <a
              href={`https://instagram.com/${siteInfo.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram HMIF UNJA"
              className="inline-flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-gold-400 text-ink-950 hover:bg-gold-500 hover:scale-100 shadow-md shadow-gold-400/20 transition-all duration-300 group"
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
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-teal-400 mb-4">Navigasi</p>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-draw text-sm hover:text-white transition-colors">
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
          <p className="font-mono">Informatika! <span className="text-teal-400">Menyala!</span></p>
        </div>
      </div>
    </footer>
  );
}
