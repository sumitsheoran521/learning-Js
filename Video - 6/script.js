// Loops
// for(let i=1; i <= 10; i++){
//     console.log(`Lifting weights repetition ${i} 🏋️ `);
// }

// const sumit = [
//     'Sumit',
//     'Sheoran',
//     1996,
//     'Developer',
//     true,
//     ['Archana', 'Ravinder', 'Hardeep'],
// ]
// const type = []
// for (let i=0; i<sumit.length ; i++) {
//     console.log(sumit[i]);
//     type.push(typeof sumit[i])
// }
// console.log(type);

// const years = [1991, 2007, 1996, 2020];
// const ages  =[];

// for(let i=0; i<years.length; i++){
//     ages.push(2023 - years[i]);
// }

// console.log(ages);

// Continue and break
// const sumit = [
//     'Sumit',
//     'Sheoran',
//     1996,
//     'Developer',
//     true,
//     ['Archana', 'Ravinder', 'Hardeep'],
// ]
// console.log('------ ONLY STRINGS ------');
// for (let i=0; i<sumit.length ; i++) {
//     if(typeof sumit[i] !== 'string'){
//         continue;
//     }
//     console.log(sumit[i], typeof sumit[i]);
// }

// console.log('------ BREAK WITH NUMBER ------');
// for (let i=0; i<sumit.length ; i++) {
//     if(typeof sumit[i] === 'number'){
//         break;
//     }
//     console.log(sumit[i], typeof sumit[i]);
// }

//
// const sumit = [
//     'Sumit',
//     'Sheoran',
//     1996,
//     'Developer',
//     true,
//     ['Archana', 'Ravinder', 'Hardeep'],
// ]

// // back loop
// for(let i = sumit.length - 1; i >= 0; i--){
//     console.log(i, sumit[i]);
// }

// loop inside loop
// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`----------------- Starting exercise ${exercise}`);
//     for(let rep = 1; rep <= 5; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
//     }
// }

// while loop
// let rep = 1;
// while(rep <= 10){
//     console.log(`Lifting weight repetition ${rep} 🏋️`);
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6){
//         console.log("This is 6");
//     }
// }

// Coding Challenge #4
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
const calcTip = function(billValue){
    let tip = 0;
    if(billValue >= 50 && billValue <= 300){
        tip = (15 * billValue)/100;
    }
    else {
        tip = (20 * billValue)/100;
    }
    return tip;
}
for(let i=0; i<bills.length; i++){
    tips.push(calcTip(bills[i]))
    totals.push(bills[i] + tips[i])
}
console.log(bills, tips, totals);

const calcAverage = function(arr){
    let sum = 0;
    let average = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    average = sum/arr.length
    return average;
}
console.log(calcAverage(totals));
console.log(calcAverage(tips));