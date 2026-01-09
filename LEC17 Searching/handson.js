// find minimum in array

function minNumber (arr){
     let min=Infinity;
     for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
     }
     return min;
}

let arr=[10,20,40,2,309,64,1,76];
console.log(minNumber(arr));

// find all ocurrences in of target in array

function allOccurence(arr,target){
    let found=false;
    let str="";
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            str=str+i+" ";
            found=true;
        }
    }
    if(!found){
        console.log("Element absent");
    }
    else{
        console.log(str);
    }
    
}
arr=[10,20,20,13,14,15,20,34];
allOccurence(arr,20);

// Binary search

function binarySearch(arr,target){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2); // avoids out of bound exception
        if(arr[mid]==target){
            return mid;
        }
        else if(arr[mid]>target){
             end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9],1));

// find square root of any number

function squareRoot(num){
    let low=0;
    let high=num;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(mid*mid==num){
            return mid;
        }
        else if(mid*mid>num){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return -1;
}

console.log("Square root of given number is:",squareRoot(81));

// first ocurrence of an element in an array
// lower bound
let array=[1,4,5,5,5,6,7];
function lowerBound(arr,target){
    let low=0;
    let high=arr.length-1;
    let ans=arr.length;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(arr[mid]>=target){
            ans=mid;
            high=mid-1;
        }
        else{
            low=mid+1
        }
    }
    return ans;
}

console.log(lowerBound(array,8));


// last occurence of an element in an array
// upper bound

function upperBound(arr,target){
    let low=0;
    let high=arr.length-1;
    let ans=arr.length;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(arr[mid]>target){
            ans=mid;
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return ans;
}
array=[1,2,3,4,4,5,6]
console.log(upperBound(array,4));

// no. of elements 
// upper bound - lowerbound

function freqOfelement(arr,target){
    let upper=upperBound(arr,target);
    let lower=lowerBound(arr,target);
    let freq=upper-lower;
    return freq;
}
console.log(freqOfelement([1,2,3,4,4,4,4,5],4));