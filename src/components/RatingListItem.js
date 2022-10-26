import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Grid from "@mui/material/Grid";

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
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <h5>{item.rank}</h5>
            </Grid>
            <Grid item container xs={8}>
              <Grid container sx={{ p: 1 }}>
                <Grid xs={12}>
                  <h5>{item.channel}</h5>
                </Grid>
                <Grid xs={12}>
                  <h5>{item.program}</h5>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <h5>{item.rating}</h5>
            </Grid>
          </Grid>
        </ListItemButton>
      </ListItem>
    </div>
  );
};

export default RatingListItem;
