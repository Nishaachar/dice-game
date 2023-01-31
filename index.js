
//Player 1
let randomNumber1 = Math.floor(Math.random()*6) + 1;
let dicePic1 = "dice" + randomNumber1 + ".png";

let image1 = document.querySelectorAll(".img6")[0];
image1.setAttribute("src", dicePic1);


//Player 2

let  randomNumber2 = Math.floor(Math.random()*6) + 1;
let dicePic2 = "dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll(".img6")[1];
image2.setAttribute("src", dicePic2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a draw!";
}