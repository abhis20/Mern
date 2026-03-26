let btn=document.querySelector("button");
let spanTag=document.querySelector("span");

btn.addEventListener('click',()=>{
    spanTag.textContent="Welcome to the class!"
    setTimeout(()=>{
        spanTag.remove();
    },1000)
})

console.log("hello");
// alert("hi");  // blocks the Js main thread (Js Worker)
console.log("world")

let startBtn=document.querySelector("button:nth-of-type(2)");
let stopBtn=document.querySelector("button:last-of-type");
let h1Ele=document.querySelector("h1");
let count=0;
let timer=null;

startBtn.addEventListener('click',()=>{
    timer=setInterval(()=>{
        count++;
        h1Ele.textContent=count;
    },1000)
})

stopBtn.addEventListener('click',()=>{
    clearInterval(timer);
})