/* Print all subarrays */
function printSubarrays(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    // let subarr = [];
    for (let j = i; j < n; j++) {
      /* Method 1
      subarr.push(arr[j]);
      console.log(subarr.join(" ")); 
      */

      /* Method 2 */
      console.log(arr.slice(i, j + 1).join(" "));
    }
  }
}

let arr = [1, 4, 5, 7, 3, 2];
printSubarrays(arr);

/* Function to print the sum of all subarrays' of arr
1 -> sum = 1
1 4 -> sum = 5
1 4 5 -> sum = 10
1 4 5 7 -> sum = 17
1 4 5 7 3 -> sum = 20
1 4 5 7 3 2 -> sum = 22
*/
function printSubarraySum(arr) {
  let n = arr.length;
  let allSubarraysSum = 0;
  for (let i = 0; i < n; i++) {
    let subarr = [];
    let sum = 0;
    for (let j = i; j < n; j++) {
      subarr.push(arr[j]);
      sum += arr[j];
      allSubarraysSum += sum;
      console.log(subarr.join(" "), sum);
    }
  }
  console.log({ allSubarraysSum });
}

printSubarraySum(arr);

/* Write a function to print the subarray whose sum is target sum (=T) 
input: [1, 4, 5, 7, 3, 2], T = 15
output: [5, 7, 3]
*/

/* 
TC: O(N^2) 
Note: Optimized time complexity is O(N) - you can try on your own
*/
function findTargetSumSubarray(arr, T) {
  /* print the subarray with sum = target sum */
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let subarr = [];
    let sum = 0;
    for (let j = i; j < n; j++) {
      subarr.push(arr[j]);
      sum += arr[j];
      if (sum == T) {
        return subarr;
      }
    }
  }
}

console.log(findTargetSumSubarray(arr, 10));

/* ================ Nested Arrays ================ */

/* 
Rows
Print three rows

First row → [1, 2, 3, 4, 5]
Second row → [6, 7, 8, 9, 10]
Third row → [11, 12, 13, 14, 15]

Full 2D Array
arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
]
*/

for (let i = 0; i < 3; i++) {
  let str = "";
  for (let j = 1; j <= 5; j++) {
    str += j + 5 * i + " ";
  }
  console.log(str);
}

arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

console.log("Printing 2D array");
for (let i = 0; i < arr.length; i++) {
  str = "";
  for (let j = 0; j < arr[i].length; j++) {
    str += arr[i][j] + " ";
  }
  console.log(str);
}

/* Print the sum of each row 
input: arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

output: 
15
40
65
*/
console.log("Sum of each rows");
for (let i = 0; i < arr.length; i++) {
  let sum = 0; //sum of row = arr[i]
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
  console.log(sum);
}

/* Sum of matrix */
let sum = 0; //sum of row = arr[i]
for (let i = 0; i < arr.length; i++)
  for (let j = 0; j < arr[i].length; j++) sum += arr[i][j];

console.log("Sum of matrix", sum);

/* Print the [sum of (product of elements of each even indexed-row)] 
input: arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

output: 
360480
(1*2*3*4*5 + 11*12*13*14*15)

*/

sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (i % 2 == 1) continue;
  let rowProduct = 1;
  for (let j = 0; j < arr[i].length; j++) {
    rowProduct *= arr[i][j];
  }
  sum += rowProduct;
}
console.log("Sum of product of even-indexed rows:", sum);

/* Print the matrix col-wise 
input: arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

output: 
1 6 11
2 7 12
3 8 13
4 9 14
5 10 15
*/

console.log("Printing column wise");
for (let i = 0; i < arr[0].length; i++) {
  let str = "";
  for (let j = 0; j < arr.length; j++) {
    str += arr[j][i] + " ";
  }
  console.log(str);
}

/* H.W. - print the sum of elements in odd-indexed columns */

/* Function to print all the elements of primary diagonal */
function getPrimaryDiagonal(arr) {
  let n = arr.length;
  let primaryDiagonal = [];
  for (let i = 0; i < n; i++) {
    primaryDiagonal.push(arr[i][i]);
  }
  return primaryDiagonal.join(" ");
}

function getSecondaryDiagonal(arr) {
  let n = arr.length;
  let secondaryDiagonal = [];
  for (let i = 0; i < n; i++) {
    secondaryDiagonal.push(arr[i][n - i - 1]);
  }
  return secondaryDiagonal.join(" ");
}

arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Primary diagonal:", getPrimaryDiagonal(arr));
console.log("Secondary diagonal:", getSecondaryDiagonal(arr));

/* function to check if primary diagonal sum is odd or even */
function getPrimaryDiagonalSum(arr) {
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i][i];
  }
  return sum % 2 == 0 ? true : false; //returning true for even sum, false for odd sum
}
console.log(getPrimaryDiagonalSum(arr));