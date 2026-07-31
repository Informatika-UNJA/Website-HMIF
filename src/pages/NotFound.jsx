import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main>
      <section className="min-h-[70svh] flex items-center justify-center bg-ink-950 text-center px-6">
        <div>
          <p className="font-mono text-teal-400 text-sm mb-4">$ error 404</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-paper mb-4">
            Maaf, tetapi Halaman tidak ditemukan
          </h1>
          <p className="text-ink-300 mb-8 max-w-md mx-auto">
            Sepertinya kamu mengetik alamat yang salah, atau halaman ini sudah dipindahkan
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-teal-400 text-ink-950 font-semibold px-6 py-3 text-sm hover:bg-teal-300 transition-colors"
          >
            <ArrowLeft size={16} /> Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  );
}
