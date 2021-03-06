/* eslint-disable */
var listImg = document.getElementById('listImg');
var mapImg = document.getElementById('mapImg');
var mapDiv = document.getElementById('mapid');
var listResults = document.getElementById('listResults');



var mymap = L.map('mapid').setView(currentLL, 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 16,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibHVjeW1rIiwiYSI6ImNqY2hxOXp0ODJiOW8yeHBnMmxtMjZuNnAifQ.tsRJmfxB-VdGws5WHp0yhQ'
}).addTo(mymap);

resultsArr.forEach(function(place, i){
    console.log(place.lat_long);
        var latlongArr = place.lat_long.split(",");
        latlongArr[0] = (latlongArr[0] * 1);
        latlongArr[1] = (latlongArr[1] * 1);
        var marker = L.marker(latlongArr).addTo(mymap);
        marker.bindPopup(`<a href="/place/${place.name}">${place.name}</a>` + ", " + place.address)
    });

listImg.addEventListener("click", function(e){
    e.preventDefault();
    mapImg.style.display = "inline-block";
    listImg.style.display = "none";
    mapDiv.style.display = "none";
    listResults.style.display = "block";
})

mapImg.addEventListener("click", function(e){
    e.preventDefault();
    mapImg.style.display = "none";
    listResults.style.display = "none";
    listImg.style.display = "inline-block";
    mapDiv.style.display = "block";
    mymap.invalidateSize();
})

window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});