let box = document.querySelector("body");
let cursor = document.querySelector(".img img");
let key = document.querySelectorAll(".key");
for (let i = 0; i < key.length; i++) {
  key[i].addEventListener("click",function(params) {
     key[i].style.backgroundColor = `rgba(180, 147, 40, 1)`;
     setTimeout(function (cr) {
     key[i].style.backgroundColor = `rgba(255, 255, 255, 1)`;
     },200);
    arr[i].currentTime = 0;
    arr[i].play();
    setTimeout(function(ags) {
      arr[i].pause();
      arr[i].currentTime = 0;
    },2000);
});
  
}

let arr = [
    new Audio("./A6.mp3"),
    new Audio("./Ab2.mp3"),
    new Audio("./Bb3.mp3"),
    new Audio("./C1.mp3"),
    new Audio("./C5.mp3"),
    new Audio("./D6.mp3"),
    new Audio("./Db2.mp3"),
    new Audio("./Eb3.mp3"),
    new Audio("./F4.mp3"),
    new Audio("./G5.mp3"),
    new Audio("./Gb1.mp3"),

];
let ckey = ["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","KeyP","KeyO"]
box.addEventListener("mousemove",function(par){
    cursor.style.left = par.clientX +"px";
    cursor.style.top = par.clientY +"px";
});

box.addEventListener("keydown",function(arg){
    let key1 = arg.code;
    for (let i = 0; i < arr.length; i++) {
        if (key1 == ckey[i]) {
      arr[i].currentTime = 0;
      arr[i].play();  
    setTimeout(() => {
      arr[i].pause();  
      arr[i].currentTime = 0;  
    },3000);
    }  
    }
});

