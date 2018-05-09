const Fetch = require('node-fetch');

const MEDIA_SERVER_URL = 'https://media.stardary.com';

const get = async (req, res) => {
  const imageUrl = `${MEDIA_SERVER_URL}/${req.params[0]}`;
  const response = await Fetch(imageUrl);
  const buffer = await response.buffer();

  res.send(buffer);
};

module.exports = {
  MEDIA_SERVER_URL,
  get,
};
