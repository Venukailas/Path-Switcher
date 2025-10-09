# 🪄 Path Switcher

**Path Switcher** adalah ekstensi Visual Studio Code yang memudahkan kamu mengubah semua path di file (HTML, CSS, JS, gambar, dll) antara **relative path** ↔️ **absolute path** hanya dengan satu kombinasi tombol.

---

## ✨ Fitur

- 🔁 **Toggle otomatis** antara path relative ↔️ absolute
- 💡 Mendukung path di:
  - `<script src="...">`
  - `<link href="...">`
  - `<img src="...">`
  - `url("...")` dalam CSS
- ⚡ Dapat dijalankan lewat shortcut keyboard
- 🧭 Mengubah semua path di satu file sekaligus (bukan hanya satu baris)

---

## 🧩 Instalasi

1. Unduh atau clone repository ini:
   ```bash
   git clone https://github.com/kianoland/path-switcher
   cd path-switcher
   npm install
   ```
2. Jalankan di mode pengembang:
   Buka folder di VS Code
   Tekan F5 → akan membuka jendela baru Extension Development Host

---

## ⌨️ Shortcut & Command

Gunakan perintah dan shortcut berikut untuk menjalankan ekstensi:

| Fungsi                      | Command ID                 | Tombol           |
| :-------------------------- | :------------------------- | :--------------- |
| Toggle Relative ↔️ Absolute | `path-switcher.togglePath` | `Ctrl + Alt + P` |
| Ubah semua ke Absolute      | `path-switcher.toAbsolute` | `Ctrl + Alt + A` |
| Ubah semua ke Relative      | `path-switcher.toRelative` | `Ctrl + Alt + R` |

## 🧠 Contoh

Lihat bagaimana Path Switcher mengubah path Anda secara instan.

**Sebelum:**

```html
<script src="js/meta-update.js"></script>
<link rel="stylesheet" href="css/style.css" />
<img src="assets/logo.png" />
```

**Setelah (Absolute):**

```html
<script src="/js/meta-update.js"></script>
<link rel="stylesheet" href="/css/style.css" />
<img src="/assets/logo.png" />
```

**Setelah (Relative):**

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

Linting:

```bash
npm run lint
```

Jalankan tes:

```bash
npm test
```

---

## 🧾 Lisensi

MIT © [Fatony Ahmad Fauzi](https://www.fatonyahmadfauzi.me/)
