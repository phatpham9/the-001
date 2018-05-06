const celebs = require('../../celebs.json');

const list = async (req, res) => {
  res.json({
    results: celebs.map(({ id, name }) => ({ id, name })),
    count: celebs.length,
    total: celebs.length,
  });
};

module.exports = {
  list,
};
