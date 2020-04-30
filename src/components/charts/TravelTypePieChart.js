import React from "react";
import Chart from "react-google-charts";
import PropTypes from "prop-types";

import { getTravelTypes } from "./chartsUtil";

function TravelTypePieChart({ rides }) {
  const travelTypes = getTravelTypes(rides);
  const travelTypesNames = ["Type 1", "Type 2", "Type 3"];
  const travelTypesArray = travelTypesNames.map((type, index) =>
    travelTypes[index + 1] ? [type, travelTypes[index + 1]] : null
  );

  return (
    <div className="chart">
      <Chart
        width={"270px"}
        height={"180px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[["Task", "Hours per Day"], ...travelTypesArray]}
        options={{
          title: "Various travel types",
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

TravelTypePieChart.propTypes = {
  rides: PropTypes.array.isRequired,
};

export default TravelTypePieChart;
