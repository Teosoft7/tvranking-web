import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from "./logo";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const MainNavigation = (props) => {
  const navigate = useNavigate();

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
              // help icon button clicked
              navigate("/about");
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
