export const getDays = (rides) => {
  const week = {};
  for (let ride of rides) {
    const day = new Date(ride.from_date).getDay();
    if (week[day]) {
      week[day] += 1;
    } else {
      week[day] = 1;
    }
  }
  return week;
};

export const getHours = (rides) => {
  const hoursDis = {};
  for (let ride of rides) {
    const hour = new Date(ride.from_date).getHours();
    if (hoursDis[hour]) {
      hoursDis[hour] += 1;
    } else {
      hoursDis[hour] = 1;
    }
  }
  return hoursDis;
};

export const getTravelTypes = (rides) => {
  const travelTypes = {};
  for (let ride of rides) {
    const type = ride.travel_type_id;
    if (travelTypes[type]) {
      travelTypes[type] += 1;
    } else {
      travelTypes[type] = 1;
    }
  }
  return travelTypes;
};
