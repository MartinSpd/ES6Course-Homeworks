'use strict';

/*
    Homework Assignment #18: The W3C Geolocation API

*/

const container = document.getElementById('container');
const mapFrame = document.getElementById('gmaps');
const message = document.getElementById('message');

const site = 'https://www.google.com/maps/embed/v1/';
const placeKey = 'AIzaSyBvFPgwXiJ-gCB1IDNVQkbA_zrTm3iyhPA';
let place = 'Dóm+sv.+Martina,+Bratislava,+Slovensko';
let options = '';//'&zoom=18';

const locationObj = {
  latitude: '0',
  longitude: '0'
};

onload = () => {
  
  getLocation();
  place = `${locationObj.latitude}${locationObj.longitude}`;
  
  mapFrame.src = `${site}place?key=${placeKey}
    &q= ${place} ${options}`;
};

document.getElementById('message').
  addEventListener('click', (event) => {
    message.style.visibility = 'hidden';
});



  /**
   * shows request for location
   * 
   */

function getLocation() {
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      setPosition, handleError);
  } else { 
      message.innerText = 
        'Geolocation is not supported by this browser.';
    }
}



  /**
   * sets locationObj object properties
   * 
   */

function setPosition(position) {
  
  locationObj.latitude = position.coords.latitude.toString();
  locationObj.longitude = position.coords.longitude.toString();
  
  console.log(`Latitude: ${locationObj.latitude
    }, Longitude: ${locationObj.longitude}`);
}



  /**
   * handles geolocation errors
   * 
   */
   
function handleError(error) {
  
  let message = '';
  
    switch(error.code) {
      case error.PERMISSION_DENIED:
        message = 'User denied the request for Geolocation.';
        break;
      case error.POSITION_UNAVAILABLE:
        message = 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        message = 'The request to get user location timed out.';
        break;
      case error.UNKNOWN_ERROR:
        message = 'An unknown error occurred.';
        break;
    }
  
  message.style.visibility = 'visible';
  message.innerText = message;
}


      
/**
Details:
 
There are multiple ways for a website to determine 
a user's location. The most consistently-accurate 
method is the W3C Geolocation API (you may also se
e this API referred to as the "HTML5 Geolocation A
PI".

For this assignment, you are to use MDN as a resou
rce to learn everything you can about this useful 
API. Start here:

https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

To try out the API yourself, scroll down on that p
age to the "Geolocation Live Example" and look for 
the "Live Result" at the end.

Once you've familiarized yourself with the API, bu
ild a standalone webpage that shows a map of the u
ser's current location. The webpage should:

1.  Prompt the user to allow the use of Geolocatio
n API

2. If the user allows the API, use the Google maps 
API to display a large map of their current area, 
with a pin on their exact location. Here's a hint 
on how to do that.

3. If the user doesn't allow the API, display an e
rror message on the page instead.

Note: the "maps" in this assignment have nothing t
o do with the "maps" you learned about in the "map
s and sets" lecture before this. It's just a coinc
idence.

Extra Credit:

Instead of showing a pin of their current location
, show the user driving directions from their curr
ent location to the nearest library.
 */