//Ava Werner 12/2/2025
//Menu Play Button
"use strict";
let play = document.getElementById("play");
play = play.addEventListener("click", nextPage);
function nextPage(event){
    window.location.assign("page1.html");
}


