
let defaultText=document.querySelector("#defaultText").value;
let userText=document.querySelector("#userText");
let displayTimer=document.querySelector("h1");
let startButton=document.querySelector(".timer button:first-of-type");
let resetButton=document.querySelector(".timer button:last-of-type");

let count=0;
let timer=null;
startButton.addEventListener(('click'),()=>{
    if(timer!==null) return;

    userText.disabled=false;
    timer=setInterval(()=>{
        count++;
        displayTimer.textContent=count;
        if(count===60){
        clearInterval(timer);
        timer=null;
        count=0;
        userText.disabled=true;
    }
    },1000)

})

resetButton.addEventListener(('click'),()=>{
    clearInterval(timer);
    timer=null;
    count=0;
    displayTimer.textContent=count;
    userText.disabled=true;
    userText.value="";
})

userText.addEventListener('input',()=>{
    let typedChar=userText.value;

    if(defaultText.slice(0,typedChar.length)!==typedChar){
        userText.style.color="red"
    }
    else{
        userText.style.color="green"
    }
})

