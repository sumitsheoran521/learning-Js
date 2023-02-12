"use strict";

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// // createBooking("LH123");
// // createBooking("LH123", 2, 800);
// // createBooking('LJ569', 2);
// // createBooking('LJ569', 5);
// // createBooking('GF224', undefined , 1000);

// // Next Video
// // How Passing Arguments Works: Value vs Reference
// let flight = "LH234";
// const sumit = {
//   name: "Sumit Sheoran",
//   passport: 237845623,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 237845623) {
//     alert("Check in");
//   } else {
//     alert("Wrong passport");
//   }
// };
// // checkIn(flight, sumit);
// // console.log(flight);
// // console.log(sumit);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };
// // newPassport(sumit);
// // checkIn(flight, sumit);

// // Next Video
// // Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // Higher Order Function: It will take a function as an argument
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log("👋🏻");
// };
// document.body.addEventListener("click", high5);

// ["Sumit", "Archana", "Arshu"].forEach(high5);

// // Next Video
// // Functions Returning Functions
// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// const greet = (greeting)=> {
//   return (name)=> {
//     console.log(`${greeting} ${name}`);
//   }
// }

// const greeterHey = greet("Hey");
// greeterHey("Sumit");
// greeterHey("Archana");

// Next Video
// The Call and Apply Methods
const airIndia = {
  airline: "Air India",
  iataCode: "AI",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

airIndia.book(239, "Sumit Sheoran");
airIndia.book(787, "Archana Sheoran");

const spiceJet = {
  airline: "SpiceJet",
  iataCode: "SJ",
  bookings: [],
};

const book = airIndia.book;
// Does not work
// book(23, 'Sarah Willams');

// Call
// in call method the 1st argument will be the pointing to this keyword
book.call(spiceJet, 23, "Sumit Kumar");
console.log(spiceJet);

book.call(airIndia, 56, "Satpal Singh");
console.log(airIndia);

const swiss = {
  airline: "Swiss Air line",
  iataCode: "LX",
  bookings: [],
};
book.call(swiss, 341, "Arshu Sheoran");
console.log(swiss);

//Apply Method
// Apply Method- It will not take any argument after the this keyword, instead of argument it will take a array of the arguments
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);
// Apply is outdated in now times. we can use call method with spread operator as a argument of array
book.call(swiss, ...flightData);

// Bind Method
// Bind Method - Bind is similar to call method. The difference is bind does not immediatly call the function, instead it will return a new funciton where the this keyword is bound. so, it set to whatever value we pass into bind.

// book.call(spiceJet, 23, "Sumit Kumar");
const bookSJ = book.bind(spiceJet);
const bookAI = book.bind(airIndia);
const bookLX = book.bind(swiss);

bookSJ(223, "Sumit Choudhary");

const bookAI23 = book.bind(airIndia, 23);
bookAI23("Amit Kumar");
bookAI23("Rinku Sheoran");
console.log(airIndia);

// With Event Listners
airIndia.planes = 300;
airIndia.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", airIndia.buyPlane.bind(airIndia));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

const addTaxRate = function(rate){
  return function(value){
    return value + value * rate;
  }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));