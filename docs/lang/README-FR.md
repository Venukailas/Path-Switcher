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

> 🌐 Disponible dans d'autres langues : [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Deutsch](README-DE.md) | [日本語](README-JP.md) | [中文](README-ZH.md) | [Español](README-ES.md) | [Polski](README-PL.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [한국어](README-KO.md)

---
Une extension Visual Studio Code qui vous aide à basculer facilement tous les chemins d'un fichier (HTML, CSS, JS, images, etc.) entre les **chemins relatifs** ↔️ **chemins absolus** avec un seul raccourci clavier.

---

## ✨ Caractéristiques

- 🔁 Bascule automatiquement entre les chemins relatifs et absolus.
- 💡 Prend en charge les chemins dans :
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` dans CSS
- ⚡ Déclenché via un raccourci clavier.
- 🧭 Modifie tous les chemins d'un fichier à la fois.

---

## ✅ Versions de code VS prises en charge

-Version minimale : **1.85.0**
- Testé sur **Windows**, **macOS** et **Linux**.

---

## 🧩Installation

1. Clonez ou téléchargez ce référentiel :
   ```bash
   git clone https://github.com/fatonyahmadfauzi/Path-Switcher.git
   cd Path-Switcher
   npm install
   ```
2. Ouvrez le dossier dans VS Code.
3. Appuyez sur **F5** → cela lancera une nouvelle fenêtre **Extension Development Host**.

---

## ⌨️ Commandes et raccourcis

| Nom de la commande | ID de commande | Raccourci |
| -------------------------------- | -------------------------- | ---------------- |
| Basculer Relatif ↔️ Absolu | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 Exemple

**Avant:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**Après (absolu) :**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**Après (relatif) :**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🧑‍💻 Contribuer

1. Forkez le référentiel.
2. Exécutez `npm install` pour installer les dépendances.
3. Effectuez vos modifications.
4. Compilez TypeScript : `npm run compile`.
5. Testez dans VS Code (appuyez sur **F5** → Extension Development Host).
6. Soumettez une demande de tirage.

---

## 🛠️ Développement

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

## 🧑‍💻 Contribuer

1. Forkez le référentiel.
2. Exécutez `npm install` pour installer les dépendances.
3. Effectuez vos modifications.
4. Compilez TypeScript : `npm run compile`.
5. Testez dans VS Code (appuyez sur **F5** → Extension Development Host).
6. Soumettez une demande de tirage.

---

## 🐞 Bogues et problèmes

Signalez les problèmes sur [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues).

---

## 🧾 Licence

Licence MIT © [Fatony Ahmad Fauzi](../../LICENSE)