const celebs = require('../../celebs.json');

const list = async (req, res) => {
  res.json({
    results: celebs,
    total: celebs.length,
  });
};

module.exports = {
  list,
};
