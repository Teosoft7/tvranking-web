import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./layout/layout";
import HomePage from "./pages/Home";
import InfoPage from "./pages/Info";
import RatingChart from "./pages/RatingChart";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/about" element={<InfoPage />}></Route>
          <Route exact path="/weekly_chart" element={<RatingChart />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
