import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import QueryToolbar from "../components/QueryToolbar";
import RatingList from "./RatingList";
import { getYesterdaysDate } from "../libraries/common";
import { getMaxDate } from "../libraries/firebase";
import { getRatings } from "../libraries/api"; // get rating from API

const HomePage = () => {
  const [date, setDate] = useState(getYesterdaysDate());
  const [area, setArea] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setRatings([]);
    const getRefresh = async () => {
      const newRatings = await getRatings(date, area, 1);
      setTimeout(() => {
        setIsLoading(false);
        setRatings(newRatings);
      }, 1000);
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
      {isLoading && (
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack>
            <CircularProgress />
            <h5>Loading...</h5>
          </Stack>
        </Box>
      )}
      {ratings.length > 0 ? (
        <Box>
          <RatingList ratings={ratings} />
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default HomePage;
