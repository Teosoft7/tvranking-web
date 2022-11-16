import React from "react";
import { useLocation } from "react-router-dom";

const RatingChart = (props) => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <div>
      <h5>Rating Chart loaded with item</h5>
      {item && <h5>{item.channel}</h5>}
      {item && <h5>{item.programme}</h5>}
    </div>
  );
};

export default RatingChart;
