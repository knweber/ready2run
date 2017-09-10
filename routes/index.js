var express = require('express');
var router = express.Router();
var geolocator = require('../controllers/index');

/* GET home page. */
router.get('/', (req, res) => {
  var userLoc = geolocator.responseJSON;
  res.render('index', { userLoc });
});

module.exports = router;
