/* Cricket Team */
const team = {
  name: "Indian Cricket Team",
  /* this will store an object with two properties -> {id: 1, scores: [10, 34, 80]} */
  players: [{ id: 1, scores: [10, 34, 80] }],
  display: function () {
    for (let player of this.players)
      console.log(player.id + " --- " + player.scores.join(" "));
  },
  addPlayers: function (id) {
    /* assume always a new player is coming with unique id, this function should create 
    a new player with this id and empty scores array, then push this player to players array
    */
    const newPlayer = {};
    newPlayer.id = id;
    newPlayer.scores = [];
    this.players.push(newPlayer);
  },
  addScore: function (id, score) {
    /* find the player with this id, and push this score to its score array */
    for (let player of this.players) {
      if (player.id === id) {
        player.scores.push(score);
        return;
      }
    }
  },
  averageScore: function (id) {
    /* find the player with this id and calculate its avg score and return it*/
    for (let player of this.players) {
      if (player.id === id) {
        let sum = 0;
        for (let score of player.scores) sum += score;
        return sum / player?.scores?.length;
      }
    }
  },
  teamAverage: function () {
    //optional
    /* calculate the average of scores of all players combined */
    let sum = 0;
    let numberOfScores = 0;
    for (let player of this.players) {
      for (let score of player.scores) sum += score;
      numberOfScores += player?.scores?.length;
    }

    return sum / numberOfScores;
  },
};

team.addPlayers(2);
team.addPlayers(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

team.display();
console.log("average score of player 1 - " + team.averageScore(1)); // => 153/4 = 38.25
console.log("average score of player 2 - " + team.averageScore(2)); // => 260/3 = 86.67

console.log("average score of team - " + team.teamAverage()); // => 513/9 = 57

/* Some properties about keys in Objects */
let obj1 = {
  age: 12,
  6: 90,
};

// by default all the keys are of string types, except keys of type integer.
console.log("age of obj", obj1[6]); // this is valid
console.log("age of obj", obj1["6"]); // this is valid
console.log("age of obj", obj1["age"]); // this is valid

/* Other way of creating an object */
let obj2 = new Object();
obj2.name = "Harman";
obj2.class = 10;

console.log(obj2);
/* Note: Obj1 and Obj2 are exactly same */

/* Copying objects */
//copying obj1 in obj2
obj2 = { ...obj1 }; // ... is known as spread operator
console.log(obj2);

/* Spread operators in Objects and Arrays */
//in Arrays
let arr = [12, 10, 3, 19];
let arr2 = [arr]; //without using spread operator
let arr3 = [...arr]; //with using spread operator
console.log({ arr2, arr3 }); //arr2 and arr3 are not same

//in objects
let student1 = {
  age: 10,
  name: "Prashant",
};

let student2 = { student1 };
let student3 = { ...student1 };

console.log({ student2, student3 });

let studentPersonalDetails = {
  age: 12,
  name: "Rani",
};
let studentAcademicDetails = {
  marks: 130,
  grade: "A",
};

//merging two or more objects using spread operator
let studentDetails = {
  ...studentPersonalDetails,
  ...studentAcademicDetails,
};
console.log({ ...studentDetails });

/* issue with copying object with spread operators */

obj1 = {
  a: {
    b: {
      c: 3,
    },
  },
};

obj2 = { ...obj1 };
obj2.a.b.c = 12;
console.log({ obj2 });
console.log({ obj1 });

/* When exactly to use spread operators in objects? when we need to copy one level only */
let student = {
  name: "Pratik Patil",
  age: 15,
  standard: "10th",
  gender: "male",
  address: "Viman Nagar, Pune",
  section: "C",
};
/* we can safely use shallow copy with spread operator for above example as it's a single level object */
let studentCopy1 = { ...student };
studentCopy1.name = "copy";
console.log({ studentCopy1, student });

/* Conclusion for using spread operator with objects: for one level it's deep copy, 
for other nested levels, it's shallow copy */

/* Another way of copying an object (shallow copy) */
let studentCopy2 = Object.assign({}, student);
console.log({ studentCopy2 });
//merging two or more objects using Object.assign() method
let studentDetails2 = Object.assign(
  {},
  studentPersonalDetails,
  studentAcademicDetails
);
console.log({ studentDetails2 });

/* deep copying */
let deepCopyOfObj1 = JSON.parse(JSON.stringify(obj1));
console.log({ deepCopyOfObj1 });
deepCopyOfObj1.a.b.c = 100; //changing the value of a key at level 3
console.log({ obj1 }); // we can see original obj is not getting changed even if we're changing the value of key at level 3
console.log({ deepCopyOfObj1 }); //value is only changed for copied object

/* Understanding ---> JSON.parse(JSON.stringify(obj1)); */
//converting student object to string
let objectInStringFormat = JSON.stringify(student);
console.log(objectInStringFormat);

//converting a object string to object
let stringToObj = JSON.parse(objectInStringFormat);
console.log({ stringToObj });

console.log(
  JSON.parse(
    `{"name":"Pratik Patil","standard":"10th","gender":"male","section":"C"}`
  )
);