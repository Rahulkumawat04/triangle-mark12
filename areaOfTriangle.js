var sides = document.querySelectorAll(".input");

var areaBtn = document.querySelector("#area-btn");

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



function calculateProductofBH(a, b) {
    var product = a * b;

    return product;
}

function calculateArea() {
    var product = calculateProductofBH(Number(sides[0].value), Number(sides[1].value));

    var finalArea = 1 / 2 * (product);

    output.innerText = "The Area of the Triangle is: " + finalArea + " cm";

    errorHandler();
}

areaBtn.addEventListener("click", calculateArea);