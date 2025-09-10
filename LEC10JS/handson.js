/* H.W. -> Write about Hoisting and TDZ in your words */

/* Question: write code for below pattern

*****
 ****
  ***
   **
    *
    
*/

let n=6;
for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=i-1;j++){
        str=str+"  ";
    }
    for(let k=1;k<=n-i+1;k++){
        str=str+"* ";
    }
    console.log(str);
}


/*
print the butterfly pattern

 *                          * 
 *  *                    *  * 
 *  *  *              *  *  * 
 *  *  *  *        *  *  *  * 
 *  *  *  *  *  *  *  *  *  * 
 *  *  *  *  *  *  *  *  *  * 
 *  *  *  *        *  *  *  * 
 *  *  *              *  *  * 
 *  *                    *  * 
 *                          * 


*/

// first method

// 1st half
for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str=str+"* ";             // print stars
    }
    for(let j=1;j<=(2*n)-(2*i);j++){
        str=str+"  ";            //  print spaces
    }
    for(let j=1;j<=i;j++){
        str=str+"* ";             // print stars
    }
    console.log(str);
}

// 2nd half
for(let i=n-1;i>=1;i--){
    let str="";
    for(let j=1;j<=i;j++){
        str=str+"* ";             // print stars
    }
    for(let j=1;j<=(2*n)-(2*i);j++){
        str=str+"  ";            //  print spaces
    }
    for(let j=1;j<=i;j++){
        str=str+"* ";             // print stars
    }
    console.log(str);
}



// second method

 n = 4;

for (let i = 1; i <= 2 * n - 1; i++) {
    let str = "";
    
    // figure out row index (mirror after n)
    let row = i <= n ? i : 2 * n - i;

    // left stars
    for (let j = 1; j <= row; j++) {
        str += "* ";
    }

    // middle spaces
    for (let j = 1; j <= (2 * n - 2 * row); j++) {
        str += "  ";
    }

    // right stars
    for (let j = 1; j <= row; j++) {
        str += "* ";
    }

    console.log(str);
}


/*
Problem 1 — Print first n Fibonacci numbers

Specification

Print the first n Fibonacci numbers starting from 0.
(Sequence: 0, 1, 1, 2, 3, 5, 8, ... where F0 = 0, F1 = 1.)

n is the count of numbers to print (integer).

If n <= 0, you may print nothing or print "Invalid n" — pick one and be consistent.

Examples

n = 7 → 0 1 1 2 3 5 8

n = 1 → 0

n = 2 → 0 1

n = 0 → (nothing) or "Invalid n"

Hints (no full solution)

Use two variables to hold the last two Fibonacci numbers (e.g. a = 0, b = 1).

Loop n times: print a, then update a and b (next = a + b; a = b; b = next).

Iterative solution is O(n) time and O(1) extra space.

Watch edge cases: n = 0, n = 1, negative n, very large n (numbers grow fast).

Test cases to run

n = 7 → 0 1 1 2 3 5 8

n = 1 → 0

n = 2 → 0 1

n = 0 → nothing or Invalid n (depending on your choice)

n = 20 → check correctness and that it runs fast
*/


 n=7;

 if (n<=0){
    console.log("Invalid n");
 }
 else if(n>1){
 let first=0;
 let second=1;
 let sum=0;
 let output=first+" "+second;
for(let i=0;i<n-2;i++)
{

     sum=first+second;
     first=second;
     second=sum;
     output=output+" "+sum;

}
console.log(output);
}
else{
    console.log(0);
}

/*
Question 2:

Print all Fibonacci numbers up to a given value limit.

Example:

Input: limit = 50

Output: 0 1 1 2 3 5 8 13 21 34

⚡ Your task: Write it using a loop (not recursion).
*/

n=50
 if (n<=0){
    console.log("Invalid n");
 }
 else if(n>1){
 let first=0;
 let second=1;
 let sum=0;
 let output=first+" "+second;
while(true){
    sum=first+second;
    if(sum>n){
        break;
    }
    first=second;
    second=sum;
    output+=" "+sum;
}
console.log(output);
}
else{
    console.log(0);
}


/*
“Print only even Fibonacci numbers up to n” problem.

📌 Example: if n = 50 → output should be

0 2 8 34
*/
n=50;
if(n<=0){
    console.log("Invalid n");
}
else if(n==1){
    console.log(0);
}
else{
let first=0;
let second=1;
let output=first;
while(true){
    let sum=first+second;
    if(sum>n){
        break;
    }
    first=second;
    second=sum;
    if(sum%2==0){
    output=output+" "+sum;
    }
}
console.log(output);
}

/*
Problem Statement:
Write a program to calculate and print the sum of all even Fibonacci numbers less than or equal to n.

Example:

Input: n = 50

Output: 44
*/

n=50;
if(n<=0){
    console.log("Invalid n");
}
else if(n==1){
    console.log(0);
}
else{
let first=0;
let second=1;
let sumeven=0;
while(true){
    let sum=first+second;
    
    if(sum>n){
        break;
    }
    first=second;
    second=sum;
    if(sum%2==0){
    sumeven=sumeven+sum;
    }
}
console.log(sumeven);
}


/*
Problem Statement:

Write a program to check if a given number num is a Fibonacci number using loops (no recursion).

Input: num (any positive integer)

Output:

"Yes" → if num is a Fibonacci number

"No" → otherwise

Examples:

Input: 21 → Output: "Yes"

Input: 22 → Output: "No"
*/

let num=34;
let first=0;
let second=1;
let isfibo=false;
if(num==0){
    isfibo=true;
}
 else
    {
        while(true)
        {
    let sum=first+second;
    if(sum>num){
        break;
    }
    else if(sum==num){
        isfibo=true;
    }
    first=second;
    second=sum;
        }
    }
console.log(isfibo?"Yes":"No");


/*
Problem Statement

Write a program to find the position of a given number num in the Fibonacci sequence using loops (no recursion).

Input: num (any positive integer)

Output:

If num is a Fibonacci number, print its position in the sequence (starting from 0).

If num is not a Fibonacci number, print "Not a Fibonacci number".

Examples:

Input: num = 21 → Output: 8 (sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21)

Input: num = 22 → Output: "Not a Fibonacci number"
*/

n=2;
let f=0;
let s=1;
let count=1;
if(n==0){
    console.log(0);
}
else{
while(true){
    let sum=f+s;
    if(sum>n){
        console.log("Not a Fibonacci number")
        break;
    }
    f=s;
    s=sum;
    count++;
    if(sum==n){
        console.log(count);
        break;
    }
}
}



