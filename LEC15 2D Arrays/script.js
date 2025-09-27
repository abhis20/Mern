let arr=[7,4,8,6,5] ;
let n=arr.length;
function sumofallSUbArray(arr,k){
let sum1=0;
for(let i=0;i<n;i++){
    let x=[];
    let sum=0;
    for(let j=i;j<n;j++){
        x.push(arr[j]);
        sum=sum+arr[j];
        if(x.length==k){
               sum1=sum1+sum; 
             }
       }
}
return(sum1);
}
console.log(sumofallSUbArray(arr,3));


const array1=[arr,1,"85","rty",[2,[4,5]],32];
const array2=
[
    [1,2,3,4],
    [2,3,4,5],
    [3,4,5,6]
];

console.log(array1[4][1][0]);

// check if array is matrix or not

function ismatrix(arr){
    for(let i=1;i<arr.length-1;i++){
        if(arr[i].length!=arr[0].length) return false;
    }
    return true;
}
console.log(ismatrix(array1));
console.log(ismatrix(array2));


// Reverse an array

arr=[1,2,3,4,5];

function arrReverse(arr){
    let n=arr.length;
    for(let i=0;Math.floor(i<n/2);i++){
        
        let temp=arr[i];
        arr[i]=arr[n-1-i];
        arr[n-1-i]=temp;
        

    }
    console.log(arr);

}

arrReverse(arr);

// Reverse each row of nested 2D array

arr=[
    [1,2],
    [2,3,4,6],
    [3,4,5,7]
]
function reverse2DArray(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        let x=arr[i].length;
        for(let j=0;j<Math.floor(x/2);j++){
            let temp=arr[i][j];
            arr[i][j]=arr[i][x-1-j];
            arr[i][x-1-j]=temp;
        }
    }
    console.log(arr);

}

reverse2DArray(arr);