const key="name";
const value="abhi";
const value2="rahul"

// to save
localStorage.setItem(key,value);
localStorage.setItem("key1","value1");  // last value added will be considered
localStorage.setItem("key2","value2");
localStorage.setItem("key3","value3");
localStorage.setItem("key4","value4");


// to get
console.log(localStorage.getItem(key));

// to delete
localStorage.removeItem(key)

console.log(localStorage.getItem(key))

console.log(localStorage.length)  // no.of keys in local storage

console.log(localStorage.key(2));

// find all keys

for(let i=0;i<localStorage.length;i++){
    console.log(localStorage.key(i));
}

/********************************************************
 * CHECK IF localStorage IS PRESENT (USING FUNCTION)
 * (NOTES FORM – SIMPLE & PRACTICAL)
 ********************************************************/


/********************************************************
 * WHY CHECK localStorage PRESENCE?
 ********************************************************/

/*
localStorage may NOT be available when:
- Browser is in private/incognito mode
- Storage is disabled
- Security restrictions exist
- Old browsers
*/


/********************************************************
 * BASIC IDEA
 ********************************************************/

/*
We check:
1. Does localStorage exist?
2. Can we SET and GET a value?
*/


/********************************************************
 * FUNCTION TO CHECK localStorage SUPPORT
 ********************************************************/

function isLocalStorageAvailable() {
    try {
        const testKey = "__test__";
        localStorage.setItem(testKey, "test");
        localStorage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}


/********************************************************
 * HOW THIS FUNCTION WORKS (STEP-BY-STEP)
 ********************************************************/

/*
1. Try to write to localStorage
2. Try to delete that value
3. If everything works → localStorage exists
4. If error occurs → localStorage NOT available
*/


/********************************************************
 * USING THE FUNCTION
 ********************************************************/

if (isLocalStorageAvailable()) {
    console.log("localStorage is available ✅");
} else {
    console.log("localStorage is NOT available ❌");
}


/********************************************************
 * SIMPLE CHECK (NOT RECOMMENDED ALONE)
 ********************************************************/

/*
This only checks existence, not usability
*/

if (typeof localStorage !== "undefined") {
    console.log("localStorage object exists");
}


/********************************************************
 * WHY try-catch IS IMPORTANT
 ********************************************************/

/*
Even if localStorage exists,
some browsers throw errors on usage.
*/


/********************************************************
 * REAL-WORLD USE CASE
 ********************************************************/

function saveTheme(theme) {
    if (!isLocalStorageAvailable()) return;

    localStorage.setItem("theme", theme);
}


/********************************************************
 * CHECK IF A KEY EXISTS IN localStorage
 ********************************************************/

/*
Method 1: Using getItem
*/

function hasKey(key) {
    return localStorage.getItem(key) !== null;
}


/********************************************************
 * EXAMPLE
 ********************************************************/

hasKey("theme");     // true / false
hasKey("username"); // true / false


/********************************************************
 * IMPORTANT NOTE
 ********************************************************/

/*
If value is stored as "null" (string),
getItem will NOT return null.
*/


/********************************************************
 * INTERVIEW ONE-LINER
 ********************************************************/

/*
localStorage availability should be checked
using a try-catch block to ensure both
existence and usability.
*/


/********************************************************
 * MEMORY TRICK
 ********************************************************/

/*
Exists ≠ Works
Always test with try-catch
*/

// auto saving
let input = document.querySelector("input[type=text]");

const savedValue = localStorage.getItem("key");
if (savedValue !== null) {
    input.value = savedValue;
}
input.addEventListener("input", () => {
    localStorage.setItem("key", input.value);
});
