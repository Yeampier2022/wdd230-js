var noww = new Date();
var datetimeString = noww.toLocaleDateString() + " " + noww.toLocaleTimeString();
const prueba = document.getElementById("formLoadTime").value = datetimeString;
prueba.style.color = red;

document.getElementById("last_updated").innerHTML = "Last Updated: " + new Date(document.lastModified).toLocaleString() + "...  WDD230";

var d = new Date();
var yearr = d.getFullYear();
document.getElementById("currentyear").innerHTML = yearr;