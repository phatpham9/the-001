const posts = require('../../posts.json');

const LIMIT = 25;

const list = async (req, res) => {
  const { celebId, offset = 0 } = req.query;
  const sortPost = (a, b) => new Date(b.timestamp) - new Date(a.timestamp);

  const filteredPosts = celebId ? posts.filter(post => post.celebId === celebId) : posts;

  const results = filteredPosts.sort(sortPost).slice(+offset, +offset + LIMIT);

  res.json({
    results,
    count: results.length,
    total: filteredPosts.length,
  });
};

module.exports = {
  list,
};
