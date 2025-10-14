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

단 하나의 키보드 단축키를 사용하여 **상대 경로** ←️ **절대 경로** 간에 파일(HTML, CSS, JS, 이미지 등)의 모든 경로를 쉽게 전환하는 데 도움이 되는 Visual Studio Code 확장입니다.

---

## ✨ 특징

- 🔁 상대 경로와 절대 경로 사이를 자동으로 전환합니다.
- 💡 다음 경로를 지원합니다:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - CSS 내부의 `url("...")`
- ⚡ 키보드 단축키를 통해 실행됩니다.
- 🧭 파일의 모든 경로를 한 번에 변경합니다.

---

## ✅ 지원되는 VS 코드 버전

- 최소 버전: **1.85.0**
- **Windows**, **macOS** 및 **Linux**에서 테스트되었습니다.

---

## 🧩 설치

1. 다음 저장소를 복제하거나 다운로드합니다.
   ```bash
   git clone https://github.com/fatonyahmadfauzi/Path-Switcher.git
   cd Path-Switcher
   npm install
   ```
2. VS Code에서 폴더를 엽니다.
3. **F5**를 누르면 → 새로운 **확장 개발 호스트** 창이 열립니다.

---

## ⌨️ 명령 및 단축키

| 명령 이름        | 명령 ID                    | 바로가기         |
| ---------------- | -------------------------- | ---------------- |
| 상대 ← 절대 전환 | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 예

**전에:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**이후(절대):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**이후(상대):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🧑‍💻 기여

1. 저장소를 포크하십시오.
2. `npm install`을 실행하여 종속성을 설치합니다.
3. 변경합니다.
4. TypeScript를 컴파일합니다: `npm run compile`.
5. VS Code에서 테스트합니다(**F5** → 확장 개발 호스트 누르기).
6. 풀 요청(Pull Request)을 제출하세요.

---

## 🛠️ 개발

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

## 🧑‍💻 기여

1. 저장소를 포크하십시오.
2. `npm install`을 실행하여 종속성을 설치합니다.
3. 변경합니다.
4. TypeScript를 컴파일합니다: `npm run compile`.
5. VS Code에서 테스트합니다(**F5** → 확장 개발 호스트 누르기).
6. 풀 요청(Pull Request)을 제출하세요.

---

## 🐞 버그 및 문제

[GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues)에서 문제를 신고하세요.

---

## 🧾 라이센스

MIT 라이센스 © [Fatony Ahmad Fauzi](../../LICENSE)
