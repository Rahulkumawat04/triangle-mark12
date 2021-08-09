var quizForm = document.querySelector(".quiz-form");
var submitBtn = document.querySelector("#submit-answer-btn");
var output = document.querySelector("#output");

var correctAnswers = ["equitriangle", "ScaleneTri", "opt2"];

function calculateScore(){
    let score = 0;
    let index = 0;

    // READ ABOUT OF FORM-DATA

    var formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score += 1;
        }
        index += 1; 
    }
    output.innerText = "Your score is: " + score + "/3";
}

submitBtn.addEventListener("click", calculateScore);