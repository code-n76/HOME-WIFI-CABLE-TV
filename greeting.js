var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12) greet = "Maayong Aga,";
else if (hrs >= 12 && hrs < 15) greet = "Maayong Ugto,";
else if (hrs >= 15 && hrs < 18) greet = "Maayong Hapon,";
else if (hrs >= 18 && hrs < 24) greet = "Maayong Gab-i,";

document.getElementById("greetings").innerHTML = "<b>" + greet + "</b>";
