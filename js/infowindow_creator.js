var infoWindowCreator = function () {
	//marker[0]
	var infoWindow0 = new google.maps.InfoWindow(
		{
			content: contentString[0]
		}
	);
	
	google.maps.event.addListener(marker[0], 'click', function () {
		infoWindow0.open(map, this);
	});

	//marker[1]
	var infoWindow1 = new google.maps.InfoWindow(
		{
			content: contentString[1]
		}
	);
	
	google.maps.event.addListener(marker[1], 'click', function () {
		infoWindow1.open(map, this);
	});
}