$(document).ready(function(){

	$.ajax({
		url: "https://data.delaware.gov/resource/v59b-a2we.json",
		method: "GET",
		datatype: "json",
		data: {
			"$select": "*"
		}
	}).done(function(myVar){
		var lTotal = Number(myVar[0].avg_total) + Number(myVar[1].avg_total) + Number(myVar[2].avg_total);
		var lAvg = Math.round(lTotal) / 3;
		var lCurrent = myVar[2].avg_total;
		if(lCurrent > lAvg){
			console.log("Immediate Volunteer Opportunities");
			document.getElementById("forAPI").innerHTML = "Alert! Immediate Volunteer Opportunities";
		}else{
			console.log("Volunteers Needed");
			document.getElementById("forAPI").innerHTML = "Volunteers Needed";
		}
		console.log(myVar[0].avg_total);
		console.log(myVar[1].avg_total);
		console.log(myVar[2].avg_total);
		console.log("Avg: " + lAvg);


	});

});
