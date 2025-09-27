/*  =============ARRAY============== */

let arr=[2,10,6,4,9];

console.log(arr);


console.log(arr.slice(1,4))  //  give elements in[1,4); does not change the original array



//console.log(arr.splice(1,3));  // changes the original array
console.log({arr});

//  Types of loops for arrays

// the basic loop

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// for ... in loop

for(let index in arr){
    console.log(arr[index]); // type of index here is "string"
}

// for ... of loop

for(let value of arr)
    console.log(value);

/* Write a function which prints the prefix sum of an array 

input:[12,4,-8,10]

output:[12,16,8,18]

*/
let arr1=[12,4,-8,10];
function prefixSum(arr){
    let prefix=[];
    prefix[0]=arr[0];
    // for(let i=0;i<arr.length;i++){
    //     sum=sum+arr[i];
    //     prefix.push(sum);
    // }

    for(i=1;i<arr.length;i++){
        prefix[i]=prefix[i-1]+ arr[i];
    }
    return prefix;
}
console.log(prefixSum(arr1));

// swaping 

let a=10;
let b=12;
let temp=a;
a=b;
b=temp;
console.log(a,b)

/*
Swapping two values in array
*/

arr1=[1,2,3,4,5];
function swapArr(arr,ind1,ind2){
    let n=arr.length;
    let temp=arr[ind1];
    arr[ind1]=arr[ind2];
    arr[ind2]=temp;
    console.log(arr);
}

swapArr(arr1,1,4);

// print elements at odd indices of an array

let arr2=[1,2,3,4,5,6];
function oddInd(arr){
    for(let i=0;i<arr.length;i++){
        if(i%2!=0)
            console.log(arr[i]);
}}
(oddInd(arr2));

/* Swap alternate elements of an array */

arr2=[1,2,3,4,5];
function swapAlterArr(arr){
    for(let i=0;i<arr.length;i++){
        if(i%2!=0){
        let temp=arr[i];
        arr[i]=arr[i-1];
        arr[i-1]=temp;
        }
    }
    return arr;
}
console.log("Swapping of array elements "+ arr2.join(","))
console.log(swapAlterArr(arr2));


//==========Heterogenous property of Arrays in JS==================

arr2=[1,2,"123",2.344,true,[3,4,"five",[2,5,"printme"]]];

// print "printme" from above array

console.log(arr2[5][3][2]);


//==============subarray================

// no.of subarrays=(n*(n+1))/2

arr=[1,2,3,4,5,6];
    for(let i=0;i<arr.length;i++){
         let arr3=[];
for(let j=i;j<arr.length;j++){
      arr3.push(arr[j]);
       console.log(arr3)
    }
}

/* H.W - Question: Given an array of consecutive numbers, but there's one number that's missing, find it
input: [1,2,3,5,6,7,8]
output: 4
*/
let array=[1,2,3,4,5,6,7,8];
function missingNum(arr){
    let missing=false;
for(let i=0;i<arr.length-1;i++){
    if((arr[i]+1)!=arr[i+1]){
        missing=true;
     return (arr[i]+1);
    }
}
if(!missing) return-1;
}
console.log("The missing number is: ",missingNum(array));


/* H.W -> check what happens if values passed in slice() are negative */

console.log(array.slice(-1,3));
// If you pass negative indices, JavaScript counts from the end of the array (or string).

/*

👉 Formula:
A negative index = array.length + index

*/


/* concat----->  The concat() method is used to merge two or more arrays.
It does not change the original arrays.

It returns a new array containing all the elements.
*/
 let arr5 = [1, 2, 3];
let arr6 = [-3, -4, -10, -8];
let arr7=[9,0,10,5,6];

console.log(arr5.concat(arr6,arr7));; 

/* H.W -> How to concatenate multiple arrays? 
====> You can pass more than one array into concat():
*/


/**
 .join()

Used on arrays.

Converts the array into a string.

You give it a separator (what to put between elements).
 */
