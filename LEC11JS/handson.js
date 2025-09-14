/*
Write a function to find the average of three numbers
*/

function avg(a=0,b=0,c=0){
    return (a+b+c)/3;
}
console.log("The average of given number is",avg(1,2,3));

/*
write a function to find the factorial of a number
*/

function fact(x){
    let fact=1;
    for(let i=1;i<=x;i++){
        fact*=i;
    }
    return fact;
}

console.log("The factorial of given number is",fact(5));

/*
write a progran to find nCr
*/

function nCr(n=0,r=0){
    return (fact(n))/(fact((n-r))*fact(r));
}

console.log("The nCr of given number is",nCr(5,2));

/*
function that is going to be called for multiple users to check if they can vote based on age
*/

function canVote(userAge,userName)
{
    if(userAge>=18)
        console.log(userName + " is allowed to vote.");
    else console.log(userName + " is not allowed");
}

canVote(18,"Ramesh");


// Prime numbers in range

function prime(p){

    if(p<2){
        console.log("No prime");
        }
    else{
    for(let i=2;i<=p;i++){
        let isprime=true;
        for(let j=2;j<=i**0.5;j++){
            if(i%j==0){
                isprime=false;
                break;
            }
        }
        if(isprime)
                console.log(i);

    }
}}
prime(10);

