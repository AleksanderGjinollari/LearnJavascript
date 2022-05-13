// Importing module
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// console.log('Importing module');
/*
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apple', 12);

console.log(cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCart = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product}${quantity > 1 ? 's' : ''} added to cart`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product}${quantity > 1 ? 's' : ''} ordered from supplier`
    );
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
*/
/*
// Export
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product}${quantity > 1 ? 's' : ''} ordered from supplier`
  );
};

// Import
const { addToCart } = require("./shoppingCart.js");
*/
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);
console.log('1');
