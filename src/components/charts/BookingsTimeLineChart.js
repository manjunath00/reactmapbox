import React from "react";
import Chart from "react-google-charts";
import PropTypes from "prop-types";

import { getHours } from "./chartsUtil";

function BookingsTimeLineChart({ rides }) {
  const hoursObj = getHours(rides);
  const hourNamesArray = [
    "0 - 1",
    "1-2",
    "2-3",
    "3-4",
    "4-5",
    "5 - 6",
    "6 - 7",
    "7 - 8",
    "8 - 9",
    "9 - 10",
    "10 - 11",
    "11 - 12",
    "12 - 13",
    "13 - 14",
    "14 - 15",
    "15 - 16",
    "16 - 17",
    "17 - 18",
    "18 - 19",
    "19 - 20",
    "20 - 21",
    "21 - 22",
    "22 - 23",
    "23 - 0,",
  ];

  const hoursDistArray = hourNamesArray.map((hour, index) =>
    hoursObj[index] ? [hour, hoursObj[index]] : [hour, 0]
  );

  return (
    <div className="chart">
      <Chart
        width={"350px"}
        height={"250px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[["Day", "Total Bookings"], ...hoursDistArray]}
        options={{
          title: "Bookings over the day",
          legend: { position: "none" },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

BookingsTimeLineChart.propTypes = {
  rides: PropTypes.array.isRequired,
};


export default BookingsTimeLineChart;
