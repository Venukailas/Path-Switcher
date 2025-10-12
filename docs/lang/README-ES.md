# 🪄 Path Switcher

> 🌐 Disponible en otros idiomas: [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Français](README-FR.md) | [Deutsch](README-DE.md) | [日本語](README-JP.md) | [中文](README-ZH.md) | [Polski](README-PL.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [한국어](README-KO.md)

**Path Switcher** es una extensión de Visual Studio Code que te ayuda a cambiar fácilmente todas las rutas de un archivo (HTML, CSS, JS, imágenes, etc.) entre **rutas relativas** ↔️ **rutas absolutas** con un solo atajo de teclado.

---

## ✨ Características

- 🔁 **Cambia automáticamente** entre rutas relativas y absolutas
- 💡 Soporta rutas en:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` dentro de CSS
- ⚡ Se puede activar mediante un atajo de teclado
- 🧭 Cambia todas las rutas de un archivo a la vez (no solo una línea)

---

## ✅ Versión de VS Code compatible

- Visual Studio Code v1.85.0 o posterior

---

## 🧩 Instalación

1.  Descarga o clona este repositorio:
    ```bash
    git clone [https://github.com/kianoland/path-switcher](https://github.com/kianoland/path-switcher)
    cd path-switcher
    npm install
    ```
2.  Ejecutar en modo de desarrollo:
    Abre la carpeta en VS Code
    Presiona **F5** → esto abrirá una nueva ventana de **Anfitrión de Desarrollo de Extensiones**

---

## ⌨️ Atajos y Comandos

Usa los siguientes comandos y atajos para ejecutar la extensión:

| Función                       | ID del Comando             | Atajo            |
| :---------------------------- | :------------------------- | :--------------- |
| Alternar Relativo ↔️ Absoluto | `path-switcher.togglePath` | `Ctrl + Alt + P` |
| Convertir todo a Absoluto     | `path-switcher.toAbsolute` | -                |
| Convertir todo a Relativo     | `path-switcher.toRelative` | -                |

---

## 🧠 Ejemplo

Mira cómo **Path Switcher** cambia instantáneamente las rutas de tus archivos.

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

## 🛠️ Desarrollo Local

Compilar TypeScript:

```bash
npm run compile
```

Analizar el código:

```bash
npm run lint
```

Ejecutar pruebas:

```bash
npm test
```

---

## 🧾 Licencia

MIT © [Fatony Ahmad Fauzi](../../LICENSE)
