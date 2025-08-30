/* Print the name and score of highest scoring student */

const name1 = "Riya";
const name2 = "Ramesh";

const marks1 = 50;
const marks2 = 40;

/* METHOD 1 
if (marks1 > marks2) {
  console.log(name1, " has scored highest marks = ", marks1);
} else {
  console.log(name2, " has scored highest marks = ", marks2);
} */

/* METHOD 2
let winnerName;
let winnerMarks;

if (marks1 > marks2) {
  winnerName = name1;
  winnerMarks = marks1;
} else {
  winnerName = name2;
  winnerMarks = marks2;
}

console.log(winnerName, " has scored highest marks = ", winnerMarks);
 */

//METHOD 3 - best (optimized)
let winnerName = name1;
let winnerMarks = marks1;

if (marks2 > marks1) {
  winnerName = name2;
  winnerMarks = marks2;
}

console.log(winnerName, " has scored highest marks = ", winnerMarks);

/* ================== Ternary operator ================== */
/* Check if a number is even or odd */
const num1 = 10;

//directly write the ternay operator
//Using If else
if (num1 % 2 == 0) {
  console.log(num1 + " is Even");
} else {
  console.log(num1 + " is Odd");
}

//METHOD 1
num1 % 2 == 0 ? console.log(num1 + " is Even") : console.log(num1 + " is Odd");

//METHOD 2
const isEvenOrOdd = num1 % 2 == 0 ? "Even" : "Odd";
console.log(num1 + " is " + isEvenOrOdd);

/* Check if a number is positive OR negative */
const isPosNegative = num1 > 0 ? "Positive" : "Negative";
console.log(num1 + " is " + isPosNegative);

/* Check if a number is positive, negative or zero */
const num2 = 40;

const isPosNegativeOrZero =
  num1 > 0 ? "Positive" : num2 == 0 ? "Zero" : "Negative";

console.log(num1 + " is " + isPosNegative);

/* HOMEWORK: Try all yesterday's questions with Ternary Operator */

/* Q: Print the name and score of highest scoring student USING TERNARY OPERATOR*/
const highestScorerName = marks1 > marks2 ? name1 : name2;
const highestScore = marks1 > marks2 ? marks1 : marks2;

console.log(
  highestScorerName +
    " has scored the higest marks with marks = " +
    highestScore
);

/* EXPLORE: How to write multiple statements inside a true/false part of ternary operator */

/* Q: Print greatest among three numbers */

/* Pseudo Code:

  Type 1 (in plain english):
  - compare number1 and number2 with number3, if number3 is greater than both of them, then number3 is greatest
  - compare number1 and number3 with number2, if number3 is greater than both of them, then number2 is greatest
  - if number2 & number3 are not greatest, then definitely number1 is greatest

  Type 2 (using some of the code/keywords):
  - if number1 > number2 && number1 > number3 then number1 is greatest
  - else if number2 > number1 && number2 > number3 then number2 is greatest
  - else number3 is greatest

 */

const number1 = 10,
  number2 = 20,
  number3 = 30;

let maxAmongThreeNums = number1;

if (number2 >= number1 && number2 >= number3) {
  maxAmongThreeNums = number2;
} else if (number1 >= number3 && number1 >= number2) {
  maxAmongThreeNums = number1;
} else {
  maxAmongThreeNums = number3;
}

// do it on your own using ternary operator

//TIP: max & min of two numbers
const maxOfNum1Num2 = Math.max(num1, num2);
const minOfNum1Num2 = Math.min(num1, num2);

//EXPLORE: max & min of three or more number

/* Question: Print 1-7 into weekdays
  1 -> Monday
  2 -> Tuesday
  3 -> Wednesday and so on...
*/

const dayNumber = 3; // Print Wednesday

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid Day Number");
}

/* Make a grading system using Switch statement */
//Aisi galtiyan nhi krni h
//70 <= marks <= 80
//marks >= 80 < 90