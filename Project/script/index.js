function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let Name = "Yeampier H. Fernandez";
let Country = "Venezuela";

var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var hour = today.getHours();
var min = today.getMinutes();
var seconds = today.getSeconds();
const Year = (document.querySelector(
  "#profile"
).textContent = ` © ${year}  | Yeampier H. Fernandez |  ${Country} |`);
const Fecha = (document.querySelector(
  "#dates"
).textContent = `Last Updated: ${day}/${month}/${year} ${year} ${hour}:${min}:${seconds}`);

fetch("https://brotherblazzard.github.io/canvas-content/fruit.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
