//image 1

var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";//dice1 - dice6
var randomImageSource1 = "images/" + randomDiceImage;//images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

//image 2

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";//second image dice1-dice6
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//heading

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩🚩 Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "DRAW";
}