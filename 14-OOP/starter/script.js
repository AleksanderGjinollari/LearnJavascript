'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never create a method inside a constructor
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically retyrns {}

const matilda = new Person('Matilda', 2001);
console.log(jonas, matilda);
console.log(jonas instanceof Person);
console.log(Person.prototype);
// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

// console.log(jonas.__proto__);
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);
