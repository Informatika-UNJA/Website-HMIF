import { Link } from "react-router-dom";
import { Mail, AtSign, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { navLinks, siteInfo } from "../data/content";

const socialLinks = [
  {
    label: "GitHub HMIF UNJA",
    href: `https://github.com/${siteInfo.github}`,
    icon: faGithub,
  },
  {
    label: "LinkedIn HMIF UNJA",
    href: `https://linkedin.com/company/${siteInfo.linkedin}`,
    icon: faLinkedinIn,
  },
  {
    label: "Instagram HMIF UNJA",
    href: `https://instagram.com/${siteInfo.instagram.replace("@", "")}`,
    icon: faInstagram,
  },
];

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
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold-400 text-ink-950 hover:bg-gold-500 shadow-md shadow-gold-400/20 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={item.icon} className="text-[22px]" />
                </a>
              ))}
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
