// Question 1
// Test Case 1

// let markWeight = 78; 
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// let markHigherBMI;

// let markMass = markWeight/(markHeight**2);
// console.log("Mark BMI is: " + markMass);

// let johnMass = johnWeight/(johnHeight**2);
// console.log("John BMI is: " + johnMass);

// if(markMass > johnMass){
//     markHigherBMI = true;
// }
// else{
//     markHigherBMI = false;
// }

// console.log(markHigherBMI);

// Ans: 
// Mark BMI is: 27.309968138370508
// John BMI is: 24.194608809993426
// true


// Test Case 2
// let markWeight = 95; 
// let markHeight = 1.88;
// let johnWeight = 85;
// let johnHeight = 1.76;

// let markHigherBMI;

// let markMass = markWeight/(markHeight**2);
// console.log("Mark BMI is: " + markMass);

// let johnMass = johnWeight/(johnHeight**2);
// console.log("John BMI is: " + johnMass);

// if(markMass > johnMass){
//     markHigherBMI = true;
// }
// else{
//     markHigherBMI = false;
// }

// console.log(markHigherBMI);

// Ans
// Mark BMI is: 26.87867813490267
// John BMI is: 27.44059917355372
// false



// Strings

const firstName  ="Sumit";
const job = "Developer";
const birthYear = 1996;


const sumit = "I'm " + firstName + ", a " + job + " and my age is " + ( 2023 - birthYear);

console.log(sumit);


// Template Literals- introduced in ES6 2015
const sumitNew = `I'm ${firstName}, a ${job} and my age is ${ 2023 - birthYear}`;
console.log(sumitNew);

console.log('String with \n\
multiple \n\
lines');


// If/else

// Checking person is eligible for Driving or not
const age = 10;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log("You are start driving 😁👍");
}
else{
    const yearLeft = 18 - age;
    console.log(`You have to wait for another ${yearLeft} years ☹️☹️`);
}

const myBirthYear = 1996;
let century;
if(myBirthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);

console.log("-------------------");

// Type conversion
const inputYear = "1996";
console.log(Number(inputYear), inputYear); // Output = 1996 "1996"
console.log(Number(inputYear) + 18); // Output = 2014
console.log(Number("Sumit")); // Output = NaN

console.log(String(23), 23); // Output = "23" , 23

// Type Coercion
console.log('I am ' + 23 + ' years old');
console.log("23" - "10" - 3); // output = 10
console.log('23' * '2'); // output = 46
console.log('23' / '2'); // output = 46

let n = "1" + 1;
n = n-1;
console.log(n); // Output = 10



// Truthy and Falsy values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean('Sumit'));
console.log(Boolean({}));
console.log(Boolean(1));

