/********************************************************
 * EVENT PROPAGATION + STOP METHODS
 * (NOTES FORM – BEGINNER FRIENDLY)
 ********************************************************/


/********************************************************
 * WHAT IS EVENT PROPAGATION?
 ********************************************************/

/*
Event propagation is the way an event
travels through DOM elements.
*/


/********************************************************
 * THREE PHASES OF EVENT PROPAGATION
 ********************************************************/

/*
1. Capturing Phase   → top to target
2. Target Phase      → actual element
3. Bubbling Phase    → target to top
*/


/********************************************************
 * DEFAULT BEHAVIOR
 ********************************************************/

/*
By default, events bubble (child → parent)
*/


/********************************************************
 * EVENT BUBBLING EXAMPLE
 ********************************************************/

/*
HTML:
<div id="parent">
  <button id="child">Click</button>
</div>
*/

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

/*
Output when button clicked:
Child clicked
Parent clicked
*/


/********************************************************
 * EVENT CAPTURING
 ********************************************************/

/*
To enable capturing, use third parameter = true
*/

document.getElementById("parent").addEventListener(
    "click",
    () => {
        console.log("Parent capturing");
    },
    true
);


/********************************************************
 * STOP PROPAGATION
 ********************************************************/

/*
event.stopPropagation()
Stops event from moving to parent
*/


/********************************************************
 * stopPropagation EXAMPLE
 ********************************************************/

document.getElementById("child").addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Child clicked");
});

/*
Output:
Child clicked
(parent will NOT run)
*/


/********************************************************
 * WHAT stopPropagation DOES
 ********************************************************/

/*
- Stops bubbling
- Stops capturing
- Does NOT stop other handlers on same element
*/


/********************************************************
 * STOP IMMEDIATE PROPAGATION
 ********************************************************/

/*
event.stopImmediatePropagation()
Stops:
1. Event propagation
2. Other handlers on same element
*/


/********************************************************
 * stopImmediatePropagation EXAMPLE
 ********************************************************/

document.getElementById("child").addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    console.log("First handler");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Second handler");
});

/*
Output:
First handler
*/


/********************************************************
 * DIFFERENCE: stopPropagation vs stopImmediatePropagation
 ********************************************************/

/*
stopPropagation:
- Stops event going up/down
- Other handlers on same element still run

stopImmediatePropagation:
- Stops event going up/down
- Stops other handlers on same element
*/


/********************************************************
 * COMPARISON TABLE (IN WORDS)
 ********************************************************/

/*
stopPropagation:
Child handler → runs
Other child handlers → run
Parent handler → ❌ stopped

stopImmediatePropagation:
First child handler → runs
Other child handlers → ❌ stopped
Parent handler → ❌ stopped
*/


/********************************************************
 * WHEN TO USE stopPropagation?
 ********************************************************/

/*
Use when:
- You want parent NOT to react
- Child handles event fully
*/


/********************************************************
 * WHEN TO USE stopImmediatePropagation?
 ********************************************************/

/*
Use when:
- Only ONE handler should run
- Prevent duplicate logic
*/


/********************************************************
 * REAL-LIFE ANALOGY
 ********************************************************/

/*
stopPropagation:
Child says "I handled it, parent stay out"

stopImmediatePropagation:
Child says "No one else talk"
*/


/********************************************************
 * INTERVIEW ONE-LINER
 ********************************************************/

/*
stopPropagation prevents the event from
bubbling or capturing further, while
stopImmediatePropagation also prevents
other handlers on the same element.
*/


/********************************************************
 * MEMORY TRICK
 ********************************************************/

/*
stopPropagation → stop going UP/DOWN
stopImmediatePropagation → stop EVERYTHING
*/


/********************************************************
 * event.target vs event.currentTarget
 * (NOTES FORM – BEGINNER FRIENDLY)
 ********************************************************/


/********************************************************
 * WHAT IS event.target?
 ********************************************************/

/*
event.target is the ACTUAL element
that was clicked by the user.
*/


/********************************************************
 * WHAT IS event.currentTarget?
 ********************************************************/

/*
event.currentTarget is the element
on which the event listener is attached.
*/


/********************************************************
 * SIMPLE ONE-LINE DIFFERENCE
 ********************************************************/

/*
target        → where click happened
currentTarget → where listener is attached
*/


/********************************************************
 * SIMPLE HTML STRUCTURE
 ********************************************************/

/*
<div id="parent">
  <button id="child">Click Me</button>
</div>
*/


/********************************************************
 * EVENT LISTENER ON PARENT
 ********************************************************/

document.getElementById("parent").addEventListener("click", function (event) {
    console.log("target:", event.target.id);
    console.log("currentTarget:", event.currentTarget.id);
});


/********************************************************
 * WHEN BUTTON IS CLICKED
 ********************************************************/

/*
Output:
target: child
currentTarget: parent
*/


/********************************************************
 * WHY THIS HAPPENS
 ********************************************************/

/*
- Click happens on BUTTON
- Event bubbles to DIV
- Listener is on DIV
*/


/********************************************************
 * EVENT LISTENER ON CHILD
 ********************************************************/

document.getElementById("child").addEventListener("click", function (event) {
    console.log("target:", event.target.id);
    console.log("currentTarget:", event.currentTarget.id);
});


/********************************************************
 * WHEN BUTTON IS CLICKED
 ********************************************************/

/*
Output:
target: child
currentTarget: child
*/


/********************************************************
 * KEY RULE (MUST REMEMBER)
 ********************************************************/

/*
event.target NEVER changes
event.currentTarget changes based on listener
*/


/********************************************************
 * USED MOSTLY IN EVENT DELEGATION
 ********************************************************/

/*
event.target → identify clicked child
event.currentTarget → parent container
*/


/********************************************************
 * PRACTICAL EVENT DELEGATION EXAMPLE
 ********************************************************/

const list = document.getElementById("list");

list.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        console.log("Clicked item:", event.target.textContent);
        console.log("Listener on:", event.currentTarget.id);
    }
});


/********************************************************
 * COMMON MISTAKES
 ********************************************************/

/*
❌ Using currentTarget to find clicked child
❌ Confusing target with this
*/


/********************************************************
 * REAL-LIFE ANALOGY
 ********************************************************/

/*
target → student who asked question
currentTarget → teacher listening
*/


/********************************************************
 * INTERVIEW ONE-LINER
 ********************************************************/

/*
event.target refers to the element that
triggered the event, while event.currentTarget
refers to the element handling the event.
*/


/********************************************************
 * MEMORY TRICK
 ********************************************************/

/*
target → clicked element
currentTarget → listener element
*/


/********************************************************
 * ELEMENT.matches() & ELEMENT.closest()
 * (NOTES FORM – BEGINNER FRIENDLY)
 ********************************************************/


/********************************************************
 * WHAT IS matches() ?
 ********************************************************/

/*
matches() checks whether an element
matches a given CSS selector.
*/

/*
Returns:
true  → if matches
false → if not
*/


/********************************************************
 * SIMPLE EXAMPLE
 ********************************************************/

const btn = document.querySelector("button");

console.log(btn.matches("button"));   // true
console.log(btn.matches(".btn"));     // depends on class
console.log(btn.matches("#myBtn"));   // depends on id


/********************************************************
 * WHEN TO USE matches()
 ********************************************************/

/*
Use when:
- You want to check the clicked element itself
- Conditional event handling
*/


/********************************************************
 * WHAT IS closest() ?
 ********************************************************/

/*
closest() finds the nearest ancestor
(including itself) that matches a selector.
*/


/********************************************************
 * SIMPLE EXAMPLE
 ********************************************************/

/*
HTML:
<div class="card">
  <button class="btn">Click</button>
</div>
*/

const button = document.querySelector(".btn");

const card = button.closest(".card");

console.log(card); // <div class="card">...</div>


/********************************************************
 * IMPORTANT RULE
 ********************************************************/

/*
closest() starts checking from:
1. the element itself
2. then parent
3. then grandparent
*/


/********************************************************
 * WHEN closest() RETURNS null
 ********************************************************/

/*
If no matching ancestor is found,
closest() returns null.
*/


/********************************************************
 * matches() vs closest()
 ********************************************************/

/*
matches():
- Checks ONLY the element itself
- Does NOT move up DOM
- Returns true / false

closest():
- Moves UP the DOM tree
- Finds nearest matching ancestor
- Returns element or null
*/


/********************************************************
 * PRACTICAL EVENT DELEGATION EXAMPLE
 ********************************************************/

/*
HTML:
<ul id="list">
  <li class="item">
    <button class="delete">X</button>
  </li>
</ul>
*/

const list1 = document.getElementById("list");

list.addEventListener("click", function (event) {

    if (event.target.matches(".delete")) {
        console.log("Delete button clicked");
    }

    const item = event.target.closest(".item");
    if (item) {
        console.log("List item found");
    }
});


/********************************************************
 * COMMON MISTAKES
 ********************************************************/

/*
❌ Using matches() to find parent
❌ Forgetting closest() can return null
*/


/********************************************************
 * REAL-LIFE ANALOGY
 ********************************************************/

/*
matches() → "Am I this?"
closest() → "Who is my nearest parent?"
*/


/********************************************************
 * INTERVIEW ONE-LINER
 ********************************************************/

/*
matches() checks if an element matches
a selector, while closest() finds the
nearest ancestor that matches a selector.
*/


/********************************************************
 * MEMORY TRICK
 ********************************************************/

/*
matches → check self
closest → find parent
*/


/********************************************************
 * ACCESS .product FROM BUTTON (REAL CASE)
 * (NOTES FORM – PRACTICAL & EASY)
 ********************************************************/


/********************************************************
 * PROBLEM STATEMENT
 ********************************************************/

/*
Structure:
.products
 ├── .product
 │     ├── many nested elements
 │     │     └── button
 ├── .product
 │     └── button
*/

/*
Goal:
When button is clicked,
find the parent .product of THAT button.
*/


/********************************************************
 * HTML STRUCTURE (EXAMPLE)
 ********************************************************/

/*
<div class="products">
  <div class="product">
    <div class="info">
      <h3>Product 1</h3>
      <div class="actions">
        <button class="add-btn">Add</button>
      </div>
    </div>
  </div>

  <div class="product">
    <button class="add-btn">Add</button>
  </div>
</div>
*/


/********************************************************
 * CORRECT SOLUTION (BEST PRACTICE)
 ********************************************************/

/*
Use:
1. Event Delegation
2. event.target
3. closest(".product")
*/

const products = document.querySelector(".products");

products.addEventListener("click", function (event) {

    // Step 1: Check if button was clicked
    if (!event.target.matches(".add-btn")) return;

    // Step 2: Find closest .product
    const product = event.target.closest(".product");

    // Step 3: Safety check
    if (!product) return;

    console.log("Product element:", product);
});


/********************************************************
 * WHY THIS WORKS ALWAYS
 ********************************************************/

/*
closest(".product"):
- Starts from button
- Moves UP through parents
- Finds nearest .product
- Works with deep nesting
*/


/********************************************************
 * WHAT NOT TO DO (COMMON MISTAKES)
 ********************************************************/

/*
❌ parentElement.parentElement
❌ Hard-coded DOM traversal
❌ querySelector inside loop
*/


/********************************************************
 * IMPORTANT RULES
 ********************************************************/

/*
event.target → clicked element
closest()    → climb up DOM
matches()    → confirm button
*/


/********************************************************
 * REAL-LIFE ANALOGY
 ********************************************************/

/*
Button asks:
"Which product do I belong to?"
closest(".product") answers it.
*/


/********************************************************
 * INTERVIEW ONE-LINER
 ********************************************************/

/*
Use event delegation and closest()
to identify the nearest parent element
from a deeply nested child.
*/


/********************************************************
 * MEMORY TRICK
 ********************************************************/

/*
Click → target
Confirm → matches
Find parent → closest
*/


/********************************************************
 * FUNCTION.call() IN JAVASCRIPT
 * (NOTES FORM – FROM BASICS)
 ********************************************************/


/********************************************************
 * WHAT IS call() ?
 ********************************************************/

/*
call() is a method available on every function.
It is used to:
- Call a function immediately
- Manually set the value of `this`
*/

/*
Syntax:
function.call(thisArg, arg1, arg2, ...)
*/


/********************************************************
 * WHY call() EXISTS?
 ********************************************************/

/*
In JavaScript, `this` depends on HOW a function is called,
not where it is written.

Sometimes we want to control `this` manually.
call() allows us to do that.
*/


/********************************************************
 * BASIC PROBLEM (WITHOUT call)
 ********************************************************/

function greet() {
    console.log(this.name);
}

 user = {
    name: "Abhishek"
};

greet(); // ❌ undefined (or error in strict mode)


/********************************************************
 * SOLUTION USING call()
 ********************************************************/

greet.call(user); // ✅ Abhishek


/********************************************************
 * WHAT call() DOES INTERNALLY
 ********************************************************/

/*
greet.call(user) means:
- Call greet()
- Set this = user
*/


/********************************************************
 * WHERE call() IS USED
 ********************************************************/

/*
call() is used when:
- Borrowing methods
- Reusing functions
- Fixing `this` context
- Function is not inside object
*/


/********************************************************
 * METHOD BORROWING EXAMPLE
 ********************************************************/

const student1 = {
    name: "Rahul"
};

const student2 = {
    name: "Amit"
};

function sayHello() {
    console.log("Hello", this.name);
}

sayHello.call(student1); // Hello Rahul
sayHello.call(student2); // Hello Amit


/********************************************************
 * call() WITH ARGUMENTS
 ********************************************************/

function introduce(age, city) {
    console.log(this.name, age, city);
}

introduce.call(student1, 21, "Pune");


/********************************************************
 * DIFFERENCE: call vs normal call
 ********************************************************/

/*
Normal function call:
func()

call():
func.call(thisValue)
*/


/********************************************************
 * FUNCTION.apply() & FUNCTION.bind()
 * (NOTES FORM – FROM BASICS)
 ********************************************************/


/********************************************************
 * WHY apply() & bind() EXIST?
 ********************************************************/

/*
In JavaScript, `this` depends on HOW a function is called.
apply() and bind() allow us to manually control `this`.
*/


/********************************************************
 * apply() — WHAT IS IT?
 ********************************************************/

/*
apply() is similar to call()
but arguments are passed as an ARRAY.
*/

/*
Syntax:
function.apply(thisArg, [arg1, arg2, ...])
*/


/********************************************************
 * BASIC EXAMPLE (apply)
 ********************************************************/

function introduce(age, city) {
    console.log(this.name, age, city);
}

const user = {
    name: "Abhishek"
};

introduce.apply(user, [21, "Pune"]);


/********************************************************
 * WHAT apply() DOES
 ********************************************************/

/*
- Calls function immediately
- Sets this = user
- Accepts arguments as array
*/


/********************************************************
 * WHEN TO USE apply()
 ********************************************************/

/*
Use apply() when:
- Arguments are already in array
- Dynamic argument lists
*/


/********************************************************
 * bind() — WHAT IS IT?
 ********************************************************/

/*
bind() does NOT call the function immediately.
It returns a NEW function with `this` fixed.
*/

/*
Syntax:
const newFunc = function.bind(thisArg, arg1, arg2, ...)
*/


/********************************************************
 * BASIC EXAMPLE (bind)
 ********************************************************/

function greet() {
    console.log("Hello", this.name);
}

const person = {
    name: "Rahul"
};

const boundGreet = greet.bind(person);

boundGreet(); // Hello Rahul


/********************************************************
 * WHAT bind() DOES
 ********************************************************/

/*
- Does NOT execute function immediately
- Returns a new function
- Fixes `this` permanently
*/


/********************************************************
 * bind() WITH ARGUMENTS
 ********************************************************/

function multiply(a, b) {
    console.log(a * b);
}

const double = multiply.bind(null, 2);

double(5); // 10


/********************************************************
 * call vs apply vs bind (KEY DIFFERENCE)
 ********************************************************/

/*
call():
- Calls immediately
- Arguments passed individually

apply():
- Calls immediately
- Arguments passed as array

bind():
- Does NOT call immediately
- Returns new function
*/


/********************************************************
 * COMPARISON TABLE (IN WORDS)
 ********************************************************/

/*
call   → run now, args one by one
apply  → run now, args as array
bind   → run later, returns function
*/


/********************************************************
 * IMPORTANT RULES
 ********************************************************/

/*
- Arrow functions ignore call/apply/bind
- bind() creates new function
- apply() is useful for arrays
*/


/********************************************************
 * REAL-LIFE ANALOGY
 ********************************************************/

/*
call/apply → Borrow and use now
bind       → Borrow and keep for later
*/


/********************************************************
 * INTERVIEW ONE-LINER
 ********************************************************/

/*
apply() invokes a function with arguments as an array,
while bind() returns a new function with `this` fixed.
*/


/********************************************************
 * MEMORY TRICK
 ********************************************************/

/*
call  → comma
apply → array
bind  → later
*/
