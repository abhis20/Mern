let arr=[];

let btn = document.querySelector("button");
let fullName = document.querySelector(".name input");
let mobile = document.querySelector(".mobile input");
let terms = document.querySelector(".consent input");
let city = document.querySelector(".city select");
let form=document.querySelector("form");
btn.addEventListener('click',(e)=>
{
    e.preventDefault(); 

        let gender = document.querySelector(
        ".gender input[type='radio']:checked"
    );

    arr=[];

     arr.push(fullName.value);
     arr.push(mobile.value);
     arr.push(gender ? gender.value : "Not selected");
     arr.push(terms.checked);
     arr.push(city.value);

     form.reset();
     console.log(arr);
}
)
