$(document).ready(function(){
  $.getJSON('https://ipinfo.io/geo', function(response) {
      var loc = response.loc.split(',');
      console.log(loc);
      var coords = {
          latitude: loc[0],
          longitude: loc[1]
      };
  });
})

module.exports = geolocator;
