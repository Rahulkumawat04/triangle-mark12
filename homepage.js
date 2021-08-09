var inputs = document.querySelectorAll(".angle-input");
var isTriangleBtn = document.querySelector("#is-triangle");
var outputEl = document.querySelector("#output");

function errorHandler(){
    if(Number(inputs[0].value) === 0){
        outputEl.innerText = "No angles of the triangle can be 0. Enter a valid 1st angle.";
    }
    else if(Number(inputs[1].value) === 0){
        outputEl.innerText = "No angles of the triangle can be 0. Enter a valid 2nd angle.";
    }
    else if(Number(inputs[2].value) === 0){
        outputEl.innerText = "No angles of the triangle can be 0. Enter a valid 3rd angle.";
    }
    else{
        console.log("Why are you doing this??");
    }
}

function calculateSumOfAngles(a1, a2, a3){
    var sumOfAngles = a1 + a2 + a3; 
    return sumOfAngles;
}



function isTriangle(){
    var sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputEl.innerText = "Yes! It is a Triangle...";
    } 
    else if(sumOfAngles === 0){
        outputEl.innerText = "Please enter valid angles of the triangle.";
    }
    else{
        outputEl.innerText = "No! The angles given don't form a triangle...";
        errorHandler();
    }
}

isTriangleBtn.addEventListener("click", isTriangle);