import Logo from "./logo";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import MyLocationIcon from "@mui/icons-material/MyLocation";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import TodayIcon from "@mui/icons-material/Today";

import QueryToolbar from "../components/QueryToolbar";

const MainNavigation = (props) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>
          <IconButton
            size="large"
            aria-label="help"
            color="inherit"
            onClick={() => {
              //show modal help page
              console.log("Help Icon Clicked");
            }}
          >
            <HelpOutlineIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainNavigation;
