const posts = require('../../posts.json');

const list = async (req, res) => {
  const { celebId } = req.query;
  const results = celebId ? posts.filter(post => post.celebId === celebId) : posts;

  res.json({
    results,
    total: results.length,
  });
};

module.exports = {
  list,
};
