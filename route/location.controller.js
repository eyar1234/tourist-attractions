const { getTheName, getTheAttractions } = require("../model.js");

async function locationData(req, res) {
  const { latitude, longitude } = req.body;

  console.log(`the coords are ${latitude} ${longitude}`);
  // the city name
  const cityName = await getTheName(latitude, longitude);
  console.log(cityName);

  // use the city name
  const attractions = await getTheAttractions(cityName);

  // send the data back to the client
  res.send(attractions);
  const placeInfo = {
    name: attractions.results[0].name,
    rating: attractions.results[0].rating,
    address: attractions.results[0].formatted_address,
    photoWidth: attractions.results[0].photos[0].width,
    photoReference: attractions.results[0].photos[0].photo_reference,
  };
}

module.exports = locationData;
