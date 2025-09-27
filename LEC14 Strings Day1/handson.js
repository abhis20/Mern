/* Boundary Traversal */

function boundaryTraversal(arr,m,n){
    let x=[];
    for(let j=0;j<n;j++)
    {
       x.push(arr[0][j])
    }

    for(let i=1;i<m;i++)
    {
       x.push(arr[i][n-1]);
    }
if(m>1)
{
    for(let j=n-2;j>=0;j--)
    {
       x.push(arr[m-1][j]);
    }
}
if(n>1)
{
    for(let i=m-2;i>0;i--)
    {
       x.push(arr[i][0]);
    }
}
    console.log({x});
 }

 let matrix1=
 [
    [1,2,3,4],
    [12,0,1,5],
    [11,2,3,6],
    [10,9,8,,]
 ];

 let matrix2=[[1,2,3,4]];
 let matrix3=
 [
    [1],
    [2],
    [3],
    [4]
 ]

 console.log("Matrix1 Boundary elements:");
 boundaryTraversal(matrix1,4,4);

 console.log("Matrix2 Boundary elements:");
 boundaryTraversal(matrix2,1,4);

 console.log("Matrix3 Boundary elements:");
 boundaryTraversal(matrix3,4,1);
 
 /* Transpose of a matrix */

 // ============Method 1===============

 function transpose1(arr,n){
      let newMatrix=[];
      for(let i=0;i<n;i++){
        newMatrix[i]=[...arr[i]];
      }
      for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            newMatrix[i][j]=arr[j][i];
        }
      }
      for(let i=0;i<n;i++){
        console.log(newMatrix[i].join(" "));
      }
 }

 // ============Method 2===============

 function transpose2(arr,n){
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            [arr[i][j],arr[j][i]]=[arr[j][i],arr[i][j]]
        }
    }
    for(let i=0;i<n;i++){
        console.log(arr[i].join(" "));
    }
 }

 let matrix4 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

console.log("Method1 transpose");
transpose1(matrix4,5);
console.log("Method2 transpose");
transpose2(matrix4,5);

/*  // let newMat = [...mat]; write down why its wrong?  
       -------> it uses a shallow copy that means only copies the first level and references the other levels


/* Rotate a matrix by 90 degree, find the notes for this on onenote. swap element at (i,j) to (j, n-1-i) */

function rotateMatrix(arr,n){
        let newMatrix=[];
      for(let i=0;i<n;i++){
        newMatrix[i]=[...arr[i]];
      }
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            newMatrix[i][j]=arr[n-1-j][i];
        }
    }
    for(let i=0;i<n;i++){
        console.log(newMatrix[i].join(" "));
    }
 }

let matrix5=
[
    [7,2,3], 
    [2,3,4], 
    [5,6,1]
];

console.log("Rotate a matrix 90 degrees");
rotateMatrix(matrix5,3)

/* count the number of words in below string */
let words = "Hi how was your day";

let count=0;
for(let i=0;i<words.length;i++){
    if(words[i]==" "){
        count++;
    }
}
console.log(++count);


// Methods in strings

// includes() -> checks if a substring is present in the string or not

let str="AbHisheK";
// console.log(str.includes(k))--------> error k is not defined
console.log(str.includes("k")) // --------> false as k is lowercase
console.log(str.includes("K")) //--------->true


// replace() -> only replace the first value of the target string with new value

console.log(str.replace("A","S"));

// replaceAll() -> replaces all the occurrences of target with new value

str="accijob";
console.log(str.replaceAll("c","s"));

// trim() -> removes all the leading and trailing spaces

console.log(("   ahbhgagtg jahygyg jaygyg    ajhy     ").trim());

// substring() -> gives a substring based on various terms & conditions

str="012345678910";
console.log(str.substring(2,8)); // -----> excludes 8 ,includes 2
console.log(str.substring(2)); // [2,n)
console.log(str.substring(13)); //----> out of bound so prints empty string
console.log(str.substring(-13)) //---> converts negative to 0
console.log(str.substring(-13,19)) // ---->[0,n)
console.log(str.substring(7,5)) //-------> swap start and end

/*

substring(start, end) in JS treats negative numbers as 0. 
So -13 → becomes 0.
If end is greater than the string length, JS automatically uses the string length.

✅ Rules Summary
------> Negative index → treated as 0
------> Index > string length → treated as string length (if start>end length returns empty string)
------> Start > End → JS swaps start and end
------> End omitted → substring till end of string
------> Start = End → empty string

*/

// slice() -> almost same as substring() method, but only differs when the range is negative

console.log(str.slice(-7)); //---> Negative → count from end of string and prints (8910)
// gives last n elements
console.log(str.slice(-7,-5));

/*

* start → index to start from (inclusive)
* end → index to end at (exclusive)
* If end is omitted → goes till end of string
* Supports negative indexes (counts from the end!)
* Unlike substring(), slice() returns empty string if start > end


| Feature             | substring()             | slice()                   |
| ------------------- | ----------------------- | ------------------------- |
| Negative start/end  | Treated as 0            | Counts from end of string |
| Start > End         | Swaps start & end       | Returns empty string      |
| End omitted         | Till end of string      | Till end of string        |
| Out-of-bounds index | Adjusted to 0 or length | Adjusted to 0 or length   |
| Start = End         | ""                      | ""                        |

*/


// repeat()

console.log(str.repeat(2)); // -----> repeats n times
console.log(str[1].repeat(2)); // ------> repeats 1st index of string

// charAt()

str="abbcdecf";
console.log(str.charAt(2)); // -----> returns the value at index 2


// indexOf()
console.log(str.indexOf("b"));
console.log(str.indexOf("b",2));

// toLowerCase()
console.log(str.toLocaleLowerCase());

// toUpperCase()
console.log(str.toUpperCase());


// in given string print all 3 length substrings using slice and substring

// method 1
let string="accijob";
let n=string.length;
for(let i=0;i<n;i++){
for(let j=i;j<n;j++){
if(string.substring(i,++j).length==3)
    console.log(string.substring(i,j));
}
}

// method 2

for(let i=0;i<n.length-3;i++){
    console.log(string.substring(i,i+3));
}


