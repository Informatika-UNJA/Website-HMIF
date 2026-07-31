# Website HMIF Universitas Jambi

<img width="1920" height="965" alt="Screenshot From 2026-07-31 09-07-42" src="https://github.com/user-attachments/assets/0ec51e7b-a29b-42e1-8dc7-3a192477745b" />


Website profil **Himpunan Mahasiswa Informatika (HMIF) Universitas Jambi**, dibangun dengan
React + Vite, Tailwind CSS, dan Framer Motion.

## ✨ Fitur

- Landing page ringkas berisi rangkuman seluruh isi situs
- Halaman **Tentang Kami** (sejarah, visi, misi, nilai, info Prodi Informatika)
- Halaman **Program Kerja** (6 bidang kepengurusan, accordion)
- Halaman **Struktur Organisasi** (pengurus inti + koordinator bidang)
- Halaman khusus **IFORIA** (PKK Prodi Informatika) lengkap dengan riwayat edisi per tahun
- Halaman **Galeri** dengan filter kategori
- Halaman **Kontak** dengan form (mailto) + info kanal resmi
- Latar belakang (background) yang **berganti-ganti foto otomatis** dengan efek crossfade
- Animasi Framer Motion di seluruh halaman (scroll reveal, page transition, hover, dsb.)
- Semua teks adalah **karangan/placeholder** silakan diedit bebas

## 🚀 Try it yourself!

Pastikan sudah menginstall [Node.js](https://nodejs.org) (versi 18 ke atas).

```bash
# 1. Masuk ke folder project
cd hmif-website

# 2. Install semua dependency
npm install

# 3. Jalankan mode development
npm run dev
```

Buka `http://localhost:5173` di browser.

Untuk build versi produksi (siap di-deploy):

```bash
npm run build
```

Hasil build ada di folder `dist/`. Folder ini bisa langsung di-upload ke layanan hosting
statis seperti **Vercel**, **Netlify**, **GitHub Pages**, atau **Cloudflare Pages**.

## 🖼️ Mengganti Foto Background (yang berganti-ganti otomatis)

1. Siapkan foto (disarankan format `.jpg`/`.png`, orientasi landscape, resolusi minimal
   1600×900 agar tajam saat full-screen).
2. Masukkan foto ke folder `public/backgrounds/` — boleh menimpa file `bg-1.svg` dst,
   atau menambah file baru misal `foto-1.jpg`.
3. Buka `src/data/content.js`, cari bagian `backgroundImages`, lalu sesuaikan nama filenya:

```js
export const backgroundImages = [
  "/backgrounds/foto-1.jpg",
  "/backgrounds/foto-2.jpg",
  "/backgrounds/foto-3.jpg",
];
```

Background ini dipakai di halaman Beranda dan header setiap halaman lain, akan berganti
otomatis dengan efek fade setiap beberapa detik.

## 🖼️ Mengganti Foto Galeri

Masukkan foto ke folder `public/gallery/`, lalu sesuaikan data `galleryPlaceholder` di
`src/data/content.js` agar menunjuk ke foto tersebut (tambahkan properti `src` berisi path
foto, lalu render `<img>` di `src/pages/Galeri.jsx` menggantikan ikon placeholder).

## ✍️ Mengedit Semua Teks / Konten

Hampir seluruh teks di website (deskripsi HMIF, visi misi, program kerja, struktur
organisasi, info IFORIA, kontak, dll) terpusat di **satu file**:

```
src/data/content.js
```

Edit langsung di file tersebut — perubahan akan otomatis muncul di semua halaman terkait.

## 📁 Struktur Folder

```
src/
├── components/     → Navbar, Footer, BackgroundSlider, animasi reveal, dll
├── data/
│   └── content.js  → SEMUA teks & data konten (paling penting untuk diedit)
├── pages/          → Setiap halaman situs (Home, Tentang, IFORIA, dll)
├── App.jsx         → Pengaturan routing antar halaman
└── index.css       → Style global & Tailwind

public/
├── backgrounds/    → Foto latar yang berganti-ganti otomatis
└── gallery/        → Foto untuk halaman Galeri
```

## 🎨 Konsep Desain

- **Warna**: dark chocolate (`ink`) sebagai warna utama dimana itu adalah warna himpunan, **gold** (aksen budaya/keunikan),
  dan **teal** (aksen teknologi) kombinasi khas, bukan template generik.
- **Tipografi**: `Space Grotesk` (judul), `Plus Jakarta Sans` (isi), `JetBrains Mono`
  (label/aksen bergaya "terminal" cocok untuk identitas mahasiswa Informatika).
- **Motif signature**: gaya terminal/console (`>_`, tag versi `IFORIA // 2025`) dan
  timeline bergaya git-log untuk riwayat IFORIA tiap tahun.

## 📬 Catatan tentang Form Kontak

Form di halaman Kontak saat ini akan membuka aplikasi email default pengunjung (`mailto:`).
Ini cara paling sederhana tanpa perlu backend. Jika ingin pesan terkirim langsung dari
situs tanpa membuka aplikasi email, hubungkan form tersebut ke layanan seperti
[Formspree](https://formspree.io) atau backend sendiri.

## 🛠️ Teknologi

- [React](https://react.dev) + [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com)
- [Lucide Icons](https://lucide.dev) (ikon open source)
