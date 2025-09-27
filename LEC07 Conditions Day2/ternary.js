/* Check if a number is even or odd */

let num1=70;
num1%2==0?console.log("even"):console.log("odd");

let evenodd=num1%2==0?"even":"odd";
console.log("given number is",evenodd);

/* Check if a number is positive OR negative */

let posneg=num1>0?"positive":"negative";
console.log("given number is",posneg);

/* Check if a number is positive, negative or zero */

num1>0?console.log("positive"):num1===0?console.log("zero"):console.log("negative");

let posnegzero=num1>0?"positive":num1<0?"negative":"zero";
console.log("the given number is",posnegzero);

/* Q: Print the name and score of highest scoring student USING TERNARY OPERATOR*/

let name1="suresh";
let name2="ramesh";
let marks1=80;
let marks2=90;
let winner=marks1>marks2?{name:name1,marks:marks1}:{name:name2,marks:marks2};
console.log(winner.name,"has the highest marks scored",winner.marks);

let maxmarks=Math.max(marks1,marks2);
let maxname=maxmarks==marks1?name1:name2;
console.log(maxname,"got the highest marks",maxmarks);



/* EXPLORE: How to write multiple statements inside a true/false part of ternary operator */

// let winner=marks1>marks2?{name:name1,marks:marks1}:{name:name2,marks:marks2};

/* Q: Print greatest among three numbers using ternary */

let num2=30;
let num3=80;
let num4=5;

let greatest=num2>=num3 && num2>=num4?num2:num3>=num2 &&num3>=num4?num3:num4;
console.log("greatest number is",greatest);

/* Make a grading system using Switch statement and ternary operator */

let marks=80;
let grade=marks>=90?"A":marks>=70 && marks<90?"B":marks>=50 && marks<70?"C":"fail";
console.log("the grade of the student =",grade);

switch(true){
    case marks>=90:
        console.log("A");
        break;
    case marks>=70 && marks<90:
        console.log("B");
        break;
    case marks>=50 && marks<70:
        console.log("C");
        break;
    default:
        console.log("fail");

        
}

// using ternary
// if age is above 18 and gender is male print mature boy else mature girl or not mature

let age=19;
let gender="male";
let ismature=gender=="male" && age>=18?"mature boy":gender=="female" && age>=18?"mature girl":"not mature";
console.log("the given person is",ismature);

// if ticket number is 11 or 101 then winner else loser

let ticketNum=101;
let win=ticketNum==11 || ticketNum==101?"Winner":"loser";
console.log("the customer is",win);

// login and subscription

let subscription=true;
let login=true;
let premiumUser=subscription && login?" is a premium user":"needs to update his subscription";
console.log("the user",premiumUser);

// check if a number is decimal or integer

let number=199999;
let integer=number%1==0?"integer":"decimal";
console.log("the given number is",integer);

let numbery=parseInt(number);
let int=numbery==number?"integer":"decimal";
console.log("the given number is",int);

// palindrome or not

let x=979;
let last_digit=Math.floor(x%10);
let first_digit=Math.floor(x/100);
let ispalindrome=first_digit==last_digit?"palidrome":"not palindrome";
console.log("the given number is",ispalindrome);

