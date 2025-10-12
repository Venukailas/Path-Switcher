# 🪄 Path Switcher

> 🌐 其他语言版本: [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Français](README-FR.md) | [Deutsch](README-DE.md) | [日本語](README-JP.md)| [Español](README-ES.md) | [Polski](README-PL.md) | [Português](README-PT.md) | [한국어](README-KO.md)

**Path Switcher** 是一个 Visual Studio Code 扩展，可帮助您通过一个键盘快捷键轻松地在文件（HTML、CSS、JS、图像等）中的**相对路径** ↔️ **绝对路径**之间切换所有路径。

---

## ✨ 功能

- 🔁 在相对路径和绝对路径之间**自动切换**
- 💡 支持以下路径：
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - CSS 中的 `url("...")`
- ⚡ 可通过键盘快捷键触发
- 🧭 一次性更改文件中的所有路径（而不仅仅是一行）

---

## ✅ 支持的 VS Code 版本

- Visual Studio Code v1.85.0 或更高版本

---

## 🧩 安装

1.  下载或克隆此存储库：
    ```bash
    git clone [https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd path-switcher
    npm install
    ```
2.  在开发模式下运行：
    在 VS Code 中打开文件夹
    按 **F5** → 这将打开一个新的 **扩展开发主机** 窗口

---

## ⌨️ 快捷键和命令

使用以下命令和快捷键来运行扩展：

| 功能             | 命令 ID                    | 快捷键           |
| :--------------- | :------------------------- | :--------------- |
| 切换相对 ↔️ 绝对 | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 示例

了解 **Path Switcher** 如何立即更改您的文件路径。

**之前：**

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

## 🛠️ 本地开发

编译 TypeScript：

```bash
npm run compile
```

代码检查：

```bash
npm run lint
```

运行测试：

```bash
npm test
```

---

## 🧾 许可证

MIT © [Fatony Ahmad Fauzi](../../LICENSE)
