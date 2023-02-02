import React from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from "./components/Home";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
      {/* <a href="/login">login</a> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;
