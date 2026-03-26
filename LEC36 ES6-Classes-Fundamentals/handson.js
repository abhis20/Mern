/*************************************************
 * JavaScript CLASS vs CONSTRUCTOR FUNCTION
 * (NOTES FORM)
 *************************************************/

/*
JavaScript is prototype-based.
Classes are just a cleaner syntax over prototypes.
*/


/*************************************************
 * WHAT IS A CONSTRUCTOR FUNCTION?
 *************************************************/

/*
A constructor function is a normal function
used to create objects using the `new` keyword.
*/

/*
Example:
function Cars(name, model) {
    this.name = name;
    this.model = model;
    this.speed = 0;
}
*/

/*
Methods are added using prototype:
Cars.prototype.run = function() {}
*/

/*
Use constructor functions when:
- Working with old ES5 code
- Learning how prototype works internally
*/


/*************************************************
 * WHAT IS A CLASS?
 *************************************************/

/*
A class is a blueprint for creating objects.
Introduced in ES6 (2015).
*/

/*
Example:
class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
        this.speed = 0;
    }

    run() {}
}
*/

/*
Important:
Classes are NOT new in JavaScript.
They are syntactic sugar over prototypes.
*/


/*************************************************
 * INTERNAL WORKING (VERY IMPORTANT)
 *************************************************/

/*
class Car {}
⬇️ internally becomes
function Car() {}

All class methods are stored in:
Car.prototype
*/

/*
So internally:
class === constructor + prototype
*/


/*************************************************
 * MAIN DIFFERENCE (IMPORTANT)
 *************************************************/

/*
Constructor Function → Old syntax (ES5)
Class → Modern syntax (ES6)
*/


/*************************************************
 * CLASS vs CONSTRUCTOR FUNCTION COMPARISON
 *************************************************/

/*
Constructor Function:
- Uses function keyword
- Methods added using prototype
- More code
- Less readable
- Can be called without new (bug)

Class:
- Uses class keyword
- Methods written inside class
- Cleaner syntax
- More readable
- Cannot be called without new
*/


/*************************************************
 * WHY CLASS IS PREFERRED (VERY IMPORTANT)
 *************************************************/

/*
1. Cleaner and readable syntax
2. Easy for beginners
3. Looks like Java / C++ / Python
4. Prevents common mistakes
5. Better for large applications
6. Interview preferred
*/


/*************************************************
 * SAFETY DIFFERENCE
 *************************************************/

/*
Constructor Function:
Cars();   // ❌ this becomes window (bug)

Class:
Car();    // ❌ Error (safe)
*/


/*************************************************
 * MEMORY & PERFORMANCE
 *************************************************/

/*
Performance:
- class and constructor function are SAME
- No speed difference

Memory:
- Methods go to prototype in both cases
*/


/*************************************************
 * REAL PROJECT USAGE
 *************************************************/

/*
Constructor Function:
- Old projects
- Legacy code

Class:
- Modern JavaScript
- React, Node, Angular
- Real-world applications
*/


/*************************************************
 * REAL-LIFE ANALOGY
 *************************************************/

/*
Constructor Function:
- Manual wiring of machine parts

Class:
- Ready-made machine blueprint
*/


/*************************************************
 * INTERVIEW ONE-LINER (MUST REMEMBER)
 *************************************************/

/*
JavaScript classes are syntactic sugar
over constructor functions and prototypes.
They improve readability and safety
but internally use prototype-based inheritance.
*/


/*************************************************
 * MEMORY TRICK
 *************************************************/

/*
Old JS  → Constructor Function
Modern JS → Class
*/


/*************************************************
 * FINAL SUMMARY
 *************************************************/

/*
- JavaScript is prototype-based
- class is just cleaner syntax
- Prefer class in modern code
- Know both for interviews
*/



/*
1. constructor initializes object state
2. class methods go to prototype
3. avoid overwriting same variable
4. method names should reflect action
5. classes help organize logic clearly
*/


/*************************************************
 * GETTERS & SETTERS IN CLASS (NOTES FORM)
 *************************************************/

/*
Getters and setters are used to:
- Control access to object properties
- Add validation
- Hide internal data (encapsulation)
*/

/*
They look like methods
but are accessed like properties
*/


/*************************************************
 * STUDENT CLASS OVERVIEW
 *************************************************/

class Student {
    constructor({ id, name, dob, grade }) {
        this.id = id;
        this.name = name;
        this._dob = dob;      // private-like property
        this.grade = grade;
        this._marks = 0;      // private-like property
    }

    get dob() {
        return this._dob;
    }

    set marks(newMarks) {
        this._marks = newMarks;
    }

    get marks() {
        return this._marks;
    }
}


/*************************************************
 * WHY UNDERSCORE (_) IS USED
 *************************************************/

/*
JavaScript has no true private variables (pre-ES2022)
So by convention:

_dob   → internal/private variable
dob    → public property via getter
*/


/*************************************************
 * HOW GETTER WORKS
 *************************************************/

/*
When you write:
student.dob

JavaScript actually calls:
get dob()
*/


/*************************************************
 * HOW SETTER WORKS
 *************************************************/

/*
When you write:
student.marks = 90

JavaScript actually calls:
set marks(90)
*/


/*************************************************
 * EXAMPLE USAGE
 *************************************************/

const student = new Student({
    id: 1,
    name: "Rahul",
    dob: "2002-05-12",
    grade: "A"
});

student.marks = 85;   // calls setter
console.log(student.marks); // calls getter
console.log(student.dob);


/*************************************************
 * OUTPUT
 *************************************************/

/*
85
2002-05-12
*/


/*************************************************
 * IMPORTANT QUESTION:
 * WHAT IF WE USE SAME NAME IN GETTER?
 *************************************************/

/*
❌ WRONG CODE:
*/

// get dob() {
//     return dob;
// }

// /*
// OR
// */

// get dob() {
//     return this.dob;
// }


/*************************************************
 * WHAT WILL HAPPEN?
 *************************************************/

/*
❌ Infinite recursion occurs

Reason:
- student.dob calls get dob()
- inside getter, return this.dob
- this.dob AGAIN calls get dob()
- loop continues forever
*/


/*************************************************
 * RESULTING ERROR
 *************************************************/

/*
RangeError: Maximum call stack size exceeded
*/


/*************************************************
 * VISUAL FLOW (IMPORTANT)
 *************************************************/

/*
student.dob
  ↓
get dob()
  ↓
return this.dob
  ↓
get dob()
  ↓
return this.dob
  ↓
INFINITE LOOP ❌
*/


/*************************************************
 * CORRECT WAY (MUST FOLLOW)
 *************************************************/

/*
Always store value in a DIFFERENT variable
*/

this._dob = dob;

// get dob() {
//     return this._dob;
// }


/*************************************************
 * SAME RULE FOR SETTERS
 *************************************************/

/*
❌ WRONG:
set marks(val) {
    this.marks = val; // recursion
}

✅ CORRECT:
set marks(val) {
    this._marks = val;
}
*/


/*************************************************
 * WHY THIS DESIGN IS IMPORTANT
 *************************************************/

/*
1. Prevents infinite loops
2. Protects internal data
3. Allows validation later
4. Clean & professional code
*/


/*************************************************
 * INTERVIEW ONE-LINER (VERY IMPORTANT)
 *************************************************/

/*
Getters and setters provide controlled access
to class properties, and using a separate
internal variable prevents infinite recursion.
*/


/*************************************************
 * MEMORY TRICK
 *************************************************/

/*
Public name  → getter/setter
Private data → _underscore variable
*/


/*************************************************
 * DATA PROPERTY vs ACCESSOR PROPERTY
 * (NOTES FORM)
 *************************************************/


/*************************************************
 * WHAT IS A PROPERTY?
 *************************************************/

/*
A property is a key-value pair inside an object.
*/


/*************************************************
 * DATA PROPERTY
 *************************************************/

/*
A data property stores a value directly.
*/

/*
Example:
*/

const student1 = {
    name: "Rahul",
    marks: 80
};

/*
Here:
- name and marks are data properties
- values are stored directly
*/

/*
Characteristics of Data Property:
- Stores actual value
- Read and write directly
- No get / set involved
*/


/*************************************************
 * ACCESSOR PROPERTY
 *************************************************/

/*
An accessor property does NOT store value directly.
It uses getter and/or setter functions.
*/

/*
Example:
*/

class Student {
    constructor() {
        this._marks = 0; // data property
    }

    get marks() {
        return this._marks;
    }

    set marks(value) {
        this._marks = value;
    }
}

/*
Here:
- _marks → data property (stores value)
- marks  → accessor property (controls access)
*/


/*************************************************
 * HOW ACCESSOR PROPERTY WORKS
 *************************************************/

/*
Writing:
student.marks = 90
→ calls set marks(90)

Reading:
student.marks
→ calls get marks()
*/


/*************************************************
 * IMPORTANT RULE
 *************************************************/

/*
Accessor properties NEVER store data.
They only return or modify another property.
*/


/*************************************************
 * DATA PROPERTY vs ACCESSOR PROPERTY
 *************************************************/

/*
Data Property:
- Stores value directly
- Simple read/write
- No validation
- No get/set

Accessor Property:
- Does not store value
- Uses get/set
- Allows validation
- Controls access
*/


/*************************************************
 * REAL-LIFE ANALOGY
 *************************************************/

/*
Data Property    → Storage room
Accessor Property → Door with lock
*/


/*************************************************
 * INTERVIEW ONE-LINER
 *************************************************/

/*
A data property stores a value directly,
while an accessor property controls access
using getter and setter functions.
*/


/*************************************************
 * MEMORY TRICK
 *************************************************/

/*
Data → stores
Accessor → controls
*/


/*************************************************
 * STATIC METHOD IN JAVASCRIPT
 * (NOTES FORM – EASY & BEGINNER)
 *************************************************/


/*************************************************
 * WHAT IS A STATIC METHOD?
 *************************************************/

/*
A static method belongs to the CLASS itself,
NOT to the objects created from the class.
*/


/*************************************************
 * SIMPLE MEANING
 *************************************************/

/*
Normal method  → used by object
Static method  → used by class
*/


/*************************************************
 * EASY REAL-LIFE ANALOGY
 *************************************************/

/*
Class = School
Object = Student

Student attends school  → object method
School rules            → static method
*/


/*************************************************
 * NORMAL METHOD EXAMPLE
 *************************************************/

class Student {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hello, I am", this.name);
    }
}

const s1 = new Student("Rahul");
s1.sayHello(); // ✅ works


/*************************************************
 * STATIC METHOD EXAMPLE
 *************************************************/

class Student {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hello, I am", this.name);
    }

    static schoolName() {
        console.log("ABC Public School");
    }
}


/*************************************************
 * HOW TO CALL STATIC METHOD
 *************************************************/

/*
Static method is called using CLASS name
*/

Student.schoolName(); // ✅ works


/*************************************************
 * WHAT WILL NOT WORK
 *************************************************/

/*
Static method CANNOT be called by object
*/

s1.schoolName(); // ❌ Error


/*************************************************
 * WHY ERROR HAPPENS
 *************************************************/

/*
Static methods are stored on:
Student (class)

Normal methods are stored on:
Student.prototype (object)
*/


/*************************************************
 * WHEN TO USE STATIC METHODS
 *************************************************/

/*
Use static methods when:
- Logic is related to class
- Does not depend on object data
- Utility / helper functions
*/


/*************************************************
 * EASY UTILITY EXAMPLE
 *************************************************/

class MathUtil {
    static add(a, b) {
        return a + b;
    }

    static isEven(num) {
        return num % 2 === 0;
    }
}

console.log(MathUtil.add(5, 3));     // 8
console.log(MathUtil.isEven(10));    // true


/*************************************************
 * IMPORTANT RULE
 *************************************************/

/*
Static method:
- Cannot access this.name
- Cannot access instance properties
*/


/*************************************************
 * WHY?
 *************************************************/

/*
Because static methods do not belong to objects,
they belong to the class itself.
*/


/*************************************************
 * INTERVIEW ONE-LINER
 *************************************************/

/*
Static methods belong to the class and
are called using the class name,
not the object.
*/


/*************************************************
 * MEMORY TRICK
 *************************************************/

/*
static → class
non-static → object
*/


/*************************************************
 * STATIC METHOD — WHY / WHERE / WHAT
 * (NOTES FORM – VERY EASY)
 *************************************************/


/*************************************************
 * WHAT IS A STATIC METHOD?
 *************************************************/

/*
A static method is a method that belongs to the CLASS,
not to the object created from the class.
*/

/*
Keyword used: static
*/

/*
Called using:
ClassName.method()
*/


/*************************************************
 * SIMPLE EXAMPLE
 *************************************************/

class Student {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hi, I am", this.name);
    }

    static schoolName() {
        console.log("ABC Public School");
    }
}

/*
Normal method → sayHello()
Static method → schoolName()
*/


/*************************************************
 * WHAT STATIC METHOD IS NOT
 *************************************************/

/*
❌ Static method is NOT stored in object
❌ Static method does NOT use instance data
❌ Static method is NOT called by object
*/


/*************************************************
 * WHY STATIC METHODS EXIST?
 *************************************************/

/*
Static methods exist to:
- Keep common logic in one place
- Avoid repeating code
- Represent class-level behavior
*/

/*
They are used when logic:
- Does NOT depend on object data
- Is common for all objects
*/


/*************************************************
 * WHY OBJECT CANNOT USE STATIC METHOD?
 *************************************************/

/*
Objects only look inside:
object → prototype

Static methods are stored on:
Class itself

So object cannot find static methods.
*/


/*************************************************
 * WHERE ARE STATIC METHODS STORED?
 *************************************************/

/*
Stored on the class:
Student.schoolName

NOT stored in:
Student.prototype
*/


/*************************************************
 * WHERE SHOULD STATIC METHODS BE USED?
 *************************************************/

/*
Use static methods when:
- Function is utility/helper
- No need for this.name or this.age
- Logic belongs to class concept
*/


/*************************************************
 * WHERE NOT TO USE STATIC METHODS?
 *************************************************/

/*
Do NOT use static methods when:
- Method needs object data
- Method changes instance values
*/


/*************************************************
 * WHAT TO USE INSTEAD?
 *************************************************/

/*
If method uses instance data → normal method
If method uses class-level logic → static method
*/


/*************************************************
 * REAL-LIFE ANALOGY
 *************************************************/

/*
School → static method
Student → object

School rules apply to all students,
but students do not own the rules.
*/


/*************************************************
 * INTERVIEW ONE-LINER
 *************************************************/

/*
Static methods define class-level behavior
and are called using the class name,
not the object.
*/


/*************************************************
 * MEMORY TRICK
 *************************************************/

/*
WHAT  → static method = class method
WHY   → common logic, no instance data
WHERE → stored on class, not object
*/
