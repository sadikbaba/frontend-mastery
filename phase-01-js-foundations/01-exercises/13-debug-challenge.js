const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 600, inStock: false },
  { name: "Keyboard", price: 100, inStock: true },
];

const available = products.filter((product) => product.inStock);

const names = available.map((product) => product.name);

const total = available.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log(available);
console.log(names);
console.log(total);
