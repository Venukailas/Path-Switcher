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

> 🌐 Disponível em outros idiomas: [English](../../README.md) | [Deutsch](README-DE.md) | [English](README-EN.md) | [Español](README-ES.md) | [Français](README-FR.md) | [Bahasa Indonesia](README-ID.md) | [日本語](README-JP.md) | [한국어](README-KR.md) | [Polski](README-PL.md) | [Русский](README-RU.md) | [中文](README-ZH.md)

---

Uma extensão Visual Studio Code que ajuda você a alternar facilmente todos os caminhos em um arquivo (HTML, CSS, JS, imagens, etc.) entre **caminhos relativos** ↔️ **caminhos absolutos** com apenas um atalho de teclado.

---

## ✨ Recursos

- 🔁 Alterna automaticamente entre caminhos relativos e absolutos.
- 💡 Suporta caminhos em:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` dentro de CSS
- ⚡ Acionado via atalho de teclado.
- 🧭 Altera todos os caminhos em um arquivo de uma vez.

---

## ✅ Versões VS Code suportadas

- Versão mínima: **1.85.0**
- Testado em **Windows**, **macOS** e **Linux**.

---

## 🧩 Instalação

### Do Marketplace (recomendado)

1. Abra **Visual Studio Code**.
2.  Go to the **Extensions** view (`Ctrl+Shift+X`).
3. Pesquise `Path Switcher`.
4. Clique em **Instalar**.

### Para Desenvolvimento (do Código Fonte)

1. Clone este repositório:
    ```bash
    git clone [clone https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd Path Switcher
    npm install
    ```
2. Abra a pasta em VS Code.
3. Pressione **F5** para iniciar o **Host de desenvolvimento de extensão**.

---

## ⌨️ Comandos e atalhos

| Command Name                | Command ID                 | Shortcut         |
| --------------------------- | -------------------------- | ---------------- |
| Toggle Relative ↔️ Absolute | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 Exemplo

**Antes:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**Depois (Absoluto):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**Depois (relativo):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🛠️ Desenvolvimento

Compile TypeScript:

```bash
npm run compile
```

Lint código:

```bash
npm run lint
```

Execute testes:

```bash
npm test
```

---

## 🧑‍💻 Contribuindo

1. Bifurque o repositório.
2. Execute `npm install` para instalar dependências.
3. Faça suas alterações.
4. Compile TypeScript: `npm run compile`.
5. Teste em VS Code (pressione **F5** → Host de desenvolvimento de extensão).
6. Envie uma solicitação pull.

---

## 🐞 Bugs e problemas

Relate problemas no [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues).

---

## 🧾 Registro de alterações

Veja todas as alterações notáveis ​​para cada versão no arquivo [Registro de alterações](CHANGELOG-PT.md).

> 📦 Você também pode visualizar as notas de lançamento diretamente no [GitHub Releases page](https://github.com/fatonyahmadfauzi/Path-Switcher/releases).

---

## 🧾 Licença

MIT License © [Fatony Ahmad Fauzi](../../LICENSE)