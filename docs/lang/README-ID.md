# 🪄 Path Switcher

<!-- 🌍 GitHub-friendly (SVG badges) -->

[![VS Code](https://img.shields.io/badge/VS%20Code-1.85.0+-blue.svg)](https://code.visualstudio.com/)
[![Version](https://img.shields.io/github/v/release/fatonyahmadfauzi/Path-Switcher?color=blue.svg)](https://github.com/fatonyahmadfauzi/Path-Switcher/releases)
[![License: MIT](https://img.shields.io/github/license/fatonyahmadfauzi/Path-Switcher?color=green.svg)](../../LICENSE)
[![Build Status](https://github.com/fatonyahmadfauzi/Path-Switcher/actions/workflows/main.yml/badge.svg)](https://github.com/fatonyahmadfauzi/Path-Switcher/actions)
[![Repo Size](https://img.shields.io/github/repo-size/fatonyahmadfauzi/Path-Switcher?color=yellow.svg)](https://github.com/fatonyahmadfauzi/Path-Switcher)
[![Last Commit](https://img.shields.io/github/last-commit/fatonyahmadfauzi/Path-Switcher?color=brightgreen.svg)](https://github.com/fatonyahmadfauzi/Path-Switcher/commits/main)
[![Installs](https://vsmarketplacebadges.dev/installs-short/fatonyahmadfauzi.path-switcher.svg)](https://marketplace.visualstudio.com/items?itemName=fatonyahmadfauzi.path-switcher)
[![Downloads](https://vsmarketplacebadges.dev/downloads-short/fatonyahmadfauzi.path-switcher.svg)](https://marketplace.visualstudio.com/items?itemName=fatonyahmadfauzi.path-switcher)
[![Rating](https://vsmarketplacebadges.dev/rating-short/fatonyahmadfauzi.path-switcher.svg)](https://marketplace.visualstudio.com/items?itemName=fatonyahmadfauzi.path-switcher)

> 🌐 Tersedia dalam bahasa lain: [English](../../README.md) | [Français](README-FR.md) | [Deutsch](README-DE.md) | [日本語](README-JP.md) | [中文](README-ZH.md) | [Español](README-ES.md) | [Polski](README-PL.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [한국어](README-KO.md)

---
Ekstensi Visual Studio Code yang membantu Anda dengan mudah mengalihkan semua jalur dalam file (HTML, CSS, JS, gambar, dll.) antara **jalur relatif** ↔️ **jalur absolut** hanya dengan satu pintasan keyboard.

---

## ✨ Fitur

- 🔁 Secara otomatis beralih antara jalur relatif dan absolut.
- 💡 Mendukung jalur di:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` di dalam CSS
- ⚡ Dipicu melalui pintasan keyboard.
- 🧭 Mengubah semua jalur dalam file sekaligus.

---

## ✅ Versi VS Code yang Didukung

- Versi minimum: **1.85.0**
- Diuji pada **Windows**, **macOS**, dan **Linux**.

---

## 🧩 Instalasi

1. Kloning atau unduh repositori ini:
   ```bash
   git clone https://github.com/fatonyahmadfauzi/Path-Switcher.git
   cd Path-Switcher
   npm install
   ```
2. Buka folder di VS Code.
3. Tekan **F5** → ini akan meluncurkan jendela **Extension Development Host** baru.

---

## ⌨️ Perintah & Pintasan

| Nama Perintah | ID Perintah | Pintasan |
| --------------------------- | -------------------------- | ---------------- |
| Alihkan Relatif ↔️ Mutlak | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 Contoh

**Sebelum:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**Setelah (Mutlak):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**Setelah (Relatif):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🧑‍💻 Berkontribusi

1. Cabangkan repositori.
2. Jalankan `npm install` untuk menginstal dependensi.
3. Lakukan perubahan Anda.
4. Kompilasi TypeScript: `npm run compile`.
5. Uji di VS Code (tekan **F5** → Extension Development Host).
6. Kirim Permintaan Tarik.

---

## 🛠️ Perkembangan

Kompilasi Skrip Ketik:

```bash
npm run compile
```

Kode serat:

```bash
npm run lint
```

Jalankan tes:

```bash
npm test
```

---

## 🧑‍💻 Berkontribusi

1. Cabangkan repositori.
2. Jalankan `npm install` untuk menginstal dependensi.
3. Lakukan perubahan Anda.
4. Kompilasi TypeScript: `npm run compile`.
5. Uji di VS Code (tekan **F5** → Extension Development Host).
6. Kirim Permintaan Tarik.

---

## 🐞 Bug & Masalah

Laporkan masalah di [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues).

---

## 🧾 Lisensi

Lisensi MIT © [Fatony Ahmad Fauzi](../../LICENSE)