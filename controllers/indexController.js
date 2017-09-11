var express = require('express');
var jsdom = require('jsdom');
var dom = new jsdom.JSDOM(`<!DOCTYPE html>`);
var $ = require('jquery')(dom.window);
var lat;
var lon;

$.getJSON(('https://api.darksky.net/forecast/' + process.env.DARK_SKY_KEY + '/' + lat + ',' + lon), function(response) {
  console.log(response);
})
