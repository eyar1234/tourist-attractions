const { ReferenceToSrc } = require("../model.js");

async function ImageData(req, res) {
  const { photoReference } = req.body;

  const src = await ReferenceToSrc(photoReference);
  res.send(src);
}

module.exports = ImageData;
