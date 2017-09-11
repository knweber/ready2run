$(document).ready(function() {
  $.getJSON('https://ipinfo.io/geo', function(response) {
    var loc = response.loc.split(',');
    var coords = {
      latitude: loc[0],
      longitude: loc[1]
    };
    var lat = coords.latitude;
    var lon = coords.longitude;
    $('.lat').text(lat);
    $('.lon').text(lon);
  });
});
