var express = require('express');
var jsdom = require('jsdom');
var dom = new jsdom.JSDOM(`<!DOCTYPE html>`);
var $ = require('jquery')(dom.window);
var location;
var weatherGeneral;
var temp;
var windMph;
var uvRad;
var toSend;

var getWeather = $.get('http://api.wunderground.com/api/' + process.env.WEATHER + '/conditions/q/autoip.json', function(res){
});

module.exports = getWeather;
