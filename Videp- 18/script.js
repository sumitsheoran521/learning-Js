"use strict";

// ₹
// Data
const account1 = {
  owner: "Sumit Sheoran",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Archana Redhu",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5, // %
  pin: 2222,
};

const account3 = {
  owner: "Nitesh Kumar",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7, // %
  pin: 3333,
};

const account4 = {
  owner: "Amit Sheoran",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1, // %
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  // .textContent = 0;
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}₹</div>
    </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

const createUsernames = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts); // aks
// console.log(accounts);

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);
/*
console.log("----------------------------");
// SLICE method- it does not change the original array. it only create a sallow copy that array
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// We can also create a sallow copy of an array with the help of slice method
let brr = arr.slice();
console.log(brr);
// or we can use spread operator to sallow copy of an array
console.log([...arr]);

console.log("----------------------------");
// SPLICE method- It will change the original array
console.log("Original array: " + arr);
console.log("Splice element: " + arr.splice(2));
console.log("Modified array: " + arr);

arr = ["a", "b", "c", "d", "e"];
console.log(arr);
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

console.log("----------------------------");
// REVERSE method- it also modify the original array
arr = ["a", "b", "c", "d", "e"];
let arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2);
console.log(arr2.reverse());
console.log(arr2);

console.log("----------------------------");
// CONCAT method: it does not modify the original array, It will create a new array
const letter = arr.concat(arr2);
console.log(letter);
// This is also gives the same result 
console.log([...arr, ...arr2]);

console.log("----------------------------");
// JOIN method- It will not modify the original array. it will create a new array.
console.log(letter.join('-'));
console.log(letter);

*/

/*
// New Video
// at method
const arr = [23, 11, 64];
// old way
console.log(arr[1]);
// new way
console.log(arr.at(1));
// getting last array element
console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)) it will  create a new array so to extract the element we have to add [0] in the last
console.log(arr.slice(-1)[0]);
// Reason to use at method
console.log(arr.at(-1));
// at method also works on string
console.log('sumit'.at(2));

*/

/*
// Next Video
// Looping arrays: foreach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for of loop
// for(const movement of movements){
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement} rupees`);
  } else {
    console.log(`Movement ${i + 1}: You withrew ${Math.abs(movement)}`); // to remove "-" sign from console we ues Math.absolute method
  }
}
console.log("------ forEach ------");
// foreach loop: the main disadvantage of forEach loop is we cannot use break and continue statements in forEach loop
movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov} rupees`);
  } else {
    console.log(`Movement ${i + 1}: You withrew ${Math.abs(mov)}`); // to remove "-" sign from console we ues Math.absolute method
  }
});
// 0: funtion(200)
// 1: funtion(450)
// 2: funtion(400)
// ...

*/

/*
// Next video
// forEach with maps and sets
// Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map)=> {
  console.log(`${value}: ${value}`);
}) 

*/

// Codeing Challenge #1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀


const checkDogs = function(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = [...dogsJulia].slice(1, -2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  dogs.forEach(function(dog, i){
    if(dog >= 3){
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
    }
    else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  })
}
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])
*/

/*
// Next Video
// Data transformation with Map, Filter and Reduce
// map: map returns a new array containing the results of applying an operation on all original array elements.
const usdToINR = 83.5;
let movementsUSD = movements.map((mov) => {
  return mov * usdToINR;
});
console.log(movements);
console.log("-----------------------");
console.log(movementsUSD);

console.log('-----------------------');

const movementsDescripitoions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescripitoions);

*/

// Next Video
// filter: filter returns a new array containing the array elements that passed a specified test condition.
const deposits = movements.filter((mov) => {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

console.log("-----------------");

const depositFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositFor.push(mov);
  }
}
console.log(depositFor);
// Next Video
// reduce: reduce boils ("reduces") all array elements down to one single value (e.g. adding all elements together)
