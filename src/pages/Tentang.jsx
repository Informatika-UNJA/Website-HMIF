import { Target, Compass, Sparkles } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import { aboutHmif, prodiInfo, siteInfo } from "../data/content";

export default function Tentang() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Mengenal HMIF Universitas Jambi"
        subtitle="Sejarah singkat, visi, misi, dan nilai yang membentuk arah organisasi kami."
      />

      {/* Sejarah & Intro */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-hmif grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-teal-600 mb-4">Sejarah Singkat</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 mb-5">
              Dari nol, membangun tradisi
            </h2>
            <p className="text-ink-500 leading-relaxed mb-4">{aboutHmif.sejarah}</p>
            <p className="text-ink-500 leading-relaxed">{aboutHmif.intro}</p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-sm h-full">
              <Compass className="text-teal-500 mb-4" size={26} />
              <p className="eyebrow text-ink-400 mb-2">Visi</p>
              <p className="text-ink-700 leading-relaxed">{aboutHmif.visi}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Misi */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container-hmif">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-gold-400 mb-4">Misi</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper">
              Langkah nyata menuju visi bersama
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutHmif.misi.map((m, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 h-full">
                  <span className="font-mono text-gold-400 text-sm shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-ink-200 text-sm leading-relaxed">{m}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Nilai */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-hmif">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-teal-600 mb-4">Nilai Kami</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900">
              Prinsip yang kami pegang
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutHmif.nilai.map((n) => (
              <StaggerItem key={n.title}>
                <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <Sparkles className="text-gold-500 mb-4" size={22} />
                  <h3 className="font-display font-semibold text-ink-900 mb-2">{n.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{n.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Prodi Informatika */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container-hmif grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-gold-400 mb-4">Program Studi</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper mb-5">
              Informatika {siteInfo.university}
            </h2>
            <p className="text-ink-300 leading-relaxed">{prodiInfo.intro}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prodiInfo.fokus.map((f) => (
                <div key={f.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <Target className="text-teal-400 mb-3" size={18} />
                  <h4 className="font-display text-paper font-medium text-sm mb-1.5">{f.title}</h4>
                  <p className="text-xs text-ink-300 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
