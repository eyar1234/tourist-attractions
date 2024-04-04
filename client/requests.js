async function coordsToData(latitude, longitude) {
  try {
    const res = await axios.post("/location", { latitude, longitude });
    console.log(res.data);

    return res.data.results;
  } catch (error) {}
}

async function srcOfImage(photoReference) {
  const res = await axios.post("/image", { photoReference });

  return res.data;
}

export { coordsToData, srcOfImage };
