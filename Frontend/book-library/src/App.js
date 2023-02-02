import React from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from "./components/Home";
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
        </Routes>
      </Router>

    </div>

  );
}

export default App;
