---
layout: layouts/default.vto
title: Contoh Penggunaan Lume
---

Lume adalah sebuah _framework_ yang megandalkan `Deno` sebagai `JavaScript Engine`, dengan demikian kita harus menginstall `Deno` jika ingin menggunakannya. Untuk instalasinya, sebenarnya sangat mudah, karena `Deno` diedarkan sebagai `single file`, bukan sebuah `package` yang memerlukan teknik instalasi tertentu yang rumit.

Tetapi karena beberapa persyaratan untuk _platform_ tertentu, maka sebaiknya Anda [membaca cara instalasi](https://docs.deno.com/runtime/getting_started/installation/) dari Deno sendiri.

Dokumen ini tidak membahas mengenai instalasi `Deno`, dan hanya mengasumsikan Anda sudah menginstalnya. Sekarang untuk instalasi `Lume` sendiri, cukup buka sebuah `Terminal` di dalam direktori kosong, lalu ketik perintah berikut:

```bash
deno run -A https://lume.land/init.ts
```

Ikuti semua default, dan Anda akan mendapatkan sedikit file sebagai permulaan, di dalam direktori tersebut. Untuk menampilkan halaman awal, cukup buat sebuah file bernama `index.md`, yang berisi sembarang teks.

Lalu ketik perintah berikut:

```bash
deno task lume -s

# atau
deno task serve
```

Anda bisa membuka browser dengan alamat `http://localhost:3000` untuk menampilkan isinya.

**Note**:

Saat ini `Lume` sedikit bermasalah jika dokumen `markdown` kita banyak menggunakan `footnote`. Cara menampilkannya menjadi tidak terlalu sederhana karena dimaksudkan untuk menjadi sangat fleksibel. Jika ingin segera menggunakannya, sebaiknya kita menggunakan format `MDX`, yang pada dasarnya sama saja, tetapi secara default sudah mengandung pemrosesan _footnote_ yang bisa kita terima.

