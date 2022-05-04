'use strict';

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    // Never create a method inside a constructor
    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
  }
  // Prototypes
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jonas = new Person('Jonas', 1991);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically retyrns {}

const matilda = new Person('Matilda', 2001);
console.log(jonas, matilda);
console.log(jonas instanceof Person);
console.log(Person.prototype);

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(Person.prototype.constructor);
const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.brake();
car2.brake();
car2.brake();
car2.brake();

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet = function () {
    console.log(`Hey ${this.firstName}`);
  };
  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there ✋');
    console.log(this);
  }
}

const jessica = new PersonCL('Jessica Alba', 1856);
console.log(jessica);
jessica.calcAge();

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

PersonCL.hey();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
