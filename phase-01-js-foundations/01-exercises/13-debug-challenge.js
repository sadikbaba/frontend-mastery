// ============================================================
// JavaScript Array Methods — Debugging Challenges
// ============================================================
//
// Methods practiced:
// - filter()
// - map()
// - reduce()
// - find()
//
// Goal:
// Learn to identify common mistakes when combining array methods.
// ============================================================

// ============================================================
// CHALLENGE #1 — filter() + map() + reduce()
// ============================================================
//
// TASK:
// From the products below:
// 1. Get products that are in stock.
// 2. Get their names.
// 3. Calculate their total price.
//
// ORIGINAL BUG:
// The reduce() callback was missing `return`.
//
// Broken:
// const total = available.reduce((total, product) => {
//   total + product.price;
// }, 0);
//
// ANSWER:
// The callback must return the new accumulator value.
//
// ============================================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 600, inStock: false },
  { name: "Keyboard", price: 100, inStock: true },
];

// Step 1: Keep only products that are in stock.
const available = products.filter((product) => product.inStock);

// Step 2: Get only the product names.
const names = available.map((product) => product.name);

// Step 3: Calculate the total price.
const total = available.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log("Available products:", available);
console.log("Product names:", names);
console.log("Total price:", total);

// Expected:
//
// Available products:
// Laptop, Keyboard
//
// Product names:
// ["Laptop", "Keyboard"]
//
// Total price:
// 1100

// LESSON:
// reduce() needs the callback's returned value to become
// the next accumulator.
//
// 0 + 1000 → 1000
// 1000 + 100 → 1100
//
// Without `return`, the accumulator does not receive the
// calculated value.

// ============================================================
// CHALLENGE #2 — filter() + map()
// ============================================================
//
// TASK:
// Get the names of users who are:
// 1. Active
// 2. Adults (18+)
//
// ORIGINAL BUG:
//
// const adultNames = activeUsers.map((user) => {
//   user.age >= 18;
//   return user.name;
// });
//
// PROBLEM:
// `user.age >= 18` only checks the condition.
// It doesn't remove the user.
//
// map() transforms every item that reaches it.
// It does NOT decide which items stay.
//
// ANSWER:
// Use filter() for the age condition, then map() for names.
//
// ============================================================

const users = [
  { name: "Sadik", age: 24, active: true },
  { name: "Ahmed", age: 17, active: false },
  { name: "Ali", age: 30, active: true },
  { name: "Omar", age: 15, active: true },
];

// Step 1: Keep active users.
const activeUsers = users.filter((user) => user.active);

// Step 2: Keep only active adult users.
const adultUsers = activeUsers.filter((user) => user.age >= 18);

// Step 3: Get their names.
const adultNames = adultUsers.map((user) => user.name);

console.log("Active users:", activeUsers);
console.log("Adult active users:", adultUsers);
console.log("Adult names:", adultNames);

// Expected:
//
// Adult names:
// ["Sadik", "Ali"]

// LESSON:
//
// filter() → decides WHICH items stay.
//
// map() → decides WHAT each remaining item becomes.
//
// Therefore:
//
// filter → filter → map
//
// is appropriate when we have multiple conditions
// followed by a transformation.

// ============================================================
// CHALLENGE #3 — find() vs filter()
// ============================================================
//
// TASK:
// Find the user whose ID is 2 and print their name.
//
// ORIGINAL CODE:
//
// const user = users_.filter((user) => user.id === 2);
//
// console.log(user.name);
//
// BUG:
// filter() returns an ARRAY.
//
// So the result would be:
//
// [
//   { id: 2, name: "Sadik" }
// ]
//
// Therefore:
//
// user.name
//
// doesn't work because `user` is an array.
//
// ANSWER:
// Use find() because we want ONE matching object.
//
// ============================================================

const users_ = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Sadik" },
  { id: 3, name: "Ali" },
];

const user = users_.find((user) => {
  return user.id === 2;
});

console.log("Found user:", user);
console.log("User name:", user.name);

// Expected:
//
// Found user:
// { id: 2, name: "Sadik" }
//
// User name:
// Sadik

// ============================================================
// IMPORTANT DIFFERENCE
// ============================================================
//
// filter():
// Returns an ARRAY containing ALL matching items.
//
// find():
// Returns the FIRST matching item itself.
//
// Example:
//
// filter() → [user]
//
// find()   → user
//
// ============================================================

// ============================================================
// FINAL CHEAT SHEET
// ============================================================
//
// filter()
// → "Which items should stay?"
//
// map()
// → "What should each item become?"
//
// reduce()
// → "What ONE result can I build from everything?"
//
// forEach()
// → "What action should I perform for each item?"
//
// find()
// → "Give me the FIRST item that matches."
//
// some()
// → "Does AT LEAST ONE item match?"
//
// every()
// → "Do ALL items match?"
//
// includes()
// → "Does this array contain this value?"
//
// sort()
// → "How should I reorder these items?"
//
// ============================================================

// ============================================================
// DEBUGGING LESSONS FROM THESE CHALLENGES
// ============================================================
//
// 1. A condition by itself doesn't change an array.
//
//    user.age >= 18;
//
//    This only produces true/false.
//
//    To actually select users:
//
//    users.filter(user => user.age >= 18);
//
//
//
// 2. reduce() needs the accumulator returned.
//
//    return total + product.price;
//
//
//
// 3. Know what each method returns.
//
//    filter() → Array
//    map()    → Array
//    reduce() → One value
//    find()   → One item (or undefined)
//    some()   → Boolean
//    every()  → Boolean
//
//
//
// 4. Choose the method based on the job,
//    not based on which syntax you remember.
//
// ============================================================
