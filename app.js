// let btn=document.querySelector("button");
// btn.addEventListener("click",function () {
//     let h1=document.querySelector("h1");
//     let randomColor=getRandomColor();
//     h1.innerText= randomColor;

// const { createElement } = require("react");

    
//     let div= document.querySelector("div");
//     div.style.backgroundColor=randomColor;
// });
// function getRandomColor() {
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }
// let form= document.querySelector("form");
// form.addEventListener("submit",function (event) {
//    event.preventDefault();
//     console.log("form submitted");
//     let inp=document.querySelector("input");
//     console.log(inp.value);
    
    
// });
// let test=document.querySelector("#test");
// test.addEventListener("mouseout",(event)=>{
//     event.target.style.color="red";
//     setTimeout(()=>{
//         event.target.style.color="";
//     },1000);
// });


// const log = document.getElementById("log");
// let input =document.querySelector("input");
// input.addEventListener("keypress",logkey);
// function logkey(el) {
//     log.textContent += `${el.key}`;
// };

// const log = document.getElementById("log");
// let input = document.querySelector("input");

// input.addEventListener("keydown", (event) => {

//     if (event.key === "Backspace") {
//         log.textContent = log.textContent.slice(0, -1);
//     } else {
//         log.textContent += event.key;
//     }

// });

// let btn=document.createElement("button");
// btn.innerText="click me!";
// document.querySelector("body").append(btn);
// btn.addEventListener("click",()=> {
//     btn.style.backgroundColor="green";
// });
let input=document.getElementById("input");
let h3=document.getElementById("text");
input.addEventListener("input",()=>{
    let filteredText=input.value.replace(/[^a-zA-Z ]/g,"");
    h3.innerText=filteredText;
});