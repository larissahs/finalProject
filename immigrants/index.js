var lgbtqbutton=$(".lgbtqbutton");
var pocbutton=$(".pocbutton");
var immigrantsbutton=$(".immigrantsbutton");

lgbtqbutton.on("click", lgbtqpage);
function lgbtqpage(){
  window.location.href= "file:///Users/apple/Desktop/finalProject/lgbtq/index.html";
}

pocbutton.on("click", pocpage);
function pocpage(){
  window.location.href="file:///Users/apple/Desktop/finalProject/poc/index.html";
}

immigrantsbutton.on("click", immigrantspage);
function immigrantspage(){
  window.location.href="file:///Users/apple/Desktop/finalProject/immigrants/index.html";
}


//window.onload= function(){
 //function(){
  //  document.getElementById("abc").onmouseover = function(){
    //  this.style.backgroundColor="white";
    //} document.getElementById("cdf").onmouseout= function(){
      //this.style.backgroundColor="pink";
    //}
  //}
//}
