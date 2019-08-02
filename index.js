var lgbtqbutton=$(".lgbtqbutton");
var pocbutton=$(".pocbutton");
var immigrantsbutton=$(".immigrantsbutton");

lgbtqbutton.on("click", lgbtqpage);
function lgbtqpage(){
  window.location.href= "https://larissahs.github.io/finalProject/lgbtq/index.html";
}

pocbutton.on("click", pocpage);
function pocpage(){
  window.location.href="https://larissahs.github.io/finalProject/poc/index.html";
}

immigrantsbutton.on("click", immigrantspage);
function immigrantspage(){
  window.location.href="https://larissahs.github.io/finalProject/immigrants/index.html";
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
