import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import QueryToolbar from "../components/QueryToolbar";
import RatingList from "./RatingList";
import { getYesterdaysDate } from "../libraries/common";
import { getMaxDate, getRating } from "../libraries/firebase";

const HomePage = () => {
  const [date, setDate] = useState(getYesterdaysDate());
  const [area, setArea] = useState(0);
  const [ratings, setRatings] = useState([]);

  console.log(`yesterday is ${date}`);

  useEffect(() => {
    async function getRefresh() {
      const newRatings = await getRating(date, area, 0);
      console.log("getRefresh", newRatings);
      setRatings(newRatings);
    }
    getRefresh();
  }, [date, area]);

  const handleDateChange = (value) => {
    setDate(value);
  };

  const handleAreaChange = (value) => {
    setArea(value);
  };

  return (
    <Box>
      <QueryToolbar
        date={date}
        onDateChange={handleDateChange}
        area={area}
        onAreaChange={handleAreaChange}
      />
      <RatingList ratings={ratings} />
    </Box>
  );
};

export default HomePage;
