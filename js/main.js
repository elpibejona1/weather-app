//Problem: Georgia State Park information does not have current weather or forecast.
//Solution: Create an app with access to current weather, three day forecast, and links to Google Maps directions and Park Info

//Create Map Display
	//Display Google Map of GA on page load

var markers = [];
	
stateParksInfo.sort(function(a, b){
	var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
	if (nameA < nameB) {//sort string ascending
		return -1;
	} else if (nameA > nameB) {
		return 1;
	} else {
		return 0;
	}		//default return value (no sorting)
})
	
function populateParks () {
	for ( var i = 0; i < stateParksInfo.length; i += 1 ) {
		var park = '<option value= "' + i + '" class="parks">' + stateParksInfo[i].name + '</option>';
		$('#parks').append(park);
	}
}

var $weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast/daily?&APPID=460510bb0907cfdd3a3f841880e34246';

var weatherTable = '';
	
var weatherInfo = function ( i , $weatherOptions, infoWindow) {
	$.getJSON($weatherAPI, $weatherOptions, function (response){
		//Title
		weatherTable = '<div id="content"><div class="siteNotice"><h2 class="parkTitle">' + stateParksInfo[i].name + '</h2></div><div id="bodyContent">';
		//Top Row of Table
		weatherTable += '<table><tr><td></td><th>Today</th><th>Tomorrow</th></tr>';
		//2nd Row with Icons and Description
		weatherTable += '<tr><th>Conditions</th><td><img class="graphics" src="http://openweathermap.org/img/w/' + response.list[0].weather[0].icon + '.png"/><p>' + response.list[0].weather[0].main +'</p></td><td><img class="graphics" src="http://openweathermap.org/img/w/' + response.list[1].weather[0].icon + '.png"/><p>' + response.list[1].weather[0].main +'</p></td></tr>';
		weatherTable += '<tr><th>Day</th><td>' + Math.round(response.list[0].temp.day) + '&deg</td><td>' + Math.round(response.list[1].temp.day) + '&deg</td></tr>';
		weatherTable += '<tr><th>Night</th><td>'+ Math.round(response.list[0].temp.night) + '&deg</td><td>'+ Math.round(response.list[1].temp.night) + '&deg</td></tr>';
		weatherTable += '<tr><th>Humidity</th><td>' + response.list[0].humidity + '&#37</td><td>' + response.list[1].humidity + '&#37</td></tr>';
		//Close Out Table
		weatherTable += '</table></div>';
		weatherTable += '<div class="siteNotice"><a class="reserveSite" href="' + stateParksInfo[i].url + '" target="_blank">Reserve Your Site</a><a class="getDirections" href="' + stateParksInfo[i].dir + '" target="_blank">Get Directions</a></div></div>';
		infoWindow.setContent(weatherTable);
	});
}

var newMarkerInfo = function ($weatherOptions, place, infoWindow) {
	$.getJSON($weatherAPI, $weatherOptions, function (response){
		//Title
		weatherTable = '<div id="content"><div class="siteNotice"><h2 class="parkTitle">' + place + '</h2></div><div id="bodyContent">';
		//Top Row of Table
		weatherTable += '<table><tr><td></td><th>Today</th><th>Tomorrow</th></tr>';
		//2nd Row with Icons and Description
		weatherTable += '<tr><th>Conditions</th><td><img class="graphics" src="http://openweathermap.org/img/w/' + response.list[0].weather[0].icon + '.png"/><p>' + response.list[0].weather[0].main +'</p></td><td><img class="graphics" src="http://openweathermap.org/img/w/' + response.list[1].weather[0].icon + '.png"/><p>' + response.list[1].weather[0].main +'</p></td></tr>';
		weatherTable += '<tr><th>Day</th><td>' + Math.round(response.list[0].temp.day) + '&deg</td><td>' + Math.round(response.list[1].temp.day) + '&deg</td></tr>';
		weatherTable += '<tr><th>Night</th><td>'+ Math.round(response.list[0].temp.night) + '&deg</td><td>'+ Math.round(response.list[1].temp.night) + '&deg</td></tr>';
		weatherTable += '<tr><th>Humidity</th><td>' + response.list[0].humidity + '&#37</td><td>' + response.list[1].humidity + '&#37</td></tr>';
		//Close Out Table
		weatherTable += '</table></div>';
		weatherTable += '<div class="siteNotice"><a class="getDirections" href="https://www.google.com/maps/dir//' + place + '" target="_blank">Get Directions</a></div></div>';
		infoWindow.setContent(weatherTable);
	});
}



function initMap() {
	
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 32.766491, 
			lng: -83.266754},
		zoom: 6
	});

	var infoWindow = new google.maps.InfoWindow(), marker, i;
	
	var autocomplete;
	var countryRestrict = {'country': 'us'};
	var MARKER_PATH = 'https://maps.gstatic.com/intl/en_us/mapfiles/marker_green';
	var hostnameRegexp = new RegExp('^https?://.+?/');

	for ( i = 0; i < stateParksInfo.length; i += 1) {
		marker = new google.maps.Marker({
			position: {
				lat: stateParksInfo[i].latLng.lat,
				lng: stateParksInfo[i].latLng.lng,
			},
			map: map,
			title: stateParksInfo[i].name
		});
	
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                var $weatherOptions = {
					lat: stateParksInfo[i].latLng.lat,
					lon: stateParksInfo[i].latLng.lng,
					units: 'imperial',
				};
				var contentString = weatherInfo ( i , $weatherOptions, infoWindow);
				infoWindow.open(map, marker);
				map.center = marker.position;
			}
        })(marker, i));
		markers.push(marker);
	}	
	
	// Create the autocomplete object and associate it with the UI input control.
	// Restrict the search to the default country.
	autocomplete = new google.maps.places.Autocomplete(
		/** @type {!HTMLInputElement} */ (
        document.getElementById('locationInput')), {
      });
	places = new google.maps.places.PlacesService(map);

	autocomplete.addListener('place_changed', onPlaceChanged);
	
	// When the user selects a location, get the place details for the location and
	// zoom the map in on the location.
	function onPlaceChanged() {
		var place = autocomplete.getPlace();
		if (place.geometry) {
			map.panTo(place.geometry.location);
			map.setZoom(10)
		} else {
			document.getElementById('locationInput').placeholder = 'Enter a Location';
		}
		var markerIcon = MARKER_PATH;
			// Use marker animation to drop the icons incrementally on the map.
		var newMarker = new google.maps.Marker({
			position: {
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng(),
				animation: google.maps.Animation.DROP,
				icon: markerIcon
			},
			map: map,
			title: $('#locationInput').val().slice(0,25) + '...'
		});
		
		
		google.maps.event.addListener(newMarker, 'click', (function(newMarker) {
            return function() {
                var $weatherOptions = {
					lat: place.geometry.location.lat(),
					lon: place.geometry.location.lng(),
					units: 'imperial',
				};
				var contentString = newMarkerInfo ($weatherOptions, newMarker.title, infoWindow);
				infoWindow.open(map, newMarker);
				map.center = newMarker.position;
			}
        })(newMarker))
    }
}

function myClick(id){
    google.maps.event.trigger(markers[id], 'click');
	window.scrollTo( 0, 400 );
}

populateParks();

/*var searchButton = $('.submit');

var searchCoords = $('.submit').on ('click', function() {
	var latInput = parseFloat($('#latInput').val());
	var longInput = parseFloat($('#longInput').val());

	var infoWindow = new google.maps.InfoWindow(), marker, i;
	var MARKER_PATH = 'https://maps.gstatic.com/intl/en_us/mapfiles/marker_green';
	var markerIcon = MARKER_PATH;
	var newMarker = new google.maps.Marker({
		position: {
			lat: latInput,
			lng: longInput,
			animation: google.maps.Animation.DROP,
			icon: markerIcon
		},
		map: map,
		title: 'Coords: ' + latInput + ' ' + longInput
	});
	
	console.log(marker.position);
		
	google.maps.event.addListener(newMarker, 'click', (function(newMarker) {
        return function() {
            var $weatherOptions = {
				lat: latInput,
				lng: longInput,
				units: 'imperial',
			};
			var contentString = newMarkerInfo ($weatherOptions, newMarker.title, infoWindow);
			infoWindow.open(map, newMarker);
			map.center = newMarker.position;
		}
    })(newMarker))
});*/