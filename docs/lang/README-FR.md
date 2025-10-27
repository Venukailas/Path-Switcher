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

> 🌐 Disponible dans d'autres langues : [English](../../README.md) | [Polski](README-PL.md) | [中文](README-ZH.md) | [日本語](README-JP.md) | [Deutsch](README-DE.md) | [Español](README-ES.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [Bahasa Indonesia](README-ID.md) | [한국어](README-KR.md)

---

Une extension Visual Studio Code qui vous aide à basculer facilement tous les chemins d'un fichier (HTML, CSS, JS, images, etc.) entre les **chemins relatifs** ↔️ **chemins absolus** avec un seul raccourci clavier.

---

## ✨ Caractéristiques

- 🔁 Bascule automatiquement entre les chemins relatifs et absolus.
- 💡 Prend en charge les chemins dans:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` à l'intérieur de CSS
- ⚡ Déclenché via un raccourci clavier.
- 🧭 Modifie tous les chemins d'un fichier à la fois.

---

## ✅Versions VS Code prises en charge

- Version minimale: **1.85.0**
- Testé sur **Windows**, **macOS** and **Linux**.

---

## 🧩Installation

### Depuis Marketplace (recommandé)

1. Ouvrez **Visual Studio Code**.
2.  Go to the **Extensions** view (`Ctrl+Shift+X`).
3. Recherchez `Path Switcher`.
4. Cliquez sur **Installer**.

### Pour le développement (à partir du code source)

1. Clonez ce référentiel:
    ```bash
    git clone [clone https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd Path Switcher
    npm install
    ```
2. Ouvrez le dossier dans VS Code.
3. Appuyez sur **F5** pour lancer **Extension Development Host**.

---

## ⌨️ Commandes et raccourcis

| Nom de la commande | ID de commande | Raccourci |
| --- | --- | --- |
| Basculer Relatif ↔️ Absolu | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 Exemple

**Avant:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**Après (absolu):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**Après (relatif):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🛠️ Développement

Compilez TypeScript:

```bash
npm run compile
```

Code Lint:

```bash
npm run lint
```

Exécutez des tests:

```bash
npm test
```

---

## 🧑‍💻 Contribuer

1. Forkez le référentiel.
2. Exécutez `npm install` pour installer les dépendances.
3. Effectuez vos modifications.
4. Compilez TypeScript: `npm run compile`.
5. Testez dans VS Code (appuyez sur **F5** → Extension Development Host).
6. Soumettez une demande de tirage.

---

## 🐞 Bogues et problèmes

Signalez les problèmes sur le [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues).

---

## 🧾 Journal des modifications

Consultez tous les changements notables pour chaque version dans le fichier [Journal des modifications](CHANGELOG-FR.md).

> 📦 Vous pouvez également consulter les notes de version directement sur le [GitHub Releases page](https://github.com/fatonyahmadfauzi/Path-Switcher/releases).

---

## 🧾 Licence

MIT License © [Fatony Ahmad Fauzi](../../LICENSE)