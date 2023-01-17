// Codeing Challange #2

// const calcTip = (billValue) => {
//     let tip = 0;
//     if(billValue >= 50 && billValue <= 300){
//         tip = (15 * billValue)/100;
//     } else {
//         tip = (20 * billValue)/100;
//     }
//     let totalAmount = tip + billValue
//     return totalAmount;
// }

// // 125, 555, 44

// let bills = [125, 555, 44];
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// Objects

// const sumit = {
//     firstName : "Sumit",
//     lastName : "Sheoran",
//     age : 2023-1996,
//     jog : "Developer",
//     friends : ["Ravinder", "Harderrp", "Dhull"]
// };
// console.log(sumit);

// Dot vs Bracket Notation
// const sumit = {
//     firstName : "Sumit",
//     lastName : "Sheoran",
//     age : 2023-1996,
//     job : "Developer",
//     friends : ["Ravinder", "Harderrp", "Dhull"]
// };
// console.log(sumit);
// console.log(sumit.lastName);
// console.log(sumit['lastName']);

// // Bracket Notation
// const nameKey = 'Name';
// console.log(sumit['first' + nameKey]);
// console.log(sumit['last' + nameKey]);

// const intrested = prompt("What do you want to know about Sumit? Choose between firstName, lastName, job, age and friends");
// // console.log(sumit[intrested]);

// if(sumit[intrested]){
//     console.log(sumit[intrested]);
// }else {
//     console.log("Not Exists");
// }

// console.log(`${sumit.firstName} has ${sumit.friends.length} friends and his bestfriend is called ${sumit.friends[0]}`);

// Object Methods

// const sumit = {
//     firstName : "Sumit",
//     lastName : "Sheoran",
//     birthYear : 1996,
//     job : "Developer",
//     friends : ["Ravinder", "Harderrp", "Dhull"],
//     hasDriversLicense : true,

//     // calcAge : function(birthYear){
//     //     return 2023 - birthYear;
//     // }

//     // calcAge : function(){
//     //     return 2023 - this.birthYear;
//     // }

//     calcAge : function(){
//         this.age = 2023-this.birthYear;
//         return this.age;
//     },
//     licenseCheck : function(){
//         const checking = this.age >= 18 ? 'a' : 'no'
//         return checking;
//     }
// };
// sumit.calcAge()
// // console.log(sumit.calcAge());
// // console.log(sumit.calcAge());
// // console.log(sumit.age);

// // Challenge
// console.log(`${sumit.firstName} is a ${sumit.calcAge()} years old ${sumit.job}, and he has ${sumit.licenseCheck()} driver's license`);

// Coding Challenge #3
const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    const markAns = parseFloat(this.mass / this.height ** 2).toFixed(1);
    return markAns;
  },
};

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    const johnAns = parseFloat(this.mass / this.height ** 2).toFixed(1);
    return johnAns;
  },
};
const finalAns =
  Mark.calcBMI() > John.calcBMI()
    ? `${Mark.fullName}'s BMI (${Mark.calcBMI()}) is higher than ${
        John.fullName
      }'s BMI (${John.calcBMI()})!`
    : `${John.fullName}'s BMI (${John.calcBMI()}) is higher than ${
        Mark.fullName
      }'s (${Mark.calcBMI()})!`;

console.log(finalAns);
