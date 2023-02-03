import React from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Cart from "./components/Cart";
import Home from "./components/Home";
import Order from "./components/Order";
import Product from "./components/Product";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <a href="/login">login</a> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
