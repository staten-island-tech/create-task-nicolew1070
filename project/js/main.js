import "../css/style.css";
const num =[1,2,3,4,5,6,7,8,9,10];

function card (arr) {
    DOMSelectors.form.addEventListener("click", function (event) {
     event.preventDefault();
     let search = DOMSelectors.search.value
     let newArr = arr.filter((film) => film.films.includes(search))
     clearfields();
     clear();
     newArr();
    })}; 

    function result (bmi) {
        if (bmi < num) {
            console.log("Underweight");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            console.log("Healthy weight");
        } else if (bmi >= 35 && bmi <= 29.9) {
            console.log("Overweight")
        } else {
            console.log("Obese")
        }
        }
        result(bmi);