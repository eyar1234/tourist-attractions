import { coordsToData } from "./requests.js";
import { renderTheCorrentObject } from "./model.client.js";
const button = document.querySelector(".button");

let page = 0;

navigator.geolocation.getCurrentPosition(success, error);

async function success(postion) {
  // get the coords
  const latitude = postion.coords.latitude;
  const longitude = postion.coords.longitude;

  //get the data
  const dataArray = await coordsToData(latitude, longitude);

  // remove duplicate objects
  const uniqueDataArray = dataArray.filter(
    (obj, index) =>
      dataArray.findIndex((item) => item.name === obj.name) === index
  );

  // use the new object
  const dataObject = uniqueDataArray[page];

  // render

  await renderTheCorrentObject(dataObject);
  page++;
  // render by the button
  button.addEventListener("click", function () {
    // check if page not big then the array
    if (page === dataArray.length - 1) {
      page = 0;
    }
    page++;
    renderTheCorrentObject(uniqueDataArray[page]);
    console.log(page);
  });
}

function error(err) {
  console.log(err);
}
