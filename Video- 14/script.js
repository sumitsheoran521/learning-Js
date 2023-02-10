"use strict";
// Looping Arrays: The for-of-loop

const weekdays = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2+4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverder to ${address} at ${time}`
    );
  },

  orederPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const items of menu) console.log(items);

// // to get item with index we use entries method
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el} `);
// }
// // console.log(menu.entries());
// // console.log([...menu.entries()]);

//Next Video
// Enhanced Object Literals
// const weekdays = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day-${2+4}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverder to ${address} at ${time}`
//     );
//   },

//   orederPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },
//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// Next video
// Optional Chaining
// const weekdays = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverder to ${address} at ${time}`
//     );
//   },

//   orederPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },
//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // Without optional chaining
// // console.log(restaurant.openingHours.mon.open);

// // With optional chaining
// // console.log(restaurant.openingHours.mon?.open);

// // Multiple optional chaining
// // console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderBurger?.(0, 1) ?? "Method does not exist");

// // Arrays
// const users = [
//   {
//     name: "Sumit",
//     email: "sumitsheoran521@gmail.com",
//   },
// ];

// // advance
// console.log(users[0]?.name ?? "User array empty");

// // Old
// if(users.length > 0) console.log(users[0].name);
// else console.log('User array empty');

// Next Video
// Looping objects: Object keys, Values and Entries

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entries = names + values together
// const entries = Object.entries(openingHours);

// // console.log(entries);

// // [key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//Next Video
// Coding Challenge #2

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [key, value] of game.scored.entries()) {
//   console.log(`Goal ${key + 1}: ${value}`);
// }

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(average);

/*
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
*/
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

/*
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
    {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
    }
*/

// Next Video
// Sets and Maps

// Sets: Set is just a collection of unique values. So, that means set cannot have a duplicate.
// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Cake",
//   "Burger",
//   "Pasta",
//   "Burger",
// ]);
// console.log(ordersSet);

// console.log(new Set("Sumit"));

// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Cake");
// console.log(ordersSet);
// console.log(ordersSet[0]); //We get undefinded because in set there are no indexs

// for (const order of ordersSet) {
//   console.log(order);
// }

// // use of Set is to remove duplicate from array
// // Example
// let staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// console.log(staff);
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
// );

// console.log(new Set("SumitSheoran").size);

// Next Video
// Maps Fundamentals: Map is a type of Data Structure taht we can use to map values to keys. So, just like an object data is stored in key value pairs in maps. Big difference between objects and map is in maps the keys can have any types. in object keys are always in Strings but in map we can have any type of keys.

// const rest = new Map();
// rest.set("name", "Hotel Taj");
// rest.set(1, "Mumbai");
// rest.set(2, "New Delhi");
// console.log(rest);

// rest
//   .set("Categories", ["Italian", "Mexican", "Indian", "Organic"])
//   .set("Open", 11)
//   .set("Close", 23)
//   .set(true, "We are Open 😊")
//   .set(false, "We are Closed ⛔");

// // console.log(rest.get("name"));
// // console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get("Open") && time < rest.get("Close")));

// console.log(rest.has("Categories"));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// Next Video
// Maps:Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'C++'],
  [3, 'Java'],
  [4, 'JavaScript'],
  ['correct', 4],
  [true, 'Correct 😊'],
  [false, 'Try again 😑'],
]);
// console.l1og(question);

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap);


// Quiz app
console.log(question.get('question'));
for(const [key, value] of question){
  if(typeof key === 'number'){
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = 4;
console.log(answer);

console.log(question.get(question.get('correct') === answer))

// Convert map to array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);