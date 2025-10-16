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

> 🌐 Disponible dans d'autres langues : [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Deutsch](README-DE.md) | [日本語](README-JP.md) | [中文](README-ZH.md) | [Español](README-ES.md) | [Polski](README-PL.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [한국어](README-KO.md)

---

Une extension Visual Studio Code qui vous aide à basculer facilement tous les chemins d'un fichier (HTML, CSS, JS, images, etc.) entre **relative paths** ↔️ **absolute paths** avec un seul raccourci clavier.

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

1. Ouvrez **Visual Studio Code**.
2. Accédez à la vue **Extensions** (`Ctrl+Shift+X`).
3. Recherchez `Path Switcher`.
4. Cliquez sur **Install**.

### For Development (from Source Code)

1. Clonez ce référentiel :
    ```bash
    git clone [clone https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd Path Switcher
    npm install
    ```
2. Ouvrez le dossier dans VS Code.
3. Appuyez sur **F5** pour lancer le **Extension Development Host**.

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

Compiler TypeScript :

```bash
npm run compile
```

Code charpie :

```bash
npm run lint
```

Exécutez des tests :

```bash
npm test
```

---

## 🧑‍💻 Contributing

1. Forkez le référentiel.
2. Exécutez `npm install` pour installer les dépendances.
3. Effectuez vos modifications.
4. Compilez TypeScript : `npm run compile`.
5. Testez dans VS Code (appuyez sur **F5** → Extension Development Host).
6. Soumettez une demande de tirage.

---

## 🐞 Bugs & Issues

Signalez les problèmes sur le [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues).

---

## 🧾 License

Licence MIT © [Fatony Ahmad Fauzi](../../LICENSE)
