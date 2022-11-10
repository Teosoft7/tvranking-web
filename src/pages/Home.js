import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import QueryToolbar from "../components/QueryToolbar";
import RatingList from "./RatingList";
import { getYesterdaysDate } from "../libraries/common";
import { getMaxDate } from "../libraries/firebase";
import { getRatings } from "../libraries/api"; // get rating from API

const HomePage = () => {
  const [date, setDate] = useState(getYesterdaysDate());
  const [area, setArea] = useState(0);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const getRefresh = async () => {
      const newRatings = await getRatings(date, area, 1);
      console.log("getRefresh", newRatings);
      setRatings(newRatings);
    };
    getRefresh();
  }, [date, area]);

  useEffect(() => {
    const refreshFunc = async () => {
      const maxDate = await getMaxDate();
      setDate(maxDate);
    };
    refreshFunc();
  }, []);

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
