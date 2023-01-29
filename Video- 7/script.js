"use strict";
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if(typeof currTemp !== 'number'){
//         continue;
//     }
//     if (currTemp > max) {
//       max = currTemp;
//     }
//     if (currTemp < min) {
//       min = currTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitube = calcTempAmplitude(temperatures);
// console.log(amplitube);

// // Merge two array
// const a = ["a", "c", "d"];
// const b = ["g", "f", "e"];
// const c = a.concat(b);
// console.log(c);

// const measureKelvin = function(){
//     const measurement = {
//         type : "temp",
//         unit : "celsius",
//         value : Number(prompt("Degrees celsius")),
//     }
//     const kelvin = measurement.value + 273;
//     return kelvin;
// }
// // A. IDENTIFY
// console.log(measureKelvin());

// Coding Challenge #1
function printForecast(arr){
    arr = [12, 5, -5, 0, 4]
    let str = '';
    for(let i=0; i<arr.length; i++){
        str = str + `${arr[i]}°C in day ${i+1} ...`;
    }
    console.log('...' + str);
}
printForecast()