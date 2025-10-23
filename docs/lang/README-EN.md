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

> 🌐 Available in other languages: [English](../../README.md) | [Deutsch](README-DE.md) | [Español](README-ES.md) | [Français](README-FR.md) | [Bahasa Indonesia](README-ID.md) | [日本語](README-JP.md) | [한국어](README-KR.md) | [Polski](README-PL.md) | [Português](README-PT.md) | [Русский](README-RU.md) | [中文](README-ZH.md)

---

A Visual Studio Code extension that helps you easily switch all paths in a file (HTML, CSS, JS, images, etc.) between **relative paths** ↔️ **absolute paths** with just one keyboard shortcut.

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
- Tested on **Windows**, **macOS** and **Linux**.

---

## 🧩 Installation

### From Marketplace (Recommended)

1.  Open **Visual Studio Code**.
2.  Go to the **Extensions** view (`Ctrl+Shift+X`).
3.  Search for `Path Switcher`.
4.  Click **Install**.

### For Development (from Source Code)

1.  Clone this repository:
    ```bash
    git clone [clone https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd Path Switcher
    npm install
    ```
2.  Open the folder in VS Code.
3.  Press **F5** to launch the **Extension Development Host**.

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

Compile TypeScript:

```bash
npm run compile
```

Lint code:

```bash
npm run lint
```

Run tests:

```bash
npm test
```

---

## 🧑‍💻 Contributing

1. Fork the repository.
2. Run `npm install` to install dependencies.
3. Make your changes.
4. Compile TypeScript: `npm run compile`.
5. Test in VS Code (press **F5** → Extension Development Host).
6. Submit a Pull Request.

---

## 🐞 Bugs & Issues

Report issues on the [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues).

---

## 🧾 Changelog

See all notable changes for each version in the [Changelog](CHANGELOG-EN.md) file.

> 📦 You can also view release notes directly on the [GitHub Releases page](https://github.com/fatonyahmadfauzi/Path-Switcher/releases).

---

## 🧾 License

MIT License © [Fatony Ahmad Fauzi](../../LICENSE)