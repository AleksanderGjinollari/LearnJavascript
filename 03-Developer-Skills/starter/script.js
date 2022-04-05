// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperatures = [22, 32, 15, 17, 2, "error", -15, -2];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temperatures.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(
//       `The max temperature in ${i + 1} ${i < 1 ? "day" : "days"} will be ${
//         arr[i]
//       } degree celcious`
//     );
//   }
// };

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} degreeC in ${i + 1} ${i < 1 ? "day" : "days"} ... `;
  }
  console.log(str);
};

printForecast([12, 5, -5, 0, 4]);
