# E-Commerce Web Application

## Description

This is a ReactJS-based e-commerce web project that allows users to add items to the cart and proceed to checkout. Product data is retrieved from the Fake Store API.

## Technologies Used

- **ReactJS** (Create React App)
- **Context API with useReducer** (for global state management)
- **Fake Store API** (for product data)
- **Vercel** (for deployment)

## Key Features

- Display a list of products from the Fake Store API
- Add products to the cart
- View items in the cart
- Remove items from the cart
- Checkout products

## Installation and Running the Project

1. Clone this repository:
   ```sh
   git clone <repository-url>
   cd <folder-name>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   npm start
   ```

## Deployment

The application has been deployed on Vercel and can be accessed at the following link:
[Live Demo](https://uts-pemrograman-web-122140008.vercel.app/)

## Project Structure

```sh
// Project file structure:
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

## API Used

Using Fake Store API to retrieve the product list:

```sh
https://fakestoreapi.com/products
```

## License

This project is open-source and can be used as needed.

