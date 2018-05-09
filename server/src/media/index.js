const { Router } = require('express');

const { MEDIA_SERVER_URL, get } = require('./controller');

const router = Router();

const RESOURCE = 'media';

router.get(`/${RESOURCE}/*`, get);

module.exports = {
  MEDIA_SERVER_URL,
  RESOURCE,
  router,
};
