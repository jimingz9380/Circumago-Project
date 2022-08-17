let score = 0;

let submitBtn = document.getElementById("submit-btn");
submitBtn.onclick = function(){
    let point = document.getElementById("point")
    point.innerHTML = `C: ${pointGen()}`;
}

function pointGen(){
    let Generator = Math.random();
    Generator *= 500;
    Generator = Math.floor(Generator);

    score += Generator
    return score
}

let switchToPage3 = document.getElementById("user_page");
switchToPage3.onclick = function(){
    localStorage.setItem("pValue", score)
}

