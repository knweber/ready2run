var express = require('express');
var jsdom = require('jsdom');
var dom = new jsdom.JSDOM(`<!DOCTYPE html>`);
var $ = require('jquery')(dom.window);

var getWeather = $.get('http://api.wunderground.com/api/' + process.env.WEATHER + '/conditions/q/autoip.json', function(res){
});

module.exports = getWeather;

var gearSuggestion = function(conditions,temp,wind,uv) {

};

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
