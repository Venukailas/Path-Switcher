# 🪄 Path Switcher

> 🌐 Tersedia dalam bahasa lain: [English](README.md) | [Français](docs/lang/README-FR.md) | [Deutsch](docs/lang/README-DE.md) | [日本語](docs/lang/README-JP.md) | [中文](docs/lang/README-ZH.md) | [Español](docs/lang/README-ES.md) | [Polski](docs/lang/README-PL.md) | [Русский](docs/lang/README-RU.md) | [Português](docs/lang/README-PT.md) | [한국어](docs/lang/README-KO.md)

**Path Switcher** adalah ekstensi Visual Studio Code yang membantu Anda dengan mudah mengganti semua path dalam file (HTML, CSS, JS, gambar, dll.) antara **path relatif** ↔️ **path absolut** hanya dengan satu pintasan keyboard.

---

## ✨ Fitur

- 🔁 **Beralih otomatis** antara path relatif dan absolut
- 💡 Mendukung path di:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` di dalam CSS
- ⚡ Dapat dipicu melalui pintasan keyboard
- 🧭 Mengubah semua path dalam file sekaligus (bukan hanya satu baris)

---

## ✅ Versi VS Code yang Didukung

- Visual Studio Code v1.85.0 atau yang lebih baru

---

## 🧩 Instalasi

1.  Unduh atau kloning repositori ini:
    ```bash
    git clone [https://github.com/kianoland/path-switcher](https://github.com/kianoland/path-switcher)
    cd path-switcher
    npm install
    ```
2.  Jalankan dalam mode pengembangan:
    Buka folder di VS Code
    Tekan **F5** → ini akan membuka jendela **Extension Development Host** baru

---

## ⌨️ Pintasan & Perintah

Gunakan perintah dan pintasan berikut untuk menjalankan ekstensi:

| Fungsi                     | ID Perintah                | Pintasan         |
| :------------------------- | :------------------------- | :--------------- |
| Beralih Relatif ↔️ Absolut | `path-switcher.togglePath` | `Ctrl + Alt + P` |
| Ubah Semua ke Absolut      | `path-switcher.toAbsolute` | -                |
| Ubah Semua ke Relatif      | `path-switcher.toRelative` | -                |

---

## 🧠 Contoh

Lihat bagaimana **Path Switcher** secara instan mengubah path file Anda.

**Sebelum:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**Setelah (Absolut):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**Setelah (Relatif):**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

---

## 🛠️ Pengembangan Lokal

Kompilasi TypeScript:

```bash
npm run compile
```

Lint kode:

```bash
npm run lint
```

Jalankan tes:

```bash
npm test
```

---

## 🧾 Lisensi

MIT © [Fatony Ahmad Fauzi](../../LICENSE)
