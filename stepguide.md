# STEP GUIDE TO MAKE PROJECT BY BOSS KT

PP Docs: https://docs.google.com/document/d/1qe7gR8dICVwa2Bs1hUUnx_W0mfzr_I4b/edit
Pair Project Group: https://docs.google.com/spreadsheets/d/1paugXLKUz6iWuKuCtNx7NCd3nMwSjptn-iFk9j89PD4/edit?gid=110979658#gid=110979658

- langkah-langkah ini dibuat untuk membuat project phase1 hactiv8
- dibuat untuk kalangan sendiri
- silakan mengikuti dengan ugal-ugalan
- dibuat berdasarkan terminal `powershell` dengan `OS Windows`
- untuk yang `MacOS` silakan membuat catatan sendiri seperti mengganti `New-Item` dengan `touch`
- berdoalah dahulu sebelum memulai mengerjakan sesuatu
- Tuhan memberkati! God Bless U All! Ayo naik ke Phase 2 bersama!

## 0.`Release 0: Setup`

## `Initialization`

```
npm init -y
npm i pg express express-session ejs sequelize
npm i -D sequelize-cli
New-Item .gitignore
```

### explanation

- **npm init -y**: membuat package.json
- **npm i pg express ejs**: install package manager
  - postgres: library database
  - express: library untuk router dan banyak library lainnya di dalam express
  - exress-session: library untuk session dalam express
  - ejs: library untuk view 
- **npm i -D sequelize-cli**: install development sequelize-cli
- jangan lupa untuk menulis node_modules di dalam gitignore supaya tidak diminus 10

## `Init sequelize-cli`

```
npx sequelize init
npx sequelize
```

### explanation

- **npx sequelize-cli init**: akan membuat folder
  - `config`: mengandung file config, yang menjelaskan CLI bagaimana untuk membuat koneksi ke database
  - `models`: mengandung semua model yang digunakan yang di dalam project
  - `migrations`: mengandung file migrations
  - `seeders`: mengandung file seed

## `Configuration`

atur config di dalam config/config.json

```
"development": {
    "username": "postgres",
    "password": "postgres",
    "database": "<nama_db>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
```

setelah mengatur config silakan jalankan di terminal

```
npx sequelize db:create
```

## `Creating the Model (and Migration)`

### Create Model & Table

membuat model "Arts" dan attributenya seperti di dalam erd

```
npx sequelize model:create --name Arts --attributes name:string, artist:string, date:date, description:text, photo:string
```

### Create New Migration

membuat migrasi baru karena ada kekurangan kolom `placeOfOrigin` di table `Arts` dengan tipe data string

```
npx sequelize migration:create --name add-column-to-arts
```

- jangan lupa untuk tambahkan codingan untuk menambah column
- tambahkan column pada model

### Running Migrations

```
npx sequelize db:migrate:status
npx sequelize db:migrate
```

### explanation:

- `npx sequelize db:migrate:status`: cek status migrate
- `npx sequelize db:migrate`

## `Seeding Data`

- generate file seednya
- syntaxnya:

```
npx sequelize seed:generate --name <nama seednya>
```

jalankan seed generator

```
npx sequelize seed:generate --name insert-arts
```

- ngoding dulu di insert-arts seperti di model di pelajaran sebelumnya, yaitu readfile dengan fs, parse JSON nya, lalu di map untuk mengambil data dari json data.
- jalankan seedingnya ke table

```
npx sequelize db:seed:all
```

- untuk menjalankan seeding specific file
- syntax:

```
npx sequelize db:seed --seed <nama file seednya>
```

## Router

- sebagai penghubung antara app.js, router dan controller

```
mkdir routers
New-Item routers/index.js
New-Item routers/artRouter.js
```

### explanation:

- `mkdir routers`: membuat folder routers untuk menampung file router yang digunakan
- di dalam index.js
  - buat variabel route yang mengimpor express Router
  - impor route yang digunakan misalnya `<artRouter>` atau `<songRouter>` yang sudah diekspor modulnya yang dimasukkan ke dalam variable secara manual.
  - atur penggunaan route di dalam index yang misalnya mengarah ke `<artRouter>` atau `<songRouter>`
  - jangan lupa untuk mengekspor route modulnya supaya bisa digunakan di app.js
- `New-Item routers/index.js`: membuat file index.js sebagai file utama di dalam routers
- `New-Item routers/arts.js`: membuat file router yang digunakan di dalam arts
- di dalam artRouter
  - buat variabel route yang mengimpor express Router
  - impor controller yang digunakan yang sudah diekspor modulnya (setelah membuat controller)
  - atur pengambilan route dan post di dalam route yang dihubungkan dengan controller
  - jangan lupa untuk mengekspor route modulnya supaya dapat digunakan di index.js
- silakan ngoding ugal-ugalan di app.js dan index.js untuk menghubungkan router dan hubungkan index.js dengan arts.js

## `Controller` dan `app.js`

- untuk melengkapi MVC, buat controller dan app.js untuk menjalankan koneksi database dengan MVC
- untuk app.js bisa lihat di expressjs.com
  - kalau app.js nya sudah ada tidak perlu dibuat lagi
- https://expressjs.com/en/starter/hello-world.html
- copas saja ke app.js

```
New-Item app.js
mkdir controllers
New-Item controllers/artController.js
```

### explanation:

- `New-Item app.js`: membuat app.js di dalam root folder
- `mkdir controllers`: membuat controller di dalam root folder
- `New-Item controllers/artController.js`: membuat artController di dalam folder controller
- Nama controller bisa disesuaikan sesuai dengan objek yang ada misalnya `<ArtController>` atau `<SongController>`
- dalam app.js
  - tambahkan route yang mengimport routers yang diekspor di dalam folder routers di file index.js
  - atur penggunaan view engine yang menggunakan ejs
  - penggunaan url encoded yang menggunakan express
  - penggunaan route
- silakan ngoding di Controller untuk membuat ArtController class dan jangan lupa untuk export modulenya supaya bisa diimport
- di file `artRouter`
  - import express router di masing-masing router
  - jangan lupa untuk mengekspor modulenya

## `View EJS`

- untuk melengkapi MVC, buat views folder dan page yang dibutuhkan
- sebagai halaman untuk menampilkan page art

```
mkdir views
mkdir views/template
New-Item views/template/_header.ejs
New-Item views/template/_footer.ejs
New-Item views/template/_navbar.ejs
New-Item views/_template.ejs
New-Item views/home.ejs
```

### explanation:

- `mkdir views`: membuat folder yang menampung file views
- `mkdir views/template`: membuat folder untuk menampung header, footer dan navbar
- `New-Item views/template/_header.ejs`: membuat file untuk header

  - di dalam header berisi
    - link css bootstrap
    - judul title yang harus diganti
    - menu yang harus diganti
    - navbar yang sudah diinclude

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Night at Museum</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
    <!-- Font Awesome for Icons -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
  </head>
  <body data-bs-theme="dark">
    <%- include('./_navbar.ejs') %>
  </body>
</html>
```

- `New-Item views/template/_footer.ejs`: membuat file untuk footer
  - di dalam footer berisi:
    - script js untuk bootstrap
    - script untuk toggle light and dark theme

```html
    <script>
        const themeToggleBtn = document.getElementById("themeToggleBtn");
        const body = document.body;

        // 1. Set theme saat halaman dimuat berdasarkan localStorage
        const savedTheme = localStorage.getItem("theme") || "dark"; // default "dark"
        body.setAttribute("data-bs-theme", savedTheme);
        updateButton(savedTheme)

        themeToggleBtn.addEventListener("click", function() {
            // Toggle between dark and light themes
            const currentTheme = body.getAttribute("data-bs-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";

            // Update theme dan simpan di localStorage
            body.setAttribute("data-bs-theme", newTheme);
            localStorage.setItem("theme", newTheme);

            // Update button text and icon
            updateButton(newTheme)
        });

        // 3. Fungsi untuk memperbarui tampilan tombol sesuai tema
        function updateButton(theme) {
            if (theme === "dark") {
                themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>
```

- `New-Item views/template/_navbar.ejs`: membuat file untuk navbar
  - di dalam \_navbar.ejs berisi
    - navbar yang diedit untuk logo
    - href logonya
    - terdapat button yang toggle dark atau light

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
  <div class="container">
    <a class="navbar-brand" href="/">Art Collection</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/arts/add">Add Art</a>
        </li>
      </ul>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="" id="themeToggleBtn"><i class="fas fa-sun"></i></a>
      </li>
    </ul>
  </div>
</nav>
```

- `New-Item views/_template.ejs`: membuat template untuk body
  - di dalam \_template.ejs berisi
    - include header
    - div.container, div.row dan div.col
    - inlucde footer
- `New-Item views/home.ejs`: membuat file yang digunakan untuk halaman pertama
  - gunakan nama lain jika ingin membuat file lain
  - membuat file ejs yang lain

```
New-Item views/<contoh: home.ejs>
```

## Mulai Release Yang Diujikan

1. buatlah ERD yang digunakan
2. masuk ke navbar.ejs untuk membuat nav-link yang dibutuhkan
3. buka router yang dibutuhkan di samping kanan window untuk mengarahkan setiap route nya
4. buat view ejs yang dibutuhkan dari router yang dibuat
5. copy template dan tulis judul yang dibutuhkan
6. buka controller dan hubungkan dengan view ejsnya
7. setelah menghubungkan controller, segera comment setiap routingnya supaya tidak terjadi error

HAPPY CODING GUYS!!! SALAM DARI BOSS!
