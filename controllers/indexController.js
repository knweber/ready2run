var express = require('express');
var jsdom = require('jsdom');
var dom = new jsdom.JSDOM(`<!DOCTYPE html>`);
var $ = require('jquery')(dom.window);

// Gets current weather data for location of user's IP address
var getWeather = $.get('http://api.wunderground.com/api/' + process.env.WEATHER + '/conditions/q/autoip.json', function(res){
});

module.exports = getWeather;


// Will take all conditions into account and either recommend specific running gear (e.g. shorts and a rain jacket, insulated tights with base layer shirt and breathable outer layer) or advise that running would be too dangerous
var gearSuggestion = function(conditions,temp,wind,uv) {

};

// Helper functions to identify extreme weather conditions

// Extra caution is needed when temps are below 15 degrees F
var tooCold = function(temp) {
  temp < 15;
}

// Don't run in temps above 90 degrees F
var tooHot = function(temp) {
  temp > 90;
}

// Don't run if wind gusts are stronger than 60mph
var tooWindy = function(wind) {
  wind >= 60;
}

// Extra caution is needed when the UV index is above 6
var highUv = function(uv) {
  uv >= 6;
}
