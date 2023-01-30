import React from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      {/* <a href="/login">login</a> */}
      <Router>
        <Routes>
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
