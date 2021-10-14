const express = require('express');
const router = express.Router();

const provinces = require('../controller/provinces');

router.get('/', provinces.index);
module.exports = router;