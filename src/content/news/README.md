# Mengelola berita

Satu file Markdown (`.md`) mewakili satu berita. Untuk menambah berita, salin salah satu
file contoh di folder ini, ubah nama file menjadi slug URL, lalu perbarui metadata di
antara dua tanda `---`.

Metadata yang tersedia:

```md
---
title: "Judul berita"
excerpt: "Ringkasan singkat untuk halaman arsip"
date: 2026-08-23
category: Kegiatan
author: Tim Media HMIF
cover: /gallery/nama-foto.jpg
coverAlt: "Deskripsi foto yang informatif"
featured: false
---
```

Gunakan `featured: true` hanya pada satu berita. Foto disimpan di dalam folder `public/`,
kemudian ditulis sebagai path yang dimulai dengan `/`.

Isi setelah frontmatter mendukung judul (`##` dan `###`), paragraf, tautan, gambar,
daftar, kutipan, tabel, teks tebal, dan kode inline.
