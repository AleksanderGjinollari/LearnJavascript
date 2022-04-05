// "use strict";

// function logger() {
//   console.log("My name is Alex");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");
// console.log(typeof num);

// Function declaration
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }
// const age1 = calcAge1(1995);

//Function expression
// const calcAge2 = function calcAge1(birthYear) {
//   return 2022 - birthYear;
// };

// const age2 = calcAge2(1995);
// console.log(age1, age2);

//Arrow function
// const calcAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calcAge3(1995);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1995, "Alex"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// };

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }
//   return retirement;
// return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1995, "Alex"));

// const averageScoreCalc = function (score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// };

// const avgDolphins = averageScoreCalc(85, 54, 41);
// const avgKoalas = averageScoreCalc(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     return `Team Dolphins wins. Score Dolphins ${avgDolphins}, score Koalas ${avgKoalas}`;
//   } else if (avgDolphins > avgKoalas && avgDolphins < avgKoalas * 2) {
//     return "Team Dolphins has more points but not double the Koalas team, so no winner.";
//   } else if (avgDolphins * 2 <= avgKoalas) {
//     return `Team Koalas wins. Score Koalas ${avgKoalas}, score Dolphins ${avgDolphins}`;
//   } else if (avgDolphins < avgKoalas && avgDolphins * 2 > avgKoalas) {
//     return "Team Koalas has more points but not double the Dolphins team, so no winner.";
//   }
// };

// console.log(avgDolphins);
// console.log(avgKoalas);
// console.log(checkWinner(avgDolphins, avgKoalas));

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// const years = new Array(1991, 1984, 2008, 2022);
// console.log(years);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";

// console.log(friends[friends.length - 1]);

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };
// const jonas = ["Aleksander", "Gjinollari", 2022 - 1995, "Web Developer"];

// const age1 = calcAge(years[0]);
// console.log(age1);

// const ages = [calcAge(years[0])];
// console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];

//add elements to an array

// const newLength = friends.push("Johnny");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

//remove elements from an array

// friends.pop();
// console.log(friends);

// friends.shift(friends);
// console.log(friends);

// friends.push(23);

// console.log(friends.indexOf("Steven"));
// console.log(friends.includes("Steven"));

// if (friends.includes("Peter")) {
//   console.log("You have a friend called Peter");
// }

// const bill = 100;
// const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
// const total = bill + tip;
// console.log(
//   `the bill is ${bill}, the tip is ${tip}, and the total value is ${total}`
// );

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
// };
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// console.log(bills);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("Wrong request");
// }
// jonas.location = "Portugal";
// jonas["twiter"] = "@jonasshckjem";
// console.log(jonas);

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   brithYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2037 - this.brithYear;
//     return;
//   },
// };

// console.log(jonas.calcAge()); // undefined
// console.log(jonas.age); // 46

// console.log(
//   `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and has ${
//     jonas.hasDriversLicense ? "a" : "no"
//   } driver's license.`
// );

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.calcBMI();
// console.log(mark.bmi);

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// john.calcBMI();
// console.log(john.bmi);

// console.log(
//   `${john.firstName}'s BMI (${john.bmi})is lower than ${mark.firstName}'s BMI (${mark.bmi})`
// );

// for loop keeps running while oncition is TRUE!

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const types = [];

// const jonas = [
//   "Jonas",
//   "Alex",
//   2022 - 1995,
//   "Web Developer",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// }
// console.log(ages);

// continue and break statements

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);
// types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
//   if(typeof jonas[i] !== "string") continue;
// }
//continue
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }
// //break
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// going through an array from the last element
// const jonas = [
//   "jonas",
//   "Alex",
//   2037 - 1991,
//   "Web Developer",
//   ["Michael", "Peter", "Steven"],
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weight repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop will end now.");
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}
console.log(tips);

for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}
console.log(totals);
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
