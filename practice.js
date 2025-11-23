let box = document.querySelector("body");
let cursor = document.querySelector(".img img");
let arr = ["./A6.mp3","./Ab2.mp3","./Bb3.mp3","./C1.mp3","./C5.mp3","./D6.mp3","./Db2.mp3","./Eb3.mp3","./F4.mp3","./G5.mp3","./Gb1.mp3"];
    let au;
let aud = arr.map(function(params) {
     au = new Audio(params);
});

// box.addEventListener("mousemove",function(par){
//     cursor.style.left = par.clientX +"px";
//     cursor.style.top = par.clientY +"px";
// });

box.addEventListener("keydown",function(arg){
    let key = console.log(arg.key);
    if (key == "a" || "A") {
    aud.play();

    }
});