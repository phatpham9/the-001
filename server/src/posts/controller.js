const posts = require('../../posts.json');
const { MEDIA_SERVER_URL, RESOURCE: MEDIA_PATH } = require('../media');

const LIMIT = 25;

const list = async (req, res) => {
  const { celebId, offset = 0 } = req.query;
  const sortPost = (a, b) => new Date(b.timestamp) - new Date(a.timestamp);

  const filteredPosts = celebId ? posts.filter(post => post.celebId === celebId) : posts;

  const results = filteredPosts
  .sort(sortPost)
  .slice(+offset, +offset + LIMIT)
  .map(({ medias, ...rest }) => ({
    ...rest,
    medias: medias ? medias.map(media => media.replace(MEDIA_SERVER_URL, MEDIA_PATH)) : undefined,
  }));

  res.json({
    results,
    count: results.length,
    total: filteredPosts.length,
  });
};

module.exports = {
  list,
};
