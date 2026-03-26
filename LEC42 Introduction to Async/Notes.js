/*

1️⃣ IS JAVASCRIPT SYNCHRONOUS OR ASYNCHRONOUS?
🔹 Core Rule (VERY IMPORTANT)
JavaScript is SINGLE-THREADED and SYNCHRONOUS by default

What this means:

JS executes one line at a time

Next line waits until current line finishes

Uses one main thread (Call Stack)

2️⃣ WHAT IS SYNCHRONOUS CODE?
Definition

Synchronous code:

Runs line by line

Each operation blocks the next one

Example
console.log("hello");
console.log("world");

Execution order
hello
world

3️⃣ WHAT IS ASYNCHRONOUS CODE?
Definition

Asynchronous code:

Does NOT block execution

Runs later

Uses browser features (Web APIs)

Examples

setTimeout

setInterval

Events

fetch

Promises

4️⃣ WHY DO WE NEED ASYNC?

If JS were fully synchronous:

UI would freeze

User interactions would be blocked

Timers wouldn’t work

So browser provides Web APIs.

5️⃣ EVENT HANDLERS – ASYNCHRONOUS BY NATURE
Code
btn.addEventListener('click', () => {
    spanTag.textContent = "Welcome to the class!";
});

Why events are async?

Click may happen anytime

JS does NOT wait for click

Callback runs only when event occurs

6️⃣ setTimeout() – BASICS
Definition
setTimeout(callback, delay);


Executes callback after delay

Delay is in milliseconds

Non-blocking

Example
setTimeout(() => {
    console.log("Hello after 1 second");
}, 1000);

7️⃣ HOW setTimeout WORKS INTERNALLY
Call Stack → Web API → Callback Queue → Event Loop → Call Stack

Step-by-step:

setTimeout sent to Web API

Timer starts

JS continues execution

After delay → callback goes to queue

Event loop pushes it to stack when free

8️⃣ YOUR setTimeout EXAMPLE (DRY RUN)
btn.addEventListener('click', () => {
    spanTag.textContent = "Welcome to the class!";
    setTimeout(() => {
        spanTag.remove();
    }, 1000);
});

Execution:

User clicks button

Text appears immediately

Timer starts (1 second)

After 1 second → span removed

✔ UI remains responsive

9️⃣ alert() – BLOCKING (IMPORTANT)
console.log("hello");
alert("hi");
console.log("world");

Output:
hello
(alert blocks)
world

Why?

alert() blocks the main JS thread

Call Stack is frozen

Nothing executes until alert closes

❌ Bad for UX
❌ Avoid in real apps

🔟 JS MAIN THREAD (JS WORKER)

Executes all JS

Handles:

DOM

Events

Rendering triggers

Blocking it = frozen UI

1️⃣1️⃣ setTimeout & setInterval RETURN VALUE
Important Rule
setTimeout() & setInterval() return a NUMBER


Example:

let id = setTimeout(() => {}, 1000);
console.log(id); // e.g. 3


This number is called:

Timer ID

1️⃣2️⃣ clearTimeout()
clearTimeout(timerId);


Cancels scheduled timeout

Uses returned ID

1️⃣3️⃣ setInterval() – BASICS
Definition
setInterval(callback, delay);


Executes callback repeatedly

After every delay ms

Runs until stopped

Example
setInterval(() => {
    console.log("tick");
}, 1000);


Output:

tick
tick
tick
...

1️⃣4️⃣ HOW setInterval WORKS INTERNALLY

Each interval execution is scheduled

Callback goes through:

Web API → Queue → Event Loop → Stack

1️⃣5️⃣ clearInterval() – WHAT & WHY
Definition
clearInterval(intervalId);


Stops the interval

Prevents memory leaks

Prevents infinite execution

1️⃣6️⃣ YOUR COUNTER EXAMPLE (EXPLAINED)
let count = 0;
let timer = null;

startBtn.addEventListener('click', () => {
    timer = setInterval(() => {
        count++;
        h1Ele.textContent = count;
    }, 1000);
});

What happens:

Click start

Interval starts

Every second:

count increments

UI updates

Stop Button
stopBtn.addEventListener('click', () => {
    clearInterval(timer);
});


Stops interval

Counter freezes

1️⃣7️⃣ PROBLEM: MULTIPLE INTERVALS (IMPORTANT)

If user clicks Start multiple times:

Multiple intervals start

Count increases faster

Fix (BEST PRACTICE)
if (timer !== null) return;

1️⃣8️⃣ RESET FUNCTIONALITY
Reset counter properly
let resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    count = 0;
    h1Ele.textContent = "0";
});

1️⃣9️⃣ CONVERT SECONDS TO MINUTES
Formula
minutes = Math.floor(seconds / 60)
seconds = seconds % 60

Example Implementation
timer = setInterval(() => {
    count++;

    let minutes = Math.floor(count / 60);
    let seconds = count % 60;

    h1Ele.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}, 1000);

2️⃣0️⃣ COMPLETE TIMER FLOW (MENTAL MODEL)
JS is synchronous
↓
Async tasks sent to Web APIs
↓
Event loop manages execution
↓
UI stays responsive

2️⃣1️⃣ COMMON MISTAKES

❌ Using alert() in production
❌ Not clearing intervals
❌ Creating multiple intervals
❌ Blocking main thread

⭐ INTERVIEW ONE-LINERS

JS is single-threaded but asynchronous via Web APIs

Events and timers do not block the main thread

setTimeout executes after delay, not exactly at delay

setInterval must be cleared to avoid memory leaks

🧠 MEMORY TRICKS
JS → synchronous
Browser → async helpers
Timers → return IDs
clear → stop timers

✅ FINAL TAKEAWAY

JS executes synchronously

Async handled via browser

Events & timers are async

Timers return IDs

clearInterval / clearTimeout stop execution

Never block main thread

//////////////////////////////////////////////////////////////////////


2️⃣ setTimeout()
📌 Syntax
setTimeout(callback, delay);

🧠 Important Points

Executes once

Delay is minimum time (not exact)

Goes to Web API first

Moves to Task Queue after delay

Executes when Call Stack is empty

⚠ Important Interview Point
setTimeout(fn, 0);


Does NOT mean immediate.

It means:

Run after current call stack finishes.

3️⃣ clearTimeout()

Stops a scheduled timeout.

let id = setTimeout(fn, 1000);
clearTimeout(id);


If cleared before delay finishes → callback never runs.

4️⃣ setInterval()
📌 Syntax
setInterval(callback, delay);


Executes repeatedly

Runs every delay ms

Continues until cleared

5️⃣ clearInterval()
clearInterval(intervalId);


Stops future executions.

⚠ Important:
Current execution always completes

*/