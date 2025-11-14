//===============Searching==============

// find index of 54
let arr=[];
for(let i=1;i<=100;i++){
    arr.push(i);
}

for(let index in arr){
    if(54==arr[index]){
        console.log("Index found at:",index);
        break;
    }
}

// find first and last index of 6
arr=[1,2,4,4,6,6,6,8];
for(let i in arr){
    if(arr[i]==6){
        console.log("Index found at:",i);
        break;
    }
}

for(let i=arr.length-1;i>=0;i--){
    if(arr[i]==6){
        console.log("Index found at:",i);
        break;
    }
}

// using single loop

let firstIndexof6=-1;
let lastIndexof6=-1;
for(let i=0;i<arr.length;i++){
    if(arr[i]==6){
        if(firstIndexof6==-1){
            firstIndexof6=i;
        }
        lastIndexof6=i;
    }
}
console.log({firstIndexof6,lastIndexof6});

// =================Binary search===================

arr=[1,2,3,4,5,7,8];
let target=6;
let start=0;
let end=arr.length-1;
while(start<=end){
    let mid=Math.floor((start+end)/2);
    if(arr[mid]==target){
        console.log(target,"found at index",mid);
        break;
    }
    else if(target>arr[mid]){
        start=mid+1;
    }
    else if(target<arr[mid]){
        end=mid-1;
    }
}


// Find Square root of a number using Binary search

let n=5;
// output---> 9;

let low=0;
let high=n;
let isfound=false;
while(low<=high){
 let mid=Math.floor((low+high)/2);
 if(mid*mid==n){
   console.log("Square root is",mid);
   isfound=true;
   break;
 }
   else if(mid*mid>n){
   high=mid-1;
   }
   else{
   low=mid+1;
   }
}

if(!isfound) console.log("Element not a Perfect Square");

function binarySearch(arr,target){
    let low=0;
    let high=arr.length-1;
    while(low<=high){
         let mid=Math.floor((low+high)/2);
         if(arr[mid]==target){
            return mid;
         }
         else if(arr[mid]>target){
            high=mid-1;
         }
         else{
            low=mid+1;
         }
    }
    return -1;
}

let result=binarySearch([1,2,3,6,7,9,11,15],11);
if(result==-1){
    console.log("Element not found");
}
else{
    console.log("Element found at index: "+result);
}

function binarySearch1(arr,target){
    let low=0;
    let high=arr.length-1;
    let ans=-1;
    while(low<=high){
         let mid=Math.floor((low+high)/2);
         if(arr[mid]==target){
             ans= mid;
            high=mid-1;
         }
         else if(arr[mid]>target){
            high=mid-1;
         }
         else{
            low=mid+1;
         }
    }
    return ans;
}

console.log("Element found at index: "+binarySearch1([1,2,6,6,11,11,11,15],11));

// =======LowerBound======

function lowerBound(arr,target){
     let low=0;
     let high=arr.length-1;
     let ans=-1;
     while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]>=target){
          ans=mid;
          high=mid-1;
        }
        else{
            low=mid+1;
        }
     }
     return ans;
}

let result2=lowerBound([1,2,4,5,6,6,6,8,9],8);
 console.log("Lowerbound at index: "+result2);

 // =============UpperBound=============

 function upperbound(arr,target){
    let high=arr.length-1;
    let low=0;
    let ans=arr.length;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
     if(arr[mid]>target){
            ans=mid;
            high=mid-1;
        }
        else {
            low=mid+1;
        }
    }
    return ans;
 }

 console.log(upperbound([0,1,2,3,4,5,6],4));