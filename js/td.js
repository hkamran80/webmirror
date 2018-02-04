var timer = setInterval(momenttime, 1000);

function momenttime() {
	moment().format();
	moment.locale('en');

	var mu;
	var minu;
	var su;
	var du;
	var hu;
	
	var month = moment().month()+1;
	var minute = moment().minutes();
	var second = moment().seconds();
	var day = moment().day()+1;
	var hour = moment().hour();
	
	if (month == "1") {
		mu = "January";
	} else if (month == "2") {
		mu = "February";
	} else if (month == "3") {
		mu = "March";
	} else if (month == "4") {
		mu = "April";
	} else if (month == "5") {
		mu = "May";
	} else if (month == "6") {
		mu = "June";
	} else if (month == "7") {
		mu = "July";
	} else if (month == "8") {
		mu = "August";
	} else if (month == "9") {
		mu = "September";
	} else if (month == "10") {
		mu = "October";
	} else if (month == "11") {
		mu = "November";
	} else if (month == "12") {
		mu = "December";
	}	
	
	if (day == "1") {
		du = "Sunday";
	} else if (day == "2") {
		du = "Monday";
	} else if (day == "3") {
		du = "Tuesday";
	} else if (day == "4") {
		du = "Wednesday";
	} else if (day == "5") {
		du = "Thursday";
	} else if (day == "6") {
		du = "Friday";
	} else if (day == "7") {
		du = "Saturday";
	}
	
	/* if (hour < 10) {
		hus = hour.toString();
		hu = "0" + hus;
	} else {
		hu = hour.toString();
	} 

	if (minute < 10) {
		minu = "0" + minute.toString();
	} else {
		minu = minute.toString();
	}

	if (second < 10) {
		su = "0" + second.toString();
	} else {
		su = second.toString();
	} */
	
	document.getElementById("ct").innerHTML = moment().locale('en').format("h:mm:ss A");
	document.getElementById("cd").innerHTML = du + ", " + mu + " " + moment().dates() + ", " + moment().years();
}