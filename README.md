# E-Commerce Web Application

## Deskripsi
Ini adalah proyek web e-commerce berbasis ReactJS yang memungkinkan pengguna untuk menambahkan item ke dalam cart dan melakukan checkout. Data produk diperoleh dari Fake Store API.

## Teknologi yang Digunakan
- **ReactJS** (Create React App)
- **Context API dengan useReducer** (untuk state management global)
- **Fake Store API** (untuk data produk)
- **Vercel** (untuk deployment)

## Fitur Utama
- Menampilkan daftar produk dari Fake Store API
- Menambahkan produk ke dalam cart
- Melihat daftar item di cart
- Menghapus item dari cart
- Checkout produk

## Instalasi dan Menjalankan Proyek
1. Clone repository ini:
   ```sh
   git clone <repository-url>
   cd <nama-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Jalankan aplikasi:
   ```sh
   npm start
   ```

## Deployment
Aplikasi ini telah dideploy di Vercel dan dapat diakses melalui link berikut:
[Live Demo](https://uts-pemrograman-web-122140008.vercel.app/)

## Struktur Proyek
```sh
// File struktur aplikasi:
src/
  ├── components/
  │   ├── Header.jsx
  │   ├── CheckoutPopUp.jsx
  │   ├── ProductList.jsx
  │   ├── ProductDetail.jsx
  │   ├── Cart.jsx
  │   ├── ErrorBoundary.jsx
  │   └── LoadingIndicator.jsx
  ├── context/
  │   └── StoreContext.jsx
  ├── pages/
  │   ├── Home.jsx
  │   ├── ProductPage.jsx
  │   ├── CartPage.jsx
  │   └── NotFound.jsx
  ├── App.jsx
  ├── index.js
  └── styles.css
```

## API yang Digunakan
Menggunakan Fake Store API untuk mendapatkan daftar produk:
```sh
https://fakestoreapi.com/products
```

## Kontributor
- Nama: [Bintang]
- Email: [bntngfkr@gmail.com]
- Github: [bintangfikrif]

## Lisensi
Proyek ini bersifat open-source dan dapat digunakan sesuai kebutuhan.

