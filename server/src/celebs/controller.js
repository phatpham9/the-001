const celebs = require('../../celebs.json');

const list = async (req, res) => {
  res.json({
    results: celebs,
    count: celebs.length,
  });
};

module.exports = {
  list,
};
