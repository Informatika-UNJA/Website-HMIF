import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteInfo } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled || open
        ? "bg-ink-950/85 backdrop-blur-md border-b border-white/10"
        : "bg-gradient-to-b from-ink-950/70 to-transparent"
        }`}
    >
      <nav className="container-hmif flex h-16 sm:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/logo-hmif.png"
            alt="Logo HMIF UNJA"
            className="h-12 sm:h-16 object-contain mix-blend-screen grayscale contrast-[2.5] opacity-90 group-hover:opacity-100 group-hover:scale-105 group-active:scale-95 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${isActive ? "text-ink-950 bg-teal-400" : "text-ink-100 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/kontak"
            className="font-mono text-xs tracking-wider uppercase px-4 py-2 rounded-full border border-gold-400/50 text-gold-300 hover:bg-gold-400 hover:text-ink-950 transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-paper p-2 -mr-2"
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-md"
          >
            <div className="container-hmif py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium ${isActive ? "text-teal-400 bg-white/5" : "text-ink-100"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/kontak"
                className="mt-2 text-center font-mono text-xs tracking-wider uppercase px-4 py-3 rounded-lg bg-gold-400 text-ink-950 font-semibold"
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
