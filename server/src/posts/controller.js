const posts = require('../../posts.json');

const list = async (req, res) => {
  const { celebId } = req.query;
  const sortPost = (a, b) => new Date(b.timestamp) - new Date(a.timestamp);
  const results = celebId
  ? posts.filter(post => post.celebId === celebId).sort(sortPost)
  : posts.sort(sortPost);

  res.json({
    results,
    total: results.length,
  });
};

module.exports = {
  list,
};
