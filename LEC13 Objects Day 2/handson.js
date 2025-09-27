// Cricket team

const team={
    name:"Indian Cricket Team",
    players:[{id:1,scores:[10,34,80]}],
    display:function(){
         for(let value of this.players){
            console.log("id:",value.id,"scores:",value.scores.join(" "));
         }
    },
    addPlayers: function(id){
         let newPlayer={
            id:id,
            scores:[]
         }
         this.players.push(newPlayer);
    },

    addScore:function(id,score){
         for(let value of this.players){
            if(value.id==id){
                value.scores.push(score);
            }
         }
    },
    averageScore: function(id){
        let sum=0;
        for(let values of this.players){
            if(values.id==id){
                for(let value of values.scores){
                    sum+=value;
                }
                return sum/(values.scores.length);
            }
         }
    },
    teamAverage:function(){
        let sum=0;
        let count=0;
        for(let player of this.players){
            for(let score of player.scores){
                sum=sum+score;
                count++;
            }
        }
        return sum/count;
    }
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


// property of keys
let obj={
 age:20,
 6:45
};

// typeof keys in objects is string;
console.log(obj.age);
console.log(obj["age"]);
console.log(obj["6"]);
console.log(obj[6]);
// console.log(obj[age]); ---> error
// console.log(obj.6); ---> error

// other way of creating object
let obj2=new Object();

// copying objects

obj2={...obj};  //  ... is known as spread operator
console.log(obj2);


// Spread operator in arrays and objects

// in array

let arr=[1,2,3,4,5,6];
let arr1=[...arr];
let arr2=[arr];
console.log({arr});
console.log({arr1});
console.log({arr2});

// in objects

let student1={
    age:21,
    name:"Abhi",
};

let student2={...student1};
let student3={student1};
console.log({student1});
console.log({student2});
console.log({student3});

// merging two arrays

arr=[1,2,3,4,5];
arr1=[6,7,8,9,10];
arr2=[...arr,...arr1];

console.log(...arr,...arr1);
console.log(arr2);

// merging two objects


let studentPersonalDetails={
    age:21,
    name:"Abhi",
};
let studentAcademicDetails={
    grade:"A",
    marks:90
};
let studentDetails={
    ...studentPersonalDetails,...studentAcademicDetails,
}
console.log({studentDetails});
console.log({...studentDetails});

/* issue while copying object with spread operation

while copying object only one level is copied and others are used as reference


*/

let object1={
    a:
    {
        b:
        {
            c:3
        }
    }
}

let object2={...object1};
console.log(object2);
object2.a.b.c=12;
console.log(object2);
console.log(object1);

/* 
When exactly to use spread operators in objects? 
-----> when we need to copy one level only 
*/

/* Conclusion for using spread operator with objects: for one level it's deep copy, 
for other nested levels, it's shallow copy */

// another way of copying object(shallow copy)

let student={
      name: "Pratik Patil",
  age: 15,
  standard: "10th",
  gender: "male",
  address: "Viman Nagar, Pune",
  section: "C",
};

let studentCopy=Object.assign({},student);
console.log({studentCopy});

// deep copy

object1={
    a:
    {
        b:
        {
            c:3
        }
    }
}
let deepCopy=JSON.parse(JSON.stringify(object1));
console.log({deepCopy});
deepCopy.a.b.c=12;
console.log({object1});

//  JSON.stringify(object1) -------> converts the object to string

// JSON.parse()   ------> converts the string to object