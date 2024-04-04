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

  const dataObject = dataArray[page];

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
    renderTheCorrentObject(dataArray[page]);
    console.log(page);
  });
}

function error(err) {
  console.log(err);
}
