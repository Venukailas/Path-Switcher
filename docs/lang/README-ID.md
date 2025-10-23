# 🪄 Path Switcher

[![VS Code](https://img.shields.io/badge/VS%20Code-1.85.0+-blue.svg)](https://code.visualstudio.com/)
[![Version](https://img.shields.io/github/v/release/fatonyahmadfauzi/Path-Switcher?color=blue.svg)](https://github.com/fatonyahmadfauzi/Path-Switcher/releases)
[![License: MIT](https://img.shields.io/github/license/fatonyahmadfauzi/Path-Switcher?color=green.svg)](../../LICENSE)
[![Build Status](https://github.com/fatonyahmadfauzi/Path-Switcher/actions/workflows/main.yml/badge.svg)](https://github.com/fatonyahmadfauzi/Path-Switcher/actions)
[![Repo Size](https://img.shields.io/github/repo-size/fatonyahmadfauzi/Path-Switcher?color=yellow.svg)](https://github.com/fatonyahmadfauzi/Path-Switcher)
[![Last Commit](https://img.shields.io/github/last-commit/fatonyahmadfauzi/Path-Switcher?color=brightgreen.svg)](https://github.com/fatonyahmadfauzi/Path-Switcher/commits/main)
[![Installs](https://vsmarketplacebadges.dev/installs-short/fatonyahmadfauzi.path-switcher.svg)](https://marketplace.visualstudio.com/items?itemName=fatonyahmadfauzi.path-switcher)
[![Downloads](https://vsmarketplacebadges.dev/downloads-short/fatonyahmadfauzi.path-switcher.svg)](https://marketplace.visualstudio.com/items?itemName=fatonyahmadfauzi.path-switcher)
[![Rating](https://vsmarketplacebadges.dev/rating-short/fatonyahmadfauzi.path-switcher.svg)](https://marketplace.visualstudio.com/items?itemName=fatonyahmadfauzi.path-switcher)

> 🌐 Tersedia dalam bahasa lain: [English](../../README.md) | [Deutsch](README-DE.md) | [English](README-EN.md) | [Español](README-ES.md) | [Français](README-FR.md) | [日本語](README-JP.md) | [한국어](README-KR.md) | [Polski](README-PL.md) | [Português](README-PT.md) | [Русский](README-RU.md) | [中文](README-ZH.md)

---

Ekstensi Visual Studio Code yang membantu Anda dengan mudah berpindah semua jalur dalam file (HTML, CSS, JS, gambar, dll.) antara **jalur relatif** ↔️ **jalur absolut** hanya dengan satu pintasan keyboard.

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

## ✅ Versi VS Code yang didukung

- Versi minimum: **1.85.0**
- Diuji pada **Windows**, **macOS** and **Linux**.

---

## 🧩 Instalasi

### Dari Marketplace (Disarankan)

1. Buka **Visual Studio Code**.
2.  Go to the **Extensions** view (`Ctrl+Shift+X`).
3. Telusuri `Path Switcher`.
4. Klik **Instal**.

### Untuk Pengembangan (dari Kode Sumber)

1. Kloning repositori ini:
    ```bash
    git clone [clone https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd Path Switcher
    npm install
    ```
2. Buka folder di VS Code.
3. Tekan **F5** untuk meluncurkan **Extension Development Host**.

---

## ⌨️ Perintah & Pintasan

| Command Name                | Command ID                 | Shortcut         |
| --------------------------- | -------------------------- | ---------------- |
| Toggle Relative ↔️ Absolute | `path-switcher.togglePath` | `Ctrl + Alt + P` |

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

## 🛠️ Perkembangan

Kompilasi TypeScript:

```bash
npm run compile
```

Lint kode:

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
5. Uji di VS Code (tekan **F5** → Host Pengembangan Ekstensi).
6. Kirim Permintaan Tarik.

---

## 🐞 Bug & Masalah

Laporkan masalah di [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues).

---

## 🧾 Catatan Perubahan

Lihat semua perubahan penting untuk setiap versi di file [log perubahan](CHANGELOG-ID.md).

> 📦 Anda juga dapat melihat catatan rilis langsung di [GitHub Releases page](https://github.com/fatonyahmadfauzi/Path-Switcher/releases).

---

## 🧾 Lisensi

MIT License © [Fatony Ahmad Fauzi](../../LICENSE)