const { Router } = require('express');

const { get } = require('./controller');

const router = Router();

const RESOURCE = 'cache';

router.get(`/${RESOURCE}/*`, get);

module.exports = router;
