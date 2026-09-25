# Fajar Septiawan — Personal Brand

Website personal brand untuk Fajar Septiawan, desainer visual dari Rengat, Riau. Dibangun sebagai situs statis satu halaman tanpa framework maupun proses build.

## Struktur

```
index.html               Halaman utama (hero, tentang, passion, arah, visual, kontak)
css/
  tokens.css              Design tokens (warna, tipografi, spacing)
  base.css                Reset & style dasar
  layout.css              Header & navigasi
  components.css          Komponen (tombol, kartu, form, dsb.)
  home.css                Style khusus halaman utama
  home-responsive.css     Breakpoint responsif
  animations.css          Animasi & efek reveal
js/
  main.js                 Entry point, memanggil modul lain
  navigation.js           Menu, scroll state, navigasi aktif
  reveal.js               Animasi reveal on-scroll (IntersectionObserver)
  contact.js              Form kontak (submit via mailto)
assets/
  icons.svg               Sprite ikon SVG
  images/                 Gambar & ilustrasi
```

## Menjalankan secara lokal

Karena situs ini statis, cukup buka `index.html` langsung di browser, atau jalankan server lokal sederhana, contoh:

```bash
npx serve .
```

## Deploy ke Cloudflare Pages

```bash
npx wrangler deploy
```

Konfigurasi proyek ada di `wrangler.toml`.
