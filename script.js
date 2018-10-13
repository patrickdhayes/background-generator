var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('anwswer: ', _.without(array, 5));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

console.log(css, color1, color2);

function changeColor () {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    console.log(body.style.background);
    css.textContent = body.style.background + ";";
}

changeColor();

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

