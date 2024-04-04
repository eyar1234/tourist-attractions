const button = document.querySelector(".button");
import { srcOfImage } from "./requests.js";
let page = 0;
async function renderTheCorrentObject(dataObject) {
  // print the page
  console.log(dataObject);

  let data = {
    name: dataObject.name,
    rating: dataObject.rating,
    address: dataObject.formatted_address,
    photoReference: dataObject.photos[0].photo_reference,
  };
  // console.log(data.photoReference);

  const src = await srcOfImage(data.photoReference);
  // console.log(src);

  // console.log(src);

  const html = `<article class="attraction">
  <img class="img" src="${src}" />
  <div class="data">
    <h3 class="name">${data.name}</h3>
    <h4 class="address">${data.address}</h4>
   
    <p class="attraction__row"><span>${`⭐️`.repeat(
      Math.floor(data.rating)
    )}</span>${data.rating}</p>
    
    </div>
    </article>
    `;
  if (page === 0) {
    document
      .querySelector(".attraction-container")
      .insertAdjacentHTML("beforeend", html);
    button.style.opacity = 1;
  }

  page++;
  if (page > 0) {
    document.querySelector(".attraction-container").innerHTML = html;
  }
}

export { renderTheCorrentObject };
