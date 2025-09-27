let mother={
    name:"Snehal",
    Age:32,
    Address:"Baner",
    City:"Pune"
}

let student={
    name:"Shubham",
    Class:"10th",
    Age:14,
    Address:"Baner",
    City:"Pune"
}

console.log(mother);
console.log(student);

mother.state="Maharashtra";
student.Div="C";


console.log(mother);
console.log(student);

mother.City="Mumbai";
console.log(mother);

console.log({mother,student});

let vehicle1={
    numberOfseats:4,
    topSpeed:200,
    mileage:34,
    noofAirbags:4,
}

console.log({vehicle1});

vehicle1.numberOfseats=6;

vehicle1.colours=["Blue","White","Red"];
console.log({vehicle1});

delete vehicle1.noofAirbags;
console.log({vehicle1});

vehicle1.address={
    addressLine1:"Aria Tower",
    addressLine2:"Baner",
    city:"Pune",
    state:"Maharashtra",
}
vehicle1.name="Scorpio";
console.log({vehicle1});

console.log("City of vehicle:",vehicle1?.address?.city);

//     ?. ----> optional chaining operator

let vehicle2={
    name:"Thar",
    numberOfseats:4,
    topSpeed:200,
    mileage:34,
    noofAirbags:4,
    address:{
    addressLine1:"Aria Tower",
    addressLine2:"Baner",
    city:"Pune",
    state:"Maharashtra",
    }
}

let vehicles=[vehicle1,vehicle2];

console.log({vehicles});

for(let i=0;i<vehicles.length;i++){
    console.log("vehicle name",vehicles[i]?.name,"and City name is:",vehicles[i]?.address?.city)
}

// using for of loop

for(let vehicle of vehicles){
    console.log("vehicle name",vehicle?.name,"and City name is:",vehicle?.address?.city)
}

// we can also print nested objects like this
console.log("we can also print nested objects like this----->","vehicle1['address']['city']:",vehicle1["address"]["city"])

// for in loop for objects

for(let key in vehicle1){
    console.log(key);
}

console.log("*** Printing key value pair using for in loop ***");
for(let key in vehicle1){
    console.log(key+": "+vehicle1[key]);
}

// keys of object in array

let vehicle1objkeys=Object.keys(vehicle1);
let vehicle1addobjkeys=Object.keys(vehicle1?.address); // array of keys
console.log(vehicle1objkeys,vehicle1addobjkeys); // array of keys

// values of object in array

let vehicle1objvalues=Object.values(vehicle1);
let vehicle1addobjvalues=Object.values(vehicle1?.address); // array of values
console.log(vehicle1objvalues,vehicle1addobjvalues); // array of values



/*

for(let value of vehicle1){
    console.log(value);
}   
    
This doesn’t work because vehicle1 is an object, and objects are not iterable.
Iterable means: something you can loop over item by item (like arrays, strings, sets, maps).
Objects ({key: value} form) are just collections of key-value pairs, not directly iterable.

*/

// using for of loop in array of objects

for(let value of vehicles){
    value.address.city="Mumbai";
    console.log(value);
}

// functions in objects

let vehicle3={
    name:"BMW",
    numberOfseats:4,
    topSpeed:200,
    mileage:34,
    currentSpeed:100,
    noofAirbags:4,
    address:{
    addressLine1:"Aria Tower",
    addressLine2:"Baner",
    city:"Pune",
    state:"Maharashtra",
    },
    isRunning :function(){
         if(this.currentSpeed>0) console.log("Vehicle is running");
         else console.log("Vehicle is not running");
    }
}
vehicle3.isRunning();
vehicle3.currentSpeed=0;
vehicle3.isRunning();


//================= H.W. =================

/* implement this Resume management system */

const resume = {
  name: "Abhishek",
  email: "Abhishek@gmail.com",
  phone: "9876554432",
  skills: ["Javascript", "HTML", "CSS"],
  workExperience: ["Fresher"],
  display: function () {
    // display all the details of the resume in any format
     console.log(this.name);
     console.log(this.email);
     console.log(this.phone);
     console.log(this.skills);
     console.log(this.workExperience);

  },
  addSkills: function (newSkill) {
    //add this new skill to skills array
     this.skills.push(newSkill);

  },
  addWorkExperience: function (newExperience) {
    //add this new experience to work experience array
    this.workExperience.push(newExperience);
  },
  showSkills: function () {
    //shows all the skills
    console.log(this.skills);
  },
};

resume.display();
resume.addSkills("React");
resume.addWorkExperience("AccioJob");
resume.showSkills();
resume.display();
