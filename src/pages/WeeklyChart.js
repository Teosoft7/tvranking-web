import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { getLast8WeeksRatings } from "../libraries/firebase";
import WeeklyChart from "../components/WeeklyChart";
import { Toolbar } from "@mui/material";

const WeeklyChartPage = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { item } = location.state;
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const refresh = async () => {
      const data = await getLast8WeeksRatings(
        item.collection,
        item.channel,
        item.programme
      );

      const labels = data.labels;
      const ratings = data.datasets[0].data;
      const newData = labels.map((e, i) => {
        return { labels: e, ratings: ratings[i] };
      });
      setChartData(newData);
    };

    refresh();
  }, []);

  return (
    <Box>
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
        <h3>최근 8회 시청률 추이</h3>
      </Toolbar>
      <Box component="span" sx={{ p: 2 }}>
        {item && (
          <h3 style={{ textAlign: "center" }}>
            {item.channel} - {item.programme}
          </h3>
        )}
      </Box>
      {chartData && <WeeklyChart data={chartData} />}
    </Box>
  );
};

export default WeeklyChartPage;
