import React from "react";
import { VictoryChart, VictoryArea } from "victory";

const WeeklyChart = (props) => {
  const { data } = props;

  return (
    <div>
      <VictoryChart>
        <VictoryArea
          data={data}
          x="labels"
          y="ratings"
          style={{ data: { fill: "#4a15ad" } }}
        />
      </VictoryChart>
    </div>
  );
};

export default WeeklyChart;
