/* Optimized code for checking if a number is prime of not */

let N = 3;
// let sqrt = Math.pow(N, 0.5); -- also a valid way
let sqrt = Math.sqrt(N);
let isPrime = true;
for(let i = 2; i * i <= N; i++){
    if(N % i == 0){ // not a prime number
        isPrime = false;
        break;
    }
}
const isPrimeMessage = (isPrime && N != 1) ? " is a Prime number" : " is not a Prime number";

console.log(N + isPrimeMessage);


/* Pattern questions */

/* A

*****
****
***
**
*

*/
N = 5;
let stars = "";
for(let i = 0; i < N; i++) {
    stars += "*";
}
console.log(stars);

let M = 5;
for(let i = 0; i < M; i++) {
    let stars = "";
    for(let j = 0; j < N - i; j++) {
        stars += "*";
    }
    console.log(stars);
}

/*
B. 
1 --> row 1
1 2 --> row 2
1 2 3 --> row 3
1 2 3 4 --> row 4
1 2 3 4 5 --> row 5
1 2 3 4 5 6 --> row 6
*/

let totalRows = 6; // number of rows
M = 6; // number of columns

/* STEP 1: How to print 1 line
let numbers = "";
for(let i = 1; i <= N; i++)
    numbers += i + " ";
console.log(numbers); */

for(let row = 1; row <= totalRows; row++){
    let numbers = "";
    for(let cols = 1; cols <= row; cols++) {
        numbers += cols + " ";
    }
    console.log(numbers);
}



/* ========================= SCOPES in JS ========================= */
// console.log(numbers); // Gives: numbers is not defined

//console.log({letVariable}); // Gives: Cannot access 'letVariable' before initialization

let letVariable; // has global scope as it's not in any block

// console.log({letVariable}); // prints "undefined"

dfg = 12; //global variable -> not a good practice

console.log({dfg});

//console.log(undeclaredVariable); // Gives: undeclaredVariable is not defined


{
    var emptyBlockVariable = "abcd"; //var is not block scoped, but function scoped
    console.log({emptyBlockVariable});

}
console.log({emptyBlockVariable});// Gives: undeclaredVariable is not defined

{
    const emptyBlockVariable = "abcd";
    //console.log({emptyBlockVariableChild});// Gives: emptyBlockVariableChild is not defined
    {
        const emptyBlockVariableChild = "abcde";
        console.log("===inside block===", {emptyBlockVariable: emptyBlockVariableChild});
    }

}

console.log({varVariable});
var varVariable = "6";


/* H.W. -> Write about Hoisting and TDZ in your words */

/* Question: write code for below pattern

*****
 ****
  ***
   **
    *
    
*/