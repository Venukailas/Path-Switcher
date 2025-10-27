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

> 🌐 In anderen Sprachen verfügbar: [English](../../README.md) | [Polski](README-PL.md) | [中文](README-ZH.md) | [日本語](README-JP.md) | [Français](README-FR.md) | [Español](README-ES.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [Bahasa Indonesia](README-ID.md) | [한국어](README-KR.md)

---

Eine Visual Studio Code-Erweiterung, die Ihnen hilft, alle Pfade in einer Datei (HTML, CSS, JS, Bilder usw.) mit nur einer Tastenkombination einfach zwischen **relativen Pfaden** ↔️ **absoluten Pfaden** umzuschalten.

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

## ✅ Unterstützte VS Code-Versionen

- Mindestversion: **1.85.0**
- Getestet unter **Windows**, **macOS** and **Linux**.

---

## 🧩 Installation

### Vom Marktplatz (empfohlen)

1. Öffnen Sie **Visual Studio Code**.
2.  Go to the **Extensions** view (`Ctrl+Shift+X`).
3. Suchen Sie nach `Path Switcher`.
4. Klicken Sie auf **Installieren**.

### Für die Entwicklung (aus Quellcode)

1. Klonen Sie dieses Repository:
    ```bash
    git clone [clone https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd Path Switcher
    npm install
    ```
2. Öffnen Sie den Ordner in VS Code.
3. Drücken Sie **F5**, um den **Extension Development Host** zu starten.

---

## ⌨️ Befehle und Verknüpfungen

| Befehlsname | Befehls-ID | Abkürzung |
| --- | --- | --- |
| Relativ ↔️ Absolut umschalten | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 Beispiel

**Vor:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**Nach (absolut):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**Nachher (relativ):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🛠️ Entwicklung

Kompilieren Sie TypeScript:

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

Melden Sie Probleme mit dem [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues).

---

## 🧾 Änderungsprotokoll

Sehen Sie sich alle wichtigen Änderungen für jede Version in der Datei [Änderungsprotokoll](CHANGELOG-DE.md) an.

> 📦 Sie können Versionshinweise auch direkt auf [GitHub Releases page](https://github.com/fatonyahmadfauzi/Path-Switcher/releases) ansehen.

---

## 🧾 Lizenz

MIT License © [Fatony Ahmad Fauzi](../../LICENSE)