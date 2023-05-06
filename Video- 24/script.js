"use strict";

/** What si OOPs?
 * Object-oriented programming (OOP) is a programming paradigm (Style of code, "How" we write and organize code) based on the concept of objects;
 * We use objects to model(describe) real world (E.g. user or todo list item) or abstract features; E.g. HTML component or data structure
 * Objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding behaviour into one block;
 * In OOP, objects are self-contained pieces/blocks of code.
 * Objects are building blocks of applications, and interact with one another;
 * Interactions happen through a public interface (API): methods that the code outside of the object can access and use to communicate with the object;
 * OOP was developed with the goal of organizing code, to make it more flexible and easier to maintaon (avoid "spaghetti code").
 */

/**
 * Class => Like a blueprint from which we can create new objects.
 */

/** 4 fundamental principles of Object- Oriented Programming
 * Abstraction=> Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the things we're implementing, instead of messing with details that don't really matter to our implementation.
 * Encapsulation=> Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface(API)
 * Inheritance=> Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.
 * Polymorphism=> A child class can overwrite a method it inherited from a parent class [it's more complex than that, but enough for our purposes].
 */

/** "Classical OOP": Classes
 * Objects (instances) are instantiated from a class, which functions like a blueprint;
 * Behavior (method) is copied from class to all instances.
 */

/** OOP in JavaScript
 * Objects are linked to a prototype object;
 * Prototypal inheritance: The prototype contains methods(behavior) that are accessible to all objects linked to that prototype;
 * Behavior is delegated to the linked prototype object.
 */

/** 3 ways of implementing prototypal inheritance in JavaScript
 *  Constructor functions: 1. Technique to create objects from a function;
 *                         2. This is howbuilt-in objects like Arrays, Maps or Sets are actually implemented.
 *  ES6 Classes: 1. Modern alternative to constructor function syntax;
 *               2. "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor functions;
 *               3. ES6 classes do NOT behave like classes in "classical OOP"
 *  Object.create(): 1. The easiest and most straightforward way of linking an object to a prototype object.
 */

// Constructor
// Constructor function always starts with capital letter, Arrow function cannot works as a constructor function because it does not have its "this" keyword

/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this, never create a method inside a constructor function
  // this.calAge = function() {
  //   console.log(2023 - birthYear)
  // }
};
const sumit = new Person("Sumit", 1996);
console.log(sumit);

// Person.hey = function() {

// }

// Person.hey();
// sumit.hey()

// The only difference between a regular function and constructor function is when we call constructor function using new keyword

*/

/** Working of constructor
 * 1. New {} is created.
 * 2. function is called, this = {}
 * 3. {} linked to prototype
 * 4. function automatically return {}
 */

/*
const archana = new Person("Archana", 1998);
console.log(archana);

console.log(sumit instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

sumit.calcAge();
archana.calcAge();
console.log(sumit.__proto__);
console.log(sumit.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(sumit));

Person.prototype.species = "Homo Sapiens";
console.log(sumit.species);
console.log(sumit.hasOwnProperty("species"));

/** Prototypal Inheritance in Built-In Objects. E.g. Arrays
 *
 */

/*
console.log(sumit.__proto__);
// Pbject.prototype (top of prototype chain)
console.log(sumit.__proto__.__proto__);
console.log(sumit.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 2, 5, 56, 7, 2, 245, 56];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
}

const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95);
BMW.accelerate();
BMW.brake();
BMW.brake();
BMW.accelerate();
BMW.accelerate();
BMW.brake();

*/

/** ES6 Classes
 * 1. Classes are NOT hoisted.
 * 2. Classes are also first-class citizens that means we can pass them into  functions and aslo return them from functions.
 * 3. Classes are really just a special kind of a functions behind the scene
 * 4. Classes are executed in strict mode.
 */

/*
// Class expression
// const PersonCl = class {}

// Class declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // These are Instance messages
  // Method will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2023 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there 👋🏻");
    console.log(this);
  }
}

PersonCl.hey();

const jessica = new PersonCl("Jessica Davis", 1996);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);
console.log(jessica.age);

// PersonCl.prototype.greet = function() {
//   console.log(`Hey ${this.firstName}`);
// }
jessica.greet();

*/

/**  Setters and Getters
 * Every object in javascript can have getter and setter properties, we call these special properties Accessor properties while normal properties called data properties. Getters and Setters are basically a functions that get and set the value. But from the outside they still looks regular properties
 */

/*
const walter = new PersonCl("Walter White", 1965);

const account = {
  owner: "Sumit",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  // any setter method needs to have 1 parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = "Steven";
steven.birthYear = 1990;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("sumit", 1995);
console.log(sarah);
sarah.calcAge();

*/
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/

/*
class Cars {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`Your ${this.make} is running at ${this.speed}Km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`Your ${this.make} is running at ${this.speed}Km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  
  set speedUS(speed) {
    this.speed = speed * 1.6
  }
}

const ford = new Cars("Ford", 120);
console.log(ford.speedUS)
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50
console.log(ford);
*/

/*
// Inheritance between Classes
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(
    `My name is ${this.firstName} and I am student of ${this.course} in this college.`
  );
};

const archana = new Student("Archana", 1996, "B.Com");
archana.introduce();
archana.calcAge();

console.log(archana.__proto__);
console.log(archana.__proto__.__proto__);

console.log(archana instanceof Student);
console.log(archana instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the Prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

*/

/*
// Inheritance between "Classes" ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2023 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }

  // Static mehtod
  static hey() {
    console.log("Hey there 👋🏻");
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(
      `My name is ${this.fullName} and I am student of ${this.course} in this college.`
    );
  }
  calcAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// const martha = new StudentCl("Martha Jones", 2012)
const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();

// Inheritance between "Classes": Object.create
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(
    `My name is ${this.firstName} and I am student of ${this.course} in this college.`
  );
};
const jay = Object.create(StudentProto);
jay.init("Jay", 2002, "B.Tech");
console.log(jay);
jay.calcAge();
jay.introduce();

*/

// Examples of Classes

/** Types of fields and methods
 * Public fields
 * Private fields
 * Public methods
 * Private methods
 * (there is also the static method)
 */

/*
class Account {
  // 1. Public field (instances)
  locale = navigator.language;
  // _movements = []

  // 2. Private field (instances)
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property
    // this.#movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // Public interface / API
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved of rupees ${val}`);
      return this;
    }
  }
  // Private Method
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
  static helper() {
    console.log("Helper");
  }
}

const acc1 = new Account("Sumit", "INR", 1111);

// acc1.#movements.push(250);
// acc1.#movements.push(-120);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
Account.helper();
console.log(acc1);
console.log(acc1.getMovements());

// console.log(acc1.#pin);
// console.log(acc1.#movements); //'#movements' must be declared in an enclosing
// Encapsulation: private class field and methods


// Chaining Methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000);
console.log(acc1.getMovements());
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    return (this.speed += 10);
  }
  brake() {
    return (this.speed -= 5);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
}

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
  brake() {
    this.speed -= 10;
    this.#charge++;
    console.log(
      `${this.make} is going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const car1 = new EV("Rivian", 120, 23);
console.log(car1);
car1.chargeBattery(50);
console.log(car1);
// console.log(car1.#charge);
car1
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(90)
  .accelerate()
  .brake()
  .accelerate()
  .accelerate();

console.log(car1.speedUS);
