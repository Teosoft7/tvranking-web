import React from "react";

import Box from "@mui/material/Box";
import QueryToolbar from "../components/QueryToolbar";
import RatingList from "./RatingList";

const HomePage = () => {
  return (
    <Box>
      <QueryToolbar />
      <RatingList />
    </Box>
  );
};

export default HomePage;
