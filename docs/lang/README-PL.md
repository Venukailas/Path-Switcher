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

> 🌐 Dostępne w innych językach: [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Français](README-FR.md) | [Deutsch](README-DE.md) | [日本語](README-JP.md) | [中文](README-ZH.md) | [Español](README-ES.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [한국어](README-KO.md)

---

Rozszerzenie Visual Studio Code, które pomaga łatwo przełączać wszystkie ścieżki w pliku (HTML, CSS, JS, obrazy itp.) pomiędzy **relative paths** ↔️ **absolute paths** za pomocą tylko jednego skrótu klawiaturowego.

---

## ✨ Funkcje

- 🔁 Automatycznie przełącza między ścieżkami względnymi i bezwzględnymi.
- 💡 Obsługuje ścieżki w:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` wewnątrz CSS
- ⚡ Wywoływane za pomocą skrótu klawiaturowego.
- 🧭 Zmienia wszystkie ścieżki w pliku jednocześnie.

---

## ✅ Obsługiwane wersje kodu VS

- Minimalna wersja: **1.85.0**
- Testowano na **Windows**, **macOS** i **Linux**.

---

## 🧩 Instalacja

1. Sklonuj lub pobierz to repozytorium:
   ```bash
   git clone https://github.com/fatonyahmadfauzi/Path-Switcher.git
   cd Path-Switcher
   npm install
   ```
2. Otwórz folder w VS Code.
3. Naciśnij **F5** → uruchomi się nowe okno **Extension Development Host**.

---

## ⌨️ Polecenia i skróty

| Nazwa polecenia | Identyfikator polecenia | Skrót |
| --------------------------- | -------------------------- | ---------------- |
| Przełącz względny ↔️ Absolutny | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 Przykład

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

## 🧑‍💻 Współtworzenie

1. Forkuj repozytorium.
2. Uruchom `npm install`, aby zainstalować zależności.
3. Wprowadź zmiany.
4. Skompiluj TypeScript: `npm run compile`.
5. Przetestuj w kodzie VS (naciśnij **F5** → Host rozwoju rozszerzenia).
6. Prześlij żądanie ściągnięcia.

---

## 🛠️Rozwój

Skompiluj TypeScript:

```bash
npm run compile
```

Kod Linta:

```bash
npm run lint
```

Uruchom testy:

```bash
npm test
```

---

## 🧑‍💻 Współtworzenie

1. Forkuj repozytorium.
2. Uruchom `npm install`, aby zainstalować zależności.
3. Wprowadź zmiany.
4. Skompiluj TypeScript: `npm run compile`.
5. Przetestuj w kodzie VS (naciśnij **F5** → Host rozwoju rozszerzenia).
6. Prześlij żądanie ściągnięcia.

---

## 🐞 Błędy i problemy

Zgłoś problemy na stronie [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues).

---

## 🧾 Licencja

Licencja MIT © [Fatony Ahmad Fauzi](../../LICENSE)
