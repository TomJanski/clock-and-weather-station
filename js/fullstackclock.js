/* 
* Digital clock plus weather station 
* Clock showing: time, current month and day. 
* Weather station is super cool. It takes your global position 
* and shows the current weather coditions in your city. 
* Author: Tomek Janski 
* Version: 1.0 
* Date: 06.2017 
* Credits: Free wind and humidity icon taken from 
* www.flaticon.com
* The weather station thanks to simpleweather app by James 
* Fleeting at https://twitter.com/fleetingftw
* More info at http://simpleweatherjs.com
*/ 
$(document).ready(function() { 
// set all the variables 
var currentTime 	= document.getElementById('current-time');
var	currentMonth 	= document.getElementById('current-month');
var	currentDay 		= document.getElementById('current-day');

setInterval(function() { 
	var d = new Date(); 
	
	var hours 	= d.getHours(),
			minutes = d.getMinutes(),
			day			= d.getDate();
			//ampm 		= ' AM'; Just in case you want pm / am 
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; 
	var month 	= months[d.getMonth()];
			
	if ( hours === 0 ) {
		hours = 12
	}
	
	if ( minutes < 10 ) {
		minutes = '0' + minutes;
	} 

var sepClass = '';  

if ( d.getSeconds() % 2 === 1 ) sepClass = 'transparent'; 

var sep = '<span class="'+ sepClass +'">:</span>';

currentTime.innerHTML = hours + sep + minutes; 
currentMonth.innerHTML = month;
currentDay.innerHTML 	= day;
	
}, 1000); 

});