// Exporting Module
console.log("Exporting Module");

// Blocking code
// console.log("Start fetching users");
// const res = await fetch("https://jsonplaceholder.typicode.com/users");
// console.log("Fininsh fetching users");

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to Cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to Cart`);
}
