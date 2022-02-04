

document.getElementById("bt").addEventListener("click", clk);


function clk() {

// For dice 1

var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;

var diceNumber1 = "images/dice" + randomNumber1 +".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", diceNumber1);



// for dice 2

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var diceNumber2 = "images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", diceNumber2);



if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = ("⛳️ Player 1 win");
}
else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = ("Tied");
}

else {
  document.querySelector("h1").innerHTML = ("Player 2 win ⛳️ ");
}
}
