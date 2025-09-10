/*
Determine whether a given calendar date is valid or invalid.

Rules
Month must be between 1 and 12.

Day must fit the month and year:

31-day months: January, March, May, July, August, October, December (1, 3, 5, 7, 8, 10, 12)

30-day months: April, June, September, November (4, 6, 9, 11)

February (2)

29 days in a leap year
28 days otherwise
Leap year criteria

Divisible by 4 and not divisible by 100, unless also divisible by 400
Input
Three integers (each on its own line):

day
month
year
Output
Print exactly one of:

Valid
or

Invalid
Constraints
1 ≤ day ≤ 31
1 ≤ month ≤ 12
1 ≤ year ≤ 10^5
Examples
Example 1
Input

29
2
2024
Output

Valid
Example 2
Input

31
4
2023
Output

Invalid
*/


let isleap=false;
let isvalid=false;

let day=29;
let month=9;
let year=2026;

if(year%400==0 || (year%100!=0 && year%4==0)){
    isleap=true;
}

if(month<=31 && month>=1){
    if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
        if(day>=1 && day<=31){
            isvalid=true;
        }
    }
    else if(month === 4 || month === 6 || month === 9 || month === 11){
        if(day>=1 && day<=30){
            isvalid=true;
        }
    }

    else if(month==2){
        if(isleap && day>=1 && day<=29){
            isvalid=true;
        }
        else if(!isleap && day<=28 && day>=1){
            isvalid=true;
        }
        
    }
}
console.log(isvalid?"Valid":"Invalid")


/*
Problem Statement
Write a program that takes a number of days as input and converts it into years, months, and remaining days. Assume:

1 year = 365 days
1 month = 30 days

Input
A single integer d (1 ≤ d ≤ 10000) representing the number of days.

Output
Print the result in the format:

X years, Y months, Z days
Examples

Example 1: Input:
400

Output:
1 years, 1 months, 5 days
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', input => {
  const d = Number(input);

  // TODO: Convert days into years, months, and days
  
    let years=Math.floor(input/365);
    let months=Math.floor((input%365)/30);
    let days=(input%365)%30;

    console.log(years,months,days);
  

  

  readline.close();
});


/*
Problem 1 – Time Validation

Task: Check if a given time is valid.

Input:

let hours = 23;
let minutes = 45;
let seconds = 59;


Rules:

Hours: 0–23

Minutes: 0–59

Seconds: 0–59

Expected Output: "Valid" or "Invalid"
*/

let hours=23;
let minutes = 45;
let seconds = 59;
isvalid=false;

if(hours >= 0 && hours <= 23){
    if(minutes >= 0 && minutes <= 59){
        if(seconds >= 0 && seconds <= 59){
            isvalid = true;
        }
    }
}

console.log(isvalid ? "Valid" : "Invalid");

/*
Problem 2 – Triangle Type Checker
Task: Given three sides of a triangle, determine its type:

let a = 5;
let b = 5;
let c = 8;

Rules:
1)First, check if the three sides can form a valid triangle:
-->Triangle inequality: a + b > c, a + c > b, b + c > a
If valid:
--> Equilateral → all sides equal
--> Isosceles → exactly two sides equal
--> Scalene → all sides different
If invalid → "Not a triangle"
Expected Output: "Isosceles"
*/


let a = 2;
let b = 1;
let c = 5;

let istriangle=false;
if(a + b > c && a + c > b && b + c > a ){
    istriangle=true;
    if(a==b && a==c){
        console.log("Equilateral");
    }
    else if((a==b && a!=c) || (b==c && b!=a) || (c==a && c!=b)){
        console.log("Isosceles");
    }
    else{
        console.log("Scalene");
    }
}
else{
    console.log("Not a triangle");
}


/*
Problem 3

Task: For a given year, print:

"Leap Year" → divisible by 4 but not 100, or divisible by 400

"Century Year but not Leap" → divisible by 100 but not 400

"Not a Leap Year" → otherwise
*/

year=1900;
isleap=false;
if(year%400==0 || (year%4==0 && year%100!=0)){
    console.log("Leap Year");
}
else if(year%100==0){
    console.log("Century Year but not Leap");
}
else {
    console.log("Not a Leap Year")
}


/*
Task: For a given number, print:

"Positive Even" → positive and even

"Positive Odd" → positive and odd

"Negative Even" → negative and even

"Negative Odd" → negative and odd

"Zero" → if number is 0
*/

let num=-8;
if(num>0){
    if(num%2==0){
        console.log("Positive Even");
    }
    else{
        console.log("Positive Odd");
    }
}
else if(num<0){
    if(num%2==0){
        console.log("Negative Even");
    }
    else{
        console.log("Negative Odd");
    }
}
else{
    console.log("Zero");
}


/*
Task: Given a month number (1–12), print the month name.

If the number is invalid → "Invalid Month"

Input Example:

let month = 9;


Expected Output: "September"
*/


month=9;
if(month>=1 && month<=12){
    switch(month){
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;
    }
}
else{
    console.log("Invalid Month")
}


/*
Task: A student’s marks are given for 3 subjects. Based on the total and individual marks, determine their final result.

Rules:

Each subject mark must be between 0–100.

If any subject is invalid → "Invalid Marks"

Calculate total marks = sum of 3 subjects.

Fail condition:

If any subject < 35 → "Fail"

Grade assignment (if pass):

Total ≥ 270 → "Excellent"

Total ≥ 200 and < 270 → "Good"

Total ≥ 150 and < 200 → "Average"

Total < 150 → "Poor"
*/

let sub1 = 90;
let sub2 = 85;
let sub3 = 95;

let total=sub1+sub2+sub3;
if(sub1<=100 && sub2<=100 && sub3<=100 && sub1>=0 && sub2>=0 && sub3>=0){
    if(sub1<35 || sub2<35 || sub3<35){
        console.log("Fail");
    }
    else
    {
        if(total>=270){
            console.log("Excellent");
        }
        else if(total>=200 && total<270){
            console.log("Good");
        }
        else if(total>=150 && total<200){
            console.log("Average");
        }
        else{
            console.log("Poor");
        }
    }
}
else{
    console.log("Invalid Marks");
}


/*
Problem 7 – Multi-Condition Employee Bonus Calculator

Task: Calculate the bonus for an employee based on multiple conditions:

Inputs:

let experience = 6;  // in years
let performance = 85; // performance score 0–100
let department = "Sales"; // could be "Sales", "HR", "Engineering"
let isManager = true;   // boolean


Rules:

Invalid input check:

Experience < 0 → "Invalid Experience"

Performance < 0 or > 100 → "Invalid Performance"

Department not in "Sales", "HR", "Engineering" → "Invalid Department"

Bonus calculation (if valid):

If Manager:

Performance ≥ 90 → "Bonus: 20%"

Performance ≥ 75 and < 90 → "Bonus: 15%"

Otherwise → "Bonus: 10%"

If not Manager:

Department "Sales" → "Bonus: 12%"

Department "Engineering" → "Bonus: 10%"

Department "HR" → "Bonus: 8%"

Additional condition:

If experience < 1 year → "No Bonus"

Expected Output Example:

experience = 6;
performance = 85;
department = "Sales";
isManager = true;


Output → "Bonus: 15%"
*/

let experience = 6;   // in years
let performance = 85; // performance score 0–100
let department = "Sales"; // "Sales", "HR", "Engineering"
let isManager = true;   // boolean

// 1️⃣ Invalid experience check
if (experience < 0) {
    console.log("Invalid experience");
}
// 2️⃣ Invalid performance check
else if (performance < 0 || performance > 100) {
    console.log("Invalid Performance");
}
// 3️⃣ Experience < 1 year → no bonus
else if (experience < 1) {
    console.log("No Bonus");
}
// 4️⃣ Valid experience & performance → calculate bonus
else {
    if (isManager) {
        if (performance >= 90) {
            console.log("Bonus: 20%");
        } else if (performance >= 75) {
            console.log("Bonus: 15%");
        } else {
            console.log("Bonus: 10%");
        }
    } else {
        if (department === "Sales") {
            console.log("Bonus: 12%");
        } else if (department === "Engineering") {
            console.log("Bonus: 10%");
        } else if (department === "HR") {
            console.log("Bonus: 8%");
        } else {
            console.log("Invalid Department");
        }
    }
}


// TERNARY VERSION OF ABOVE PROBLEM


let bonus=experience<0?"Invalid Experience"
:experience<1?"No Bonus"
:performance<0 || performance>100?"Invalid Performance"
:isManager?performance>=90?"Bonus: 20%"
:performance>=75 && performance<90?"Bonus: 15%"
:"Bonus: 10%"
:department=="Sales"?"Bonus: 12%"
:department=="Engineering"?"Bonus: 10%"
:department=="HR"?"Bonus: 8%"
:"Invalid Department";
console.log(bonus);