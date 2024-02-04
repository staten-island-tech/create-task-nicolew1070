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

function result () {
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
        DOMSelectors.guess.textContent = "Correct";
        DOMSelectors.guess.style.background = "green";
        clearFields();
}};

DOMSelectors.restart.addEventListener("click", function (event) {
    event.preventDefault
    function number () {
        answer = num[(Math.floor(Math.random()*num.length))]
        return answer;
        };
        console.log(number());
        DOMSelectors.guess.textContent = "";
});

const maxGuess = 3; //needs to be fixed
for (let i = 0; i < maxGuess; i++) {
    if (i === maxGuess) {
        DOMSelectors.guess.textContent = "Game Over!!! You lost!!!";
    } else {
        if (i > 0 ) {
            DOMSelectors.three.textContent = "Try Again!";
        }
    }
};


//need to work on limiting to 3 tries
//need to work on amount of times user has won --> algorithmn --> need if, then statements