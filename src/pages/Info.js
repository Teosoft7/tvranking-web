import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const InfoPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Toolbar sx={{ position: "static", background: "#86BBD8" }}>
        <IconButton
          aria-label="back"
          onClick={() => {
            // back button
            navigate(-1);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <h3>About TV Ranking</h3>
      </Toolbar>
      <Box sx={{ alignContent: "center", p: 2 }}>
        <h2>TV Ranking - Top 20 TV Programs of yesterday</h2>
        <Box sx={{ m: 0.5, p: 2 }}>
          <img src={"icon_512.png"} alt="ICON" width={128} height="auto" />
        </Box>
        <p>What is famous TV show yesterday?</p>
        <p>
          TV Ranking shows you how much percentage of household watched TV show.
        </p>
        <p>
          Data Soucre : Nielsen Media Korea{" "}
          <a href="http://nielsenmedia.co.kr">(http://nielsenmedia.co.kr)</a>
        </p>
        <p>
          Designed and implemented by :{" "}
          <a href="mailto:thjeon.wa@gmail.com">TAE HO JEON</a>
        </p>
        <p>
          Source Code :
          <a href="https://github.com/Teosoft7/tvranking-web.git">GITHUB</a>
        </p>
      </Box>
    </div>
  );
};

export default InfoPage;
