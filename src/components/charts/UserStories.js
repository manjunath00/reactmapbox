import React from "react";
import PropTypes from "prop-types";

import BookingsDay from "./BookingsDayColumnChart";
import BookingsTime from "./BookingsTimeLineChart";
import TravelTypes from "./TravelTypePieChart";

function UserStories({ rides }) {
  return (
    <div className="charts-container">
      <BookingsDay rides={rides} />
      <TravelTypes rides={rides} />
      <BookingsTime rides={rides} />
    </div>
  );
}

UserStories.propTypes = {
  rides: PropTypes.array.isRequired,
};

export default UserStories;
