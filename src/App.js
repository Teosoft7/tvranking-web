import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./layout/layout";
import Transition from "./layout/transition";
import HomePage from "./pages/Home";
import InfoPage from "./pages/Info";
import RatingChart from "./pages/RatingChart";

function App() {
  return (
    <Router>
      <Layout>
        <Transition>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/about" element={<InfoPage />}></Route>
            <Route exact path="/weekly_chart" element={<RatingChart />}></Route>
          </Routes>
        </Transition>
      </Layout>
    </Router>
  );
}

export default App;
