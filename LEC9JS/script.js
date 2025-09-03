// factorial of number

const n=5;
let fact=1;
for(let i=1;i<=n;i++){
    fact*=i;
}
console.log("The factorial of given number is:",fact);

// write a program to check if a number is prime or not

let num=15;
let count=0;
for(let i=1;i<=num;i++){
    if(num%i==0){
        count++;
    }
}
 if(count==2){
    console.log("Prime Number");
 }
 else{
    console.log("Not a Prime Number");
 }

 // Print GCD of a Number

 let a=252;
 let b=105;
 let temp;
 while(a!=0){
    temp=a;
    a=b%a;
    b=temp;

 }
 console.log("The GCD of given numbers is :"+temp);

 // BREAK AND CONTINUE STATEMENTS

 // Print numbers from 100 to 200, and immediately stop when a number is divisible by 17 comes

 for(let i=100;i<=200;i++){
    if(i%17==0){
        break;
    }
    console.log(i);
    }

// Print the square of all numbers except numbers divisible by 17 from 1-100

for(let i=1;i<=100;i++){
    if(i%17==0){
        continue;
    }
    console.log("the square of "+ i + " is " + Math.pow(i,2));
 //  continue statement skips further statements and jump to updation part
}

// Print all odd numbers from 1 to 100 that are divisible by 5

console.log("Print all odd numbers from 1 to 100 that are divisible by 5");
for(let i=1;i<=200;i++){
    if(i%2==0 || i%5!=0){
        continue;
    }
    console.log(i);
    }

// Print first 10 odd numbers from 1 to 200 that are divisible by 5

console.log("Print first 10 odd numbers from 1 to 200 that are divisible by 5");
count=0;
for(let i=1;i<=200;i++){
    if(i%2==0 || i%5!=0){
        continue;
    }
    count ++;
    console.log(i);
    if(count==10){
        break;
    }
    }

/* =========== Nested For Loops ============= */

N = 10;
let M = 10;

// write a program to print 10 '*'

console.log("write a program to print 10 '*'");
let star="";
for(let i=1;i<=N;i++){
    star+="* ";
}
console.log(star);


//write a program to print 10 lines of (10 '*' in one line)

console.log("write a program to print 10 lines of *");
for(let i=1;i<=N;i++){
    let star="";
for(let j=1;j<=M;j++){
    star+="* ";
}
console.log(star);
}


/* 
Print below pattern

1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
1 2 3 4 5 6
*/

console.log("Print below pattern");
for(let j=1;j<=6;j++){
    let p="";
for(let i=0;i<6;i++){
    p+=i+1+" ";
}
console.log(p);
}



/* Bonus question, guess the output

const val = 1 + 3 + " ";
console.log({val}); 
====>  4(space)

*/

/* H.W.
Print this pattern:

A.
*****
****
***
**
*
*/

console.log("print pattern");
 for(let i=1;i<=5;i++){
     let str="";
     for(let j=1;j<=(5-i)+1;j++){
        str+="* ";
     }
     console.log(str);
 }


/*
B. 
1
1 2 
1 2 3 
1 2 3 4
1 2 3 4 5 
1 2 3 4 5 6
*/

console.log("print following pattern");
for(let i=1;i<=6;i++){
    let x="";
    for(let j=1;j<=i;j++){
        x+=j+" ";
    }
    console.log(x);
}


/* ============== do-while loop ============== 
- first executes the statements inside do block, then checks for condition inside while, 
  if this condition is true, the do block will again be executed, else it'll stop there.
- NOTE: even though the condition is false, the statements under do block, will execute once
*/



do {
  console.log("Hi, I'm do while loop!!");
} while (false);



let response;
let responseCounter = 0;
do {
  response = prompt("Do you want to continue? Count:" + responseCounter);
  console.log({response});
  responseCounter++;
} while (response == "Yes" || response == "yes");

/* similar code using while loop 
response = prompt("Do you want to continue? Count:" + responseCounter);

while (response == "Yes" || response == "yes"){
    response = prompt("Do you want to continue? Count:" + responseCounter);
    console.log({response});
    responseCounter++;
} 
*/