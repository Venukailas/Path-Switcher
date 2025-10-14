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

> 🌐 提供其他语言版本： [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Français](README-FR.md) | [Deutsch](README-DE.md) | [日本語](README-JP.md) | [Español](README-ES.md) | [Polski](README-PL.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [한국어](README-KO.md)

---

一种 Visual Studio Code 扩展，可帮助您仅使用一个键盘快捷键即可在 **相对路径** ↔️ **绝对路径** 之间轻松切换文件中的所有路径（HTML、CSS、JS、图像等）。

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

1. 克隆或下载此存储库：
   ```bash
   git clone https://github.com/fatonyahmadfauzi/Path-Switcher.git
   cd Path-Switcher
   npm install
   ```
2. 在 VS Code 中打开该文件夹。
3. 按 **F5** → 将启动一个新的 **扩展开发主机** 窗口。

---

## ⌨️ 命令和快捷键

|命令名称 |命令 ID |快捷方式|
| ------------------------ | | -------------------------- | ---------------- |
|切换相对 ↔️ 绝对 | `path-switcher.togglePath` | `Ctrl + Alt + P` |

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

## 🧑‍💻 贡献

1. 分叉存储库。
2. 运行 `npm install` 安装依赖项。
3. 做出改变。
4. 编译 TypeScript：`npm run compile`。
5. 在 VS Code 中测试（按 **F5** → 扩展开发主机）。
6. 提交拉取请求。

---

## 🛠️ 发展

编译打字稿：

```bash
npm run compile
```

皮棉代码：

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
4. 编译 TypeScript：`npm run compile`。
5. 在 VS Code 中测试（按 **F5** → 扩展开发主机）。
6. 提交拉取请求。

---

## 🐞 错误和问题

在 [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues) 上报告问题。

---

## 🧾 许可证

麻省理工学院许可证 © [Fatony Ahmad Fauzi](../../LICENSE)
