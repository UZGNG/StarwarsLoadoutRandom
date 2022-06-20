

var characters = ['Obi-Wan Kenobi', 'Han Solo', 'Darth Vader', 'Emperor Palpatine', 'Yoda', 'Boba Fett', 'Jango Fett', 'Mace Windu', 'General Grievous', 'Ben Noel', 'Luke Skywalker', 'Anakin Skywalker', 'Count Dooku'];
var hilts = ['Anakin\'s', 'Obi-Wan\'s', 'Vader\'s','Palpatine\'s','Yoda\'s', 'Windu\'s','Luke\'s', 'Dooku\'s'];
var colors = ['blue', 'green', 'red', 'purple', 'unicorn (for some reason)', 'orange', 'pink?'];
var sides = [' dark side', ' light side'];

var characterIdx = Math.floor(Math.random() * characters.length);
var hiltIdx = Math.floor(Math.random() * hilts.length);
var colorIdx = Math.floor(Math.random() * colors.length);
var sideIdx = Math.floor(Math.random() * sides.length);

var character, hilt, color, side;

character = characters[characterIdx];
hilt = hilts[hiltIdx];
color = colors[colorIdx];
side = sides[sideIdx]

var message = `${character} has ${hilt} hilt with a ${color} lightsaber, and they are on the ${side}`;


function randomize() {
    document.getElementById("main-text").innerHTML = message

}


document.getElementById("reset").addEventListener("click", function reset() {
    location.reload()
})