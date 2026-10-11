# Website HMIF Universitas Jambi

Website profil **Himpunan Mahasiswa Informatika (HMIF) Universitas Jambi**, dibangun dengan
**React + Vite**, **Tailwind CSS**, dan **Framer Motion**.

<img alt="Screenshot Website HMIF UNJA" src="https://github.com/user-attachments/assets/afa19a5a-57eb-494f-9894-55fdc162d8dc" />

<p align="center"> Website Creator's
   <br><br>
   <a href="https://github.com/Informatika-UNJA/Website-HMIF/">
  <img src="https://contributors-img.web.app/image?repo=Informatika-UNJA/Website-HMIF" />
</a></p>

---

## 📑 | Daftar Isi

1. [Fitur](#-fitur)
2. [Persiapan (sekali saja)](#-persiapan-sekali-saja)
3. [Menjalankan Website untuk Development](#-menjalankan-website-untuk-development)
4. [Perintah yang Tersedia](#-perintah-yang-tersedia)
5. [Struktur Folder](#-struktur-folder)
6. [Cara Mengedit Konten](#-cara-mengedit-konten)
7. [Menambah Foto](#-menambah-foto)
8. [Menambah Berita](#-menambah-berita)
9. [Alur Kerja Tim (Git)](#-alur-kerja-tim-git)
10. [Deploy ke Vercel](#-deploy-ke-vercel)
11. [Troubleshooting](#-troubleshooting)

---

## ✨ | Fitur

- **Beranda** ringkas berisi rangkuman seluruh isi situs, dengan judul beranimasi dan marquee
- **Tentang HMIF**: sejarah, visi, misi, nilai (tiap nilai punya ikon & animasi sendiri), info Prodi
- **Struktur Organisasi** (lima divisi: BPH, DANUS, HUMAS, PSDA, MIT). Tiap divisi menampilkan:
  foto bersama → deskripsi → struktur pengurus (dikelompokkan per jabatan) → **program kerja divisi tersebut**
  → lalu **Bagan Organisasi** di bagian bawah halaman
- **Program Kerja sudah digabung ke Struktur Organisasi.** Hanya program kerja divisi yang sedang dipilih
  yang tampil. Link lama `/program-kerja` otomatis diarahkan ke halaman Struktur
- **Galeri** dengan filter kategori & lightbox
- **Berita** dengan arsip, filter kategori, dan detail artikel berbasis Markdown
- **Kontak** dengan form (`mailto:`) + info kanal resmi
- Latar belakang yang berganti otomatis dengan efek crossfade
- **Animasi** (tanpa efek fade-naik saat scroll, jadi konten selalu langsung terlihat penuh):
  - Terhubung ke scroll: progress bar di atas, parallax latar hero, marquee yang makin cepat saat di-scroll dan berbalik arah saat scroll ke atas, tombol "kembali ke atas" dengan cincin progres, navbar yang menyembunyikan diri saat scroll turun
  - Bereaksi pada kursor: gambar miring 3D (`Tilt`), tombol "magnetik" (`Magnetic`), cahaya kartu mengikuti kursor (`SpotlightCard`), garis bawah link yang menggambar saat hover
  - Saat halaman dibuka / aksi diklik: judul hero kata per kata, teks ketik bergantian (`Typewriter`), pil tab yang meluncur, pergantian divisi, transisi halaman
  - Semua otomatis dimatikan bagi pengunjung yang mengaktifkan "reduce motion"
- Perpindahan halaman **instan** (tanpa layar "Memuat…")

---

## 🧰 | Persiapan (sekali saja)

Yang perlu ada di laptop:

| Kebutuhan | Keterangan |
| --- | --- |
| **Node.js** | Versi **20.19 atau lebih baru** (disarankan LTS terbaru). Unduh di [nodejs.org](https://nodejs.org). Cek dengan `node -v` |
| **npm** | Ikut terpasang bersama Node.js. Cek dengan `npm -v` |
| **Git** | Untuk mengambil & mengirim perubahan. Unduh di [git-scm.com](https://git-scm.com) |
| Editor | Disarankan [VS Code](https://code.visualstudio.com) |

---

## 🚀 | Menjalankan Website untuk Development

```bash
# 1. Ambil project (lewati jika folder sudah ada di laptopmu)
git clone https://github.com/Informatika-UNJA/Website-HMIF.git
cd Website-HMIF

# 2. Pasang semua dependensi (cukup sekali, ulangi hanya jika package.json berubah)
npm install

# 3. Jalankan server development
npm run dev
```

Setelah itu buka alamat yang muncul di terminal, biasanya **http://localhost:5173**.
Setiap file yang disimpan akan langsung tampil di browser tanpa perlu refresh. Tekan `Ctrl + C`
di terminal untuk menghentikan.

> 💡 **Foto tidak muncul?** Folder `public/team`, `public/gallery`, dan `public/backgrounds` sengaja
> tidak ikut di repo/ZIP karena ukurannya besar. Saat development, foto pengurus yang hilang akan
> otomatis diganti **inisial nama**, jadi website tetap rapi. Minta foto aslinya ke tim, lalu
> letakkan sesuai bagian [Menambah Foto](#-menambah-foto).

---

## 🧪 | Perintah yang Tersedia

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Server development dengan hot reload (dipakai sehari-hari) |
| `npm run build` | Build produksi ke folder `dist/` (+ prerender halaman untuk SEO bila Chrome/Edge ada) |
| `npm run preview` | Menjalankan hasil build secara lokal. Jalankan `npm run build` dulu |
| `npm run lint` | Memeriksa kode dengan oxlint |

**Sebelum push, biasakan menjalankan `npm run build`** agar ketahuan jika ada error yang akan
menggagalkan deploy di Vercel.

---

## 📁 | Struktur Folder

```
.
├── public/                  # File statis, diakses lewat "/nama-file"
│   ├── team/                # Foto pengurus & foto bersama divisi
│   ├── gallery/             # Foto galeri & cover berita
│   ├── backgrounds/         # Foto latar yang berganti otomatis
│   ├── logo-hmif.png, logo-prodi.png, favicon.png, og-image.jpg
│   └── sitemap.xml, robots.txt
├── src/
│   ├── data/content.js      # ⭐ SEMUA teks/data situs (divisi, program kerja, visi-misi, kontak, dll)
│   ├── content/news/        # Artikel berita (satu file .md per berita)
│   ├── pages/               # Satu file per halaman
│   │   ├── Home.jsx, Tentang.jsx, StrukturOrganisasi.jsx
│   │   ├── Galeri.jsx, Berita.jsx, BeritaDetail.jsx, Kontak.jsx, NotFound.jsx
│   ├── components/          # Navbar, Footer, komponen animasi (Tilt, Magnetic, Typewriter, VelocityMarquee, SpotlightCard, BackToTop, dll)
│   ├── utils/               # Helper berita & SEO per halaman
│   ├── App.jsx              # Daftar route
│   └── index.css            # Gaya global
├── scripts/prerender.mjs    # Prerender untuk SEO (jalan otomatis di `npm run build`)
├── tailwind.config.js       # Warna, font, animasi
└── vercel.json              # Pengaturan routing di Vercel
```

---

## ✍️ | Cara Mengedit Konten

Hampir semua teks ada di satu file: **`src/data/content.js`**. Simpan filenya, perubahan langsung tampil.

### Mengedit Program Kerja per Divisi

Program kerja **tidak lagi punya halaman sendiri**. Datanya ada di dalam tiap divisi pada
`divisiOrganisasi`, di properti `programKerja`:

```js
{
  id: "mit",
  nama: "Media Informasi dan Teknologi",
  singkatan: "MIT",
  fotoBersama: "/team/MIT.JPG",
  deskripsi: "…deskripsi divisi…",
  programKerja: {
    deskripsi: "Kalimat pengantar program kerja divisi ini.",
    program: [
      "Maintenance & pengembangan website HMIF",
      "Workshop pemrograman & teknologi terkini",
      // tambah baris baru di sini
    ],
  },
  anggota: [ /* … */ ],
}
```

- Menambah/menghapus program → tambah/hapus satu baris di array `program`.
- Divisi **tanpa** `programKerja` (saat ini BPH) otomatis tidak menampilkan bagian program kerja.
  Untuk mengaktifkannya, buka komentar `// programKerja: …` di divisi BPH lalu isi.
- Program kerja juga otomatis muncul di kartu "Program Kerja" pada Beranda dan mengarah langsung
  ke divisi yang dipilih (`/struktur-organisasi?divisi=mit#program-kerja`).

### Mengedit Pengurus

Di `divisiOrganisasi → anggota`. Tiap anggota berisi `nama`, `jabatan`, dan `foto`
(isi `null` jika belum ada → tampil inisial nama).

Urutan di halaman **dikelompokkan otomatis berdasarkan `jabatan`**, jadi urutan penulisan di file bebas:

| Kelompok | Jabatan yang masuk |
| --- | --- |
| Pimpinan | `Ketua Divisi`, `Ketua Himpunan` |
| Pengurus Inti | `Wakil Ketua …`, `Sekretaris …`, `Bendahara …` |
| Ketua Bidang | diawali `Ketua Bidang …` |
| Anggota | tepat `Anggota` |

> ⚠️ Tulis jabatan **persis** seperti di atas (huruf besar-kecil & ejaan), supaya masuk kelompok yang benar.
> **Bagan Organisasi** juga dibuat otomatis dari data BPH + Ketua Divisi tiap divisi, jadi tidak ada yang perlu diedit terpisah.

### Mengedit Nilai (Tentang)

`aboutHmif.nilai`. Tiap nilai punya `icon` (`kolaboratif`, `adaptif`, `integritas`, `berkelanjutan`).
Ikon, warna, dan animasinya diatur di `nilaiTheme` pada `src/pages/Tentang.jsx`. Untuk nilai baru,
tambahkan entri baru di `nilaiTheme` lalu pakai namanya di `icon`.

### Lain-lain

| Yang diedit | Lokasi di `content.js` |
| --- | --- |
| Nama, tagline, email, Instagram, alamat | `siteInfo` |
| Menu navigasi | `navLinks` |
| Sejarah, visi, misi | `aboutHmif` |
| Info Prodi | `prodiInfo` |
| Galeri | `galleryPlaceholder` |
| Kanal kontak | `contactChannels` |

---

## 🖼️ | Menambah Foto

| Jenis | Taruh di | Daftarkan di |
| --- | --- | --- |
| Foto pengurus | `public/team/` | `anggota[].foto` → `"/team/nama-file.JPG"` |
| Foto bersama divisi | `public/team/` | `fotoBersama` → `"/team/NAMA.JPG"` |
| Latar bergantian | `public/backgrounds/` | `backgroundImages` |
| Galeri | `public/gallery/` | `galleryPlaceholder` (isi `src`, `caption`, `category`) |

Path selalu diawali `/` dan **tanpa** kata `public`. Nama file bersifat **case-sensitive di Vercel/Linux**
(`Foto.JPG` ≠ `foto.jpg`), jadi samakan persis dengan yang ditulis di `content.js`.
Disarankan mengompres foto (≤ 500 KB per foto) agar website tetap ringan.

---

## 📰 | Menambah Berita

Buat file `.md` baru di `src/content/news/`. Format metadata dan contoh lengkap ada di
[`src/content/news/README.md`](src/content/news/README.md). Setelah itu, tambahkan juga route-nya
di `public/sitemap.xml` bila ingin terindeks mesin pencari.

---

## 🤝 | Alur Kerja Tim (Git)

Karena dikerjakan bersama, hindari langsung bekerja di `main`:

```bash
git checkout main && git pull          # 1. ambil versi terbaru
git checkout -b fitur/nama-perubahan   # 2. buat branch sendiri
# ... edit, cek di http://localhost:5173 ...
npm run build                          # 3. pastikan build lolos
git add . && git commit -m "feat: deskripsi singkat"
git push -u origin fitur/nama-perubahan
```

Lalu buka **Pull Request** di GitHub dan minta satu teman me-review sebelum digabung ke `main`.
Jika ada konflik di `src/data/content.js`, selesaikan manual dengan menyimpan kedua perubahan.

---

## ☁️ | Deploy ke Vercel

1. Push project ke GitHub, lalu login ke [vercel.com](https://vercel.com) dan klik **Add New → Project**.
2. Pilih repository ini. Vercel otomatis mendeteksi **Vite**. Pengaturan yang dipakai:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. Klik **Deploy**. Setiap push ke `main` akan otomatis di-deploy ulang, dan setiap Pull Request
   mendapat link preview sendiri.

Catatan:

- `vercel.json` sudah mengatur agar semua route (mis. `/struktur-organisasi`) tetap terbuka saat di-refresh.
- Langkah *prerender* (SEO) hanya jalan jika Chrome/Edge ditemukan. Di Vercel biasanya dilewati dan website
  tetap berjalan normal sebagai SPA.
- Pastikan folder `public/team`, `public/gallery`, dan `public/backgrounds` **ikut ter-commit**, kalau tidak foto tidak akan tampil di website live.

---

## 🛠️ | Troubleshooting

| Masalah | Solusi |
| --- | --- |
| `command not found: npm` / `node` | Node.js belum terpasang. Install dari nodejs.org lalu buka ulang terminal |
| Error saat `npm run dev` setelah `git pull` | Jalankan `npm install` lagi |
| `Port 5173 is in use` | Tutup terminal dev lain, atau Vite otomatis memakai port berikutnya |
| Foto tidak tampil | Cek nama file (huruf besar/kecil) & path di `content.js`, dan pastikan file ada di `public/…` |
| Halaman putih / error merah di browser | Buka console browser (F12) dan lihat pesan error. Biasanya salah koma/kurung di `content.js` |
| Program kerja suatu divisi tidak muncul | Pastikan divisi itu punya properti `programKerja` dengan array `program` |
| Pengurus masuk kelompok yang salah | Periksa ejaan `jabatan` (lihat tabel kelompok di atas) |
| `[prerender] … dilewati` saat build | Normal jika Chrome/Edge tidak terpasang. Build tetap berhasil |

---

## 🎨 | Konsep Desain

- **Warna**: dark chocolate (`ink`) sebagai warna himpunan, **gold** sebagai aksen. Palet ada di `tailwind.config.js`.
- **Tipografi**: `Space Grotesk` (judul), `Plus Jakarta Sans` (isi), `JetBrains Mono` (label bergaya terminal).
- **Motif**: gaya terminal/console (`>_`, kursor berkedip) sebagai identitas mahasiswa Informatika.

## 🧱 | Teknologi

[React](https://react.dev) · [Vite](https://vitejs.dev) · [Tailwind CSS](https://tailwindcss.com) ·
[Framer Motion](https://www.framer.com/motion/) · [React Router](https://reactrouter.com) ·
[Lucide Icons](https://lucide.dev) · [react-markdown](https://github.com/remarkjs/react-markdown)
