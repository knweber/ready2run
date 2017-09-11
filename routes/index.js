require('dotenv').config();
var weatherPswrd = process.env.WEATHER;
var express = require('express');
var router = express.Router();
var app = require('../app');
// var controller = require('../controllers/index');
var jsdom = require('jsdom');
var dom = new jsdom.JSDOM(`<!DOCTYPE html>`);
var $ = require('jquery')(dom.window);

// var coords = controller.findLoc.responseJSON.loc;
// var coords = controller.findLoc;
// console.log(coords)

/* GET home page. */

router.get('/', (req, res) => {
  res.render('index', { weatherPswrd });
});

module.exports = router;
