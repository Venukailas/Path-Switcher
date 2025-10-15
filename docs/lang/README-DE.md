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

> 🌐 In anderen Sprachen verfügbar: [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Français](README-FR.md) | [日本語](README-JP.md) | [中文](README-ZH.md) | [Español](README-ES.md) | [Polski](README-PL.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [한국어](README-KO.md)

---

Eine Visual Studio Code-Erweiterung, mit der Sie ganz einfach alle Pfade in einer Datei (HTML, CSS, JS, Bilder usw.) zwischen **relative paths** ↔️ **absolute paths** mit nur einer Tastenkombination wechseln können.

---

## ✨ Funktionen

- 🔁 Schaltet automatisch zwischen relativen und absoluten Pfaden um.
- 💡 Unterstützt Pfade in:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` innerhalb von CSS
- ⚡ Ausgelöst per Tastenkombination.
- 🧭 Ändert alle Pfade in einer Datei auf einmal.

---

## ✅ Unterstützte VS-Codeversionen

- Mindestversion: **1.85.0**
- Getestet auf **Windows**, **macOS** und **Linux**.

---

## 🧩 Installation

1. Klonen Sie dieses Repository oder laden Sie es herunter:
   ```bash
   git clone https://github.com/fatonyahmadfauzi/Path-Switcher.git
   cd Path-Switcher
   npm install
   ```
2. Öffnen Sie den Ordner in VS Code.
3. Drücken Sie **F5** → es öffnet sich ein neues **Extension Development Host**-Fenster.

---

## ⌨️ Befehle und Verknüpfungen

| Befehlsname | Befehls-ID | Verknüpfung |
| --------------------------- | -------------------------- | ---------------- |
| Relativ ↔️ Absolut umschalten | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 Beispiel

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

## 🧑‍💻 Mitwirken

1. Forken Sie das Repository.
2. Führen Sie `npm install` aus, um Abhängigkeiten zu installieren.
3. Nehmen Sie Ihre Änderungen vor.
4. Kompilieren Sie TypeScript: `npm run compile`.
5. Testen Sie in VS Code (drücken Sie **F5** → Extension Development Host).
6. Senden Sie eine Pull-Anfrage.

---

## 🛠️ Entwicklung

TypeScript kompilieren:

```bash
npm run compile
```

Lint-Code:

```bash
npm run lint
```

Führen Sie Tests durch:

```bash
npm test
```

---

## 🧑‍💻 Mitwirken

1. Forken Sie das Repository.
2. Führen Sie `npm install` aus, um Abhängigkeiten zu installieren.
3. Nehmen Sie Ihre Änderungen vor.
4. Kompilieren Sie TypeScript: `npm run compile`.
5. Testen Sie in VS Code (drücken Sie **F5** → Extension Development Host).
6. Senden Sie eine Pull-Anfrage.

---

## 🐞 Fehler und Probleme

Melden Sie Probleme auf dem [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues).

---

## 🧾 Lizenz

MIT-Lizenz © [Fatony Ahmad Fauzi](../../LICENSE)
