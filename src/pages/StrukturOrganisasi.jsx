import { UserRound } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PageHeader from "../components/PageHeader";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal";
import { strukturInti, strukturBidang, programKerja } from "../data/content";

export default function StrukturOrganisasi() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Struktur Organisasi"
        title="Orang-orang di balik HMIF"
        subtitle="Susunan pengurus inti dan koordinator bidang periode berjalan. Foto & nama dapat diganti sesuai kepengurusan aktif."
      />

      {/* Pengurus Inti */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-hmif">
          <Reveal className="mb-12">
            <p className="eyebrow text-teal-600 mb-4">Pengurus Inti</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900">
              Badan Pengurus Harian
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {strukturInti.map((p) => (
              <StaggerItem key={p.jabatan}>
                <div className="rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-ink-100 flex items-center justify-center overflow-hidden">
                    {p.foto ? (
                      <img src={p.foto} alt={p.nama} className="h-full w-full object-cover" />
                    ) : (
                      <UserRound className="text-ink-400" size={32} />
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-ink-900 text-sm sm:text-base">
                    {p.nama}
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-600 font-medium mt-1">{p.jabatan}</p>
                  <p className="text-xs text-ink-400 mt-1 font-mono">Angkatan {p.angkatan}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Koordinator Bidang */}
      <section className="bg-ink-950 py-20 sm:py-24">
        <div className="container-hmif">
          <Reveal className="mb-12">
            <p className="eyebrow text-gold-400 mb-4">Koordinator Bidang</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper">
              Enam bidang kepengurusan
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {strukturBidang.map((b) => {
              const bidangInfo = programKerja.find((p) => p.kode === b.bidang);
              return (
                <StaggerItem key={b.bidang}>
                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="h-12 w-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center">
                      <UserRound className="text-teal-400" size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-paper font-medium text-sm truncate">{b.koordinator}</p>
                      <p className="text-xs font-mono text-gold-400 mt-0.5">
                        {bidangInfo?.nama || b.bidang}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Bagan sederhana */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-hmif max-w-3xl">
          <Reveal className="mb-10">
            <p className="eyebrow text-teal-600 mb-4">Bagan Organisasi</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900">
              Garis koordinasi
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-ink-100 bg-white p-8 font-mono text-xs sm:text-sm text-ink-600 leading-loose overflow-x-auto">
              <p>Ketua Umum</p>
              <p className="pl-4">└── Wakil Ketua Umum</p>
              <p className="pl-8">├── Sekretaris Umum</p>
              <p className="pl-8">├── Bendahara Umum</p>
              <p className="pl-8">└── Koordinator Bidang</p>
              {strukturBidang.map((b, i) => (
                <p className="pl-14" key={b.bidang}>
                  {i === strukturBidang.length - 1 ? "└──" : "├──"} {b.bidang}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
