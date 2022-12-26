"use strict";
let random = Math.floor(Math.random() * 20) + 1;
console.log(random);
let chances = 10;
let highScore = 0;
let currentScore;
document.querySelector(".score").innerHTML = `Chances : ${chances}`;
let sfx = {
  failure: new Audio("sounds/success.ogg"),
  success: new Audio("sounds/success.wav"),
  wrong: new Audio("sounds/wrong.wav"),
  again: new Audio("sounds/again.wav"),
};

let func = {
  check: () => {
    gameOver();
    let enValue = document.querySelector("#entered").value;
    if (enValue == random) {
      sfx.success.play();
      //  Styling after the number gets matched
      document.getElementById("body").style.backgroundColor = "#82CD47";
      document.getElementById("guessing").innerHTML = " Number Matched";
      document.querySelector(".heading").innerHTML = "Success !";
      document.querySelector("#entered").style.backgroundColor = "#82CD47";
      document.querySelector("#entered").style.border = "white";
      document.querySelector("button").style.color = "#82CD47";
      document.querySelector(".question").style.color = "#82CD47";
      document.querySelector(".question").innerHTML = enValue;
      document.querySelector(".check").style.color = "#82CD47";
      currentScore = chances;
      if (currentScore > highScore) {
        highScore = currentScore;
        console.log(highScore);
      }
      document.getElementById(
        "highScore"
      ).innerHTML = `High score : ${highScore}`;
      // Styling Ends Here
    } else if (enValue < random) {
      sfx.wrong.play();
      document.getElementById("guessing").innerHTML = " Too Low !";
      document.querySelector(".score").innerHTML = `Chances : ${--chances}`;
    } else if (enValue > random) {
      sfx.wrong.play();
      document.getElementById("guessing").innerHTML = " Too High !";
      document.querySelector(".score").innerHTML = `Chances : ${--chances}`;
    }
  },
  again: () => {
    sfx.again.play();
    document.getElementById("body").style.backgroundColor = "rgb(47, 47, 47)";
    document.getElementById("guessing").innerHTML = " Start Guessing .....";
    document.querySelector(".heading").innerHTML = "Guess the Number !";
    document.querySelector("#entered").style.backgroundColor =
      "rgb(47, 47, 47)";
    document.querySelector("#entered").style.border = "white";
    document.querySelector("button").style.color = "black";
    document.querySelector(".question").style.color = "black";
    document.querySelector(".check").style.color = "black";
    chances = 10;
    document.querySelector(".score").innerHTML = `Chances : ${chances}`;
    document.querySelector(".question").innerHTML = "?";
    document.querySelector("#entered").value = "";
  },
};
// IGNORE
function gameOver() {
  if (chances == 0) {
    sfx.failure.play();
    document.getElementsByClassName("question").innerHTML = random;
    document.getElementById("body").style.backgroundColor = "red";
    document.querySelector(".heading").innerHTML = "You Failed !";
    document.getElementById("guessing").innerHTML = " Number not matched";
    document.querySelector(".score").innerHTML = "Chances Over";
    document.querySelector("#entered").style.backgroundColor = "white";
    document.querySelector("#entered").style.border = "white";
    document.querySelector(".check").setAttribute("disabled");
  }
}
// IGNORE CODE WRITTEN ABOVE
