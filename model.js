const axios = require("axios");

async function getTheName(latitude, longitude) {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.GOOGLE_KEY}`
    );
    const data = response.data;

    if (data.status === "OK" && data.results.length > 0) {
      const addressComponents = data.results[0].address_components;
      let city = "";
      // Loop through address components to find the city
      for (let i = 0; i < addressComponents.length; i++) {
        if (addressComponents[i].types.includes("locality")) {
          city = addressComponents[i].long_name;
          break;
        }
      }

      return city; // Return the city name
    } else {
      throw new Error(`Failed to fetch city: ${data.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
}

//get the attractions by the name

async function getTheAttractions(name) {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=$${name}+point+of+interest&language=he&key=${process.env.GOOGLE_KEY}`
    );

    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function ReferenceToSrc(photoReference, width = 400) {
  const res =
    await `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoReference}&maxwidth=${width}&key=${process.env.GOOGLE_KEY}`;
  return res;
}

module.exports = { getTheName, getTheAttractions, ReferenceToSrc };
