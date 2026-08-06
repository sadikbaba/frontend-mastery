// ============================================
// Exercise 1 – map
// ============================================
const numbers1 = [1, 2, 3, 4, 5];

const doubled = numbers1.map(num => num * 2);
console.log("Exercise 1 - Doubled:", doubled);


// ============================================
// Exercise 2 – filter
// ============================================
const numbers2 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log("Exercise 2 - Even numbers:", evenNumbers);


// ============================================
// Exercise 3 – reduce
// ============================================
const numbers3 = [1, 2, 3, 4, 5];

const totalSum = numbers3.reduce((accumulator, current) => {
  return accumulator + current;
}, 0); // starting value = 0

console.log("Exercise 3 - Sum:", totalSum);


// ============================================
// Exercise 4 – Combined (filter + map + reduce)
// ============================================
const products = [
  { name: "Laptop", price: 1000, category: "electronics" },
  { name: "Book", price: 20, category: "education" },
  { name: "Phone", price: 600, category: "electronics" },
  { name: "Pen", price: 5, category: "education" }
];

// 1. Get only electronics
const electronics = products.filter(product => product.category === "electronics");
console.log("Exercise 4.1 - Electronics only:", electronics);

// 2. Get their prices
const electronicsPrices = electronics.map(product => product.price);
console.log("Exercise 4.2 - Electronics prices:", electronicsPrices);

// 3. Calculate total price of electronics
const totalElectronicsPrice = electronicsPrices.reduce((sum, price) => sum + price, 0);
console.log("Exercise 4.3 - Total electronics price:", totalElectronicsPrice);


// Bonus: Clean chained version (best practice)
const totalElectronicsChained = products
  .filter(product => product.category === "electronics")
  .map(product => product.price)
  .reduce((sum, price) => sum + price, 0);

console.log("Bonus - Chained total:", totalElectronicsChained);