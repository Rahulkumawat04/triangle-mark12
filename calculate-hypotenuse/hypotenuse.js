var sides = document.querySelectorAll(".side-input");

var hypotenuseBtn = document.querySelector("#hypotenuse-btn");

var output = document.querySelector("#output-div");


function calculateSumOfSquares(a, b){
    var sumOfSquares = a*a + b*b;
    
    return sumOfSquares;
}

function calculteHypotenuse(){
    var sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));

    var lengthOfHypotenuse = Math.sqrt(sumOfSquares);

    output.innerText = "The length of the Hypotenuse is: " + lengthOfHypotenuse + " cm";
}

hypotenuseBtn.addEventListener("click", calculteHypotenuse);