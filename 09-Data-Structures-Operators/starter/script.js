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
console.log(restaurant.order);
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

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

// const gk = game.players[0][0];
// const fieldPlayers = game.players[0].slice(1);
const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const team1 = game.odds.team1;
// const team2 = game.odds.team2;
// const draw = game.odds.x;
// console.log(team1, team2, draw);

const {
  odds: { team1, x: draw, team2 },
} = game;

const printGoals = (...players) => {
  console.log(
    `${players.length} ${
      players.length >= 2 ? 'goals were' : 'goal was'
    } scored.`
  );
};
printGoals('gnabry');

team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 1 is more likely to win');

let goalNumber = 1;
for (const scorer of game.scored) {
  console.log(`Goal ${goalNumber++} ${scorer}`);
}

let mean = array => {
  let arraySum = sum(array);
  return arraySum / array.length;
};

console.log(mean(12, 23));
