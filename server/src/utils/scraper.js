require('datejs');
const Fs = require('fs');
const x = require('x-ray')();

const xPromise = require('./promise-x-ray');
const posts = require('../../posts.json');

const FORWARD_MEDIA_SERVER = 'https://media.stardary.com';

const sScope = '#container-grid-post .idol__content .idol__container';
const selectors = {
  eid: '.idol__inner figcaption .post-msg@id',
  avatar: '.idol__inner .heading .avatar img@src',
  name: '.idol__inner .heading .info h3',
  date: '.idol__inner .heading .info .date@title',
  text: '.idol__inner figcaption .post-msg .quote',
  medias: ['.idol__inner figcaption .media-object-section .thumbnail img@src'],
  comments: x('.other-fansay-block .idol__content', [{
    avatar: '.heading .avatar img@src',
    name: '.heading .info h3',
    date: '.heading .info .date@title',
    text: 'figcaption .fans-msg .quote',
  }]),
};

const getPosts = async ({ id: celebId, url: sUrl }) => {
  const data = await xPromise(sUrl, sScope, [selectors]);

  try {
    data.forEach((post) => {
      const { eid } = post;
      const isExisted = !!posts.find(o => o.eid === eid);
      if (!isExisted && eid) {
        const medias = post.medias.map(media => media.replace(`${FORWARD_MEDIA_SERVER}`, ''));

        post = {
          celebId,
          ...post,
          medias,
          timestamp: (Date.parse(post.date)).getTime(),
        };

        posts.push(post);
      }
    });

    Fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2), 'utf8');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getPosts,
};
