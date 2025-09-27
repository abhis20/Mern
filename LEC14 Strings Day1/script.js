/* Boundary Traversal - 18th Sep Assignment */
function boundaryTraversal(n, m, matrix) {
  /* printing 1st row -> row number for all elements will be same i.e., 0, 
  we just need to loop through j */
  for (let j = 0; j < m; j++) {
    console.log(matrix[0][j]);
  }

  /* Printing last column; column number for all elements in last colm is m-1 
  we just need to loop through rows, i.e., i 
  Also leaving the last element of first row, as it's already printed while printing first row
  */
  for (let i = 1; i < n; i++) {
    console.log(matrix[i][m - 1]);
  }

  if (n == 1) return;
  /* Printing last row, but in reverse order
  for all elements in this row, row will be (n-1) i.e., i = n-1, 
  and we just need to loop through j, in reverse order 
  leaving the last element of last row, as it's already printed while we're printing last column */
  for (let j = m - 2; j >= 0; j--) {
    console.log(matrix[n - 1][j]);
  }

  if (m == 1) return;
  /* Printing first column, but in reverse order
  for all these elements j will be 0, and we just need to loop through i, in reverse order */
  for (let i = n - 2; i >= 1; i--) {
    console.log(matrix[i][0]);
  }
}

let matrix1 = [
  [1, 4, 3],
  [2, 7, 9],
  [5, 8, 6],
  [3, 2, 7],
];

let matrix2 = [[1, 2, 3, 4]];
let matrix3 = [[1], [2], [3], [4]];

boundaryTraversal(4, 3, matrix1);
console.log("=============");
boundaryTraversal(1, 4, matrix2);
console.log("=============");
boundaryTraversal(4, 1, matrix3);

/* Transpose of a matrix */

function transpose(mat, n) {
  /*  // let newMat = [...mat]; write down why its wrong?  
  let newMat = [];
  for (let i = 0; i < n; i++) {
    newMat[i] = [...mat[i]];
  } */

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }
  for (let i = 0; i < n; i++) {
    console.log(mat[i].join(" "));
  }
}

let matrix4 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

transpose(matrix4, 5);

/* Rotate a matrix by 90 degree, find the notes for this on onenote. swap element at (i,j) to (j, n-1-i) */

/* ============== Strings ============== */
let str = "Hi, I'm Vaibhav";
let str2 = "Hi, I'm Vaibhav";
let str3 = `Hi, I'm "Vaibhav"`;
let str4 = 'Hi, Im "Vaibhav"';
console.log(typeof str);
console.log(typeof str2);
console.log(typeof str3);
console.log(typeof str4); //all are strings

/* Printing a string */
console.log(str);

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

/* Strings are Immutable --> we cannot change the value of string literals  */
str4[0] = "Y"; //this will not change the str4
console.log(str4);
str4 = "Y"; //this can be done
console.log(str4);

/* count the number of words in below string */
let words = "Hi how was your day";
let spaces = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] === " ") spaces++;
}
console.log("Total words: " + ++spaces);

/* Methods in Strings */

// includes() -> checks if a substring is present in the string or not
console.log("baloon".includes("oon")); // can search for a string of more than or equal to 1 length
console.log("baloon".includes("ooN")); // is case sensitive in nature

// replace() -> only replace the first value of the target string with new value
str = "shoes";
console.log(str.replace("s", "d")); //returns a new string, doesn't change the original one

// replaceAll() -> replaces all the occurrences of target with new value
str = "shows";
console.log(str.replaceAll("s", "a")); //returns a new string, doesn't change the original one

// trim() -> removes all the leading and trailing spaces
console.log("      yruhjd    uhewd dojksdj dsds    ".trim()); //returns a new string, doesn't change the original one

// substring() -> gives a substring based on various terms & conditions
console.log("abhishek".substring(2)); // ->gives substring from index = 2 to last index | [2, n)
console.log("abhishek".substring(2, 6)); // ->gives substring from index = 2 to 5 | [2,5] | [2,6)
console.log("abhishek".substring(-2)); // -> (converts negative values to 0) gives substring from [0,n)
console.log("abhishek".substring(-2, 6)); // -> [0, 6)
console.log("abhishek".substring(5, 2)); // -> [2, 5)
console.log("abhishek".substring(5, -3)); // -> [0, 5)

// slice() -> almost same as substring() method, but only differs when the range is negative
console.log("acciojob".slice(2)); // [2, n)
console.log("acciojob".slice(-2)); // gives exactly 2 characters from end
console.log("acciojob".slice(4, -2)); // output: oj ---> starts at 4th index, ends before last 2 characters
console.log("acciojob".slice(-7, -2)); // start from 7th element from end, and ends before 2nd element from end

// repeat()
console.log("abcd".repeat(4));

console.log("abcd".__proto__); // consoles the wrapper object details

// charAt()
console.log("vscode".charAt(2));

// indexOf()
console.log("stringMethodsring".indexOf("ring"));
console.log("stringMethodsring".indexOf("ring", 7));

// toLowerCase()
console.log("AbCd".toLowerCase());

// toUpperCase()
console.log("AbCd".toUpperCase());