# Website HMIF Universitas Jambi

Website profil **Himpunan Mahasiswa Informatika (HMIF) Universitas Jambi**, dibangun dengan
React + Vite, Tailwind CSS, dan Framer Motion.

<img alt="Screenshot From 2026-07-31 09-07-42" src="https://github.com/user-attachments/assets/afa19a5a-57eb-494f-9894-55fdc162d8dc" />

<p align="center"> Website Creator's
   <br><br>
   <a href="https://github.com/Informatika-UNJA/Website-HMIF/">
  <img src="https://contributors-img.web.app/image?repo=Informatika-UNJA/Website-HMIF" />
</a></p>

## ✨ | Features

- Landing page ringkas berisi rangkuman seluruh isi situs
- Halaman **Tentang Kami** (sejarah, visi, misi, nilai, info Prodi Informatika)
- Halaman **Program Kerja** (6 bidang kepengurusan, accordion)
- Halaman **Struktur Organisasi** (pengurus inti + koordinator bidang)
- Halaman khusus **IFORIA** (PKK Prodi Informatika) lengkap dengan riwayat edisi per tahun
- Halaman **Galeri** dengan filter kategori
- Halaman **Berita** dengan arsip, filter kategori, dan detail artikel berbasis Markdown
- Halaman **Kontak** dengan form (mailto) + info kanal resmi
- Latar belakang (background) yang **berganti-ganti foto otomatis** dengan efek crossfade
- Animasi Framer Motion di seluruh halaman (scroll reveal, page transition, hover, dsb.)
- Semua teks adalah **karangan/placeholder** silakan diedit bebas

Hasil build ada di folder `dist/`. Folder ini bisa langsung di-upload ke layanan hosting
statis seperti **Vercel**, **Netlify**, **GitHub Pages**, atau **Cloudflare Pages**.

## 🖼️ | Mengganti Foto Background (yang berganti-ganti otomatis)

1. Siapkan foto (disarankan format `.jpg`/`.png`, orientasi landscape, resolusi minimal
   1600×900 agar tajam saat full-screen).
2. Masukkan foto ke folder `public/backgrounds/` — boleh menimpa file `bg-1.svg` dst,
   atau menambah file baru misal `foto-1.jpg`.
3. Buka `src/data/content.js`, cari bagian `backgroundImages`, lalu sesuaikan nama filenya:

```
export const backgroundImages = [
  "/backgrounds/foto-1.jpg",
  "/backgrounds/foto-2.jpg",
  "/backgrounds/foto-3.jpg",
];
```

Background ini dipakai di halaman Beranda dan header setiap halaman lain, akan berganti
otomatis dengan efek fade setiap beberapa detik.

## 🖼️ | Mengganti Foto Galeri

Masukkan foto ke folder `public/gallery/`, lalu sesuaikan data `galleryPlaceholder` di
`src/data/content.js` agar menunjuk ke foto tersebut (tambahkan properti `src` berisi path
foto, lalu render `<img>` di `src/pages/Galeri.jsx` menggantikan ikon placeholder).

## ✍️ | Mengedit Semua Teks / Konten

Hampir seluruh teks di website (deskripsi HMIF, visi misi, program kerja, struktur
organisasi, info IFORIA, kontak, dll) terpusat di **satu file**:

```
src/data/content.js
```

Edit langsung di file tersebut — perubahan akan otomatis muncul di semua halaman terkait.

Konten berita dikelola terpisah sebagai file Markdown di `src/content/news/`. Lihat
`src/content/news/README.md` untuk format metadata dan cara menambah artikel baru.

## 🎨 | Konsep Desain

- **Warna**: dark chocolate (`ink`) sebagai warna utama dimana itu adalah warna himpunan, **gold** (aksen budaya/keunikan),
  dan **teal** (aksen teknologi) kombinasi khas, bukan template generik.
- **Tipografi**: `Space Grotesk` (judul), `Plus Jakarta Sans` (isi), `JetBrains Mono`
  (label/aksen bergaya "terminal" cocok untuk identitas mahasiswa Informatika).
- **Motif signature**: gaya terminal/console (`>_`, tag versi `IFORIA // 2025`) dan
  timeline bergaya git-log untuk riwayat IFORIA tiap tahun.

## 📬 | Catatan tentang Form Kontak

Form di halaman Kontak saat ini akan membuka aplikasi email default pengunjung (`mailto:`).
Ini cara paling sederhana tanpa perlu backend. Jika ingin pesan terkirim langsung dari
situs tanpa membuka aplikasi email, hubungkan form tersebut ke layanan seperti
[Formspree](https://formspree.io) atau backend sendiri.

## 🛠️ | Tech

- [React](https://react.dev) + [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com)
- [Lucide Icons](https://lucide.dev) (ikon open source)
