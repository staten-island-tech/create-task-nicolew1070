import "../css/style.css";
import { DOMSelectors } from "./num";
const num =[1,2,3,4,5,6,7,8,9,10];

function search () {
    let search = DOMSelectors.search.value
}

function search (arr) {
    DOMSelectors.form.addEventListener("click", function (event) {
     event.preventDefault();
     let search = DOMSelectors.search.value
     let newArr = arr.filter((film) => film.films.includes(search))
     clearfields();
     clear();
     newArr();
    })}; 

//general idea -> probably doesn't work though
//if the user input number is higher to the real number => results show higher 
function result () {
    if (search < num) {
        console.log("Lower");
    } else if (search > num) {
        console.log("Higher");
    } else if (search === num) {
        console.log("Correct!");
    } else {
        console.log("Error!")
    }
}
result ();