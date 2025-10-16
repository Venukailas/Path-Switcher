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

> 🌐 他の言語でも利用可能: [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Français](README-FR.md) | [Deutsch](README-DE.md) | [中文](README-ZH.md) | [Español](README-ES.md) | [Polski](README-PL.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [한국어](README-KO.md)

---

ファイル内のすべてのパス (HTML、CSS、JS、画像など) を **relative paths** ↔️ **absolute paths** の間で 1 つのキーボード ショートカットだけで簡単に切り替えることができる Visual Studio Code 拡張機能。

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

1. **Visual Studio Code** を開きます。
2. **Extensions** ビュー (`Ctrl+Shift+X`) に移動します。
3. `Path Switcher` を検索します。
4. 「**Install**」をクリックします。

### For Development (from Source Code)

1. このリポジトリのクローンを作成します。
    ```bash
    git clone [clone https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd Path Switcher
    npm install
    ```
2. VS Code でフォルダーを開きます。
3. **F5** を押して **Extension Development Host** を起動します。

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

TypeScript をコンパイルします。

```bash
npm run compile
```

lint コード:

```bash
npm run lint
```

テストを実行します。

```bash
npm test
```

---

## 🧑‍💻 Contributing

1. リポジトリをフォークします。
2. `npm install` を実行して依存関係をインストールします。
3. 変更を加えます。
4. TypeScript をコンパイルします: `npm run compile`。
5. VS Code でテストします (**F5** → 拡張機能開発ホストを押します)。
6. プルリクエストを送信します。

---

## 🐞 Bugs & Issues

[GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues) に関する問題を報告してください。

---

## 🧾 License

MIT ライセンス © [Fatony Ahmad Fauzi](../../LICENSE)
