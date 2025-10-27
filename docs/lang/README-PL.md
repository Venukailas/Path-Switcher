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

> 🌐 Dostępne w innych językach: [English](../../README.md) | [中文](README-ZH.md) | [日本語](README-JP.md) | [Deutsch](README-DE.md) | [Français](README-FR.md) | [Español](README-ES.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [Bahasa Indonesia](README-ID.md) | [한국어](README-KR.md)

---

Rozszerzenie Visual Studio Code, które pomaga łatwo przełączać wszystkie ścieżki w pliku (HTML, CSS, JS, obrazy itp.) pomiędzy **ścieżkami względnymi** ↔️ **ścieżkami bezwzględnymi** za pomocą tylko jednego skrótu klawiaturowego.

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

## ✅ Obsługiwane wersje VS Code

- Minimalna wersja: **1.85.0**
- Testowano na **Windows**, **macOS** i **Linux**.

---

## 🧩 Instalacja

### Z Marketplace (zalecane)

1. Otwórz **Visual Studio Code**.
2.  Go to the **Extensions** view (`Ctrl+Shift+X`).
3. Wyszukaj `Path Switcher`.
4. Kliknij **Zainstaluj**.

### Dla rozwoju (z kodu źródłowego)

1. Sklonuj to repozytorium:
    ```bash
    git clone [clone https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd Path Switcher
    npm install
    ```
2. Otwórz folder w VS Code.
3. Naciśnij **F5**, aby uruchomić **Host rozwoju rozszerzeń**.

---

## ⌨️ Polecenia i skróty

| Nazwa polecenia | Identyfikator polecenia | Skrót |
| --- | --- | --- |
| Przełącz względny ↔️ Absolutny | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 Przykład

**Zanim:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**Po (absolutnie):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**Po (względnym):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🛠️Rozwój

Skompiluj TypeScript:

```bash
npm run compile
```

Lint kod:

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
5. Przetestuj w VS Code (naciśnij **F5** → Host rozwoju rozszerzenia).
6. Prześlij żądanie ściągnięcia.

---

## 🐞 Błędy i problemy

Zgłoś problemy na [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues).

---

## 🧾 Dziennik zmian

Zobacz wszystkie istotne zmiany dla każdej wersji w pliku [Dziennik zmian](CHANGELOG-PL.md).

> 📦 Informacje o wersji możesz także przeglądać bezpośrednio na [GitHub Releases page](https://github.com/fatonyahmadfauzi/Path-Switcher/releases).

---

## 🧾 Licencja

MIT License © [Fatony Ahmad Fauzi](../../LICENSE)