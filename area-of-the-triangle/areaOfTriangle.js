var sides = document.querySelectorAll(".input");

var areaBtn = document.querySelector("#area-btn");

var output = document.querySelector("#output-div");


function calculateProductofBH(a, b) {
    var product = a * b;

    return product;
}

function calculateArea() {
    var product = calculateProductofBH(Number(sides[0].value), Number(sides[1].value));

    var finalArea = 1 / 2 * (product);

    output.innerText = "The Area of the Triangle is: " + finalArea + " cm";
}

areaBtn.addEventListener("click", calculateArea);