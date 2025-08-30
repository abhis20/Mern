// console.log(c23);
// let c23=10;


// in primitive datatypes(num,str,boolean)
const i=5;
//i=10;  -> error

const str="Hello";
// str="Hi"   -> error in const -> caanot reassigned
console.log(str);

/* cannot be reassigned */

//const num1 = 5;     //  fixed
//const str1 = "Hi";   // fixed
// const isActive = true; // fixed


/*  objects & Arrays (non-primitive types) */


const arr = [1, 2, 3];
// allowed 
arr.push(4);  
console.log(arr); // [1, 2, 3, 4]

// not allowed 
// arr = [10, 20]; 

const person = { name: "Sudhir" };
// allowed 
person.name = "Kadam";  
console.log(person); // { name: "Kadam" }

// not allowed
// person = { name: "Other" };



/* Precedence Associativity */

let c = 3* 4+ 30/6 *5 ** 2;
console.log(c);

let x=3+ 3 **4 /3 **2-3*4/6;
console.log(x);


let y=("123" +1)*2**2-21/7;
console.log(y);

const z="123"+5**5/25**2/5;
console.log(z);

/* conditions */

let num=4;
if(num %2==0)
{
console.log("even");
}
else{
    console.log("odd");
}

// let r=4;
// let number =r;
// if(number%2==0){
// console.log("Even")
// }
// else{
//     console.log("odd")
// }

 num=6;
if((num/2)%2==0)
{
console.log("even");
}
else{
    console.log("odd");
}

//conditions

let a="12";
const b=12;
let d=12;

if(a==b){
    console.log("Both a& b has same value");
}
if(b==d){
    console.log("Both b&d has same value and datatype")
}

let score=50;
if(score>=80){
    console.log("A");
}
else if(score>=60){
    console.log("B")
}
else if(score>=40){
    console.log("C")
}
else{
    console.log("fail");
}

let age=20;
let gender="Male";
if(age>=18 && gender=="Male"){
    console.log("Mature Boy");
}
else if(age>=18 && gender=="Female"){
    console.log("Mature girl");
}

let ticketNum = 11;
if(ticketNum ==11 || ticketNum==101)
    {
console.log("Winner");
}
else{
    console.log("Loser");
}


let loggedIn=true;
let hasSubscription=true;
if(loggedIn==hasSubscription){
    console.log("Premium user giving accesss to premium content");
}
else{
    console.log("Upgrade your subscription");
}


let number=18;
if(number !=17){
    console.log("good no")
}
else{
    console.log("bad no")
}

let numb=121;
let first_digit=Math.floor(numb/100);
let last_digit =numb % 10;

if(first_digit==last_digit)
    {
    console.log("its  pallindrome");
}
else{
    console.log("Not pallindrome");
}



//check if a number is decimal or integer

num=1.2;
let numx = Math.floor(num);
if(num==numx){
    console.log("Integer");
}
else{
    console.log("Decimal")
}

num=11.0;
if(num%1==0){
    console.log("Integer")
}
else{
    console.log("decimal");
}

num=1.5;
let numy=parseInt(num);

if(num==numy){
    console.log("Integer");
}
else{
    console.log("Decimal")
}
// Homework
const s=10;
const k=12;
let j;

if(s>k){
    j=s;  //if s is greater store s in j
}
else{
    j=k; // if k is greater store k in j
}
  console.log(" Maximum value is:", j);


