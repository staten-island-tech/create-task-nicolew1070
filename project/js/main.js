import "../css/style.css";
import { DOMSelectors } from "./num";
const num =[1,2,3,4,5,6,7,8,9,10];

DOMSelectors.enter.addEventListener("click", function (event) {
    event.preventDefault
    guessing();
});

let answer = num[(Math.floor(Math.random()*num.length))]
console.log(answer);

function guessing () {
    let search = DOMSelectors.search.value
    if (search < answer) {
        DOMSelectors.guess.textContent = "Too Low"; //does not work
    } else if (search > answer) {
        DOMSelectors.guess.textContent = "Too High";
    } else 
        DOMSelectors.guess.textContent = "Correct";
};

//need to work on restarting the game 