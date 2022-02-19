let inc = 0;
let preinc = 0;
var data = document.getElementsByTagName("td");
var day = document.getElementById("day");
var cal = document.getElementsByClassName("date");
var inner = document.getElementById("inner-wrapper");
var i;
const d = new Date();
for (i = 0; i < cal.length; i++) {
	cal[i].style.backgroundColor = "#ffd";
}
cal[d.getDate() - 1].style.backgroundColor = "#0a0";
cal[d.getDate() - 1].style.color = "#ffd";

function clickEvent(clicked_id) {
	day.innerHTML = "The date you have chosen is Feb " + (clicked_id * 1 + 1);
	for (i = 0; i < cal.length; i++) {
		cal[i].style.backgroundColor = "#ffd";
		cal[i].style.color = "#000";
	}
	cal[d.getDate() - 1].style.backgroundColor = "#0a0";
	cal[d.getDate() - 1].style.color = "#ffd";
	cal[clicked_id].style.backgroundColor = "#f00";
	cal[clicked_id].style.color = "#ffd";
	preinc = inc;
	inc = clicked_id * 398;
	if (preinc < inc) {
		inner.style.left = -inc + "px";
	} else if (preinc > inc) {
		inner.style.left = -inc + "px";
	}
}
