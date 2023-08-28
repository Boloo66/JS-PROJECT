let blackDiv = document.getElementById('black');
let redDiv = document.getElementById('red');
let purpleDiv = document.getElementById('purple');
let pinkDiv = document.getElementById('pink');

// watch displays
let showTime = document.getElementById("show-time");
let showHeart = document.getElementById("show-heart");


let myHeart = document.getElementsByClassName("heart")[0];
let myTime = document.getElementsByClassName("timer")[0];
console.log(myTime);

blackDiv.addEventListener("mousedown", () => {
    let img = document.querySelector("#main-img > img");
    img.src = "/imgs/blackwatch.png"
})
redDiv.addEventListener("mousedown", () => {
    let img = document.querySelector("#main-img > img");
    img.src = "/imgs/redwatch.png";
})
purpleDiv.addEventListener("click", () => {
    let img = document.querySelector("#main-img > img");
    img.src = "/imgs/purplewatch.png"
})
pinkDiv.addEventListener("mousedown", () => {
    let img = document.querySelector("#main-img > img");
    img.src = "/imgs/pinkwatch.png";
})

showTime.onmousedown = () => {
    if(myTime.classList.contains("show")){
        myTime.style.display = "inline-block";
        myHeart.style.display = "none"
    }
    
    
}
showHeart.onmousedown = () => {
    if(!myHeart.classList.contains("show")){
        myTime.style.display = "none";
        myHeart.style.display = "inline-block"
    }
}