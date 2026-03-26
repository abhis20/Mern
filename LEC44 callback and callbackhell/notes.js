/*
 

📘 CALLBACK IN JAVASCRIPT — COMPLETE NOTES
1️⃣ What is a Callback?
✅ Simple Definition

A callback is a function passed as an argument to another function, which is executed later.

🔹 Simple Example
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  let name = "Abhishek";
  callback(name);
}

processUser(greet);

Output:
Hello Abhishek


Here:

greet is a callback

It is passed to processUser

It is executed inside that function

2️⃣ Why Do We Need Callbacks?

Callbacks allow:

✅ Code reuse
✅ Async execution
✅ Custom behavior
✅ Control flow handling

3️⃣ Synchronous Callback

Runs immediately.

function add(a, b, callback) {
  let result = a + b;
  callback(result);
}

add(5, 3, function(res) {
  console.log(res);
});


Output:

8

4️⃣ Asynchronous Callback (Very Important)

Used in:

setTimeout

setInterval

Event listeners

API calls

Example:
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 1000);

console.log("End");


Output:

Start
End
Hello


Here:

Function inside setTimeout is a callback

It runs later via Event Loop

5️⃣ Callback in Event Handling
button.addEventListener("click", function() {
  console.log("Button clicked");
});


The function is a callback.

It runs only when event occurs.

6️⃣ Callback Hell (Interview Topic)

When callbacks are nested deeply:

setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);

  }, 1000);

}, 1000);


This becomes:

Hard to read

Hard to maintain

Hard to debug

This is called Callback Hell or Pyramid of Doom.

7️⃣ Problem with Callbacks

❌ Difficult error handling
❌ Nested structure
❌ Hard to manage flow

Solution:
👉 Promises
👉 Async/Await

8️⃣ Real Interview Questions
Q1: Are all callbacks asynchronous?

❌ No
Callbacks can be:

Synchronous

Asynchronous

Q2: Difference between callback and function?

A callback is just a function used as an argument.

Q3: Why were Promises introduced?

To solve callback hell and improve readability.

9️⃣ Callback Execution Flow

For async callback:

Function registered
↓
Goes to Web API
↓
Moves to Task Queue
↓
Event Loop pushes to Call Stack
↓
Executes

🔟 Interview-Ready Definition

A callback is a function passed as an argument to another function, which is executed after a specific task or event completes.


 */

// ==========================================================================================================================

/********************************************************
 * CALLBACKS, ASYNC FLOW & CALLBACK HELL
 * (FULL NOTES – BEGINNER TO ADVANCED)
 

1️⃣ WHAT IS THE PROBLEM?

JavaScript is:

Single-threaded + Synchronous

But real-world tasks are:

API calls
DB save
File upload
Form submission

These take time ⏳

❗ PROBLEM WITHOUT CALLBACK
savePersonalDetails();
saveEducationalDetails();
saveWorkExperience();
submitForm();
❌ Issue:
All run immediately
No guarantee order
Might execute before previous task completes
2️⃣ WHY CALLBACKS WERE INTRODUCED
🔹 Definition

A callback is a function passed as an argument to another function, executed after a task completes.

🔹 WHY NEEDED?

Because:

We need to know WHEN a task is completed
🔹 BASIC EXAMPLE
function task(callback) {
    setTimeout(() => {
        console.log("Task done");
        callback();
    }, 1000);
}

task(() => {
    console.log("Next step");
});
🔹 OUTPUT
Task done
Next step

✔ Ensures order
✔ Runs after completion

3️⃣ YOUR CODE (STEP-BY-STEP EXPLANATION)
❌ CALLBACK HELL VERSION
function saveFormData(callback) {
    setTimeout(() => {
        // personal details saved

        setTimeout(() => {
            // educational details saved

            setTimeout(() => {
                // work experience saved

                // submit form
            }, 1000);

        }, 1000);

    }, 1000);
}
🔴 WHAT IS HAPPENING?
Execution flow:
Step 1 → save personal
↓
Step 2 → save education
↓
Step 3 → save work
↓
Submit form

✔ Correct order
❌ But deeply nested

4️⃣ WHAT IS CALLBACK HELL?
🔴 Definition

Callback Hell = Multiple nested callbacks forming a pyramid-like structure.

🔴 WHY IT IS BAD?
❌ Problems
Hard to read
Hard to debug
Hard to maintain
Error handling becomes messy
🔺 STRUCTURE (PYRAMID OF DOOM)
setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                ...
            })
        })
    })
})
🧠 VISUAL UNDERSTANDING
Level 1
  Level 2
    Level 3
      Level 4
5️⃣ WHY CALLBACKS STILL EXIST?

Because they:

Control execution order
Work with async operations
Are lightweight
Still used in event handlers
6️⃣ HOW TO FIX CALLBACK HELL (YOUR 3rd IMAGE)
✅ CLEAN VERSION (BEST PRACTICE)
function savePersonalDetails() {
    setTimeout(saveEducationalDetails, 1000);
}

function saveEducationalDetails() {
    setTimeout(saveWorkExperience, 1000);
}

function saveWorkExperience() {
    // final step
}
🔹 WHAT CHANGED?

Instead of nesting:

We separated functions
Each function calls the next
🔹 FLOW
savePersonalDetails()
        ↓
saveEducationalDetails()
        ↓
saveWorkExperience()

✔ Clean
✔ Flat structure
✔ Easy to debug

7️⃣ REAL CONCEPT BEHIND THIS

This is called:

Callback chaining (instead of nesting)
8️⃣ IMPORTANT THEORY (VERY IMPORTANT)
Callback solves:
“How do I know when a task is done?”
Without callback:
No control ❌
With callback:
Controlled execution ✅
9️⃣ INTERNAL WORKING (IMPORTANT)

When you use:

setTimeout(callback, 1000);
Flow:
Call Stack
   ↓
Web API (timer)
   ↓
Callback Queue
   ↓
Event Loop
   ↓
Call Stack
🔟 CALLBACK vs NORMAL FUNCTION
Feature	Normal	Callback
Execution	Immediate	After task
Control	No async control	Controls async flow
Use case	Sync code	Async code
1️⃣1️⃣ MODERN SOLUTION (JUST A HINT)

Callback hell is solved using:

Promises
async/await

Example:

await savePersonal();
await saveEducation();
await saveWork();

✔ Cleanest approach

⭐ INTERVIEW ONE-LINERS
Callback

A callback is a function passed to another function to execute after completion of an asynchronous task.

Callback Hell

Callback hell is a situation where multiple nested callbacks make code unreadable and hard to maintain.

Why callbacks?

To control execution order in asynchronous operations.

🧠 MEMORY TRICKS
Callback → “Call me later”
Async → “Not now”
Hell → “Too much nesting”
✅ FINAL SUMMARY

✔ JS is synchronous
✔ Async tasks need control
✔ Callbacks provide control
✔ Nested callbacks → Callback Hell
✔ Solution → flatten or use promises
 


🧠 CODE WE ARE ANALYZING
function savePersonalDetails(callback) {
    setTimeout(() => {
        console.log("Personal saved");
        callback();
    }, 1000);
}

function saveEducationalDetails() {
    console.log("Education saved");
}

savePersonalDetails(() => {
    saveEducationalDetails();
});
⚙️ MAIN COMPONENTS IN JS ENGINE

Before dry run, understand 4 things:

1. Call Stack (execution)
2. Web APIs (browser handles async)
3. Callback Queue (waiting area)
4. Event Loop (manager)
🚀 STEP-BY-STEP EXECUTION (VERY IMPORTANT)
🔹 STEP 1: GLOBAL EXECUTION STARTS

JS engine starts reading code line by line.

Call Stack:
Global Execution Context
🔹 STEP 2: FUNCTION DEFINITIONS
function savePersonalDetails(callback) { ... }
function saveEducationalDetails() { ... }

👉 Stored in memory
👉 NOT executed yet

🔹 STEP 3: FUNCTION CALL
savePersonalDetails(() => {
    saveEducationalDetails();
});
What happens:
Function pushed to Call Stack
Call Stack:
savePersonalDetails()
Global
🔹 STEP 4: INSIDE savePersonalDetails
setTimeout(() => {
    console.log("Personal saved");
    callback();
}, 1000);
🔹 STEP 5: setTimeout HANDLED
Important:

setTimeout is NOT handled by JS engine
👉 It is handled by Web APIs (browser)

What happens:
Timer registered in Web API
Callback function sent to Web API
Delay = 1000ms
JS DOES NOT WAIT
Call Stack becomes:
(empty after function finishes)

JS moves forward immediately

🔹 STEP 6: TIMER RUNNING (IN BACKGROUND)

Web API:

⏳ 1000ms timer running

JS engine is free now.

🔹 STEP 7: AFTER 1000ms

Timer finishes.

👉 Callback goes to:

Callback Queue

Queue:

[ () => { console.log("Personal saved"); callback(); } ]
🔹 STEP 8: EVENT LOOP CHECKS

Event loop continuously checks:

Is Call Stack empty?

✔ Yes → move callback to stack

🔹 STEP 9: CALLBACK EXECUTES

Callback pushed to stack:

Call Stack:
timeout callback
🔹 STEP 10: EXECUTION STARTS
console.log("Personal saved");
Output:
Personal saved
🔹 STEP 11: callback() EXECUTES
callback();

This is:

() => {
    saveEducationalDetails();
}
Now:
saveEducationalDetails();
🔹 STEP 12: saveEducationalDetails RUNS
Call Stack:
saveEducationalDetails()
timeout callback
console.log("Education saved");
Output:
Education saved
🔹 STEP 13: STACK CLEARS

Execution completes.

🧾 FINAL OUTPUT
Personal saved
Education saved
🧠 COMPLETE FLOW SUMMARY
Call Stack → setTimeout → Web API
                    ↓
              Timer (1000ms)
                    ↓
             Callback Queue
                    ↓
               Event Loop
                    ↓
               Call Stack
                    ↓
        Execute callback → callback()
                    ↓
          saveEducationalDetails()
🔴 MOST IMPORTANT CONCEPT
JS does NOT wait for setTimeout

Instead:

Registers → Moves on → Executes later
🧠 WHY ORDER IS CORRECT HERE?

Because:

callback();

is executed INSIDE the timeout callback

So:

Personal done → THEN education
🔥 WITHOUT CALLBACK (WRONG FLOW)
savePersonalDetails();
saveEducationalDetails();

Output becomes:

Education saved
Personal saved
⭐ INTERVIEW ONE-LINER

JavaScript uses the event loop to move asynchronous callbacks from the Web API to the call stack only when it is empty, ensuring non-blocking execution.

🧠 MEMORY TRICK
Stack → executes
Web API → waits
Queue → stores
Loop → moves

If you want next:

🔥 event loop diagram (visual)
🔥 promise version of this code
🔥 async/await version (cleanest)
🔥 tricky interview questions on this

Just tell 👍

i didnt understood the flow

No problem 👍 — let’s slow down a lot and understand this like a story.
No heavy terms first. Just step-by-step real thinking.

🧠 FIRST: WHAT YOU ARE CONFUSED ABOUT

You’re thinking:

“JS runs line by line, so why doesn’t it wait for setTimeout?”

That’s the core confusion.

🔥 SIMPLE RULE (REMEMBER THIS FIRST)
JS runs line by line
BUT does NOT wait for setTimeout
🧩 LET’S TAKE A VERY SIMPLE CODE
console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");
❓ WHAT DO YOU EXPECT?

Maybe:

A
(wait 1 sec)
B
C
❗ ACTUAL OUTPUT
A
C
(after 1 sec)
B
🤯 WHY??? (THIS IS THE FLOW)
🔹 STEP 1
console.log("A");

➡️ Runs immediately

Output:

A
🔹 STEP 2
setTimeout(...)

JS does NOT execute it immediately.

Instead:
👉 Sends it to browser timer

Think like:

"Hey browser, run this after 1 second"

⏳ Timer starts in background

🔹 STEP 3

JS DOES NOT WAIT ❗

It moves to next line:

console.log("C");

Output:

C
🔹 STEP 4 (AFTER 1 SECOND)

Now browser says:

Timer finished!

So it sends callback back to JS.

🔹 STEP 5

JS runs it:

console.log("B");

Output:

B
🧠 FINAL FLOW (VERY SIMPLE)
A → setTimeout registered → C → (wait) → B
🔁 NOW APPLY THIS TO YOUR CODE
savePersonalDetails(() => {
    saveEducationalDetails();
});
🔹 INSIDE FUNCTION
setTimeout(() => {
    console.log("Personal saved");
    callback();
}, 1000);
🚶 STEP-BY-STEP STORY
🟢 STEP 1

You call:

savePersonalDetails()
🟢 STEP 2

Inside it:

setTimeout(...)

JS says:

"Okay, run this after 1 second"

👉 Sends to browser
👉 DOES NOT WAIT ❗

🟢 STEP 3

Function finishes immediately
JS continues (nothing else left)

🟢 STEP 4 (AFTER 1 SECOND)

Browser says:

Time done! Execute callback
🟢 STEP 5

Now this runs:

console.log("Personal saved");

Output:

Personal saved
🟢 STEP 6

Then:

callback();

Which is:

() => {
    saveEducationalDetails();
}
🟢 STEP 7

Now this runs:

saveEducationalDetails();

Output:

Education saved
🧾 FINAL OUTPUT
(after 1 sec)
Personal saved
Education saved
🧠 SUPER SIMPLE ANALOGY

You tell your friend:

"Cook food in 1 hour"

Then you:

Go watch TV (JS continues)

After 1 hour:

Friend calls you → food ready
🔴 KEY IDEA
setTimeout = “Do this later”

JS:

Does NOT wait
Moves forward
🧠 FINAL MENTAL MODEL
1. JS runs line by line
2. setTimeout goes to background
3. JS continues
4. After delay → callback runs
⭐ ONE-LINE INTERVIEW ANSWER

JavaScript does not wait for setTimeout; it registers it in the browser and continues execution, then runs the callback later.

🧠 MEMORY TRICK
setTimeout → later
console.log → now


 ********************************************************/