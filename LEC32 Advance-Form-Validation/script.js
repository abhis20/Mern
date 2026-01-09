let button=document.querySelector("button");

button.addEventListener('click',()=>{
    let input={};
     input.password=document.querySelector("input[type=password]").value;
     input.date=new Date(document.querySelector("input[type=date]").value);
     input.time=(document.querySelector("input[type=time]").value);
     input.Allcheckbox=document.querySelectorAll("input[type=checkbox]:checked");
     input.radio1=document.querySelector("input[name=mcq1]:checked")?.value;
     input.radio2=document.querySelector("input[name=mcq2]:checked")?.value;
     input.singleSelect=document.querySelector("#singleselect").value;
     let multipleSelect=document.querySelector("#multiselect").selectedOptions;
     input.multipleSelect=Array.from(multipleSelect).map(option=>option.value);

     input.file=document.querySelector("[type=file]").files;

     console.log(input);
}) 


/*

The change event fires when the value of an input changes AND the user finishes changing it.


*/