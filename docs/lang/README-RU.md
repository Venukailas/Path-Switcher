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

> 🌐 Доступно на других языках: [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Français](README-FR.md) | [Deutsch](README-DE.md) | [日本語](README-JP.md) | [中文](README-ZH.md) | [Español](README-ES.md) | [Polski](README-PL.md) | [Português](README-PT.md) | [한국어](README-KO.md)

---
Расширение Visual Studio Code, которое позволяет легко переключать все пути в файле (HTML, CSS, JS, изображения и т. д.) между **относительными путями** ↔️ **абсолютными путями** с помощью всего одного сочетания клавиш.
- --

## ✨ Особенности
- 🔁 Автоматически переключается между относительными и абсолютными путями.
- 💡 Поддерживает пути в:
- `<script src="...">`
- `<link href="...">`
- `<img src="...">`
- `url("...")` внутри CSS
- ⚡ Запускается с помощью сочетания клавиш.
- 🧭 Меняет все пути в файле одновременно.
- --

## ✅ Поддерживаемые версии кода VS
- Минимальная версия: **1.85.0**
- Протестировано на **Windows**, **macOS** и **Linux**.
- --

## 🧩 Установка

1. Клонируйте или скачайте этот репозиторий:
   ```bash
   git clone https://github.com/fatonyahmadfauzi/Path-Switcher.git
   cd Path-Switcher
   npm install
   ```
2. Откройте папку в VS Code.
3. Нажмите **F5** → откроется новое окно **Extension Development Host**.
- --

## ⌨️ Команды и сочетания клавиш

| Имя команды | Идентификатор команды | Ярлык |
| --------------------------- | -------------------------- | ---------------- |
| Переключить относительное ↔️ абсолютное | `path-switcher.togglePath` | `Ctrl + Alt + P` |
- --

## 🧠 Пример
- *До:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```
- *После (абсолютно):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```
- *После (относительно):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```
- --

## 🧑‍💻 Вносим вклад

1. Форкните репозиторий.
2. Запустите `npm install`, чтобы установить зависимости.
3. Внесите изменения.
4. Скомпилируйте TypeScript: `npm run compile`.
5. Протестируйте в VS Code (нажмите **F5** → Хост разработки расширений).
6. Отправьте запрос на включение.
- --

## 🛠️ Развитие

Скомпилируйте TypeScript:

```bash
npm run compile
```

Линт-код:

```bash
npm run lint
```

Запустите тесты:

```bash
npm test
```
- --

## 🧑‍💻 Вносим вклад

1. Форкните репозиторий.
2. Запустите `npm install`, чтобы установить зависимости.
3. Внесите изменения.
4. Скомпилируйте TypeScript: `npm run compile`.
5. Протестируйте в VS Code (нажмите **F5** → Хост разработки расширений).
6. Отправьте запрос на включение.
- --

## 🐞 Ошибки и проблемы

Сообщайте о проблемах по адресу [GitHub Issues page](https://github.com/fatonyahmadfauzi/Path-Switcher/issues).
- --

## 🧾 Лицензия

Лицензия MIT © [Fatony Ahmad Fauzi](../../LICENSE)