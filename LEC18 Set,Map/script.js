// =========SET in JS=====================

let set=new Set([1,2,3,4,5,4,5,6,6,7]);
console.log({set});

// method to add element in set

set.add(11);
set.add(12);
set.add(-1);
console.log(set);

// method to check if any number is in set or not

set.has(21);  // return true or false

console.log(set.has(12));
console.log(set.has(120));
console.log(set.has(-12));

// size of set

console.log("size of set is = "+set.size);

// delete a number from set;

set.delete(11);
set.delete(12);
set.delete(-10);
console.log(set);

/* Remove duplicates from the array*/

// Method 1
let arr=[1,2,3,3,4,5,6,6,7,8,9,10,10];
let set1=new Set(arr);
console.log([...set1]);

// Method 2
let set2=new Set;
for(let i=0;i<arr.length;i++){
  set2.add(arr[i]);
}
console.log([...set2]);

// Method 3
let unique = [...new Set(arr)];
console.log(unique);

// printing values using for of loop in set

console.log("========= printing values using for of loop in set==========")
for(let i of set2){
   console.log(i);
}

// ============ Map in array============

let map=new Map();  

map.set("name1","abhi"); // key value pairs
map.set("name2","sudhir");
map.set("name3","ram");
map.set("name4","sachin");
map.set("name5","sumit");

console.log(map);

// values can also be passed in form of 2Darray

let map1=new Map([
    ["name1","abhi"],
    ["name2","sudhir"]
]);   // not preferred

console.log(map1);

console.log([...map]);

// checking if key is present or not,  not for values

console.log("checking is key name1 is present or not in map",map.has("name1"));

// getting the value of key 

console.log(map.get("name1"));

// deleting a key in map

map.delete("name1");
console.log(map);

// printing all keys of the map

console.log("=========printing all keys of the map===========");
for(let i of map.keys()){
    console.log(i);
}

// printing all values of the map

console.log("=========printing all values of the map===========");
for(let i of map.values()){
    console.log(i);
}

// printing keys and  values of map

console.log("==============printing keys and  values of map============");
for(let i of map){
    console.log("key-"+i[0],"value-"+i[1]);
}


/* question1- find the frequency of each element in array */

console.log("==========================");
let arr1=[2,3,4,1,0,1,2,3,4,5,5,10,10];
let freq=new Map();
for(let num  of arr1){
  if(freq.has(num)){
    freq.set(num,freq.get(num)+1);
  }
  else{
    freq.set(num,1);
  }
}
console.log("frequency of each element in array is",freq);

/* question2- find the intersection and union */

// union

console.log("==========================");
let arr2=[1,2,4,5,6,3];
let arr3=[2,5,6,3,1,3];

let union=new Set([...arr2,...arr3]);
console.log("union of arrays",[...union]);

// intersection

let value1=new Set(arr2);
let intersection=[];
for(let i=0;i<arr3.length;i++){
 if(value1.has(arr3[i])){
   intersection.push(arr3[i]);
 }
}
let ans=new Set(intersection);
console.log("intersection of arrays",[...ans]);

