"use strict";

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = "Archana";
//       const str = `Oh, and youre a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       output = "New Output";
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = "Sumit";
// calcAge(1996);
// // console.log(age);
// // printAge()

// Video 12
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Sumit';
// let job = 'Developer';
// const year = 1996;

// Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example

// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All product delected");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// This keyword

// console.log(this);

// const calcAge1 = function(birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// }
// calcAge1(2000);

// const calcAge2 = (birthYear) => {
//   console.log(2023 - birthYear);
//   console.log(this);
// }
// calcAge2(1996);

// const sumit = {
//   year : 1996,
//   calcAge : function() {
//     console.log(this);
//     console.log(2023 - this.year);
//   }
// }
// sumit.calcAge();

// const matilda = {
//   year:2017,
// }
// // Method borrowing
// matilda.calcAge =  sumit.calcAge;
// matilda.calcAge();

// const f = sumit.calcAge;
//  f();

// var firstName = "Archana";
// const sumit = {
//   firstName: "Sumit",
//   year: 1996,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);

// Solution 1
// const self = this;
// const isMillenial = function() {
//   console.log(self.year >= 1981 && self.year <= 1996);
//   // console.log(this.year >= 1981 && this.year <= 1996);
// }

// Solution 2
//     const isMillenial =  () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// sumit.greet();
// sumit.calcAge();

// Arguments keyword
// const addExpr = function(a, b){
//   console.log(arguments);
//   return a + b;
// }
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a+b;
// }
// addArrow(2,5,8);

// Primitives vs Objects(Primitive vs Reference types)
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name : "Sumit",
//   age : 30,
// }

// const friend = me;
// friend.age = 27;
// console.log("Friend", friend);
// console.log("Me", me.age);

// Primitive types
// let lastName = "Sheoran";
// let oldLastName = lastName;
// lastName = "Choudhary";

// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
//   firstName : "Jessica",
//   lastName : "Williams",
//   age : 27,
// }
// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis"
// console.log('Before marriage', jessica);
// console.log('After marriage', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage", jessica2);
console.log("After marriage", jessicaCopy);
