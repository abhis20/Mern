// function Cars(name,model){
//     this.name=name,
//     this.model=model,
//     this.speed=0
// }

// Cars.prototype.isRunning=function(){
//         if(this.speed>0) console.log("running") ;
//         else console.log("not running");
//     },
// Cars.prototype.changeSpeed=function(newSpeed){
//         this.speed=newSpeed;
//     }

// Cars.prototype.printDetails=function(){
//     console.log(this.name,this.model,this.speed);
// }

// const creta=new Cars("creta","700");
// creta.changeSpeed(10);
// creta.printDetails();

class Car{
    constructor(name,model){
        this.name=name;
        this.model=model;
        this.speed=0;
    }

    changeSpeed(newSpeed){
        this.speed=newSpeed;
         }

    isRunning(){
        if(this.speed>0) console.log("running") ;
        else console.log("not running");
         }
}

const creta=new Car("Creta","CR-1223");
console.log({creta});

// attendance System
// markpresent
// mark absent
// calculate attendance

class Attendance{
    constructor(name,grade,totalDays){
        this.name=name;
        this.grade=grade;
        this.totalDays=totalDays;
        this.present=0;
        this.absent=0;
    }

    markPresent(presentDays){
        this.present=presentDays;
        this.absent=this.totalDays-presentDays;
    }

    printAttendance(){
        console.log("Name:",this.name);
        console.log("Grade:",this.grade);
        console.log("TotalDays:",this.totalDays);
        console.log("Present:",this.present);
        console.log("Absent:",this.absent);
    }
}

class AttendanceLogger{
        constructor(name,grade){
            this.name=name;
            this.grade=grade;
            this.present=0;
            this.totalDays=0;
        }

        markPresent(){
            this.present++;
            this.totalDays++;
        }

        markAbsent(){
            this.totalDays++;
        }

        printAttendance(){
            console.log("Student",this.name,"has attendace of",((this.present/this.totalDays)*100).toFixed(2))
        }
}

const studentOne = new AttendanceLogger("Rahul", "C");
studentOne.markPresent();
studentOne.markPresent();
studentOne.markAbsent();
studentOne.markPresent();
studentOne.markPresent();
studentOne.markAbsent();

studentOne.printAttendance();

// setter and getter in class

class Student{
    constructor(id,name,grade,dob){
        this.id=id;
        this.name=name;
        this.grade=grade;
        this._dob=dob;
        this._marks=0;
    }

    get dob(){
        return this._dob;
    }

    get marks(){
        return this._marks;
    }

    set marks(newmarks){
        this._marks=newmarks;
    }
}

const Rahul=new Student("123","Rahul","7th","12-03-2003");

console.log(Rahul.dob);
Rahul.marks=80;
console.log(Rahul.marks);

// static method

class Users{
    constructor(username,role){
        this.username=username;
        this.role=role;
    }

    static guest(){
        return new Users("guest","guest")
    }
}

const guestUser=Users.guest();
console.log(guestUser);

// private properties

class Bank{
    #pin=1234;
    constructor(newPin){
        this.#pin=newPin;  //using hash we can make pin private, only acccesible inside class
        this.balance=0;
    }

    deposit(money){
        return this.balance+=money;
    }

    withdraw(userPin,money){
        return this.#pin==userPin && this.balance>money?this.balance-=money:null;
    }

    checkBalance(userPin){
        return this.#pin==userPin?this.balance:null;
    }

}

const sbi=new Bank(4321);
sbi.deposit(1000);
console.log(sbi.checkBalance(4321));
sbi.withdraw(4321,100);
console.log(sbi.checkBalance(4321));
console.log(sbi.pin);  // gives undefined

// methods can be also private using #

/*************************************************
 * OBJECT DESTRUCTURING IN JAVASCRIPT
 * (NOTES FORM – BEGINNER FRIENDLY)
 *************************************************/


/*************************************************
 * WHAT IS OBJECT DESTRUCTURING?
 *************************************************/

/*
Object destructuring is a way to
extract values from an object
and store them into variables
in a single line.
*/


/*************************************************
 * SIMPLE OBJECT
 *************************************************/

const student = {
    name: "Rahul",
    age: 21,
    grade: "A",
    city: "Pune"
};


/*************************************************
 * WITHOUT DESTRUCTURING (OLD WAY)
 *************************************************/

/*
Accessing values one by one
*/

const name1 = student.name;
const age1 = student.age;

console.log(name1, age1);


/*************************************************
 * WITH DESTRUCTURING (NEW WAY)
 *************************************************/

/*
Syntax:
const { key1, key2 } = object;
*/

const { name, age } = student;

console.log(name, age);


/*************************************************
 * IMPORTANT RULE
 *************************************************/

/*
Variable names must MATCH
object property names.
*/


/*************************************************
 * CHANGING VARIABLE NAME (ALIAS)
 *************************************************/

/*
Use when you want a different variable name
*/

const { name: studentName, city: studentCity } = student;

console.log(studentName, studentCity);


/*************************************************
 * DEFAULT VALUES
 *************************************************/

/*
Used when property may be missing
*/

const { marks = 0 } = student;

console.log(marks); // 0


/*************************************************
 * DESTRUCTURING IN FUNCTION PARAMETERS
 *************************************************/

function printStudent({ name, grade }) {
    console.log(name, grade);
}

printStudent(student);


/*************************************************
 * NESTED OBJECT DESTRUCTURING
 *************************************************/

const user = {
    id: 1,
    profile: {
        username: "rahul123",
        email: "rahul@gmail.com"
    }
};

const {
    profile: { username, email }
} = user;

console.log(username, email);


/*************************************************
 * DESTRUCTURING WITH REST OPERATOR
 *************************************************/

/*
Collect remaining properties
*/

const { name: n, ...rest } = student;

console.log(n);
console.log(rest);


/*************************************************
 * COMMON MISTAKES
 *************************************************/

/*
❌ Wrong variable name
const { names } = student;

❌ Destructuring undefined object
const { x } = undefined;
*/


/*************************************************
 * WHEN TO USE OBJECT DESTRUCTURING?
 *************************************************/

/*
Use when:
- Object has many properties
- Cleaner code needed
- Function parameters
- React props
*/


/*************************************************
 * REAL-LIFE ANALOGY
 *************************************************/

/*
Object = Gift box
Destructuring = Taking items out at once
*/


/*************************************************
 * INTERVIEW ONE-LINER
 *************************************************/

/*
Object destructuring allows extracting
multiple properties from an object
into variables using concise syntax.
*/


/*************************************************
 * MEMORY TRICK
 *************************************************/

/*
{} → object destructuring
[] → array destructuring
*/
