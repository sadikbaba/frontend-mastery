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


