import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import QueryToolbar from "../components/QueryToolbar";
import RatingList from "./RatingList";
import { getMaxDate, getRating } from "../libraries/firebase";

const HomePage = () => {
  const [ratings, setRatings] = useState([]);

  console.log("env", process.env.REACT_APP_FIREBASE_CONFIG);
  console.log("env", process.env.REACT_APP_TEST_KEY);

  useEffect(() => {
    async function getRefresh() {
      const newRatings = await getRating("2022-10-01", 0, true);
      console.log("getRefresh", newRatings);
      setRatings(newRatings);
    }
    getRefresh();
  }, []);

  return (
    <Box>
      <QueryToolbar />
      <RatingList ratings={ratings} />
    </Box>
  );
};

export default HomePage;
