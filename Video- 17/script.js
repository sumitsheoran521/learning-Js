"use strict";

// Codeing Challenge #1
/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: Java", "1: Python", "2: JavaScript", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n (Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     // console.log(this.answers);
//     this.displayResults();
//     this.displayResults("string");
//   },
//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

// Next Video
// Immediately Invoked Function Expressions(IIFE): The function will run only one time.

// Noraml funtion
// const runOnce = function(){
//   console.log('This can run again');
// }
// runOnce();

// // IIFE
// (function() {
//   console.log('This will never run again');
// })();

// (() => {
//   console.log('This will also never run again');
// }) ();

// {
//   const isPrivate = 23;
//   var notPrivate = 25
// }
// // console.log(isPrivate)
// console.log(notPrivate)

// Next Video
// Closures: A function has access to the variable environment (VE) of the execution cintext in which it was created even after that execution context gone. The closure is basically this variable environment attached to the function, exactly as it was at the time and place the function was created

/*
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// console.dir(booker);
*/

/*
Summary of clouser:
1. A clouser is the closed over variable environment of the execution context in which a function was created, even after that execution context is gone;
2. A clouser gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
3. A clouser makes sure that a funcion doesnt loose connection to variables that existed at the function's birth place;
4. A clouser is like a backpack that a function carrries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.
*/

// Next video
// More clouser examples

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function() {
  const b = 777;
  f = function() {
    console.log(b * 2);
  }
}
g();
f()
console.dir(f);
// Re-assigning function
h();
f();
console.dir(f);


// Example 2
const boardPassengers = function(n, wait){
  const perGroup = n/3;

  setTimeout(function(){
    console.log(`We are now boarding all ${n}`);
    console.log(`There are 3 group, each with ${perGroup} passengers`);
  }, wait * 1000)

  console.log(`Will start boarding in ${wait} seconds`);
}
const perGroup = 1000;
boardPassengers(180, 3);


// Coding challenge #3
(function() {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', ()=> {
    header.style.color = 'blue';
  })
})();