function updateTime() {
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	
	var clock = document.getElementById("clockD");
	clock.textContent = hours + ":" + minutes + ":" + seconds;
	setInterval('updateTime()', 1000);
}
updateTime();

/*
function newMap() {
	var mapProp = {
		center: new google.maps.LatLng(51.508742, -0.120850),
		zoom:3,
	};
	console.log(typeof mapProp);
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	console.log(typeof map);
}
//newMap();
*/

function initMap() {
    var uluru = {
        lat: 40.425869
        , lng: 	-86.908066
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11
        , center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru
        , map: map
    });
}

