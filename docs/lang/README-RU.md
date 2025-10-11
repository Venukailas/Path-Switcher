# 🪄 Path Switcher

> 🌐 Доступно на других языках: [Bahasa Indonesia](docs/lang/README-ID.md) | [Français](docs/lang/README-FR.md) | [Deutsch](docs/lang/README-DE.md) | [日本語](docs/lang/README-JP.md) | [中文](docs/lang/README-ZH.md) | [Español](docs/lang/README-ES.md) | [Polski](docs/lang/README-PL.md) | [English](README.md) | [Português](docs/lang/README-PT.md) | [한국어](docs/lang/README-KO.md)

**Path Switcher** — это расширение для Visual Studio Code, которое помогает легко переключать все пути в файле (HTML, CSS, JS, изображения и т. д.) между **относительными путями** ↔️ **абсолютными путями** с помощью всего одной комбинации клавиш.

---

## ✨ Возможности

- 🔁 **Автоматически переключает** между относительными и абсолютными путями
- 💡 Поддерживает пути в:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` внутри CSS
- ⚡ Может быть вызвано с помощью сочетания клавиш
- 🧭 Изменяет все пути в файле сразу (а не только одну строку)

---

## ✅ Поддерживаемая версия VS Code

- Visual Studio Code v1.85.0 или новее

---

## 🧩 Установка

1.  Загрузите или клонируйте этот репозиторий:
    ```bash
    git clone [https://github.com/kianoland/path-switcher](https://github.com/kianoland/path-switcher)
    cd path-switcher
    npm install
    ```
2.  Запустите в режиме разработки:
    Откройте папку в VS Code
    Нажмите **F5** → это откроет новое окно **Extension Development Host**

---

## ⌨️ Горячие клавиши и команды

Используйте следующие команды и сочетания клавиш для запуска расширения:

| Функция                                 | Идентификатор команды      | Горячая клавиша  |
| :-------------------------------------- | :------------------------- | :--------------- |
| Переключить относительный ↔️ абсолютный | `path-switcher.togglePath` | `Ctrl + Alt + P` |
| Преобразовать все в абсолютные          | `path-switcher.toAbsolute` | -                |
| Преобразовать все в относительные       | `path-switcher.toRelative` | -                |

---

## 🧠 Пример

Посмотрите, как **Path Switcher** мгновенно изменяет пути к вашим файлам.

**До:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**После (абсолютный):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**После (относительный):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🛠️ Локальная разработка

Скомпилировать TypeScript:

```bash
npm run compile
```

Проверить код:

```bash
npm run lint
```

Запустить тесты:

```bash
npm test
```

---

## 🧾 Лицензия

MIT © [Fatony Ahmad Fauzi](../../LICENSE)
