/********************************************************
 * sessionStorage — COMPLETE NOTES (FROM BASICS)
 * (WHAT / WHY / WHERE / HOW / LIMITATIONS)
 ********************************************************/


/********************************************************
 * WHAT IS sessionStorage?
 ********************************************************/

/*
sessionStorage is a browser storage object
used to store data in KEY–VALUE pairs.

Data is:
- Stored per ORIGIN
- Stored per TAB
- Cleared when the tab is closed
*/


/********************************************************
 * KEY DIFFERENCE FROM localStorage
 ********************************************************/

/*
localStorage → persists even after browser close
sessionStorage → removed when tab is closed
*/


/********************************************************
 * BASIC SYNTAX
 ********************************************************/

sessionStorage.setItem("key", "value");
sessionStorage.getItem("key");
sessionStorage.removeItem("key");
sessionStorage.clear();
sessionStorage.length;
sessionStorage.key(0);


/********************************************************
 * STORES ONLY STRINGS (IMPORTANT)
 ********************************************************/

/*
sessionStorage stores ONLY strings.
*/

sessionStorage.setItem("age", 21);
sessionStorage.getItem("age"); // "21"


/********************************************************
 * STORING OBJECTS (CORRECT WAY)
 ********************************************************/

const user = { name: "Abhi", role: "admin" };

sessionStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(sessionStorage.getItem("user"));


/********************************************************
 * TAB-SPECIFIC BEHAVIOR (VERY IMPORTANT)
 ********************************************************/

/*
Each browser TAB has its own sessionStorage.
*/

/*
Open same site in:
Tab 1 → sessionStorage A
Tab 2 → sessionStorage B (empty)
*/


/********************************************************
 * WHAT HAPPENS ON REFRESH?
 ********************************************************/

/*
sessionStorage SURVIVES page refresh.
*/


/********************************************************
 * WHAT HAPPENS ON TAB CLOSE?
 ********************************************************/

/*
sessionStorage is CLEARED automatically.
*/


/********************************************************
 * WHAT HAPPENS ON NEW TAB?
 ********************************************************/

/*
New tab → NEW sessionStorage.
No data sharing.
*/


/********************************************************
 * ORIGIN RULE (SECURITY)
 ********************************************************/

/*
sessionStorage is scoped to ORIGIN.

Origin = protocol + domain + port.
*/

/*
Different origin → different storage.
*/


/********************************************************
 * REAL-WORLD USE CASES
 ********************************************************/

/*
✅ Login flow (temporary)
✅ Multi-step forms
✅ OTP verification
✅ Wizard navigation
✅ Page state during session
*/


/********************************************************
 * EXAMPLE: LOGIN SESSION
 ********************************************************/

sessionStorage.setItem("isLoggedIn", "true");

if (sessionStorage.getItem("isLoggedIn") === "true") {
    console.log("User logged in");
}


/********************************************************
 * EXAMPLE: MULTI-STEP FORM
 ********************************************************/

sessionStorage.setItem("step", "2");


/********************************************************
 * CHECK IF sessionStorage EXISTS
 ********************************************************/

function isSessionStorageAvailable() {
    try {
        const testKey = "__test__";
        sessionStorage.setItem(testKey, "test");
        sessionStorage.removeItem(testKey);
        return true;
    } catch {
        return false;
    }
}


/********************************************************
 * LIMITATIONS OF sessionStorage
 ********************************************************/

/*
1. String-only storage
2. Small size (~5MB per origin)
3. Synchronous API
4. No expiry control (except tab close)
5. Not secure for sensitive data
6. Not shared across tabs
*/


/********************************************************
 * SECURITY NOTES
 ********************************************************/

/*
sessionStorage is:
- Accessible via JavaScript
- Vulnerable to XSS
*/

/*
Do NOT store:
❌ passwords
❌ tokens (long-term)
*/


/********************************************************
 * sessionStorage vs localStorage
 ********************************************************/

/*
sessionStorage:
- Per tab
- Temporary
- Cleared on tab close

localStorage:
- Shared across tabs
- Persistent
- Manual clear
*/


/********************************************************
 * sessionStorage vs cookies
 ********************************************************/

/*
sessionStorage:
- Client-side only
- Not sent to server

Cookies:
- Sent with every request
- Can be HttpOnly & Secure
*/


/********************************************************
 * WHEN TO USE sessionStorage?
 ********************************************************/

/*
Use when data should:
- Live only during a session
- Be isolated per tab
- Be cleared automatically
*/


/********************************************************
 * WHEN NOT TO USE?
 ********************************************************/

/*
Do NOT use for:
- Persistent preferences
- Cross-tab sync
- Sensitive data
*/


/********************************************************
 * COMMON MISTAKES
 ********************************************************/

/*
❌ Expecting data in another tab
❌ Storing objects without JSON
❌ Using for long-term auth
*/


/********************************************************
 * INTERVIEW ONE-LINER
 ********************************************************/

/*
sessionStorage stores key–value data
for a single browser tab and clears
automatically when the tab is closed.
*/


/********************************************************
 * MEMORY TRICK
 ********************************************************/

/*
session → tab life
local   → browser life
*/


/*


🧠 MULTI-STEP FORM WITH sessionStorage

(Complete Theory + Code Walkthrough)

🔹 WHAT IS A MULTI-STEP FORM?

A multi-step form (also called wizard form) is a form where:

User fills data in steps

Only one form section is visible at a time

Data is saved temporarily

User can resume progress if page refreshes

🔹 WHY USE sessionStorage HERE?

Because:

Data is temporary

Data should be cleared when tab closes

Each tab should have its own form state

No need for permanent storage

✅ Perfect use-case for sessionStorage

📄 HTML STRUCTURE (FROM BASICS)
<div class="forms">
  <h1></h1>

  <form class="personal-details" data-form-name="Personal Details">
    <input type="text" id="full-name" placeholder="Enter full name" />
    <input type="number" id="age" placeholder="Enter age" />
  </form>

  <form class="educational-details" data-form-name="Educational Details">
    <input type="text" id="college-name" placeholder="Enter college name" />
    <input type="number" id="college-percentage" placeholder="Enter percentage" />
  </form>

  <form class="work-experience" data-form-name="Work Experience">
    <input type="text" id="company-name" placeholder="Enter company name" />
    <input type="number" id="total-experience" placeholder="Total experience in months" />
  </form>

  <button>Next</button>
</div>

🔹 IMPORTANT HTML CONCEPTS USED
1️⃣ Multiple <form> elements

Each <form> represents one step.

2️⃣ data-form-name attribute
data-form-name="Personal Details"

What is this?

Custom HTML attribute

Used to store metadata

Accessible via JavaScript

form.dataset.formName


✔ Used for dynamic titles

3️⃣ id on each input (VERY IMPORTANT)
<input id="full-name" />

Why IDs?

Used as keys in sessionStorage

Each input’s value is stored using its id

Example:

sessionStorage.setItem("full-name", "Rahul");

🧠 JAVASCRIPT EXPLANATION (FROM SCRATCH)
1️⃣ SELECTING DOM ELEMENTS
const personalDetails = document.querySelector(".personal-details");
const educationalDetails = document.querySelector(".educational-details");
const workExperience = document.querySelector(".work-experience");
const formTitle = document.querySelector("h1");
const nextButton = document.querySelector("button");

What happens?

Browser searches DOM

References stored in variables

Allows JS to control UI

2️⃣ GROUPING FORMS
const forms = [personalDetails, educationalDetails, workExperience];

Why array?

Easy iteration

Maintains step order

Index represents step number

3️⃣ TRACKING CURRENT STEP
let currentForm = 0;


Stores index of active form

Starts from first form by default

🔍 RESUME LOGIC (VERY IMPORTANT PART)
4️⃣ CHECK WHICH FORM SHOULD BE SHOWN
for (let i = 0; i < forms.length; i++) {
  const form = forms[i];
  const firstInput = form.firstElementChild;

  if (!sessionStorage.getItem(firstInput.id)) {
    currentForm = i;
    break;
  }
}

🔹 WHAT THIS LOOP DOES

Step-by-step:

Loop through all forms

Get first input of each form

Check if its data exists in sessionStorage

If NOT found → this is the current form

Stop looping

🔹 WHY THIS WORKS

If step 1 is filled → its data exists

If step 2 is filled → its data exists

First step without data = where user left

✔ Allows resume after refresh

👁️ FORM VISIBILITY LOGIC
5️⃣ HIDE ALL OTHER FORMS
for (let i = 0; i < forms.length; i++) {
  if (i !== currentForm) {
    forms[i].style.display = "none";
  }
}

Why?

Only one form should be visible

Others must be hidden

6️⃣ SET FORM TITLE
formTitle.textContent = forms[currentForm].dataset.formName;

Explanation

Reads data-form-name

Displays correct step title dynamically

▶️ NEXT BUTTON LOGIC (CORE FUNCTIONALITY)
7️⃣ CLICK EVENT
nextButton.addEventListener("click", () => {


Triggered when user clicks Next.

8️⃣ VALIDATION LOGIC
let allFieldsFilled = true;

for (let element of forms[currentForm].children) {
  if (element.value?.length === 0) {
    allFieldsFilled = false;
  }
}

🔹 THEORY

Loop through inputs of current form

?. optional chaining prevents errors

Ensures no empty input

9️⃣ SAVE DATA INTO sessionStorage
for (let element of forms[currentForm].children) {
  sessionStorage.setItem(element.id, element.value);
}

What happens?

Each input’s value saved

Key = input ID

Value = input value

Example:

"full-name" → "Rahul"
"age" → "22"

🔟 IF VALIDATION FAILS
if (!allFieldsFilled) {
  alert("Please fill all the details");
  return;
}


Stops navigation

Forces user to complete step

🏁 FINAL STEP HANDLING
1️⃣1️⃣ CHECK IF LAST FORM
if (currentForm === forms.length - 1) {
  console.log("All forms submitted successfully");
  sessionStorage.clear();
  return;
}

Why clear storage?

Form completed

No need to keep temporary data

Prevents stale data

1️⃣2️⃣ MOVE TO NEXT FORM
forms[currentForm].style.display = "none";
currentForm++;
forms[currentForm].style.display = "block";
formTitle.textContent = forms[currentForm].dataset.formName;

What happens?

Hide old form

Increment step index

Show next form

Update title

🔐 WHY sessionStorage IS PERFECT HERE
Feature	Reason
Per tab	Each user session isolated
Auto clear	Clears when tab closes
Temporary	Ideal for multi-step forms
Secure enough	No permanent storage
⚠️ COMMON MISTAKES AVOIDED

❌ Using localStorage for temporary forms
❌ Losing data on refresh
❌ No validation
❌ Hardcoding step numbers

🧠 FINAL MENTAL MODEL
forms[] → steps
currentForm → active step
sessionStorage → temporary memory
Next → validate → save → move

⭐ INTERVIEW ONE-LINER

A multi-step form uses sessionStorage to temporarily persist form data per tab, enabling step-wise navigation and recovery without permanent storage.


*/