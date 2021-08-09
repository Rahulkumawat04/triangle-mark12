var sides = document.querySelectorAll(".side-input");

var hypotenuseBtn = document.querySelector("#hypotenuse-btn");

var output = document.querySelector("#output-div");


function errorHandler() {
    if (Number(sides[0].value) === 0 || Number(sides[1].value) === 0) {
        output.innerText = "No side of the triangle can be 0. Enter a valid side.";
    } 
    //else if (Number(sides[1].value) === 0) {
    //     output.innerText = "No side of the triangle can be 0. Enter a valid side 2.";
    // } 
    else {
        console.log("Why are you doing this??");
    }
}


function calculateSumOfSquares(a, b) {
    var sumOfSquares = a * a + b * b;

    return sumOfSquares;
}

function calculteHypotenuse() {
    var sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));

    // if (sumOfSquares != 0) {
        var lengthOfHypotenuse = Math.sqrt(sumOfSquares);

        output.innerText = "The length of the Hypotenuse is: " + lengthOfHypotenuse + " cm";
    // }
    // else{
        // output.innerText = "Enter the valid sides of triangle to find the hypotenuse.";
        errorHandler();
    // }
}

hypotenuseBtn.addEventListener("click", calculteHypotenuse);