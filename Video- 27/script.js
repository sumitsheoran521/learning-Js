// Importing Module
// import { addToCart, totalPrice as Price, tq } from "./shoppingCart.js";
// addToCart('bread', 5)
// console.log(Price, tq);

import { addToCart } from "./shoppingCart.js";

console.log("Importing Module");
// console.log(shippingCost);

// import * as ShoppingCart from "./shoppingCart.js"
// ShoppingCart.addToCart("bread", 5)
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as Price, tq } from "./shoppingCart.js";
// console.log(Price);

import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
add("bread", 5);
add("apples", 4);

console.log(cart);

/*
// console.log("Start Fetching");
// const res = await fetch(
//   "https://napi-v2-2-cloud-run-b3gtd5nmxq-uw.a.run.app/v2.2/tracks/top?apikey=NjU2OGRhMzItOTVmNS00M2I2LWE4YjYtMzAzY2Y4Y2FlNTJm"
// );
// const data = await res.json();

// console.log(data); // Log the data to inspect its structure

// if (data.hasOwnProperty("tracks")) {
//   const tracks = data.tracks;
//   console.log(tracks);

// } else {
//   console.log("Cannot find tracks in the data object. Check its structure.");
// }

// const getLastPost = async function () {
//   const res = await fetch(
//     "https://napi-v2-2-cloud-run-b3gtd5nmxq-uw.a.run.app/v2.2/tracks/top?apikey=NjU2OGRhMzItOTVmNS00M2I2LWE4YjYtMzAzY2Y4Y2FlNTJm"
//   );
//   const data = await res.json();
//   console.log(data);

//   if (data.hasOwnProperty("tracks")) {
//     const titles = data.tracks.map((track) => track.message);
//     console.log(titles);
//     return titles;
//   }
// };

// const lastPostTitles = await getLastPost();
// console.log(lastPostTitles);

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  // console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
lastPost.then((last) => console.log(last));

*/

/*
// Module pattern
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
ShoppingCart2.addToCart("apple", 4);
ShoppingCart2.addToCart("pizza", 2);

console.log(ShoppingCart2);

*/

/*
// Export 
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
  );
};

// Import 
const {addToCart} = require('./shoppingCart.js');

*/

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";
const state = {
  cart: [
    { product: "Bread", quantity: 5 },
    { product: "Pizza", quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

class Person {
  #greeting = "Hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const Sumit = new Person("Sumit");

console.log("sumit" ?? null);

console.log(cart.find((el) => el.quantity >= 2));

Promise.resolve("TEST").then((x) => console.log(x));

import "core-js/stable";
import 'regenerator-runtime/runtime.js'

