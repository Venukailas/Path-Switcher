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

> 🌐 다른 언어로도 사용 가능: [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Français](README-FR.md) | [Deutsch](README-DE.md) | [日本語](README-JP.md) | [中文](README-ZH.md) | [Español](README-ES.md) | [Polski](README-PL.md) | [Русский](README-RU.md) | [Português](README-PT.md)

---

단 하나의 키보드 단축키를 사용하여 **relative paths** ←️ **absolute paths** 사이에서 파일(HTML, CSS, JS, 이미지 등)의 모든 경로를 쉽게 전환하는 데 도움이 되는 Visual Studio Code 확장입니다.

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

1. **Visual Studio Code**을 엽니다.
2. **Extensions** 보기(`Ctrl+Shift+X`)로 이동합니다.
3. `Path Switcher`을(를) 검색하세요.
4. **Install**을 클릭하세요.

### For Development (from Source Code)

1. 이 저장소를 복제합니다.
    ```bash
    git clone [clone https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd Path Switcher
    npm install
    ```
2. VS Code에서 폴더를 엽니다.
3. **F5**을 눌러 **Extension Development Host**을 실행하세요.

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

TypeScript 컴파일:

```bash
npm run compile
```

린트 코드:

```bash
npm run lint
```

테스트 실행:

```bash
npm test
```

---

## 🧑‍💻 Contributing

1. 저장소를 포크하십시오.
2. `npm install`을 실행하여 종속성을 설치합니다.
3. 변경합니다.
4. TypeScript를 컴파일합니다: `npm run compile`.
5. VS Code에서 테스트합니다(**F5** → 확장 개발 호스트 누르기).
6. 풀 요청(Pull Request)을 제출하세요.

---

## 🐞 Bugs & Issues

[GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues)에 대한 문제를 보고하세요.

---

## 🧾 License

MIT 라이센스 © [Fatony Ahmad Fauzi](../../LICENSE)
