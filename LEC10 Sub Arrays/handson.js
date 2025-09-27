//==============subarray================

// no.of subarrays=(n*(n+1))/2

let arr=[1,4,5,7,3,2];
    for(let i=0;i<arr.length;i++){
         let arr3=[];
for(let j=i;j<arr.length;j++){

    //Method 1
    //   arr3.push(arr[j]);
    //    console.log(arr3.join(" "));

    // method 2

    console.log(arr.slice(i,j+1).join(" "));
    }
}

// Function to print the sum of all subarrays

function sum(arr){
    let totalsum=0
    for(let i=0;i<arr.length;i++){
           let sub=[];
           let sum=0;
        for(let j=i;j<arr.length;j++){
             sub.push(arr[j]);
             sum=sum+arr[j];
             totalsum+=sum;
       console.log(sub.join(" ")+"= "+sum);

        }
    }
    console.log({totalsum})
    
}
sum(arr);

// Question 2
/*
Time complexity---->O(N^2)
*/
function targetSum(arr,t){
     for(let i=0;i<arr.length;i++){
           let sub=[];
           let sum=0;
        for(let j=i;j<arr.length;j++){
             sub.push(arr[j]);
             sum=sum+arr[j];
             if(sum==t) console.log(sub);

        }
    }
}
(targetSum(arr,17));

//============NESTED ARRAYS================

let a=[["a",true,17],["xyz",false,undefined]];
console.log(a[1][0][2]);

let count=0;
for(let i=1;i<=3;i++){
    let str="";
    for(let j=1;j<=5;j++){
        count++;
        str=str+count+" ";
    }
    console.log(str);
}

// Printing a 2D array

console.log("Print 2D array");

a=[
     [1,2,3,4,5],
     [6,7,8,9,10],
     [11,12,13,14,15],
  ]

for(let i=0;i<a.length;i++){
    let str="";
    for(let j=0;j<a[i].length;j++){
        str=str+a[i][j]+" ";
    }
    console.log(str);
}

// Print the sum of each row 

console.log("Print the sum of each row ");

a=[
     [1,2,3,4,5],
     [6,7,8,9,10],
     [11,12,13,14,15],
  ]

let totalsum=0;
for(let i=0;i<a.length;i++){
    let sum=0;
    let str="";
    for(let j=0;j<a[i].length;j++){
        sum=sum+a[i][j];
        str=str+a[i][j]+" ";
    }
     totalsum+=sum;
    console.log(str+"="+sum);
}
console.log({totalsum});

// ==============Matrix===============

// Print the [sum of (product of elements of each even indexed row)]



a=[
     [1,2,3,4,5],
     [6,7,8,9,10],
     [11,12,13,14,15],
  ]
let sum1=0;
for(let i=0;i<a.length;i+=2){
    let product=1;
    for(let j=0;j<a[i].length;j++){
        product=product*a[i][j];
    }
     sum1=sum1+product;
}
console.log("Sum of product of elements of each even indexed row=",sum1);

// Printing a 2D array

console.log("Print 2D array using columns");

a=[
     [1,2,3,4,5],
     [6,7,8,9,10],
     [11,12,13,14,15],
  ]
for(let i=0;i<a[0].length;i++){
    let str="";
    for(let j=0;j<a.length;j++){
        str=str+a[j][i]+" ";
    }
    console.log(str);
}

// Function to print all the elements of  primary  diagonal

a=[
     [1,2,3],
     [4,5,6],
     [7,8,9],
  ]

function primaryDiagonal(a){
    let x=[];
    for(let i=0;i<a.length;i++){
        // for(let j=0;j<a[i].length;j++){
        //     if(i==j) console.log(a[i][j])
        // }

        x.push(a[i][i]);
    }
    return (x);
}
console.log(primaryDiagonal(a));

function secondaryDiagonal(arr){
    let y=[];
        for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(i+j==arr.length-1) y.push(arr[i][j]);
            }
    }
console.log(y);
}
secondaryDiagonal(a);

// function to check if primary diagonal sum is odd or even

a=[
     [1,2,3],
     [4,5,6],
     [7,8,9],
  ]
function checkSum(arr){
    let array=primaryDiagonal(arr);
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=sum+arr[i];
    }
    if(sum%2==0) console.log("Even sum");
    else console.log("Odd sum");
}
checkSum(a);

