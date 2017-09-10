var express = require('express');
var router = express.Router();
var geolocator = require('../controllers/index');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
