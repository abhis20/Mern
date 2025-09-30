// split() method in strings

let str="hello iam abhishek";
console.log(str.split(" ")); // ------> output  ['hello', 'iam', 'abhishek']
console.log(str.split("  ")); // -----> output ['hello iam abhishek']
console.log(str.split("",5)); // ------> output ['h', 'e', 'l', 'l', 'o']

str="hello  abhishek ,   how are you  ";
console.log(str.split("  ")); // -------> output ['hello', 'abhishek ,', ' how are you', '']
console.log(str.split("a")); // -------> output ['hello  ', 'bhishek ,   how ', 're you  ']
console.log(str.split()); // -------> output ['hello  abhishek ,   how are you  ']

str="hello its me abhishek";
console.log(str.split(-1)); // ------> output ['hello its me abhishek']

// count number of words

let words="Hi iam abhishek and iam learning mernstack";

console.log(words.trim().split(" ").length);

/* Given a string, toggle its case 
input: HelLo
output: hELlO
*/

str="AbHiShEk";
let result="";
for(let i=0;i<str.length;i++){
    if(str[i]===str[i].toLowerCase()){
        result+=str[i].toUpperCase();
    }
    else if(str[i]===str[i].toUpperCase()){
        result+=str[i].toLowerCase();
    }
    else{
        result+=str[i];
    }
}
console.log(result);

/* Write a function to convert camelCase to snake_case */
// TC -> O(N), SC -> O(N)

function camelCasetosnake_case(str){
let n=str.length;
let result="";
for(let i=0;i<n;i++){
    if(str[i]===str[i].toUpperCase()){
        result+="_"+str[i].toUpperCase();
    }
    else{
        result+=str[i];
    }
}
console.log(result);
}
camelCasetosnake_case("camelCase");

//==================================================
function snake_caseTocamelCase(str){
let n=str.length;
let result="";
for(let i=0;i<n;i++){
    if(str[i]==="_"){
        i++;
        result+=str[i].toUpperCase();
    }
    else{
        result+=str[i];
    }
}
console.log(result);
}
snake_caseTocamelCase("snake_case");


/* Question: extract Jungle from below string using string methods */

str = "   How_are_you_in Jungle!  ";

console.log(str.trim().substring(str.trim().indexOf("Jungle"),str.trim().indexOf("Jungle")+6))
console.log(str.trim().slice(-7,-1));

// using split
let parts=str.trim().split(" ");
console.log(parts[parts.length-1].split("!")[0]);
console.log(str.trim().split(" ")[1].split("!")[0]);

// using proto

let obj={};
console.log("abcd".__proto__);
console.log([1].__proto__);
console.log(obj.__proto__);

/* 
explore parseInt() & parseFloat() methods

*/

str="1.5";
console.log(parseInt(str)); // Converts string to integer/Number
console.log(parseFloat(str)); // Converts a string to a floating-point number (decimal).

/* only use replace() & replaceAll() method and replace "in" with "on" in below string 
Note: Spain should remain as is
*/

str = "Hi are you in Spain, which city are you in? How's your pain?";
console.log(str.replaceAll("Spain","x").replaceAll("in","on").replaceAll("x","Spain"));

/* function to reverse a string */

function reverseString(str){
    let result="";
    let n=str.length;
    for(let i=0;i<(n);i++){
        result+=str[n-1-i];
    }
    return (result);
}
console.log(reverseString("abhi"));

/* function to check if a string is palindrom or not */

// ====================method 1

function isPalindrome(str){
    let result=reverseString(str);
    if(str===result){
        console.log("Given String is palindrome")
    }
    else{
        console.log("Given String is not a Palindrome");
    }
}

isPalindrome("abba");
isPalindrome("abhi");

// ====================method 2

function isPalindrome1(str){
    for(let i=0;i<Math.floor(str.length);i++){
     if(str[i]!==str[str.length-1-i]) return false;    
    }
    return true;
}
console.log(isPalindrome1("abba"));
console.log(isPalindrome1("abcde"));
console.log(isPalindrome1("abcsa"));
console.log(isPalindrome1("abcba"));

/* check if a string is palindrom or not, ignore cases (upper/lower) & spaces */

function isPalindrome2(str){
    let result=str.replaceAll(" ","").toLowerCase();
    for(let i=0;i<Math.floor(result.length);i++){
     if(result[i]!==result[result.length-1-i]) return false;    
    }
    return true;
}
console.log("========");
console.log(isPalindrome2("Nurses Run"));

/* H.W --> find the length of longest word

input: str = "Pune is the most loved city for its weather"
output: 7

*/
str = "Pune is the most loved city for its weather";
let arr=str.trim().split(" ");
let max=-(Infinity);
for(let i=0;i<arr.length;i++){
    let x=0;
    for(let j=0;j<arr[i].length;j++){
        x=arr[i].split("").length;
    }
     max=Math.max(max,x);
}
console.log("The max length word is:",max);

// lastindexOf()

// for array
console.log([1,2,3,5,6,7,5].lastIndexOf(5));

// for string
console.log("abhia".lastIndexOf("a"));
console.log("abhiss".indexOf("s"));

/* write a function to find the first non-repeating character in a string 

input: "stringMethodsring"
output: "M"
*/

function firstNonRepeatingChar(str){
    for(let i=0;i<str.length;i++){
          if(str.indexOf(str[i])==str.lastIndexOf(str[i]))
          return str[i];
    }
    return -1;
}
console.log(firstNonRepeatingChar("stringMethodsring"));

/* write a function to count the frequency of each character */

str="abbaba";
function frequencyOfEachChar(str){
let obj={};
for(let i in str){
  obj[str[i]]=(obj[str[i]] || 0) +1;
}

 /* H.W. find a way to print the char and frequence in below manner
  
  a: 2,
  c: 3,
  d: 1

  and not directly an object

  */
for(let i in obj){
    console.log(i + ":"+ obj[i]);
}
}
frequencyOfEachChar(str);
console.log("==================");
(frequencyOfEachChar("stringMethodsring"));
console.log("==================");
(frequencyOfEachChar("ababd"));


/* H.W -> Write a function to find frequency of each word from the given string 

input: "abd ghj abd ghi ghj abc abd"
output:  

abd: 3
ghj: 2
ghi: 1
abc: 1

*/

function frequencyOfEachWord(str){
 let obj={};
 str=str.trim().split(" ");
 for(let i in str){
    obj[str[i]]=(obj[str[i]] || 0) +1;
 }
 for(let i in obj){
    console.log(i + ":"+ obj[i]);
}
}
frequencyOfEachWord("abd ghj abd ghi ghj abc abd");