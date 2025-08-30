console.log("Hello World");

//variables - wrong ways of declaring a variable
/* - multiline comments
person1 = "Harsh";
person1Age = 20;

person2 = "Riya";
person2Age = 21;

//printing something on console
console.log(person1);
console.log("Sum of ages of both the Persons:", person1Age + person2Age);
*/

//correct ways of declaring a variable
//using let & const

let person1; //declaration of variable
person1 = "Harsh"; //intialization / definition of a variable

// console.log(age); // variable that's declared after this console.log
// console.log(number);// variable that's never declared

let person1Age = 20; // declaration and definition of variable
let age; //uninitialized variable

console.log("Value of undefined variable 'age': ", age);

let person2 = "Riya";
let person2Age = 21;

console.log(person1);
console.log("Sum of ages of both the Persons:", person1Age + person2Age);

//let variables can change their values in future also
person1 = "Harsh Singh";
console.log(person1);

//const variables
const studentName = "Rahul"; // this value cannot be changes
// studentName = "Puneet"; gives error
//const emptyConstVariable; // cannot create uninitialized const variables

//types of data we can store in const
//store name
const employeeName = "Rahul Kumar";

//store age
let employeeAge = 30;

//store Date of birth (dob)
const dob = "23 - Jan - 2002";

console.log("Student Name: " + studentName); // adds two strings

//data type -> type of value a variable holds
console.log("Checking type of DOB variable: ", typeof dob);
console.log("Checking type of employeeAge variable: ", typeof employeeAge);

// various data types in javascript
// boolean
const isStudent = true;
console.log("Checking type of isStudent variable: ", typeof isStudent);

// string -> refer above dob example

// number -> refer above employeeAge example

//JS is dynamically typed language
let x = "Hi How are you"; // x is of type string
x = 20; // x is now of type number
x = false; // x is now of type boolean

/* ============== Arithmetic Operators ================= */
let a = 10,
  b = 20;

//sum
let c = a + b;
console.log("sum of a and b:", c);

//subtract
c = b - a;
console.log("b - a = " + c);

//multiplication
c = a * b;
console.log("a * b = " + c);

//division
c = b / a;
console.log("b/a = " + c);
c = -4 / 0;
console.log("-4 / 0 =", c);
c = 4 / Infinity;
console.log("4 / Infinity =", c);

//remainder -> %
c = a % b;
console.log("a%b = " + c);

//power -> **
c = 2 ** 4;
console.log("2 raised to power 4: " + c);

//floor and ceil value of a decimal number
const decimalNumber = 20.35;
// 20(floor) < 20.35 < 21 (ceil)
console.log("floor of 20.35", Math.floor(decimalNumber));
console.log("ceil of 20.35", Math.ceil(decimalNumber));

//Q1: convert minutes to seconds and print it
const minutes = 24;
//print seconds
const seconds = minutes * 60;
console.log("24 minutes has :", seconds, "seconds");

//Q2: Find last digit of a number
//Example: number = 234, print 4;
const number1 = 234;
//print last digit
const lastDigit = number1 % 10;
console.log("Last digit of", number1, "is", lastDigit);

//Q3: Find second last digit of a number
const number2 = 234;
//print second last digit: 3
//Solution
// - eleminate last digit
//      - divide number by 10 and take floor value
//      - number = 234, number/10 = 23.4 => Math.floor(23.4) = 23;
// - print number % 10
const numWithoutLastDigit = Math.floor(number2 / 10);
const secondLastDigit = numWithoutLastDigit % 10;
console.log("Second last digit of", number2, "is", secondLastDigit);

//Q4: Find 3rd last digit of a number in above code
const numWithoutLastTwoDigits = Math.floor(numWithoutLastDigit / 10);
const thirdLastDigit = numWithoutLastTwoDigits % 10;
console.log("Third last digit of", number2, "is", thirdLastDigit);

/* NOTE: 
- to eliminate the digit we use -> divide(/) operator
- to extract/print the digit we use -> modulud(%) operator
- = is also known as assignment operator
*/

/* Some weird behaviours of Arithmetic operators with strings */

// Multiply -> except addition, all arithmetic operators convert string to number if possible
const num = "123";
const str = "abc";
let result;

result = num * 2;
console.log(result);

result = num * num;
console.log(result);

result = str * 2;
console.log(result);

//Addition -> in addition, it prefers the string
result = num + 2;
console.log(result);

/* Weird behaviour in case of decimal addition */
result = 0.1 + 0.2;
// -> 0.1 -> convert decimal to binary store as a binary 001010
// -> retrieve 001010 to convert it to a decimal again
console.log(result);

/* Modulus of a negative number */
result = -31 % 7; // --> HOMEWORK

/* power method --> (**) */
result = Math.pow(2, 5); // works exactly same as 2**5;
console.log(result);

/* NEXT CLASS -> precedence and associativity */

/* Some more arithmetic operators */
let r = 5;
r = r + 5; // RHS is calculated first, then it is assigned to LHS
r += 5; //shorthand
console.log(r); 

r *= 5;
console.log(r);

r = "34";
r += 26;
r *= 2;
console.log(r);