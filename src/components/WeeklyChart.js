import React from "react";

const WeeklyChart = (props) => {
  const { item } = props;

  console.log("Weekly chart:", props);

  return (
    <div>
      <h5>Weekly Chart</h5>
      <h5>{item.channel}</h5>
      <h5>{item.programme}</h5>
    </div>
  );
};

export default WeeklyChart;
