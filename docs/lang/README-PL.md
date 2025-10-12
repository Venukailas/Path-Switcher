# 🪄 Path Switcher

> 🌐 Dostępne w innych językach: [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Français](README-FR.md) | [Deutsch](README-DE.md) | [日本語](README-JP.md)| [中文](README-ZH.md) | [Español](README-ES.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [한국어](README-KO.md)

**Path Switcher** to rozszerzenie do Visual Studio Code, które pomaga łatwo przełączać wszystkie ścieżki w pliku (HTML, CSS, JS, obrazy itp.) między **ścieżkami względnymi** ↔️ **ścieżkami bezwzględnymi** za pomocą jednego skrótu klawiaturowego.

---

## ✨ Funkcje

- 🔁 **Automatycznie przełącza** między ścieżkami względnymi i bezwzględnymi
- 💡 Obsługuje ścieżki w:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` wewnątrz CSS
- ⚡ Może być wyzwalane za pomocą skrótu klawiaturowego
- 🧭 Zmienia wszystkie ścieżki w pliku naraz (nie tylko jedną linię)

---

## ✅ Obsługiwana wersja VS Code

- Visual Studio Code v1.85.0 lub nowszy

---

## 🧩 Instalacja

1.  Pobierz lub sklonuj to repozytorium:
    ```bash
    git clone [https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd path-switcher
    npm install
    ```
2.  Uruchom w trybie deweloperskim:
    Otwórz folder w VS Code
    Naciśnij **F5** → otworzy to nowe okno **Hosta programistycznego rozszerzenia**

---

## ⌨️ Skróty i polecenia

Użyj następujących poleceń i skrótów, aby uruchomić rozszerzenie:

| Funkcja                          | Identyfikator polecenia    | Skrót            |
| :------------------------------- | :------------------------- | :--------------- |
| Przełącz względny ↔️ bezwzględny | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 Przykład

Zobacz, jak **Path Switcher** natychmiast zmienia ścieżki plików.

**Przed:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**Po (bezwzględny):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**Po (względny):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🛠️ Rozwój lokalny

Skompiluj TypeScript:

```bash
npm run compile
```

Sprawdź kod:

```bash
npm run lint
```

Uruchom testy:

```bash
npm test
```

---

## 🧾 Licencja

MIT © [Fatony Ahmad Fauzi](../../LICENSE)
