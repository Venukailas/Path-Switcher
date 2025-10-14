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
ファイル内のすべてのパス (HTML、CSS、JS、画像など) を、**相対パス** ↔️ **絶対パス** の間で 1 つのキーボード ショートカットだけで簡単に切り替えることができる Visual Studio Code 拡張機能。
- --

## ✨ 特徴
- 🔁 相対パスと絶対パスを自動的に切り替えます。
- 💡 以下のパスをサポートします:
- `<script src="...">`
- `<link href="...">`
- `<img src="...">`
- CSS 内の `url("...")`
- ⚡ キーボード ショートカットによってトリガーされます。
- 🧭 ファイル内のすべてのパスを一度に変更します。
- --

## ✅ サポートされている VS コードのバージョン
- 最小バージョン: **1.85.0**
- **Windows**、**macOS**、**Linux** でテスト済み。
- --

## 🧩 インストール

1. このリポジトリを複製またはダウンロードします。
   ```bash
   git clone https://github.com/fatonyahmadfauzi/Path-Switcher.git
   cd Path-Switcher
   npm install
   ```
2. VS Code でフォルダーを開きます。
3. **F5** を押すと、新しい **Extension Development Host** ウィンドウが起動します。
- --

## ⌨️ コマンドとショートカット

|コマンド名 |コマンドID |ショートカット |
| ------------------------- | ------------------------ | ---------------- |
|相対 ↔️ 絶対を切り替え | `path-switcher.togglePath` | `Ctrl + Alt + P` |
- --

## 🧠 例
- *前に：**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```
- *後 (絶対):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```
- *後 (相対):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```
- --

## 🧑‍💻 貢献しています

1. リポジトリをフォークします。
2. `npm install` を実行して依存関係をインストールします。
3. 変更を加えます。
4. TypeScript をコンパイルします: `npm run compile`。
5. VS Code でテストします (**F5** を押して → 拡張機能開発ホスト)。
6. プルリクエストを送信します。
- --

## 🛠️ 開発

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
- --

## 🧑‍💻 貢献しています

1. リポジトリをフォークします。
2. `npm install` を実行して依存関係をインストールします。
3. 変更を加えます。
4. TypeScript をコンパイルします: `npm run compile`。
5. VS Code でテストします (**F5** を押して → 拡張機能開発ホスト)。
6. プルリクエストを送信します。
- --

## 🐞 バグと問題

[GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues) で問題を報告してください。
- --

## 🧾 ライセンス

MIT ライセンス © [Fatony Ahmad Fauzi](../../LICENSE)