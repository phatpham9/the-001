const { Router } = require('express');

const { list } = require('./controller');

const router = Router();

const RESOURCE = 'celebs';

router.get(`/${RESOURCE}`, list);

module.exports = router;
