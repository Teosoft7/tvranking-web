import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Layout from "./layout/layout";
import HomePage from "./pages/Home";
import InfoPage from "./pages/Info";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/about" element={<InfoPage />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

// <Router>
// <div className="App">
//  <ul className="App-header">
//    <li>
//      <Link to="/">Home</Link>
//    </li>
//    <li>
//      <Link to="/about">About Us</Link>
//    </li>
//    <li>
//      <Link to="/contact">Contact Us</Link>
//    </li>
//  </ul>
// <Routes>
//       <Route exact path='/' element={< Home />}></Route>
//       <Route exact path='/about' element={< About />}></Route>
//       <Route exact path='/contact' element={< Contact />}></Route>
// </Routes>
// </div>
// </Router>
