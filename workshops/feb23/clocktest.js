//targeting html

var clockDiv = document.querySelector('.clock')


function changeTimex() {
//confusing date stuff that we dont need to memorize
var datex = new Date();
var hoursx = datex.getHours();
var minutesx = datex.getMinutes();
var secondsx = datex.getSeconds();

//creating text for html

var clock = hoursx + ':' + minutesx + ':' + secondsx;

//var clockDiv = document.getElementById('clock')

// changer the inner html and styling
clockDiv.innerHTML = clock
}


setInterval(function() {
    changeTimex()
},1000)


