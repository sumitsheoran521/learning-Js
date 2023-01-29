// The Switch Statement

// const day = "Sunday";

// if (day === "Monday") {
//   console.log("Go to School");
// } else if (day === "Tuesday") {
//   console.log("Go to Stadium");
// } else if (day === "Wednesday") {
//   console.log("Go to Hospital");
// } else if (day === "Thursday" || day === "Friday") {
//   console.log("Go to Delhi");
// } else if (day === "Saturday") {
//   console.log("Rest");
// } else if (day === "Sunday") {
//   console.log("Movie");
// } else {
//   console.log("Not a valid day");
// }

// switch (day) {
//   case "Monday":
//     console.log("Go to School");
//     break;
//   case "Tuesday":
//     console.log("Go to Stadium");
//     break;
//   case "Wednesday":
//     console.log("Go to Hospital");
//     break;
//   case "Thursday":
//   case "Friday":
//     console.log("Go to Delhi");
//     break;
//   case "Saturday":
//     console.log("Rest");
//     break;
//   case "Sunday":
//     console.log("Movie");
//     break;
//   default:
//     console.log("Not a valid day");
// }



// Conditional statement - ternery operator
// const age = 28;  

// const ans = age >= 18 ? console.log("I'm 18+") : console.log("I'm below 18"); // This is statement we cannot store it in variable

// console.log(ans); // ans will be undefined; because we cannot store a statement in variable. 

// const drink = age >= 18 ? "wine" : "water"; // this a operator, operator is expression not a statement. so, we can store it in variable and it will not give error.
// console.log(drink); // ans will be wine.

// let drink2;
// if(age >= 18){
//     drink2 = "wine 🍷";
// } else {
//     drink2 = "water 💧";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water💧'}`);


// Coding Challenge #4

let bill = 40;
let tip = bill >= 50 && bill <= 300 ? (bill*15)/100 : (bill*20)/100;
let totalBill = bill + tip;
let answer = `The bill was ${bill}, the tip was ${tip}, and the total value is ${totalBill}`;

console.log(answer);