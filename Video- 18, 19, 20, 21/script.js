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
  owner: "Rinku kumari",
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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  // .textContent = 0;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">₹ ${mov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = (acc) => {
  acc.balance = acc.movements.reduce((acc, mov) => {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `₹ ${acc.balance}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `₹ ${incomes}`;

  const outgoing = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `₹ ${Math.abs(outgoing)}`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `₹ ${interest}`;
};

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

const updateUI = function (acc) {
  // Display movement
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Event Handler
let currentAccount;

btnLogin.addEventListener("click", (e) => {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 1;
    // Clear input field
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount / 10)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;

btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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

/*
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

const withdrawals = movements.filter((mov) => {
  return mov < 0;
});
console.log(withdrawals);
*/

/*
// Next Video
// reduce: reduce boils ("reduces") all array elements down to one single value (e.g. adding all elements together)
// accumulator: is like snowball
const balance = movements.reduce(function(accu, curr, i, arr){
  console.log(`Iteration ${i}: ${accu} = ${curr}`);
  return accu + curr;
},0) // 0 is default value
console.log(balance);

let balance2 = 0;
for(const mov of movements){
  balance2 += mov;
}
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov)=> {
  if(acc > mov){
    return acc;
  }
  else {
    return mov;
  }
}, movements[0])
console.log(max);
*/

// Next Video
// Coding Challenge
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((age, i) => {
    if (age <= 2) {
      return 2 * age;
    } else if (age > 2) {
      return 16 + age * 4;
    }
  });
  const adult = humanAge.filter((age) => {
    if (age >= 18) {
      return age;
    }
  });
  console.log(humanAge);
  console.log(adult);
  const averageAge = adult.reduce((acc, age) => {
    return acc + age / adult.length;
  }, 0);
  return averageAge;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log("-----------------------------");
console.log(avg1);
console.log(avg2);

*/

/*
// Next Video
// The magic of chaining methods
const usdToINR = 83.5;
// PIPELINE
const totalDepositsINR = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * usdToINR)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsINR);
*/

// Next Video
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
console.log('------------------');
const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1);
console.log(avg2);
    
*/

/*
// Next Video
// The FIND Method: it will return the first element of the array for which this operation here is true.
// It is same as filter method but the main difference is filter return new array but find only return the element itself not the array.
const aa = movements.find((mov) => mov < 0); // It will return the first withdrawl
// console.log(aa);


console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Archana Redhu');
console.log(account);
*/

/*
// Next Video
// Some and Every method
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some((mov) => mov > 1500);
console.log(anyDeposits);


// Every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

console.log('-------');
// Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/*
// Next Video
// Flat and Flatmap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overAllBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overAllBalance);

// flat
const overAllBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance);

// flatMap
const overAllBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance2);
*/

/*
// Next video
// Sorting array
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort()); // This will mutate the original array
console.log(owners);

// Number
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
// });

movements.sort((a, b) => a - b);

console.log(movements);
// Descending
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (b > a) {
//     return 1;
//   }
// });
movements.sort((a, b) => b - a);
console.log(movements);

*/

/*
// next video
// more ways of creating and filling arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 10 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const roll = Array.from({ length: 10 }, (_, i) =>
  Math.round(Math.random() * i)
);
console.log(roll);

const movementsUI = Array.from(document.querySelectorAll(".movements__value"));

console.log(movementsUI);
``
labelBalance.addEventListener("click", () => {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("₹", ""))
  );

  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll(".movements__value")]
  console.log(movementsUI2);
});
*/

// Next Video
// Which array method to use?
/**
 * To mutate original arrary: 
 // add to original: .push()  [end],    .unshift  [start];
 // Remove from original: .pop()  [end],     .shift()  [start],      .splice() [any];
 // Others: .reverse(),   .sort(),    .fill()


 * A new array:
 // Computed from original: .map()  [loop]
 // Filtered using condition: .filter()
 // Portion of original: .slice()
 // Adding original to other: .concat()
 // Flattening the original: .flat(),     .flatMap()


 * An array index:
 // Based on value: .indexOf()
 // Based on test condition: .findIndex()


 * An array element:
 // Based on test condition: .find()


* Know if array includes:
 // Based on value: .includes()
 // Based on test condition: .some(),     .every()


* A new string:
 // Based on separator string: .join()


* To transform to value:
 // Based on accumulator: .reduce()
 (Boil down array to single value of any type: number, string, boolean or even new array or object)


* To just loop array:
 // Based on callback: .forEach()
 (Does not create a new array, just loops over it)
*/

/*

// Next Video
// Array methods practice
const bankDepositSum = accounts
  .flatMap((acc) => {
    return acc.movements;
  })
  .filter((mov) => {
    return mov > 0;
  })
  .reduce((sum, curr) => {
    return sum + curr;
  }, 0);

console.log(bankDepositSum);

// 2
const numDeposit1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
console.log(numDeposit1000);

let a = 10;
console.log(a++);
console.log(a);

// 3
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1)
  const expections = [
    "a",
    "an",
    "and",
    "the",
    "but",
    "or",
    "on",
    "in",
    "is",
    "with",
  ];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      expections.includes(word) ? word : capitalize(word)
    )
    .join(" ");
  return capitalize(titleCase);
};
console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but NOT too long and bye GUYs"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));

*/

// Next Video
// Coding challange #4
/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// 2
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);

// 3
const ownerEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownerEatTooMuch);

const ownerEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownerEatTooLittle);

// 4
// "Matilda and Alice and Bob's dogs eat too much!"
// "Sarah and John and Michael's dogs eat too little!"

console.log(`${ownerEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownerEatTooLittle.join(" and ")}'s dogs eat too little!`);

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6.
// current > (recommended * 0.90) && current < (recommand * 1.10)
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsSorted = dogs.slice().sort((a,b) => a.recFood - b.recFood)
console.log(dogsSorted);