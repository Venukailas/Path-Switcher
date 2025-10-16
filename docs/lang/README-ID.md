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

> 🌐 Tersedia dalam bahasa lain: [English](../../README.md) | [Français](README-FR.md) | [Deutsch](README-DE.md) | [日本語](README-JP.md) | [中文](README-ZH.md) | [Español](README-ES.md) | [Polski](README-PL.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [한국어](README-KO.md)

---

Ekstensi Visual Studio Code yang membantu Anda dengan mudah berpindah semua jalur dalam file (HTML, CSS, JS, gambar, dll.) antara **relative paths** ↔️ **absolute paths** hanya dengan satu pintasan keyboard.

---

## ✨ Features

- 🔁 Automatically toggles between relative and absolute paths.
- 💡 Supports paths in:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` inside CSS
- ⚡ Triggered via keyboard shortcut.
- 🧭 Changes all paths in a file at once.

---

## ✅ Supported VS Code Versions

- Minimum version: **1.85.0**
- Tested on **Windows**, **macOS**, and **Linux**.

---

## 🧩 Installation

### From Marketplace (Recommended)

1. Buka **Visual Studio Code**.
2. Masuk ke tampilan **Extensions** (`Ctrl+Shift+X`).
3. Cari `Path Switcher`.
4. Klik **Install**.

### For Development (from Source Code)

1. Kloning repositori ini:
    ```bash
    git clone [clone https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd Path Switcher
    npm install
    ```
2. Buka folder di VS Code.
3. Tekan **F5** untuk meluncurkan **Extension Development Host**.

---

## ⌨️ Commands & Shortcuts

| Command Name                | Command ID                 | Shortcut         |
| --------------------------- | -------------------------- | ---------------- |
| Toggle Relative ↔️ Absolute | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 Example

**Before:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**After (Absolute):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**After (Relative):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🛠️ Development

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

## 🧑‍💻 Contributing

1. Cabangkan repositori.
2. Jalankan `npm install` untuk menginstal dependensi.
3. Lakukan perubahan Anda.
4. Kompilasi TypeScript: `npm run compile`.
5. Uji di VS Code (tekan **F5** → Extension Development Host).
6. Kirim Permintaan Tarik.

---

## 🐞 Bugs & Issues

Laporkan masalah di [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues).

---

## 🧾 License

Lisensi MIT © [Fatony Ahmad Fauzi](../../LICENSE)
