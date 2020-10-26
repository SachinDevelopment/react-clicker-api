const router = (module.exports = require("express").Router());
const handler = require('../handlers/rename');

router.get('/action', handler);