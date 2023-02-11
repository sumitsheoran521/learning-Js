"use strict";
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
*/

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// // 1. Create an array 'events' of the different game events that happened (no duplicates)
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽️ GOAL
// GOOD LUCK 😀
// for (const [min, eve] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`${half} HALF ${min}: ${eve}`);
// }

// Next Video
// Working with String - Part 1
// const airline = "Air India";
// const plane = "A319";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.length);
// console.log("B737".length);

// console.log(airline.indexOf("i"));
// console.log(airline.lastIndexOf("i"));
// console.log(airline.indexOf("India"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7)); // Length of sliced new aray is End - Begain. in this case: 7 - 4 = 3

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat){
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if(s === 'B' || s === 'E'){
//     console.log('You got the middle seat 😊');
//   } else {
//     console.log('You got lucky 🥳');
//   }
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Sumit'));
// console.log(typeof new String('Sumit'));

// console.log(typeof new String('Sumit').slice(1));

// Next Video
// Working with Strings - Part 2

// const airline = "Air India";
// const plane = "A319";

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = "sUMit";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing email
// const email = "hello@jonas.io";
// const loginEmail = "   Hello@Jonas.Io \n";

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = "288,97£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceUS);

// const announcement =
//   "All passangers come to barding door 23. Boarding door 23!";
// console.log(announcement.replaceAll("door", "gate"));

// // Booleans
// const aeroplane = "Airbus A320neo";
// console.log(aeroplane.includes("A320"));
// console.log(aeroplane.startsWith("A"));

// if (aeroplane.startsWith("Airbus") && aeroplane.endsWith("neo")) {
//   console.log("Part of the NEW Airbus family");
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOt allowed on board");
//   } else {
//     console.log("Welcome abroad!");
//   }
// };
// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and Camera");
// checkBaggage("Got some snacks and a gun for protection");

// // Next Video
// // Working with Strings - Part 3
// console.log("a+very+nice+string".split("+"));
// console.log("Sumit Sheoran".split(" "));

// const [firstName, lastName] = "Sumit Sheoran".split(" ");

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const capitalizeName = function (name) {
//   const firstStep = name.toLowerCase();
//   const names = firstStep.split(" ");
//   const newArr = [];
//   for (const n of names) {
//     // newArr.push(n[0].toUpperCase() + n.slice(1));
//     newArr.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(newArr.join(" "));
// };

// capitalizeName("jessica ann smith davis");
// capitalizeName("sumit sheoran");
// capitalizeName("arChana reDHU");

// // Padding a string
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));
// console.log('Sumit'.padStart(15, '-').padEnd(35, '+'));

// const maskCreditCard = function(number){
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// }
// console.log(maskCreditCard(437122289364823));
// console.log(maskCreditCard(29383883));
// console.log(maskCreditCard('398349065734633'));

// // Repeat
// const message2 = 'Bad weather...All Depaertues Delayed... ';
// console.log(message2.repeat(2));

// const planesInLine = function(n){
//   console.log(`There are ${n} planes in line ${'✈️ '}`.repeat(n));
// }
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// Coding Challenge #4
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)

underscore_case
 first_name
Some_Variable 
   calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)

underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", () => {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  // console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    // console.log(row, first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)} ${"✅".repeat(i + 1)}`);
  }
});

// Next Video
// String Methods Practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for(const flight of flights.split('+')){
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(40);
  console.log(output);
}