# 🪄 Path Switcher

> 🌐 他の言語で利用可能: [Bahasa Indonesia](docs/lang/README-ID.md) | [Français](docs/lang/README-FR.md) | [Deutsch](docs/lang/README-DE.md) | [English](README.md) | [中文](docs/lang/README-ZH.md) | [Español](docs/lang/README-ES.md) | [Polski](docs/lang/README-PL.md) | [Русский](docs/lang/README-RU.md) | [Português](docs/lang/README-PT.md) | [한국어](docs/lang/README-KO.md)

**Path Switcher**は、ファイル内のすべてのパス（HTML、CSS、JS、画像など）を、1 つのキーボードショートカットで**相対パス**↔️**絶対パス**に簡単に切り替えるのに役立つ Visual Studio Code 拡張機能です。

---

## ✨ 機能

- 🔁 相対パスと絶対パスを**自動的に切り替え**
- 💡 以下のパスをサポート:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - CSS 内の`url("...")`
- ⚡ キーボードショートカットでトリガー可能
- 🧭 ファイル内のすべてのパスを一度に変更（1 行だけでなく）

---

## ✅ サポートされている VS Code のバージョン

- Visual Studio Code v1.85.0 以降

---

## 🧩 インストール

1.  このリポジトリをダウンロードまたはクローンします:
    ```bash
    git clone [https://github.com/kianoland/path-switcher](https://github.com/kianoland/path-switcher)
    cd path-switcher
    npm install
    ```
2.  開発モードで実行します:
    VS Code でフォルダーを開きます
    **F5**を押します → 新しい**拡張機能開発ホスト**ウィンドウが開きます

---

## ⌨️ ショートカットとコマンド

拡張機能を実行するには、次のコマンドとショートカットを使用します:

| 機能                   | コマンド ID                | ショートカット   |
| :--------------------- | :------------------------- | :--------------- |
| 相対 ↔️ 絶対を切り替え | `path-switcher.togglePath` | `Ctrl + Alt + P` |
| すべてを絶対に変換     | `path-switcher.toAbsolute` | -                |
| すべてを相対に変換     | `path-switcher.toRelative` | -                |

---

## 🧠 例

**Path Switcher**がファイルパスを即座に変更する方法をご覧ください。

**変更前:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**変更後（絶対）:**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**変更後（相対）:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🛠️ ローカル開発

TypeScript をコンパイル:

```bash
npm run compile
```

コードをリント:

```bash
npm run lint
```

テストを実行:

```bash
npm test
```

---

## 🧾 ライセンス

MIT © [Fatony Ahmad Fauzi](../../LICENSE)
