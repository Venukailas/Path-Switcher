# 🪄 Path Switcher

> 🌐 다른 언어로 보기: [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Français](README-FR.md) | [Deutsch](README-DE.md) | [日本語](README-JP.md)| [中文](README-ZH.md) | [Español](README-ES.md) | [Polski](README-PL.md) | [Русский](README-RU.md) | [Português](README-PT.md)

**Path Switcher**는 Visual Studio Code 확장 프로그램으로, 키보드 단축키 하나로 파일(HTML, CSS, JS, 이미지 등)의 모든 경로를 **상대 경로** ↔️ **절대 경로**로 쉽게 전환할 수 있도록 도와줍니다.

---

## ✨ 기능

- 🔁 상대 경로와 절대 경로 간 **자동 전환**
- 💡 다음 경로 지원:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - CSS 내의 `url("...")`
- ⚡ 키보드 단축키로 실행 가능
- 🧭 파일의 모든 경로를 한 번에 변경 (한 줄만이 아님)

---

## ✅ 지원되는 VS Code 버전

- Visual Studio Code v1.85.0 이상

---

## 🧩 설치

1.  이 저장소를 다운로드하거나 복제합니다:
    ```bash
    git clone [https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd path-switcher
    npm install
    ```
2.  개발 모드에서 실행:
    VS Code에서 폴더를 엽니다.
    **F5**를 누르면 새 **확장 개발 호스트** 창이 열립니다.

---

## ⌨️ 단축키 및 명령어

다음 명령어와 단축키를 사용하여 확장을 실행합니다:

| 기능                   | 명령어 ID                  | 단축키           |
| :--------------------- | :------------------------- | :--------------- |
| 상대 ↔️ 절대 경로 전환 | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 예시

**Path Switcher**가 파일 경로를 즉시 변경하는 방법을 확인하세요.

**변경 전:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**변경 후 (절대 경로):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**변경 후 (상대 경로):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🛠️ 로컬 개발

TypeScript 컴파일:

```bash
npm run compile
```

코드 린트:

```bash
npm run lint
```

테스트 실행:

```bash
npm test
```

---

## 🧾 라이선스

MIT © [Fatony Ahmad Fauzi](../../LICENSE)
