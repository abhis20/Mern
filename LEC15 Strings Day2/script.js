/* split() */
let string = "mern stack   course";
console.log(string.split("  "));

let string2 = "mern stackaaacourse";
console.log(string2.split("aa"));
console.log(string2.split(""));
console.log(string2.split());

// count number of words
let words = "   hi this is vaibhav and we are learning mern stack ";
console.log(words.trim().split(" ").length);

/* join() */
let arr = [3, 2, 4, 5];
console.log("Sum of arr: [", arr.join(" "), "] is : ", 14);

/* Questions on strings */

/* Given a string, toggle its case 
input: HelLo
output: hELlO
*/
function toggleCase(str) {
  let n = str.length;
  let toggledStr = "";
  /* Method 1
  for (let i = 0; i < n; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      toggledStr += str[i].toUpperCase();
    } else if (str[i] >= "A" && str[i] <= "Z") {
      toggledStr += str[i].toLowerCase();
    } else toggledStr += str[i];
  } */
  for (let i = 0; i < n; i++) {
    if (str[i] === str[i].toLowerCase()) {
      toggledStr += str[i].toUpperCase();
    } else if (str[i] === str[i].toUpperCase()) {
      toggledStr += str[i].toLowerCase();
    } else toggledStr += str[i];
  }
  return toggledStr;
}

console.log(toggleCase("HelLo78"));

/* Write a function to convert camelCase to snake_case */
// TC -> O(N), SC -> O(N)
function camelToSnakeCase(camelCase) {
  let n = camelCase.length;
  let snake_case = "";
  for (let i = 0; i < n; i++) {
    if (camelCase[i] === camelCase[i].toUpperCase()) {
      snake_case += "_" + camelCase[i].toLowerCase();
    } else snake_case += camelCase[i];
  }
  return snake_case;
}

console.log(camelToSnakeCase("camelCase"));

/* Write a function to convert snake_case to camelCase */
// TC -> O(N), SC -> O(N)
function snakeToCamelCase(snake_case) {
  let n = snake_case.length;
  let camelCase = "";

  for (let i = 0; i < n; i++) {
    if (snake_case[i] === "_") {
      i++;
      camelCase += snake_case[i].toUpperCase();
    } else {
      camelCase += snake_case[i];
    }
  }

  return camelCase;
}
console.log(snakeToCamelCase("snake_case"));

/* Question: extract Jungle from below string using string methods */
str = "   How_are_you_in Jungle!  ";
console.log(
  str
    .trim()
    .substring(str.trim().indexOf("Jungle"), str.trim().indexOf("Jungle") + 6)
);

console.log(str.trim().split(" ")[1].split("!")[0]);

/* 
explore parseInt() & parseFloat() methods
*/

/* only use replace() & replaceAll() method and replace "in" with "on" in below string 
Note: Spain should remain as is
*/
str = "Hi are you in Spain, which city are you in? How's your pain?";
console.log(
  str.replace("Spain", "X").replaceAll("in", "on").replace("X", "Spain")
);

/* function to reverse a string */
function reverse(str) {
  let reverse = "";
  let n = str.length;

  for (let i = 0; i < n; i++) {
    reverse += str[n - 1 - i];
  }

  return reverse;
}

console.log(reverse("abcde"));

/* function to check if a string is palindrom or not */
function isPalindrome(str) {
  str = str.trim();
  let n = str.length;
  for (let i = 0; i < n; i++) {
    if (str[i] !== str[n - 1 - i]) return false;
  }
  return true;

  /* Try finding the reverse of str and compare it with str, if they're same, then also str is palindrome */
}

console.log(isPalindrome("abcde"));
console.log(isPalindrome("abcsa"));
console.log(isPalindrome("abcba"));

/* check if a string is palindrom or not, ignore cases (upper/lower) & spaces */
str = "Nurses Run";
console.log(
  `checking if "${str}" is palindrome or not (ignoring cases & spaces)`,
  isPalindrome(str.toLowerCase().replaceAll(" ", ""))
);

/* H.W --> find the length of longest word

input: str = "Pune is the most loved city for its weather"
output: 7

*/

// lastIndexOf() method
console.log("stringMethodsring".lastIndexOf("s"));

/* write a function to find the first non-repeating character in a string 

input: "stringMethodsring"
output: "M"
*/
function firstNonRepeatingChar(str) {
  str = str.trim();
  let n = str.length;

  for (let i = 0; i < n; i++) {
    if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return "No non-repeating character";
}

console.log(
  "first non repeating character in 'stringMethodsring' is :",
  firstNonRepeatingChar("stringMethodsring")
);
console.log(
  "first non repeating character in 'aaabbbb' is :",
  firstNonRepeatingChar("aaabbbb")
);

/* write a function to count the frequency of each character */
function frequencyOfEachChar(str) {
  let freq = {};
  let n = str.length;

  for (let i = 0; i < n; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1;
  }

  /* H.W. find a way to print the char and frequence in below manner
  
  a: 2,
  c: 3,
  d: 1

  and not directly an object

  */
  return freq;
}

console.log(frequencyOfEachChar("stringMethodsring"));
console.log(frequencyOfEachChar("ababd"));

/* H.W -> Write a function to find frequency of each word from the given string 

input: "abd ghj abd ghi ghj abc abd"
output:  

abd: 3
ghj: 2
ghi: 1
abc: 1

*/
