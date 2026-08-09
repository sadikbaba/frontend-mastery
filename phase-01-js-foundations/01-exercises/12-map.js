console.log("\n_______map_______");
const prices = [10, 20, 30, 40];

const doubled = prices.map((price) => price * 2);
console.log(doubled);

const ages = [12, 18, 15, 24, 30, 16];

console.log("\n_______filter_______");
const adults = ages.filter((age) => age >= 18);
console.log(adults);
const numbers = [10, 20, 30, 40];

console.log("\n_______reduce_______");
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

const cart = [
  { name: "Rice", price: 20 },
  { name: "Milk", price: 10 },
  { name: "Bread", price: 15 },
];

const total = cart.reduce((total, item) => total + item.price, 0);
console.log("total :", total);

console.log("\n_______for each_______");
const products_ = ["Laptop", "Phone", "Keyboard"];

products_.forEach((product) => {
  console.log("Product", product);
});

console.log("\n _____________Mini project____________\n  ");

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 600, inStock: false },
  { name: "Keyboard", price: 100, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
];

// availableProducts
const availableProducts = products.filter((product) => product.inStock);
console.log("available products : ", availableProducts);

//availableProducts names
const productNames = availableProducts.map((product) => product.name);
console.log("product names: ", productNames);

const totalPrice = availableProducts.reduce((total, product) => {
  return total + product.price;
}, 0); // ← initial value is important

console.log(totalPrice);

function myMap(array, callback) {
  const result = []; // 1. Create an empty array

  for (let i = 0; i < array.length; i++) {
    const transformed = callback(array[i], i, array); // 2 + 3. Loop + call callback
    result.push(transformed); // 4. Put the returned value into the new array
  }

  return result; // 5. Return the new array
}

const numbers__ = [1, 2, 3, 4];

const doubled_ = myMap(numbers__, (num) => num * 2);

console.log(" double", doubled_);

function myFilter(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}

const numbers___ = [1, 2, 3, 4, 5, 6];

const even = myFilter(numbers___, (num) => num % 2 === 0);

console.log(even); // [2, 4, 6]





const __products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Keyboard" },
];

const __user = __products.find((user) => user.id === 2);

console.log(__user);