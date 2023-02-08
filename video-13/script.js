"use strict";

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order : function(starterIndex, mainIndex){
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   }
// };
// Array Destructuring = It is an ES6 feature, it is a way of unpacking values from an array or an object into separate variables.

// normal way
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // Array Destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// // const [first, second] = restaurant.categories;
// // console.log(first, second);

// // if we have to skip a value which is inbetween then we should leave it as empty.
// // const [first, , second] = restaurant.categories;
// // console.log(first, second);

// // to switch the value from primary to secondary and secondary to primary
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // old way (switching variables)
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // new way (array destructuring)
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // old way
// console.log(restaurant.order(2, 0));

// // Recieve 2 return values form a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5,6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// // Array destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p=1, q=1, r=1] =  [8, 9];
// console.log(p, q, r);

// Next video
// Destructuring Objects

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverder to ${address} at ${time}`
    );
  },

  orederPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

// to destructure the objects we use curly braces
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array
const newNew = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(newNew);

// Iterables: arrays, strings, maps, sets, Not objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);

// Real world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];
console.log(ingredients);

restaurant.orederPasta(...ingredients);