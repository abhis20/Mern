// constructor
/*

In JavaScript, a constructor is a special function used to create and initialize objects.
It acts as a blueprint for creating multiple objects of the same type.

*/

// constructor acts as a bluepritn for creating objects
function User(name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;
    this.printDetails=function(){
        console.log(`Candidate name is ${this.name} whose age is ${this.age} and lives in ${this.city}`)
    }
}

// 1) `new` creates a NEW empty object
//    {}


// 2) `this` is bound to that empty object
//    Inside constructor, `this` points to the new object


// 3) The constructor function runs
//    Properties are added using `this`
//    Example: this.name = "Abhi"


// 4) JavaScript links the object's prototype
//    object.__proto__ === Constructor.prototype


// 5) `new` automatically returns the object
//    (No need to write return)


const user1=new User("vaibhav",21,"Pune");// new keywod create a empty object and the this used in function binds to this empty object
user1.printDetails();

// similarly we can create multiple objects using one constructor

// create array of objects using constructor

// One constructor call = one object

// forEach inside constructor
// overwrites properties instead of creating new objects

// To create array of objects:
// constructor must create ONE object
// loop must be OUTSIDE constructor


const names=["Abhi","Rahul","Raj","Shivam"];
const age=[21,23,24,31];
const city=["Pune","Mumbai","Hyderabad","Delhi"];

const Objarr=[];

function Users(name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;
}

for(let i=0;i<names.length;i++){
        const user=new Users(names[i],age[i],city[i]);
        Objarr.push(user);
}

console.log(Objarr);

// Constructor/Class = blueprint
// Instance = real object created using new
// new creates an instance
// Multiple instances can exist from one constructor
// Each instance has its own data

function Student(name,age,grade){
   this.name=name;
   this.age=age;
   this.grade=grade;
};

Student.prototype.greetMe=function (name){
    console.log("Hello my name is "+name);
}

const student1=new Student("Abhi",21,10);

student1.greetMe(student1.name);

// Prototype is a shared object

// Methods added to prototype
// are shared by all instances

// Instance first checks its own properties
// If not found, JS checks prototype

// Prototype saves memory


// what will be output?

function Test() {
  this.value = 10;
}

Test.prototype.value = 100;

const test = new Test();

console.log(test.value);
delete test.value;
console.log(test.value);
// Own property is checked first
// If not found, prototype is checked
// delete removes only own properties
// prototype properties remain untouched



function Tasks(){
    this.task=[];
}

Tasks.prototype.addTask=function(newTask){
    this.task.push(newTask);
}

Tasks.prototype.removeTask=function(){
    this.task.pop();
}

Tasks.prototype.displayTask=function(){
    console.log(this.task);
}

const task1=new Tasks();
task1.addTask("task 1");
task1.addTask("task 2");
task1.addTask("task 3");
task1.addTask("task 4");

task1.displayTask();

task1.removeTask();

task1.displayTask();


// `this` keyword in event listeners

// Normal function (`function () {}`):
// `this` refers to the element that triggered the event
// Preferred when working with DOM events

// Arrow function (`() => {}`):
// Arrow functions do NOT have their own `this`
// `this` is inherited from the outer (lexical) scope
// Usually refers to `window` or `undefined`

// When to use normal function:
// If you need `this` to access the clicked element
// Example: this.closest("li")

// When to use arrow function:
// When `this` is NOT required
// Or when using event object instead of `this`

// Fix arrow function issue:
// Use `event.target` instead of `this`

// Summary rule:
// Event listener + need `this` → use normal function
// No `this` needed → arrow function is fine
