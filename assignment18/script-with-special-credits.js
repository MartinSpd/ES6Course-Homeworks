'use strict';

/*
    Homework Assignment #18: The W3C Geolocation API

*/

let map, service, infowindow, place = '';
const message = document.getElementById('message');

const locationObj = {
  latitude: '0',
  longitude: '0'
};

const currentLocation = locationObj;
const queryLocation = locationObj;



	/**
   * initializes map
   *
   */

function initMap() {

  getLocation();
  
  place = new google.maps.LatLng(currentLocation.latitude, 
    currentLocation.longitude);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: place, zoom: 15});

  const request = {
    query: 'library Bratislava, SK',
    fields: ['name', 'geometry'],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, (results, status) => {
  
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
      
      queryLocation.latitude = results[0].geometry.location.lat();
      queryLocation.longitude = results[0].geometry.location.lng();
    }
  });
}



	/**
   * creates marker for query result
   *
   */

function createMarker(place) {
  const marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', () => {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}



  /**
   * shows request for location
   * 
   */

function getLocation() {
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        setPosition, handleError);
    } else {
        alert('Geolocation is not supported by this browser.');
      }
}



  /**
   * sets locationObj object properties
   * 
   */

function setPosition(position) {
  
  currentLocation.latitude = position.coords.latitude.toString();
  currentLocation.longitude = position.coords.longitude.toString();
  
  console.log(`Latitude: ${currentLocation.latitude
    }, Longitude: ${currentLocation.longitude}`);
}



  /**
   * handles geolocation errors
   * 
   */
   
function handleError(error) {
  
  let emessage = '';
  
    switch(error.code) {
      case error.PERMISSION_DENIED:
        emessage = 'User denied the request for Geolocation.';
        break;
      case error.POSITION_UNAVAILABLE:
        emessage = 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        emessage = 'The request to get user location timed out.';
        break;
      case error.UNKNOWN_ERROR:
        emessage = 'An unknown error occurred.';
        break;
    }
    
	message.style.visibility ='visible';
  message.innerText = emessage;
}



  /**
   * loads map with dirrections into the screen
   * 
   */

function renderSearchedDirections() {
  
  const directionsDisplay = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  
  const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {lat: currentLocation.latitude, 
      	lng: currentLocation.longitude
    	}
  });
  
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('right-panel'));

	calculateAndDisplayRoute(directionsService, directionsDisplay);
}



	/**
   * counts directions
   *
   */
 
function calculateAndDisplayRoute(directionsService, directionsDisplay) {

	const start = new google.maps.LatLng(
  	currentLocation.latitude, currentLocation.longitude);
	const end = new google.maps.LatLng(
  	queryLocation.latitude, queryLocation.longitude);
  
  directionsService.route({
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  }, (response, status) => {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      	alert('Directions request failed due to ' + status);
    	}
  });
}


onload = () => {

  // event for notification Div
  message.addEventListener('click', (event) => {
      message.style.visibility = 'hidden';
  });

  // loading message handling
  message.style.visibility = 'visible';
  message.innerText = 'Loading ...';
      
  setTimeout(() => {
    message.style.visibility = 'hidden';
    message.innerText = '';
      }, 1000);
  console.log('210: ', queryLocation);
  //renderSearchedDirections();
}

