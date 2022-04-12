// 'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order: function (firstIndex, secondIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[firstIndex]];
  },
};
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// [first, second] = [second, first];

// console.log(first, second);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p, q, r] = [8, 9];
// console.log(p, q, r);

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 'Jonas');
// console.log(undefined || null);

// will console.log Hello
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
//Nullish : null and undefined
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovani',
// };

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;

// const gk = game.players[0][0];
// const fieldPlayers = game.players[0].slice(1);
// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const team1 = game.odds.team1;
// const team2 = game.odds.team2;
// const draw = game.odds.x;
// console.log(team1, team2, draw);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printGoals = (...players) => {
//   console.log(
//     `${players.length} ${
//       players.length >= 2 ? 'goals were' : 'goal was'
//     } scored.`
//   );
// };
// printGoals('gnabry');

// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 1 is more likely to win');

// My solution challenge 1
// let goalNumber = 1;
// for (const scorer of game.scored) {
//   console.log(`Goal ${goalNumber++} ${scorer}`);
// }

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamString}: ${odd}`);
// }

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(new Set('Aleksander'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// ordersSet.add('Garlick Bread');
// ordersSet.add('Garlick Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set('Aleksander Gjinollari').size);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian,', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);

// const question = new Map([
//   ['question', 'what is the best programming language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);
// answer === question.get('correct')
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

// console.log(question.get(question.get('correct') === answer));

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2
// console.log(gameEvents.delete(64));
// console.log(gameEvents);

// 3
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// 4
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`(${half} HALF) ${min}: ${event}`);
// }

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));
// console.log(airline.slice(-2));
// console.log(airline.slice(-2));

// const checkMiddleSeat = function (seat) {
//B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

const airline = 'TAP Air Portugal';
// const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

capitalize = str => {
  const strLow = str.toLowerCase();
  const strCorrect = strLow[0].toUpperCase() + strLow.slice(1);
  return strCorrect;
};

console.log(capitalize('jOnnnNaAsS'));

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing strings
const priceGB = '288,97P';
const priceUS = priceGB.replace('P', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replaceAll(/door/g, 'gate'));

// Booleans

const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('A'));
console.log(plane.startsWith('A'));
console.log(plane.endsWith('A'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on the plane');
  } else console.log('Welcome aboard!');
};
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Got some snacks and a gun for protection');
checkBaggage('Clothes');

console.log('a+very+nice+string'.split('+'));
console.log('Aleksander Gjinollari'.split(' '));
const [firstName, lastName] = 'Aleksander Gjinollari'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// const capitalize = str => {
//   const strLow = str.toLowerCase();
//   const strCorrect = strLow[0].toUpperCase() + strLow.slice(1);
//   return strCorrect;
// };

const capitalizeName = name => {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
const passenger2 = 'jessica ann smith davis';
capitalizeName(passenger2);

// Padding the string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(455687892315646));
console.log(maskCreditCard('156695952641965296'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(15);
