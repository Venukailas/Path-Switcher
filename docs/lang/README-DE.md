# 🪄 Path Switcher

> 🌐 In anderen Sprachen verfügbar: [English](../../README.md) | [Bahasa Indonesia](README-ID.md) | [Français](README-FR.md) | [日本語](README-JP.md) | [中文](README-ZH.md) | [Español](README-ES.md) | [Polski](README-PL.md) | [Русский](README-RU.md) | [Português](README-PT.md) | [한국어](README-KO.md)

**Path Switcher** ist eine Visual Studio Code-Erweiterung, mit der Sie alle Pfade in einer Datei (HTML, CSS, JS, Bilder usw.) mit nur einer Tastenkombination einfach zwischen **relativen Pfaden** ↔️ **absoluten Pfaden** wechseln können.

---

## ✨ Funktionen

- 🔁 **Schaltet automatisch** zwischen relativen und absoluten Pfaden um
- 💡 Unterstützt Pfade in:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` in CSS
- ⚡ Kann per Tastenkombination ausgelöst werden
- 🧭 Ändert alle Pfade in einer Datei auf einmal (nicht nur eine Zeile)

---

## ✅ Unterstützte VS Code-Version

- Visual Studio Code v1.85.0 oder neuer

---

## 🧩 Installation

1.  Laden Sie dieses Repository herunter oder klonen Sie es:
    ```bash
    git clone [https://github.com/kianoland/path-switcher](https://github.com/kianoland/path-switcher)
    cd path-switcher
    npm install
    ```
2.  Im Entwicklungsmodus ausführen:
    Öffnen Sie den Ordner in VS Code
    Drücken Sie **F5** → dadurch wird ein neues **Extension Development Host**-Fenster geöffnet

---

## ⌨️ Verknüpfungen & Befehle

Verwenden Sie die folgenden Befehle und Verknüpfungen, um die Erweiterung auszuführen:

| Funktion                      | Befehls-ID                 | Verknüpfung      |
| :---------------------------- | :------------------------- | :--------------- |
| Relativ ↔️ Absolut umschalten | `path-switcher.togglePath` | `Ctrl + Alt + P` |
| Alle in Absolut konvertieren  | `path-switcher.toAbsolute` | -                |
| Alle in Relativ konvertieren  | `path-switcher.toRelative` | -                |

---

## 🧠 Beispiel

Sehen Sie, wie **Path Switcher** Ihre Dateipfade sofort ändert.

**Vorher:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**Nachher (Absolut):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**Nachher (Relativ):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🛠️ Lokale Entwicklung

TypeScript kompilieren:

```bash
npm run compile
```

Code linten:

```bash
npm run lint
```

Tests ausführen:

```bash
npm test
```

---

## 🧾 Lizenz

MIT © [Fatony Ahmad Fauzi](../../LICENSE)
