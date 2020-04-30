import React from "react";
import Chart from "react-google-charts";
import PropTypes from "prop-types";

import { getDays } from "./chartsUtil";

function BookingsDayColumnChart({ rides }) {
  const days = getDays(rides);
  const dayNamesArray = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const daysDist = dayNamesArray.map((day, index) =>
    days[index] ? [day, days[String(index)]] : [day, 0]
  );

  return (
    <div className="chart">
      <Chart
        width={"350px"}
        height={"250px"}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[["Day", "Total Bookings"], ...daysDist]}
        options={{
          title: "Bookings over the week",
          legend: { position: "none" },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

BookingsDayColumnChart.propTypes = {
  rides: PropTypes.array.isRequired,
};


export default BookingsDayColumnChart;
