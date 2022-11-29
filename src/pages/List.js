import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import QueryToolbar from "../components/QueryToolbar";
import RatingList from "../components/RatingList";
import { getYesterdaysDate } from "../libraries/common";
import { getMaxDate } from "../libraries/firebase";
import { getRatings } from "../libraries/api"; // get rating from API

const ListPage = () => {
  const [tab, setTab] = useState(1);
  const [date, setDate] = useState(getYesterdaysDate());
  const [area, setArea] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  useEffect(() => {
    setIsLoading(true);
    setRatings([]);
    const getRefresh = async () => {
      const newRatings = await getRatings(date, area, tab);
      setTimeout(() => {
        setIsLoading(false);
        setRatings(newRatings);
      }, 1000);
    };
    getRefresh();
  }, [date, area, tab]);

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
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <AppBar position="static">
            <TabList
              onChange={handleChange}
              aria-label="Channel Category"
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="inherit"
            >
              <Tab label="지상파" value={1} />
              <Tab label="케이블" value={3} />
              <Tab label="종합편성" value={2} />
            </TabList>
          </AppBar>
          <QueryToolbar
            date={date}
            onDateChange={handleDateChange}
            area={area}
            onAreaChange={handleAreaChange}
          />
        </Box>
        {ratings.length > 0 ? (
          <TabPanel value={tab}>
            <Box>
              <RatingList ratings={ratings} />
            </Box>
          </TabPanel>
        ) : (
          <></>
        )}
      </TabContext>
    </Box>
  );
};

export default ListPage;
