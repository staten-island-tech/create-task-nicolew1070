import "../css/style.css";
import { DOMSelectors } from "./num";
const num =[1,2,3,4,5,6,7,8,9,10];

DOMSelectors.enter.addEventListener("click", function (event) {
    event.preventDefault
    result();
    guesses ();
});

function clearFields () {
    DOMSelectors.search.value = "";
}

function fields () {
    DOMSelectors.guess.textContent = "";
}

let answer = num[(Math.floor(Math.random()*num.length))]
console.log(answer);
//function does not work -> no number is generated + answer not defined in the function 'result'

function result () {
    let search = DOMSelectors.search.value
    if (search < answer) {
        DOMSelectors.guess.textContent = "Too Low"; 
        clearFields();
    } else if (search > answer) {
        DOMSelectors.guess.textContent = "Too High";
        clearFields();
    } else 
        DOMSelectors.guess.textContent = "Correct";
        clearFields();
};

DOMSelectors.restart.addEventListener("click", function (event) {
    event.preventDefault
    again ();
    fields ();
});

let guess = 1; //does not work

function guesses () {
    if (guess === 3) {
    DOMSelectors.guess.textContent= "You're Wrong";
}};
guess++;

//need to work on restarting the game 
//need to work on limiting to 3 tries
//need to work on amount of times user has won 
//do css