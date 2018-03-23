  // var map, infoWindow;

  // function initMap() {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: {lat: -34.397, lng: 150.644},
  //     zoom: 12
  //   });
  //   infoWindow = new google.maps.InfoWindow;

  //   // Try HTML5 geolocation.
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       var pos = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };

  //       infoWindow.setPosition(pos);
  //       infoWindow.setContent('Location found.');
  //       infoWindow.open(map);
  //       map.setCenter(pos);
  //     }, function() {
  //       handleLocationError(true, infoWindow, map.getCenter());
  //     });
  //   } else {
  //     // Browser doesn't support Geolocation
  //     handleLocationError(false, infoWindow, map.getCenter());
  //   }
  // } //end of initMap()

  // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //   infoWindow.setPosition(pos);
  //   infoWindow.setContent(browserHasGeolocation ?
  //                         'Error: The Geolocation service failed.' :
  //                         'Error: Your browser doesn\'t support geolocation.');
  //   infoWindow.open(map);
  // }
var map, infoWindow;
var latLng = {};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 12
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      // SET GLOBAL VARIABLE TO LAT AND LNG
      latLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
      // RUN DISPLAY CORDS IN HERE (REPLACE THIS AND PASS THE LAT/LNG INTO WHATEVER FUNCTION YOU NEED NEXT)
      displayCords();
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
  console.log()
}

function displayCords() {
  console.log(latLng);
}

// var queryURL = "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=AIzaSyAW9lFmJMYbddFXdw-loJi75xyNw_w5yaE";
do {
$.getJSON( {
  url  : "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+ latLng +"&radius=500&type=restaurant&keyword=cruise&key=AIzaSyAW9lFmJMYbddFXdw-loJi75xyNw_w5yaE",
  data : {
      sensor  : false,
      address : address
  },
  success : function( data, textStatus ) {
      console.log( textStatus, data );
  }
} );
}
while (latLng == {});