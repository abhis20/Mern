//LOOPS

// issues in repeating code 

// too much work for developer
// chances of Error
// unable to count the no of repetition
// too much work to update "hi" to "hii"

// to solve this issues , we use loops



// while loops

// print counting from 1-10

let x=1;
console.log("numbers from 1-10");
while(x<=10){
    console.log(x);
    x++;
}  // O(10)

// print all even numbers till 25

let num=0;
console.log("even numbers till 25");
while(num<26){
    if(num%2==0){
        console.log(num);
    }
    num+=1;
}  //  O(26)

// print countdown from 10 to 1

num=10;
console.log("numbers in reverse order");
while(num!=0){
    console.log(num);
    num--;
} // O(10)

// For loop
//print hi 10 times

for(let i=0;i<10;i++){
    console.log("hi");
}  // O(10)

//print counting from 1 to 10

console.log("numbers from 1-10")
for(num=1;num<=10;num++){
    console.log(num);
}  // O(10)

//print multiples of 3 only upto 50 --> print 3,6,9,......48

console.log("multiples of three");
for(num=3;num<=50;num+=3){
    console.log(num);
} // O(50/3)

//print the squares of each number from 20 to 35

console.log("squares from 20 -35");
let n=35;
for(num=20;num<=n;num++){
    console.log("square of ",num, "is",num**2);
}  //  O(16)

n=15;
let start=20;
for(let i=start;i<=start+n;i++){
    console.log(i*i);
}  // O(n) ==>[(start+n)-start]

// print table of 5

n=5;
console.log("Table of 5");
for(let i=1;i<=10;i++){
    console.log(n + " * " + i + " = " + n*i);
}  // O(10)

//find the sum of first 100 numbers and print it

console.log("the sum of first 100 numbers ===>");
let sum=0;
for(let i=1;i<=100;i++){
    sum+=i;
}
console.log(sum); // O(100)

// conditions related extra things

// read about short circuiting

const n1=false && 5;
const n2=n1===false&& 34;
const n3=n2 && 67;
const n4=true && n2==34 && n1==false;
console.log({n1,n2,n3,n4});

