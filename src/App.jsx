import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/productList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </>
  );
};

export default App;