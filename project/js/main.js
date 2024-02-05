import "../css/style.css";
import { DOMSelectors } from "./num";
const num =[1,2,3,4,5,6,7,8,9,10];

let answer = num[(Math.floor(Math.random()*num.length))]

DOMSelectors.enter.addEventListener("click", function (event) {
    event.preventDefault
    result(); //runs the function when button is clicked 
});

function clearFields () {
    DOMSelectors.search.value = ""; //clears the search bar
}

function number (answer) {
return answer;
};
console.log(number(answer)); //generates a random number 

let winOrLose = [];
let maxGuess = 0;

function result () {
    maxGuess = maxGuess + 1; //guess increases by 1 each time user enters a number
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
        maxGuess = 0;
        clearFields();
        winOrLose.push("correct"); //pushes correct into the array (in console)
} 
endGame();

let length = winOrLose.length
let win = 0;
let loss = 0;
  for (let i = 0; i < length; i++) {
    if (winOrLose[i] == "correct") { //if array displays correct --> number of wins increases by 1
      win = win + 1;
    } else {
      loss = loss + 1;
    }
  };
DOMSelectors.wins.textContent = `Number of Wins: ${win}`; //displays the results from the for loop
DOMSelectors.loss.textContent = `Number of Losses: ${loss}`;
};

DOMSelectors.restart.addEventListener("click", function (event) { //runs when restart button is clicked
    event.preventDefault
    function number () {
        answer = num[(Math.floor(Math.random()*num.length))]
        return answer; 
        };
        console.log(number()); //generates a new random number
        DOMSelectors.guess.textContent = "";
    endGame();
});

function endGame () { //runs when guesses reaches 3
    if (maxGuess === 3) { 
        DOMSelectors.guess.textContent = "Game Over! You Lost!"; //displays this message
        winOrLose.push("wrong") //pushes wrong into the array (in console)
        maxGuess = 0; //resets guess number to 0
    }
}