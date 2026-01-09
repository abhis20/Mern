// ==========SETS===============

let set0=new Set();  // declaration of a empty set

set0.add(1);
set0.add(2);
console.log(set0);

let set1=new Set([3,4,5,2]);
console.log(set1);

// union of sets
function union(firstSet,secondset){
       let unionSet=new Set(firstSet);
       for(let values of secondset){
        unionSet.add(values);
       }

       return unionSet;
}

console.log(union(set0,set1));


// intersection of sets
function intersection(firstSet,secondset){
     let intersection=new Set();
     for(let value of secondset){
        if(firstSet.has(value)){
              intersection.add(value);
        }
     }
     return intersection;
}

console.log(intersection(set0,set1));

// difference between sets

function difference(firstset,secondset){
    let differenceSet=new Set(firstset);
    for(let value of secondset){
        differenceSet.delete(value);
    }
return differenceSet;
}

console.log(difference(set0,set1));

const setString=new Set([..."abhishek"]);


// find frequency of each word in a given string

let sentence="how many repeating words are there in this sentence which has repeating words";

function frequencyOfWord(str){
   str=str.split(" ");
   console.log(str);
   let freq=new Map();
   for(let value of str){
    if(freq.has(value)){
        freq.set(value,freq.get(value)+1);
    }
    else{
        freq.set(value,1);
    }
   }
   for(let [word,value] of freq){
    if(value>1){
        console.log(word,"-->",value)
    }
   }
}
(frequencyOfWord(sentence));



// Sorting

function bubleSort(arr){
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
  }
  return (arr);
}

let arr=[1,22,33,12,14,16];
console.log("=============Bubble sort===============",bubleSort(arr));

// Selection sort

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; 

    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[minIndex]){
            minIndex=j;
        }
    }

    let temp=arr[i];
    arr[i]=arr[minIndex];
    arr[minIndex]=temp;
}
return (arr);
}

console.log("=============Selection sort=============",selectionSort(arr));

// insertion sort

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let currentIndex=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>currentIndex){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=currentIndex;
    }
    return (arr);
}

console.log("=============Insertion sort==============",insertionSort(arr))