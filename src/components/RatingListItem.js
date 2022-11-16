import React from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import ChannelLogo from "./ChannelLogo";

const RatingListItem = (props) => {
  const { item } = props;
  const navigate = useNavigate();

  return (
    <div>
      <ListItem
        alignItems="flex-start"
        sx={{
          m: 0.5,
          p: 0.5,
          margin: "auto",
          flexGrow: 1,
        }}
      >
        <ListItemButton
          onClick={() => {
            console.log("List Item Clieck");
            navigate("/weekly_chart", { state: { item: item } }); // need to pass channel, programme
          }}
        >
          <Grid sx={{ height: 52 }} container spacing={1}>
            <Grid item aligItems="center" justifyContent="center" xs={1}>
              <h3>{item.rank}</h3>
            </Grid>
            <Grid item container xs={9}>
              <Grid
                aligItems="center"
                justifyContent="center"
                direction="row"
                container
                sx={{ p: 1 }}
              >
                <Grid sx={{ height: 3 }} xs={12}>
                  <ChannelLogo channel={item.channel} />
                </Grid>
                <Grid xs={12}>
                  <h4>{item.programme}</h4>
                </Grid>
              </Grid>
            </Grid>
            <Grid aligItems="center" justifyContent="center" item xs={2}>
              <h4>{item.rating}%</h4>
            </Grid>
          </Grid>
        </ListItemButton>
      </ListItem>
      <Divider />
    </div>
  );
};

export default RatingListItem;
