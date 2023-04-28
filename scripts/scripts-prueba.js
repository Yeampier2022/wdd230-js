let Name = "Yeampier H. Fernandez";
let Country = "Venezuela";




const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const hour = today.getHours();
const min = today.getMinutes()
const seconds = today.getSeconds()
const Year = document.querySelector("#profile").textContent = ` © ${year} | ${Name} | ${Country} `
const Fecha = document.querySelector("#dates").textContent=`Last Updated: ${day}/${month}/${year} ${year} ${hour}:${min}:${seconds}`



