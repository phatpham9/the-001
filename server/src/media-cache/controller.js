const Fetch = require('node-fetch');

const FORWARD_MEDIA_SERVER = 'https://media.stardary.com';

const get = async (req, res) => {
  const imageUrl = `${FORWARD_MEDIA_SERVER}${req.path}`;
  const response = await Fetch(imageUrl);
  const buffer = await response.buffer();

  res.send(buffer);
};

module.exports = {
  get,
};
