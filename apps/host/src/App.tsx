import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./css/index.scss";

import Basket from 'phoenix-cart-ui/Basket';
import Home from './pages/home';
import OrderLayout from './layouts/order';

import { PhoenixStoreProvider } from "./store";

const Host = () => (
  <BrowserRouter>
    <div className="container">
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li className="main-nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="main-nav-list-item">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Basket />} />
      </Routes>
    </div>
  </BrowserRouter>
);
ReactDOM.render(<PhoenixStoreProvider><Host /></PhoenixStoreProvider>, document.getElementById("app"));
