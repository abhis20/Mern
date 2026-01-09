let outer=document.querySelector(".outer");
let inner=document.querySelector(".inner");
let heading=document.querySelector("h1");

outer.addEventListener('click',()=>{
    console.log("clicked on outer div");
},true)

inner.addEventListener('click',()=>{
    console.log("clicked on inner div");
},true)

heading.addEventListener('click',()=>{
    console.log("clicked on heading h1");
},true)

document.body.addEventListener('click',()=>{
    console.log("clicked on body")
},true)