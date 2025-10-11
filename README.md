# 🪄 Path Switcher

> 🌐 Available in other languages: [Bahasa Indonesia](docs/lang/README-ID.md) | [Français](docs/lang/README-FR.md) | [Deutsch](docs/lang/README-DE.md) | [日本語](docs/lang/README-JP.md) | [中文](docs/lang/README-ZH.md) | [Español](docs/lang/README-ES.md) | [Polski](docs/lang/README-PL.md) | [Русский](docs/lang/README-RU.md) | [Português](docs/lang/README-PT.md) | [한국어](docs/lang/README-KO.md)

**Path Switcher** is a Visual Studio Code extension that helps you easily switch all paths in a file (HTML, CSS, JS, images, etc.) between **relative paths** ↔️ **absolute paths** with just one keyboard shortcut.

---

## ✨ Features

- 🔁 **Automatically toggles** between relative and absolute paths
- 💡 Supports paths in:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` inside CSS
- ⚡ Can be triggered via keyboard shortcut
- 🧭 Changes all paths in a file at once (not just one line)

---

## ✅ Supported VS Code Version

- Visual Studio Code v1.85.0 or newer

---

## 🧩 Installation

1. Download or clone this repository:
   ```bash
   git clone [https://github.com/kianoland/path-switcher](https://github.com/kianoland/path-switcher)
   cd path-switcher
   npm install
   ```
2. Run in development mode:  
   Open the folder in VS Code  
   Press **F5** → this will open a new **Extension Development Host** window

---

## ⌨️ Shortcuts & Commands

Use the following commands and shortcuts to run the extension:

| Function                    | Command ID                 | Shortcut         |
| :-------------------------- | :------------------------- | :--------------- |
| Toggle Relative ↔️ Absolute | `path-switcher.togglePath` | `Ctrl + Alt + P` |
| Convert All to Absolute     | `path-switcher.toAbsolute` | -                |
| Convert All to Relative     | `path-switcher.toRelative` | -                |

---

## 🧠 Example

See how **Path Switcher** instantly changes your file paths.

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

## 🛠️ Local Development

Compile TypeScript:

```bash
npm run compile
```

Lint the code:

```bash
npm run lint
```

Run tests:

```bash
npm test
```

---

## 🧾 License

MIT © [Fatony Ahmad Fauzi](https://www.fatonyahmadfauzi.me/)
