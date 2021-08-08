var inputs = document.querySelectorAll(".angle-input");
var isTriangleBtn = document.querySelector("#is-triangle");
var outputEl = document.querySelector("#output");

function calculateSumOfAngles(a1, a2, a3){
    var sumOfAngles = a1 + a2 + a3; 
    return sumOfAngles;
}

function isTriangle(){
    var sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputEl.innerText = "Yes! It is a Triangle...";
    }
    else{
        outputEl.innerText = "No! The angles given don't form a triangle...";
    }
}

isTriangleBtn.addEventListener("click", isTriangle);