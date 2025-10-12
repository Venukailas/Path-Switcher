# 🪄 Path Switcher

> 🌐 Disponível em outros idiomas: [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Français](README-FR.md) | [Deutsch](README-DE.md) | [日本語](README-JP.md)| [中文](README-ZH.md) | [Español](README-ES.md) | [Polski](README-PL.md) | [Русский](README-RU.md) | [한국어](README-KO.md)

**Path Switcher** é uma extensão do Visual Studio Code que ajuda você a alternar facilmente todos os caminhos em um arquivo (HTML, CSS, JS, imagens, etc.) entre **caminhos relativos** ↔️ **caminhos absolutos** com apenas um atalho de teclado.

---

## ✨ Recursos

- 🔁 **Alterna automaticamente** entre caminhos relativos и absolutos
- 💡 Suporta caminhos em:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` dentro de CSS
- ⚡ Pode ser acionado por atalho de teclado
- 🧭 Altera todos os caminhos em um arquivo de uma só vez (não apenas uma linha)

---

## ✅ Versão do VS Code Suportada

- Visual Studio Code v1.85.0 ou mais recente

---

## 🧩 Instalação

1.  Baixe ou clone este repositório:
    ```bash
    git clone [https://github.com/fatonyahmadfauzi/Path-Switcher.git](https://github.com/fatonyahmadfauzi/Path-Switcher.git)
    cd path-switcher
    npm install
    ```
2.  Execute em modo de desenvolvimento:
    Abra a pasta no VS Code
    Pressione **F5** → isso abrirá uma nova janela do **Anfitrião de Desenvolvimento de Extensão**

---

## ⌨️ Atalhos e Comandos

Use os seguintes comandos e atalhos para executar a extensão:

| Função                        | ID do Comando              | Atalho           |
| :---------------------------- | :------------------------- | :--------------- |
| Alternar Relativo ↔️ Absoluto | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 Exemplo

Veja como o **Path Switcher** altera instantaneamente os caminhos dos seus arquivos.

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

**Depois (Relativo):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🛠️ Desenvolvimento Local

Compilar TypeScript:

```bash
npm run compile
```

Analisar o código:

```bash
npm run lint
```

Executar testes:

```bash
npm test
```

---

## 🧾 Licença

MIT © [Fatony Ahmad Fauzi](../../LICENSE)
