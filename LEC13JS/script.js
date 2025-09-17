/* =============== Little bit about Loops =============== */
/* Diamond Problem */

function diamondPattern(n) {
  let m = Math.floor(n / 2);
  let x = Math.floor(n / 2);
  let y = 1;

  //Printing L1
  for (let i = 0; i < m; i++) {
    let spaces = "",
      stars = "";
    for (let j = 0; j < x; j++) spaces += " ";
    for (let j = 0; j < y; j++) stars += "*";
    console.log(spaces + stars);
    x--;
    y += 2;
  }

  //Printing L2
  let stars = "";
  for (let i = 0; i < n; i++) stars += "*";

  console.log(stars);

  //Printing L3
  (x = 1), (y = n - 2);
  for (let i = 0; i < m; i++) {
    let spaces = "",
      stars = "";
    for (let j = 0; j < x; j++) spaces += " ";
    for (let j = 0; j < y; j++) stars += "*";
    console.log(spaces + stars);
    x++;
    y -= 2;
  }
}

diamondPattern(7);

/* ========== Continuing Arrays ==========  */

let arr = [2, 10, 6, 4, 9];

/* slice */
console.log({ arr });
let slicedArr = arr.slice(1, 4); // doesn't changes the original array
console.log({ slicedArr });

console.log(arr.slice(1, 4)); //--> will give elements in range [1, 4)
console.log(arr.slice(1)); //--> will give elements in range [1, N)
console.log(arr.slice()); //--> will give elements in range [0, N)
/* H.W -> check what happens if values passed in slice() are negative */

console.log({ arr });

/* splice */
console.log(arr.splice(1, 3)); // changes the original array
console.log({ arr });

/* concat */
let arr2 = [-3, -4, -10, -8];
console.log(arr.concat(arr2)); /* H.W -> How to concatenate multiple arrays? */

/* ================ Types of Loops for arrays ================ */

/* the basic loop */
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

/* for ... in loop */
for (let index in arr) {
  console.log(index);
  // console.log(typeof index) --> type of index here is "string"
}

/* for ... of loop */
for (let value of arr) console.log(value);

/* Write a function which prints the prefix sum of an array

input: [12, 4, -8, 10]
output: [12, 16, 8, 18]
*/

function prefixSum(arr) {
  /* Can be done this way also
  let sum = 0;
  for (let value of arr) {
    sum += value;
    console.log(sum);
    } */

  let prefixArr = [];
  prefixArr[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefixArr[i] = prefixArr[i - 1] + arr[i];
  }

  return prefixArr;
}

arr = [12, 4, -8, 10];
console.log(prefixSum(arr));

/* How to swap values of two variables */

let x = 10;
let y = 20;
console.log({ x, y });

let temp = x;
x = y;
y = temp;

console.log({ x, y });

/* Swapping two values of an array 
input: arr = [1,2,3,4,5], ind1 = 1, inde2 = 4

output: arr = [1,5,3,4,2]
*/
function swapArrElements(arr, ind1, ind2) {
  let n = arr.length;

  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;

  console.log({ arr });
}
arr = [1, 2, 3, 4, 5];
swapArrElements(arr, 1, 4);

/* Question -> print elements at odd indices of an array 
input1: arr = [1,2,3,4,5] --> odd length array
output1: 2 4

input2: arr = [1,2,3,4,5,6] --> even length array
output2: 2 4 6
*/
function printOddIndexedElements(arr) {
  let n = arr.length;

  /* Method 1
  for (let i = 0; i < n; i++) {
    if (i % 2 == 1) console.log(arr[i]);
  } */

  for (let i = 1; i < n; i += 2) console.log(arr[i]);
}

console.log("Odd indexed elements: ");
printOddIndexedElements(arr);

/* Question: Swap alternate elements of an array 
input1: arr = [1,2,3,4,5] --> odd length array
output1: arr = [2,1,4,3,5]

input2: arr = [1,2,3,4,5,6] --> even length array
output2: arr = [2,1,4,3,6,5]
*/

function swapAlternateElements(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
  }

  console.log({ arr });
}
arr = [1, 2, 3, 4, 5, 6];
console.log("Swapping alternate elements of the arr: " + arr.join(", "));
swapAlternateElements(arr);

/* ===== Heterogenous property of Arrays in JS ===== */
arr = [1, 2, "123", 2.344, true, [3, 4, "five", [2, 5, "printMe"]]];

//How to print "printMe" from above array
console.log(arr[5][3][2]);

/* H.W - Question: Given an array of consecutive numbers, but there's on number that's missing, find it
input: [1,2,3,5,6,7,8]
output: 4
*/

