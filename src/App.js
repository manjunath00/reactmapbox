import React, { useState, useEffect } from "react";

import ridesData from "./data";
import Mapbox from "./components/mapbox";
import Pagination from "./components/Pagination";
import UserStories from "./components/charts";

function App() {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(100);
  const [rides, setRides] = useState(ridesData.slice(0, 100));
  const totalRides = ridesData.length;

  useEffect(() => {
    setRides(ridesData.slice(startIndex, endIndex));
  }, [startIndex, endIndex]);

  return (
    <div className="container">
      <Mapbox rides={rides} />
      <Pagination
        startIndex={startIndex}
        setStartIndex={setStartIndex}
        endIndex={endIndex}
        setEndIndex={setEndIndex}
        totalRides={totalRides}
      />
      <UserStories rides={rides} />
    </div>
  );
}

export default App;
