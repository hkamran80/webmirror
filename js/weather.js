jQuery(document).ready(function($) {
	$.ajax({
	url : "http://api.wunderground.com/api/314bd4c577127ae3/geolookup/conditions/q/CA/Lafayette.json",
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