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

> 🌐 提供其他语言版本： [English](../../README.md) | [Deutsch](README-DE.md) | [Español](README-ES.md) | [Français](README-FR.md) | [Bahasa Indonesia](README-ID.md) | [日本語](README-JP.md) | [한국어](README-KO.md) | [Polski](README-PL.md) | [Português](README-PT.md) | [Русский](README-RU.md)

---

一个 Visual Studio Code 扩展，可帮助您轻松地通过一个键盘快捷键在 **相对路径** ↔️ **绝对路径** 之间切换文件中的所有路径（HTML、CSS、JS、图像等）。

---

## ✨ 特点

- 🔁 自动在相对路径和绝对路径之间切换。
- 💡 支持以下路径：
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - CSS 内的 `url("...")`
- ⚡ 通过键盘快捷键触发。
- 🧭 一次更改文件中的所有路径。

---

## ✅ 支持的 VS Code 版本

- 最低版本：**1.85.0**
- 在 **Windows**、**macOS** 和 **Linux** 上测试。

---

## 🧩 安装

### 来自市场（推荐）

1. 打开 **Visual Studio Code**。
2.  Go to the **Extensions** view (`Ctrl+Shift+X`).
3. 搜索 `Path Switcher`。
4. 单击“**安装**”。

### 用于开发（来自源代码）

1. 克隆此存储库：
    ```bash
    git clone [clone https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd Path Switcher
    npm install
    ```
2. 打开 VS Code 中的文件夹。
3. 按 **F5** 启动 **扩展开发主机**。

---

## ⌨️ 命令和快捷键

| Command Name                | Command ID                 | Shortcut         |
| --------------------------- | -------------------------- | ---------------- |
| Toggle Relative ↔️ Absolute | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 示例

**前：**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**之后（绝对）：**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**之后（相对）：**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🛠️ 发展

编译TypeScript：

```bash
npm run compile
```

Lint 代码：

```bash
npm run lint
```

运行测试：

```bash
npm test
```

---

## 🧑‍💻 贡献

1. 分叉存储库。
2. 运行 `npm install` 安装依赖项。
3. 做出改变。
4. 编译TypeScript：`npm run compile`。
5. 在 VS Code 中测试（按 **F5** → 扩展开发主机）。
6. 提交拉取请求。

---

## 🐞 错误和问题

在 [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues) 上报告问题。

---

## 🧾 许可证

MIT License © [法托尼·艾哈迈德·福齐](../../LICENSE)