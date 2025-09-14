// H.W. how to insert multiple elements using push()

let arr=[1,2,3,4,5];
arr.push(6);
console.log(arr);
console.log(arr.push(6));// returns the array length and also adds the element
console.log(arr);
arr.push(7,8,9,10);
console.log(arr);

// H.W. how to insert multiple elements using unshift()

arr.unshift(1,1,2);
console.log(arr);
console.log(arr.unshift()); // returns the array length
console.log(arr);

//  arr.pop(); // H.W -> find out what it returns
console.log(arr.pop());  // returns the last element removed
console.log(arr);
arr.pop();
console.log(arr);

//   arr.shift(); // H.W -> find out what it returns

arr.shift();
console.log(arr);
console.log(arr.shift()); // returns the first element removed
console.log(arr);

/*

H.W. -> write a function to return the index of a target element
function findIndex (arr, targetValue){
  --- 
  code
  ---

  return indexOftargetValue;
}
if targetValue doesn't exists in array, then return -1

*/

arr=[1,2,3,4,5,6,10];
function findIndex(arr,targetValue){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==targetValue)
            return i;
    }
    return -1;
}
console.log(findIndex(arr,6));



/* find and update the value of element = 10 to 14 using indexOf() and includes() methods*/
let a=0;
if(arr.includes(10))
     a= arr.indexOf(10);
    arr[a]=14;
    console.log(arr);
