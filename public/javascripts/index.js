// No longer needed, as the Weather Underground API provides weather information for the location of the user's IP address

$(document).ready(function() {
  var app = '../../app';
  var lat;
  var lon;

  // Getting the coordinates of the user's current location
  $.getJSON('https://ipinfo.io/geo', function(response) {
    var loc = response.loc.split(',');
    var coords = {
      latitude: loc[0],
      longitude: loc[1]
    };
    lat = coords.latitude;
    lon = coords.longitude;
  //  $('.lat').text(lat);
  //  $('.lon').text(lon);
  });
});
