// index.js (React 18+ compatible)

import React from "react";
import ReactDOM from "react-dom/client";  // ✅ correct import for React 18
import App from "./App";

import { CartProvider } from "./context/CartContext";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <CartProvider>
    <App />
  </CartProvider>
</BrowserRouter>
);
