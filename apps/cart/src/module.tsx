import React from "react";
import "./css/index.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useCartStore } from 'phoenix-home-ui/store';
import { OrderLayout } from 'phoenix-home-ui/layouts';

const App = () => {
  const { deleteFromCart } = useCartStore();
  return (
    <BrowserRouter>
      <div className="container">  
        <OrderLayout />    
        <Routes>
          <Route index path="/cart" element={<button onClick={() => deleteFromCart({id: 1})}>Remove from Cart</button>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;