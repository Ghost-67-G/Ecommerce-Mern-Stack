import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Products from "./Products/Products";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Signup from "./Sign up/Signup";
import Verify from "./Verify/Verify";
import Verifing from "./Verify/Verifing";
import { useSelector } from "react-redux";
import axios from "axios";
import Home from "./Home";
import Footer from "./Footer/Footer";

const Frontend = () => {
  const user = useSelector((store) => store.user);
  const cart = useSelector((store) => store.cart);
  const cartUpdate = () => {
    if (Object.keys(user).length !== 0 && cart.products.length !== 0) {
      axios.put("/update-userCart", { cart, id: user._id });
    }
  };
  useEffect(() => {
    return cartUpdate();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:name/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify/email" element={<Verify />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify/:token" element={<Verifing />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default Frontend;
