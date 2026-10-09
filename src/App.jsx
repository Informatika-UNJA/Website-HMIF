import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Tentang = lazy(() => import("./pages/Tentang"));
const ProgramKerja = lazy(() => import("./pages/ProgramKerja"));
const StrukturOrganisasi = lazy(() => import("./pages/StrukturOrganisasi"));
const Galeri = lazy(() => import("./pages/Galeri"));
const Kontak = lazy(() => import("./pages/Kontak"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Berita = lazy(() => import("./pages/Berita"));
const BeritaDetail = lazy(() => import("./pages/BeritaDetail"));

function PageLoading() {
  return (
    <main className="flex min-h-[70svh] items-center justify-center bg-ink-950 px-6 pt-20">
      <p role="status" className="eyebrow text-teal-400">
        Memuat halaman…
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
