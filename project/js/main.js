import "../css/style.css";
import { DOMSelectors } from "./num";
const num =[1,2,3,4,5,6,7,8,9,10];

let answer = num[(Math.floor(Math.random()*num.length))]

DOMSelectors.enter.addEventListener("click", function (event) {
    event.preventDefault
    result();
});

function clearFields () {
    DOMSelectors.search.value = "";
}

function number (answer) {
return answer;
};
console.log(number(answer));

let winOrLose = [];
let maxGuess = 0;

function result () {
    maxGuess = maxGuess + 1;
    let search = DOMSelectors.search.value
    if (search < number(answer)) {
        DOMSelectors.guess.textContent = "Wrong! Too Low"; 
        DOMSelectors.guess.style.background = "red";
        clearFields();
    } else if (search > number(answer)) {
        DOMSelectors.guess.textContent = "Wrong! Too High";
        DOMSelectors.guess.style.background = "red";
        clearFields();
    } else {
        DOMSelectors.guess.textContent = "Congratulations! You guessed the number";
        DOMSelectors.guess.style.background = "green";
        clearFields();
        winOrLose.push("correct");
} 
endGame();

let length = winOrLose.length
let win = 0;
let loss = 0;
  for (let i = 0; i < length; i++) {
    if (winOrLose[i] == "correct") {
      win = win + 1;
    } else {
      loss = loss + 1;
    }
  };
DOMSelectors.wins.textContent = `Number of Wins: ${win}`;
DOMSelectors.loss.textContent = `Number of Losses: ${loss}`;
};

DOMSelectors.restart.addEventListener("click", function (event) {
    event.preventDefault
    function number () {
        answer = num[(Math.floor(Math.random()*num.length))]
        return answer;
        };
        console.log(number());
        DOMSelectors.guess.textContent = "";
    endGame();
});

function endGame () {
    if (maxGuess === 3) {
        DOMSelectors.guess.textContent = "Game Over! You Lost!";
        winOrLose.push("wrong")
        maxGuess = 0;
    }
}