# 🪄 Path Switcher

> 🌐 Disponible dans d'autres langues : [Bahasa Indonesia](docs/lang/README-ID.md) | [English](README.md) | [Deutsch](docs/lang/README-DE.md) | [日本語](docs/lang/README-JP.md) | [中文](docs/lang/README-ZH.md) | [Español](docs/lang/README-ES.md) | [Polski](docs/lang/README-PL.md) | [Русский](docs/lang/README-RU.md) | [Português](docs/lang/README-PT.md) | [한국어](docs/lang/README-KO.md)

**Path Switcher** est une extension Visual Studio Code qui vous aide à basculer facilement tous les chemins d'un fichier (HTML, CSS, JS, images, etc.) entre les **chemins relatifs** ↔️ les **chemins absolus** avec un seul raccourci clavier.

---

## ✨ Fonctionnalités

- 🔁 **Bascule automatiquement** entre les chemins relatifs et absolus
- 💡 Prend en charge les chemins dans :
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` à l'intérieur de CSS
- ⚡ Peut être déclenché via un raccourci clavier
- 🧭 Modifie tous les chemins d'un fichier à la fois (pas seulement une ligne)

---

## ✅ Version de VS Code prise en charge

- Visual Studio Code v1.85.0 ou plus récent

---

## 🧩 Installation

1.  Téléchargez ou clonez ce dépôt :
    ```bash
    git clone [https://github.com/kianoland/path-switcher](https://github.com/kianoland/path-switcher)
    cd path-switcher
    npm install
    ```
2.  Exécuter en mode développement :
    Ouvrez le dossier dans VS Code
    Appuyez sur **F5** → cela ouvrira une nouvelle fenêtre **Hôte de développement d'extension**

---

## ⌨️ Raccourcis et commandes

Utilisez les commandes et raccourcis suivants pour exécuter l'extension :

| Fonction                   | ID de commande             | Raccourci        |
| :------------------------- | :------------------------- | :--------------- |
| Basculer Relatif ↔️ Absolu | `path-switcher.togglePath` | `Ctrl + Alt + P` |
| Tout convertir en Absolu   | `path-switcher.toAbsolute` | -                |
| Tout convertir en Relatif  | `path-switcher.toRelative` | -                |

---

## 🧠 Exemple

Voyez comment **Path Switcher** modifie instantanément les chemins de vos fichiers.

**Avant :**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**Après (Absolu) :**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**Après (Relatif) :**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🛠️ Développement local

Compiler TypeScript :

```bash
npm run compile
```

Linter le code :

```bash
npm run lint
```

Exécuter les tests :

```bash
npm test
```

---

## 🧾 Licence

MIT © [Fatony Ahmad Fauzi](../../LICENSE)
