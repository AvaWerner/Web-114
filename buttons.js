//Ava Werner 12/2/2025
//Answer Options
"use strict"; 
let buttons = document.querySelectorAll(".buttons");
let rightAnswer = document.getElementById("CorrectAnswer");
let wrongAnswer1 = document.getElementById("wrongAnswer1");
let wrongAnswer2 = document.getElementById("wrongAnswer2");
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        rightAnswer.style.backgroundColor = "lightgreen";
        wrongAnswer1.style.backgroundColor = "red";
        wrongAnswer2.style.backgroundColor = "red";
    })
}






