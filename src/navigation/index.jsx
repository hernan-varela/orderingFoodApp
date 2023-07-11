import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "../components/Header/Header.jsx";
import Cart from "../pages/cart/Cart.jsx";
import Home from "../pages/home/Home.jsx";
import LogIn from "../pages/logIn/LogIn.jsx";
import Menu from "../pages/menu/Menu.jsx";
import PaymentSuccess from "../pages/paymentSuccess/PaymentSuccess.jsx";
import Register from "../pages/register/Register.jsx";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/paymentSuccess" element={<PaymentSuccess />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
