var express = require('express');
var jsdom = require('jsdom');
var dom = new jsdom.JSDOM(`<!DOCTYPE html>`);
var $ = require('jquery')(dom.window);


// exports.getLocation = function($) {
var geolocator = $.getJSON('https://ipinfo.io/geo', function(response) {
    var loc = response.loc.split(',');
    console.log(loc);
    var coords = {
        latitude: loc[0],
        longitude: loc[1]
    };
  });
// };

module.exports = geolocator;
