import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import RouteCurtain from "./components/RouteCurtain";

// Semua halaman di-import langsung (tanpa lazy-loading) supaya perpindahan halaman
// instan dan tidak pernah menampilkan layar "Memuat halaman…".
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import Galeri from "./pages/Galeri";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";
import Berita from "./pages/Berita";
import BeritaDetail from "./pages/BeritaDetail";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Link dengan #anchor (mis. /struktur-organisasi#program-kerja) -> geser ke elemen tujuan.
    if (hash) {
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 380);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <RouteCurtain />
      <Navbar />
      <ScrollToTop />
      {/* Fade singkat saat pindah halaman (hanya masuk, tanpa jeda keluar) */}
      <motion.div
        key={pathname}
        className="flex-1"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
          {/* Halaman Program Kerja sudah digabung ke Struktur Organisasi — link lama diarahkan ke sana */}
          <Route path="/program-kerja" element={<Navigate to="/struktur-organisasi#program-kerja" replace />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:slug" element={<BeritaDetail />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
      <Footer />
      <BackToTop />
    </div>
  );
}
