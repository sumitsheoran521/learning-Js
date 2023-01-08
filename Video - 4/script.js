// // Activating Strict Mode
"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");


// // Functions
// // A function is a peace of code which we can reuse again and again in our code.
// // Its like a variable but a variable holds a value but a function can hold one or more complete line of code

// function logger() {
//     console.log("I am logger");
// }

// // Calling / running / invoking function
// logger();


// function foodProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`
//     return juice;
// }

// const appleJuice = foodProcessor(4, 0);
// console.log(appleJuice);
// console.log(foodProcessor(4, 0));

// const appleOrangeJuice = foodProcessor(2,4);
// console.log(appleOrangeJuice);




// // Function Declaration vs Function Expression

// // Function Declaration
// // Function Declairation - Beacuse we simply use function keyword to declaire the function a bit we declaire a variable
// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }
// const age1 = calcAge1(1996);
// console.log("age1: "+age1);

// // Function Expression
// // Function Expression - That is the another type of function that exists and it looks like this. We didnt give a name here
// // A funtion without a name is basically a anonymos function. so its an expression, and remember that an expression produce a value to we have to store it in a variable. here calcAge2 is the variable that store the value produced by anonymus function

// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear;
// }
// const age2 = calcAge2(1996);
// console.log("age2: "+age2);

// Arrow Function - ES6 2015
// We cannot use this keyword in arrow function
// const calcAge3 = birthYear => 2023 - birthYear;
// console.log(calcAge3(1996));


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} will retire in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1996 , "Sumit"));
// console.log(yearsUntilRetirement(1990, "Amit"));


// Functions calling ohter functions

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
//     return juice;
// }
// console.log(fruitProcessor(2, 3));



// Reviewing Functions
// const calcAge = function(birthYear){
//     return 2023 - birthYear
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if(retirement > 0){
//         console.log(`${firstName} will retire in ${retirement} years`);
//         return retirement;
//     }else{
//         console.log(`${firstName} is already retiered`);
//         return -1 ;
//     }
// }
// console.log(yearsUntilRetirement(1996, "Sumit"))
// console.log(yearsUntilRetirement(1958, "Amit"))


// Coding Challenge #1

// const calcAverage = (match1, match2, match3)=> (match1 + match2 + match3)/3;
// const scoreDolhpines = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// function checkWinner(avgDolhpines, avgKoalas){
//     avgDolhpines = scoreDolhpines;
//     avgKoalas = scoreKoalas;
//     if(avgDolhpines > avgKoalas*2){
//         console.log(`Dolphine win!!! 🐬 (${avgDolhpines} vs ${avgKoalas})`);
//     } else if(avgKoalas > avgDolhpines*2){
//         console.log(`Koalas win!!! 🐨 (${avgKoalas} vs ${avgDolhpines})`);
//     }
//      else {
//         console.log(`No winner ☹️ (${avgDolhpines} vs ${avgKoalas})`);
//     }
// }
// checkWinner();


// Arrays
// const names = ["Sumit", "Archana", "Arshu", "Armit", 1993];
// console.log(names);

// const years = new Array(1991, 1992, 1993, 1994, "Sumit");
// console.log(years);

// const sumit = ['Sumit', 'Sheoran', 2023-1996];
// console.log(sumit);

// Exercise
// const calcAge = function(birthYear){
//     return 2023-birthYear;
// }

// const year = [1996, 1997, 2000, 2005, 2018];

// console.log(calcAge(year[3]));


// Basic Array Operations(Methods)
const friend = ['Michael', 'Steve', 'Peter'];
console.log(friend);
friend.push('Jay'); // Add element at the end of array
console.log(friend);

friend.unshift('John') // add element in the starting of array
console.log(friend);

const poped = friend.pop(); // delete element from last
console.log(poped);
console.log(friend);

friend.shift();
console.log(friend);