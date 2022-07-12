let buttonClicked = function(){
    console.log("it works!");
}

let addListeners = function(btn){
    btn.addEventListener("click", buttonClicked);
}

let count = 0;
let value = document.querySelector("#value");
let btns = document.querySelectorAll("button");
btns.forEach(addListeners);