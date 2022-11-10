import React from "react";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";

const RatingListHeader = () => {
  return (
    <Toolbar sx={{ background: "#86BBD8" }}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <h3>Rank</h3>
        </Grid>
        <Grid item container xs={8}>
          <h3>Programme</h3>
        </Grid>
        <Grid item xs={2}>
          <h3>Rating</h3>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default RatingListHeader;