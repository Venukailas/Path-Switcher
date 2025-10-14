<!-- ⚙️ AUTO-GENERATED FILE — DO NOT EDIT MANUALLY -->
<!-- This README-marketplace.md is generated from README.md -->

# 🪄 Path Switcher

<!-- 🧩 VSCode Marketplace fallback (PNG badges, no SVGs) -->

<!-- 🌍 GitHub-friendly (SVG badges) -->

![VS Code](https://raster.shields.io/badge/VS%20Code-1.85.0+-blue.png)
![Version](https://raster.shields.io/github/v/release/fatonyahmadfauzi/Path-Switcher?color=blue.png)
![License](https://raster.shields.io/github/license/fatonyahmadfauzi/Path-Switcher?color=green.png)
![Build](https://raster.shields.io/github/actions/workflow/status/fatonyahmadfauzi/Path-Switcher/main.yml?branch=master.png)
![Repo Size](https://raster.shields.io/github/repo-size/fatonyahmadfauzi/Path-Switcher?color=yellow.png)
![Last Commit](https://raster.shields.io/github/last-commit/fatonyahmadfauzi/Path-Switcher?color=brightgreen.png)
![Installs](https://raster.shields.io/badge/Installs-1000+-orange.png)
![Downloads](https://raster.shields.io/badge/Downloads-1000+-orange.png)
![Rating](https://raster.shields.io/badge/Rating-★★★★★-yellow.png)

> 🌐 Available in other languages: [Bahasa Indonesia](docs/lang/README-ID.md) | [Français](docs/lang/README-FR.md) | [Deutsch](docs/lang/README-DE.md) | [日本語](docs/lang/README-JP.md) | [中文](docs/lang/README-ZH.md) | [Español](docs/lang/README-ES.md) | [Polski](docs/lang/README-PL.md) | [Русский](docs/lang/README-RU.md) | [Português](docs/lang/README-PT.md) | [한국어](docs/lang/README-KO.md)

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
- Tested on **Windows**, **macOS**, and **Linux**.

---

## 🧩 Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/fatonyahmadfauzi/Path-Switcher.git
   cd Path-Switcher
   npm install
   ```
2. Open the folder in VS Code.
3. Press **F5** → it will launch a new **Extension Development Host** window.

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

## 🧑‍💻 Contributing

1. Fork the repository.
2. Run `npm install` to install dependencies.
3. Make your changes.
4. Compile TypeScript: `npm run compile`.
5. Test in VS Code (press **F5** → Extension Development Host).
6. Submit a Pull Request.

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

## 🧾 License

MIT License © [Fatony Ahmad Fauzi](LICENSE)
