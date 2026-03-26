let startButton=document.querySelector("button");
let userText=document.querySelector("#userText");
let h1Ele=document.querySelector("h1");
let resetButton=document.querySelector("div button:last-of-type");
let defaultText=document.querySelector("#defaultText").value;

let timer=null;
let count=0;
startButton.addEventListener('click',()=>
{
    if(timer!==null) return;
    userText.disabled=false;
    timer=setInterval(()=>{
        count++;
        h1Ele.textContent=count;
        if(count==60) {
      clearInterval(timer);
      timer=null;
      userText.disabled=true;
    }
    },1000)

}
)

resetButton.addEventListener(('click'),()=>{
    clearInterval(timer);
    timer=null;
    count=0;
    h1Ele.textContent=count;
    userText.value = "";   // clear textarea
    userText.disabled = true;  // disable again
})

// userText.addEventListener('input', () => {

//     let typedText = userText.value;

//     for (let i = 0; i < typedText.length; i++) {

//         if (typedText[i] !== defaultText[i]) {
//             userText.style.color = "red";
//             return;
//         }
//     }

//     userText.style.color = "green";
// });

userText.addEventListener('input', () => {

    let typedText = userText.value;

    if (defaultText.slice(0, typedText.length) === typedText) {
        userText.style.color = "green";
    } else {
        userText.style.color = "red";
    }

});
