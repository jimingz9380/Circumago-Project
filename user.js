let score = localStorage.getItem("pValue")

let point = document.getElementById("point")
point.innerHTML = `C: ${score}`;

let switchToPage2 = document.getElementById("submit-pic");
switchToPage3.onclick = function(){
    localStorage.setItem("pValue", score)
}
