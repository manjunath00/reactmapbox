# Building React + Mapbox User story

## Outcomes

- create a front-end application where the user can upload a CSV
- select the Latitude and Longitude column of the CSV
- & then view all the points on the map.
- need to create charts and graphs that depict a story

## WriteUp

I started off with converting all csv data to json using script in "data/extractData".
I only parsed 10000 items as it not possible to import all 40000 items in CRA in my pc.
I then imported the json file to js file. Then I exported the data.
I was not able to understand how to do first 2 two points on the outcome section
This data was then passed to App component.
Here the data as array was sliced in the length of 100 items as an array.
I was not able to plot all the data in one shot because it takes too much time in my computer.
After the data was sliced, it was passed as rides props to 3 components.
1st was Mapbox component. Here the rides is an array of objects. Then using map it is iterated.
Each object is then passed to the pin component which contains market from react-map-gl library.
Also there are two types of pin. One is drop pin & other is pickup pin.

2nd component is pagination component. It receives start, end index & the corresponding functions to
modify them as props. These function are called when the user clicks on the next & previous button.
These functions set the start & end index for array function slice.

This newly sliced data is once again passed to child component like mapbox, pagination & userstories
And component rerenders.

Then finally userstories. It receives rides as props & then it passed it over to its 3 child components.
They are BookingDayColumnChart, BookingsTimeLineChart & TravelTypePieChart.
BookingDay component highlights which day over the week had highest ridership.
Similarly Booking time component highlights which time over the day with highest bookings made.
Traveltype pie component shows popular types of travel. 

By clicking on the next & prev button a user can see the booking ride summary in the charts 100 items at a time.
