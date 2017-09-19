require('dotenv').config();
var weatherPswrd = process.env.WEATHER;
var express = require('express');
var router = express.Router();
var app = require('../app');
var getWeather = require('../controllers/indexController');
var jsdom = require('jsdom');
var dom = new jsdom.JSDOM(`<!DOCTYPE html>`);
var $ = require('jquery')(dom.window);




/* GET home page. */

router.get('/', (req, res) => {
  var weatherData = {
    location: getWeather.responseJSON.current_observation.display_location,
    weatherGeneral: getWeather.responseJSON.current_observation.weather,
    temp: getWeather.responseJSON.current_observation.temperature_string,
    windMph: getWeather.responseJSON.current_observation.wind_mph,
    uvRad: getWeather.responseJSON.current_observation.UV
  };
  res.render('index', { weatherData });
});

module.exports = router;
