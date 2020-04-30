import ReactMapGL from "react-map-gl";
import React, { useState } from "react";
import PropTypes from "prop-types";

import Pin from "./Pin";

const token = process.env.REACT_APP_MAPBOX_API_KEY;

const Mapbox = ({ rides }) => {
  const mapBoxviewport = {
    width: "100vw",
    height: "100vh",
    latitude: 12.9716,
    longitude: 77.5946,
    zoom: 10,
  };

  const [viewport, setViewport] = useState(mapBoxviewport);

  return (
    <div className="map-container">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={token}
        onViewportChange={(newViewport) => setViewport({ ...newViewport })}>
        {rides.map((ride) => {
          if (
            Number(ride.to_lat) &&
            Number(ride.to_long) &&
            Number(ride.from_lat) &&
            Number(ride.from_long)
          ) {
            return (
              <div key={`pins-${ride.id}`}>
                <Pin ride={ride} type="drop" />
                <Pin ride={ride} type="pickup" />
              </div>
            );
          } else {
            return null;
          }
        })}
      </ReactMapGL>
    </div>
  );
};

Mapbox.propTypes = {
  rides: PropTypes.array.isRequired,
};

export default Mapbox;
