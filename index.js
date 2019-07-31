var lgbtqbutton=$(".lgbtqbutton");
var pocbutton=$(".pocbutton");
var immigrantsbutton=$(".immigrantsbutton");

lgbtqbutton.on("click", lgbtqpage);
function lgbtqpage(){
  window.location.href= "http://www.w3schools.com";
}

pocbutton.on("click", pocpage);
function pocpage(){
  window.location.href="http://www.facebook.com";
}

immigrantsbutton.on("click", immigrantspage);
function immigrantspage(){
  window.location.href="http://www.google.com";
}
