/* ===================== Arrays in JS ===================== */

/* Arrays are non-primitve data type */

const name1 = "Name1";
const name2 = "Name2";
const name3 = "Name3";
const name4 = "Name4";
const name5 = "Name5";
const name6 = "Name6";
const name7 = "Name7";
const name8 = "Name8";
const name9 = "Name9";
const name10 = "Name10";
const name11="Name11";

const names = [
  "Name1",
  "Name2",
  "Name3",
  "Name4",
  "Name5",
  "Name6",
  "Name7",
  "Name8",
  "Name9",
  "Name10",
];

let n = names.length;
console.log("Length of names array:", n);

/* Boring way of printing an array 
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]); // and so on till 9th index
*/

for (let i = 0; i < n; i++) {
  console.log(names[i]);
}

/* arr1 is a const variable but still, 
we're able to change the value of it, as it's a non-primitive data type
*/
const arr1 = [1, 2, 3, 4, 5];
arr1[0] = 10;
//arr1 = [23, 34, 56, 59]; // ❌ this is wrong, this violates the const constant property

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
n = arr.length;

let sum = sumOfArray(arr);
console.log({ sum });

function sumOfArray(arr) {
  let n = arr.length,
    sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum;
}

/* Absolute function in JS ===> |3-7| = 4 */
console.log(Math.abs(3 - 7));

/* Question: 
find the absolute difference of (sum of all odd elements) and (sum of all even elements) */
function evenOddDiff(arr) {
  /* let n = arr.length;
  let evenSum = 0,
    oddSum = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      evenSum += arr[i];
    } else oddSum += arr[i];
  }

  return Math.abs(evenSum - oddSum);
 */
  /* OR */
  let n = arr.length;
  let evenSum = 0,
    oddSum = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      evenSum += arr[i];
    }
  }
  oddSum = sumOfArray(arr) - evenSum;
  return Math.abs(evenSum - oddSum);
}

console.log("Absolute difference of Even and Odd elements:", evenOddDiff(arr));

/* FizzBuzz problem 

you're given an array, write a function which print in below manner
- if there's a multiple of 3, print Fizz
- if there's a multiple of 5, print Buzz
- if there's a multiple of both 3 & 5, print FizzBuzz
- if there's no multiple of 3 or 5, print the number itself
*/

arr = [2, 1, 5, 3, 6, 10, 15, 27, 45, 30];
function fizzBuzz(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 3 == 0 && arr[i] % 5 == 0) console.log("FizzBuzz");
    else if (arr[i] % 5 == 0) console.log("Buzz");
    else if (arr[i] % 3 == 0) console.log("Fizz");
    else console.log(arr[i]);
  }
}

fizzBuzz(arr);

arr = ["Rajat", "Dev", "Ram", "Sita"];
arr[0] = "Laxman";
console.log(arr);

// changing array elements
arr = [1, 5, 6, 2, 1, 10];
arr[1] = 7;
console.log({ arr });

/* ================== Methods in Arrays ================== */
/* Insertion in Arrays */

// inserts at end
console.log("arr.push() return value: ", arr.push(15)); //they return the new length of arr
// H.W. how to insert multiple elements using push()

// inserts at begining
console.log("arr.unshift() return value: ", arr.unshift(-5));
// H.W. how to insert multiple elements using unshift()

console.log({ arr });

/* Deletions in Arrays */
//deletion at end
arr.pop(); // H.W -> find out what it returns

//deletion at begining
arr.shift(); // H.W -> find out what it returns

/* Searching in Array */
/*
H.W. -> write a function to return the index of a target element
function findIndex (arr, targetValue){
  --- 
  code
  ---

  return indexOftargetValue;
}
if targetValue doesn't exists in array, then return -1

consider unique elements in array
*/

/* Inbuilt method to find the first index */
console.log("index of 10 in Array", arr.indexOf(10)); // returns index if 10 is present
console.log("index of 10 in Array", arr.indexOf(15)); // returns -1 if 15 doesn't exist

/* Inbuilt method to find the last index of an element */
console.log("Last index of 1 in Arr:", arr.lastIndexOf(1));

/* inbuilt method to check if an element is present or not */
console.log(arr.includes(6)); //returns true as 6 is present
console.log(arr.includes(17)); //returns false as 17 is not present
