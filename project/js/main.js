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
        DOMSelectors.guess.textContent = "Too Low"; 
        clearFields();
    } else if (search > number(answer)) {
        DOMSelectors.guess.textContent = "Too High";
        clearFields();
    } else 
        DOMSelectors.guess.textContent = "Correct";
        clearFields();
};

DOMSelectors.restart.addEventListener("click", function (event) {
    event.preventDefault
    function number () {
        answer = num[(Math.floor(Math.random()*num.length))]
        return answer;
        };
        console.log(number());
        DOMSelectors.guess.textContent = "";
});

let trying = 1; //does not work

function guesses () {
    if (trying === 3) {
    DOMSelectors.guess.textContent= "You're Wrong";
}};
trying++;


//need to work on limiting to 3 tries
//need to work on amount of times user has won 
//do css