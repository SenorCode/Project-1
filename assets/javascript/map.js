var map, infoWindow;

var latLng = {};
//var address = latLng;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 12
  });
  infoWindow = new google.maps.InfoWindow();

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
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
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(pos);
        // RUN DISPLAY CORDS IN HERE (REPLACE THIS AND PASS THE LAT/LNG INTO WHATEVER FUNCTION YOU NEED NEXT)
        displayCords();
        getPlacesSearch();
        getPlacesSearch2();
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
  console.log();
}

var cords = {};

function displayCords() {
  console.log("this is latlng" + latLng);

  //actually first we want to turn the variable latLng into a string
  var latLng2 = JSON.stringify(latLng);
  console.log("this is latlng2" + latLng2);
  //next we want to break latitude and longitude into strings
  var latLng3 = latLng2.split(":");
  console.log("1st:" + latLng3);
  //then breakt he string into halves
  var latLng4 = latLng3[1].split(",");
  console.log("this is latLng4: " + latLng4);
  var latLng7 = latLng4[0].split(",");
  console.log("this is latLng7: " + latLng7);

  var latLng5 = latLng3[2];
  console.log("this is latLng5: " + latLng5);
  var latLng8 = latLng5.split("}");
  var latLng9 = latLng8[0].split(",");
  console.log("this is string 1:" + latLng7);
  console.log("this is string 2:" + latLng9);
  //then retreieve only the numbers
  cords = latLng7 + "," + latLng9;
  console.log(cords);
}

function getPlacesSearch() {
  //https://maps.googleapis.com/maps/api/geocode/json?address=&key=AIzaSyAW9lFmJMYbddFXdw-loJi75xyNw_w5yaE
  // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
  $.ajax({
    url:
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      cords +
      "&key=AIzaSyAW9lFmJMYbddFXdw-loJi75xyNw_w5yaE",
    // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
    type: "GET"
  }).then(function(response) {
    console.log(response);
  });
}

$("#search-button").on("click", function() {
  $.ajax({
    url:
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
      cords +
      "&radius=500&type=restaurant&key=AIzaSyAW9lFmJMYbddFXdw-loJi75xyNw_w5yaE",
    type: "GET"
  }).then(function(response2) {
    console.log(response2);

    var div1 = $("div1");
    var newName = $("<h5>").text(response2.results[0].name);
    var newRating = $("<h5>").text(response2.results[0].rating);
    //var newImage = $("<img>").text(response2.results[0].icon);
    div1.append(newName, newRating);

    var div1 = $("div1");
    var newName = $("<h5>").text(response2.results[1].name);
    var newRating = $("<h5>").text(response2.results[1].rating);
    div1.append(newName, newRating);

    var div1 = $("div1");
    var newName = $("<h5>").text(response2.results[2].name);
    var newRating = $("<h5>").text(response2.results[2].rating);
    div1.append(newName, newRating);

    var div1 = $("div1");
    var newName = $("<h5>").text(response2.results[3].name);
    var newRating = $("<h5>").text(response2.results[3].rating);
    div1.append(newName, newRating);

    var div1 = $("div1");
    var newName = $("<h5>").text(response2.results[4].name);
    var newRating = $("<h5>").text(response2.results[4].rating);
    div1.append(newName, newRating);

})
})

function getPlacesSearch2() {
  $.ajax({
    url:
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
      cords +
      "&radius=500&type=restaurant&key=AIzaSyAW9lFmJMYbddFXdw-loJi75xyNw_w5yaE",
    type: "GET"
  }).then(function(response2) {
    console.log(response2);

    var div1 = $("image1");
    var newName = $("<h5>").text(response2.results[0].name);
    var newRating = $("<h5>").text("Rating: " + response2.results[0].rating + " out of 5");
    // var newprice=  $("<h5>").text(response2.results[0].price_level+);
    var newImage = $("<h5>").text(response2.results[0].photos[0].html_attributions)
    div1.append(newName, newRating);

    var div1 = $("div1");
    var newName = $("<h5>").text(response2.results[0].name);
    var newRating = $("<h5>").text("Rating: " + response2.results[0].rating + " out of 5");
    // var newprice=  $("<h5>").text(response2.results[0].price_level+);
    var newImage = $("<h5>").text(response2.results[0].photos[0].html_attributions)
    div1.append(newName, newRating);

    var div1 = $("div1");
    var newName = $("<h5>").text(response2.results[1].name);
    var newRating = $("<h5>").text("Rating: " + response2.results[1].rating + " out of 5");
    div1.append(newName, newRating);

    var div1 = $("div1");
    var newName = $("<h5>").text(response2.results[2].name);
    var newRating = $("<h5>").text("Rating: " + response2.results[2].rating + " out of 5");
    div1.append(newName, newRating);

    var div1 = $("div1");
    var newName = $("<h5>").text(response2.results[3].name);
    var newRating = $("<h5>").text("Rating: " + response2.results[3].rating + " out of 5");
    div1.append(newName, newRating);

    var div1 = $("div1");
    var newName = $("<h5>").text(response2.results[4].name);
    var newRating = $("<h5>").text("Rating: " + response2.results[4].rating + " out of 5");
    div1.append(newName, newRating);
    $(".side-menu").append(div1);
   // var results2= response2.results;
//console.log(results2);
  //  for ( var i = 0; i <results2.length; i++) {
     
  //  }
  });
}
