//

let buttons = document.getElementsByTagName("button");
let paragraph = document.getElementById("para");
let body = document.getElementById("body");
let count = 0;
let reset = document.getElementById("reset");
randomNumber = Math.floor((Math.random() * 10) + 1);

console.log(randomNumber);

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute("disabled");
        buttons[i].removeAttribute('style');
        body.style.backgroundColor = "#a1cefa";
    }
    count = 0;
    paragraph.innerHTML = "";
    console.log(randomNumber);
}

function seeForRightAnswer(e) {
    count++;
    if (count <= 3) {
        if (randomNumber == e.target.innerHTML) {
            paragraph.innerHTML = "Correct you got it right !";
            body.style.backgroundColor = "lightgreen"
            e.target.style.backgroundColor = "green";
            paragraph.style.color = "black";

            for (let i = 0; i < buttons.length; i++) {
                buttons[i].setAttribute("disabled", "");
            }

        } else if (randomNumber < e.target.innerHTML) {
            paragraph.innerHTML = "Your number is too high";
            paragraph.style.color = "black";
            e.target.style.backgroundColor = "red";
            body.style.backgroundColor = "lightcoral"

        } else {
            paragraph.innerHTML = "Your number is too low";
            paragraph.style.color = "black";
            e.target.style.backgroundColor = "lightyellow";
            body.style.backgroundColor = "lightyellow"

        }
    } else {
        paragraph.innerHTML = "Game Over!";
        paragraph.innerHTML = "the number was " + randomNumber;
        body.style.backgroundColor = "#e3daff";
        paragraph.style.color = "purple";
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute("disabled", "");
            buttons[i].style.backgroundColor = "purple";
            buttons[i].style.color = "white";

        }
    }

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", seeForRightAnswer);
}

reset.addEventListener("click", resetGame);

//oasis