$(document).ready(function() {
  var app = '../../app';
  var lat;
  var lon;
  $.getJSON('https://ipinfo.io/geo', function(response) {
    var loc = response.loc.split(',');
    var coords = {
      latitude: loc[0],
      longitude: loc[1]
    };
    lat = coords.latitude;
    lon = coords.longitude;
    $('.lat').text(lat);
    $('.lon').text(lon);
  });
});
