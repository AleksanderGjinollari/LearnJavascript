// 'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
// ES5
// numPassengers = numPassengers || 1
// price = price || 199
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', undefined, 800);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Smith',
//   passport: 23454856,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 23454856) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = str => {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = str => {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = (str, fn) => {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer(`Javascript is the best!`, upperFirstWord);
// transformer(`Javascript is the best!`, oneWord);

const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Alex');

greet('Hello')('Jonas');
