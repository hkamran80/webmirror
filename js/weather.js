jQuery(document).ready(function($) {
	$.ajax({
	
	var key = "";
	var stateinitials = "";
	var weather_city = "";
		
	url : "http://api.wunderground.com/api/" + key + "/geolookup/conditions/q/" + stateinitials + "/" + weather_city + ".json",
	dataType : "jsonp",
	success : function(parsed_json) {
		
	var city = parsed_json['location']['city'];
	var state = parsed_json['location']['state'];
	var temp_f = parsed_json['current_observation']['temp_f'];
	var locX = city + ', ' + state;
	var tempX = temp_f + '&deg;F';

	document.getElementById("city").innerHTML = locX;
	document.getElementById("temp").innerHTML = tempX;
	}
	});
});
