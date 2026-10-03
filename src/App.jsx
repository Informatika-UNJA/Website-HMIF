import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import ProgramKerja from "./pages/ProgramKerja";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import Galeri from "./pages/Galeri";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";

const Berita = lazy(() => import("./pages/Berita"));
const BeritaDetail = lazy(() => import("./pages/BeritaDetail"));

function PageLoading() {
  return (
    <main className="flex min-h-[70svh] items-center justify-center bg-ink-950 px-6 pt-20">
      <p role="status" className="eyebrow text-teal-400">
        Memuat halaman berita…
      </p>
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/program-kerja" element={<ProgramKerja />} />
          <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:slug" element={<BeritaDetail />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}
