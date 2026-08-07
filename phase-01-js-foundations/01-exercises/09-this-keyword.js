const car = {
  brand: "Toyota",
  model: "Camry",
  fuel: 50,

  showInfo() {
    return ` ${this.brand} ${this.model} - Fuel: ${this.fuel}L`;
  },

  drive() {
    return (this.fuel -= 5);
  },

  refuel(amount) {
    return (this.fuel += amount);
  },
};

console.log("car info :", car.showInfo());
car.drive();
console.log("car info :", car.showInfo());
car.refuel(20);
console.log("car info :", car.showInfo());

function buy(product, price) {
  console.log(`${this.name} bought ${product} for $${price}`);
}

const customer = {
  name: "Sadik",
};

buy.apply(customer, ["Laptop", 1000]);

function showBalance() {
  console.log(`Account name: ${this.name} \nBalance: $${this.balance}`);
}

const account = {
  name: "Sadik",
  balance: 100,
};

const showBalanceFn = showBalance.bind(account);

showBalanceFn();
