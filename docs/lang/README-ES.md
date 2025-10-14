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

> 🌐 Disponible en otros idiomas: [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Français](README-FR.md) | [Deutsch](README-DE.md) | [日本語](README-JP.md) | [中文](README-ZH.md) | [Polski](README-PL.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [한국어](README-KO.md)

---

Una extensión de Visual Studio Code que le ayuda a cambiar fácilmente todas las rutas de un archivo (HTML, CSS, JS, imágenes, etc.) entre **rutas relativas** ↔️ **rutas absolutas** con un solo método abreviado de teclado.

---

## ✨ Características

- 🔁 Alterna automáticamente entre rutas relativas y absolutas.
- 💡 Soporta caminos en:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` dentro de CSS
- ⚡ Se activa mediante un método abreviado de teclado.
- 🧭 Cambia todas las rutas de un archivo a la vez.

---

## ✅ Versiones de código VS compatibles

- Versión mínima: **1.85.0**
- Probado en **Windows**, **macOS** y **Linux**.

---

## 🧩 Instalación

1. Clona o descarga este repositorio:
   ```bash
   git clone https://github.com/fatonyahmadfauzi/Path-Switcher.git
   cd Path-Switcher
   npm install
   ```
2. Abra la carpeta en VS Code.
3. Presione **F5** → se abrirá una nueva ventana **Host de desarrollo de extensiones**.

---

## ⌨️ Comandos y atajos

| Nombre del comando            | ID de comando              | Atajo            |
| ----------------------------- | -------------------------- | ---------------- |
| Alternar Relativo ↔️ Absoluto | `path-switcher.togglePath` | `Ctrl + Alt + P` |

---

## 🧠 Ejemplo

**Antes:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**Después (Absoluto):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**Después (Relativo):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🧑‍💻 Contribuyendo

1. Bifurque el repositorio.
2. Ejecute `npm install` para instalar dependencias.
3. Realice sus cambios.
4. Compile TypeScript: `npm run compile`.
5. Pruebe en VS Code (presione **F5** → Host de desarrollo de extensiones).
6. Envíe una solicitud de extracción.

---

## 🛠️ Desarrollo

Compilar TypeScript:

```bash
npm run compile
```

Código de pelusa:

```bash
npm run lint
```

Ejecutar pruebas:

```bash
npm test
```

---

## 🧑‍💻 Contribuyendo

1. Bifurque el repositorio.
2. Ejecute `npm install` para instalar dependencias.
3. Realice sus cambios.
4. Compile TypeScript: `npm run compile`.
5. Pruebe en VS Code (presione **F5** → Host de desarrollo de extensiones).
6. Envíe una solicitud de extracción.

---

## 🐞 Errores y problemas

Informar problemas en [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues).

---

## 🧾 Licencia

Licencia MIT © [Fatony Ahmad Fauzi](../../LICENSE)
