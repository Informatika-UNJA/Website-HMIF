import { useState } from "react";
import { Mail, AtSign, MapPin, Send } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { siteInfo, contactChannels } from "../data/content";

const icons = { Email: Mail, Instagram: AtSign, Lokasi: MapPin };

export default function Kontak() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${form.nama || "Pengunjung Situs"}`);
    const body = encodeURIComponent(
      `${form.pesan}\n\n—\nDari: ${form.nama}\nEmail: ${form.email}`
    );
    window.location.href = `mailto:${siteInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Kontak"
        title="Mari terhubung dengan kami"
        subtitle="Punya pertanyaan, ide kolaborasi, atau ingin bergabung? Sampaikan lewat form di bawah atau kanal resmi kami."
      />

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-hmif grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-teal-600 mb-6">Kanal Resmi</p>
            <div className="space-y-4">
              {contactChannels.map((c) => {
                const Icon = icons[c.label] || Mail;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-start gap-4 rounded-xl border border-ink-100 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-full bg-teal-50 flex items-center justify-center">
                      <Icon size={18} className="text-teal-600" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-ink-400">
                        {c.label}
                      </p>
                      <p className="text-sm text-ink-800 font-medium mt-0.5">{c.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="eyebrow text-teal-600 mb-6">Kirim Pesan</p>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-ink-100 bg-white p-7 shadow-sm space-y-5">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-ink-400 mb-1.5 block">
                  Nama
                </label>
                <input
                  required
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  placeholder="Nama lengkap"
                  className="w-full rounded-lg border border-ink-100 bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:border-teal-400 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-ink-400 mb-1.5 block">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  className="w-full rounded-lg border border-ink-100 bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:border-teal-400 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-ink-400 mb-1.5 block">
                  Pesan
                </label>
                <textarea
                  required
                  rows={5}
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full rounded-lg border border-ink-100 bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:border-teal-400 outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-teal-400 text-ink-950 font-semibold px-6 py-3 text-sm hover:bg-teal-300 transition-colors"
              >
                Kirim Pesan <Send size={15} />
              </button>
              <p className="text-xs text-ink-400">
                Tombol ini akan membuka aplikasi email default Anda. Untuk mengaktifkan
                pengiriman langsung dari situs, hubungkan form ini ke layanan seperti
                Formspree atau backend Anda sendiri.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
