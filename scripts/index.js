let Name = "Yeampier H. Fernandez";
let Country = "Venezuela";
const name = document.querySelector("#name").textContent = Name;



var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var hour = today.getHours();
var min = today.getMinutes()
var seconds = today.getSeconds()
const Year = document.querySelector("#profile").textContent = ` © ${year} | ${Name} | ${Country} `
const Fecha = document.querySelector("#dates").textContent=`Last Updated: ${day}/${month}/${year} ${year} ${hour}:${min}:${seconds}`



