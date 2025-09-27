/* Topic from prev. lecture
Write a function to find the sum of all subarrays whose length is K
input: A = [7, 4, 8, 6, 5], K = 3
output: 56
explanation: all subarrays of size 3 -> [7,4,8], [4,8,6], [8,6,5] and their sum is 19 + 18 + 19 = 56
*/
function sumAllSubarraysOfSizeK(arr, k) {
  let n = arr.length;
  let sumOfSubOfSizeK = 0;
  for (let i = 0; i < n; i++) {
    let subarr = [];
    let sum = 0;
    for (let j = i; j < n; j++) {
      subarr.push(arr[j]);
      sum += arr[j];
      /* Method 1
      const currSubarraylength = j - i + 1;
      if (currSubarraylength === k) console.log(subarr.join(" "), sum); */

      /* Method 2 */
      if (subarr.length === k) {
        sumOfSubOfSizeK += sum;
      }
    }
  }
  return sumOfSubOfSizeK;
}

let arr = [7, 4, 8, 6, 5];
console.log(sumAllSubarraysOfSizeK(arr, 3));

/* Continuing nested arrays */

const array1 = [arr, 1, "85", "rty", [2, [4, 5]], 32];
const array2 = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
];
const array3 = [
  [1, 2],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
];
//print the value of 4 from array1
console.log(array1[1][1]);
console.log(
  "checking if array1 is an array or not using Array.isArray() method",
  Array.isArray(array1)
);

if (Array.isArray(array1[4])) {
  if (Array.isArray(array1[4][1])) {
    console.log("Printing 4", array1[4][1][0]);
  }
}

//check if 2D nested array is a matrix or not
function isMatrix(arr) {
  if (!Array.isArray(arr)) return false;

  if (!Array.isArray(arr[0])) return false;

  let firstRowLength = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length != firstRowLength) return false;
  }

  return true;
}

console.log(isMatrix(array1));
console.log(isMatrix(array2));
console.log(isMatrix(array3));
console.log(isMatrix(arr));

/* Function to Reverse an array 
input: [3,2,4,1,9]
output: [9,1,4,2,3]
*/

function reverseArr(arr) {
  let n = arr.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
  }
  console.log(arr.join(" "));
}

reverseArr([3, 2, 4, 1, 9]);

/* Reverse each row of a nested 2D array 
input: [
          [1, 2],
          [2, 3, 4, 5],
          [3, 4, 5, 6],
        ];

output: [
          [2, 1],
          [5, 4, 3, 2],
          [6, 5, 4, 3],
        ];
*/
function reverseRows(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let m = arr[i].length;
    for (let j = 0; j < Math.floor(m / 2); j++) {
      [arr[i][j], arr[i][m - j - 1]] = [arr[i][m - j - 1], arr[i][j]];
    }
  }
  console.log({ arr });
}

const array4 = [
  [1, 2],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
];
reverseRows(array4);


/* H.W -> Reverse columns of a 2D matrix
 
input: [
          [1, 2, 3, 4],
          [2, 3, 4, 5],
          [3, 4, 5, 6],
        ]
output: 
  3 2 1
  4 3 2
  5 4 3
  6 5 4

explanation: 

actual array after reversing the colums will be
[
  [3, 4, 5, 6],
  [2, 3, 4, 5],
  [1, 2, 3, 4],
]
*/
