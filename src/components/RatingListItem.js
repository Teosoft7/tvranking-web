import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Grid from "@mui/material/Grid";

import ChannelLogo from "./ChannelLogo";

const RatingListItem = (props) => {
  const { item } = props;

  return (
    <div>
      <ListItem
        alignItems="flex-start"
        sx={{
          m: 1,
          p: 0.5,
          margin: "auto",
          flexGrow: 1,
        }}
      >
        <ListItemButton
          onClick={() => {
            console.log("List Item Clieck");
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <h3>{item.rank}</h3>
            </Grid>
            <Grid item container xs={9}>
              <Grid container sx={{ p: 1 }}>
                <Grid xs={12}>
                  <ChannelLogo channel={item.channel} />
                </Grid>
                <Grid xs={12}>
                  <h4>{item.programme}</h4>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <h3>{item.rating}</h3>
            </Grid>
          </Grid>
        </ListItemButton>
      </ListItem>
    </div>
  );
};

export default RatingListItem;
