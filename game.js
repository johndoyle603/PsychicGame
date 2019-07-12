var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var userguess = document.getElementById("guess");
var item = letters[Math.floor(Math.random() * letters.length)]
console.log(item);

var score = 0;
var loss = 0;
var remaining = 11;
var lost = 0



function updateScore() {
    document.querySelector("#win").innerHTML = score;
}

function updateLoss() {
    document.querySelector("#loss").innerHTML = loss;
}

function updateRemaining() {
    document.querySelector("#left").innerHTML = remaining;
}

updateScore();
updateLoss();
updateRemaining();

document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();

    userguess.textContent += event.key;
    if (letter === item) {
        score++;
        updateScore();
        remaining = +11;
        updateRemaining();
        item = letters[Math.floor(Math.random() * letters.length)];
        console.log(item);
        userguess.innerHTML = "";
    } else {
        remaining--;
        updateRemaining();
    }

    if (remaining === 0) {

        loss++;
        updateLoss();
        remaining = 12;
        userguess.innerHTML = "";
        item = letters[Math.floor(Math.random() * letters.length)];
        console.log(item);

    }
}