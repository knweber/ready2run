require('dotenv').config();
var express = require('express');
var router = express.Router();
var app = require('../app');
var getWeather = require('../controllers/indexController');
var jsdom = require('jsdom');
var dom = new jsdom.JSDOM(`<!DOCTYPE html>`);
var $ = require('jquery')(dom.window);

router.get('/', (req, res) => {
  var weatherData = {
    location: getWeather.responseJSON.current_observation.display_location,
    weatherGeneral: getWeather.responseJSON.current_observation.weather,
    temp: getWeather.responseJSON.current_observation.temp_f,
    windMph: getWeather.responseJSON.current_observation.wind_mph,
    uvRad: getWeather.responseJSON.current_observation.UV
  };
  // var toSend = JSON.stringify(weatherData);
  res.render('index', { weatherData });
});

module.exports = router;
