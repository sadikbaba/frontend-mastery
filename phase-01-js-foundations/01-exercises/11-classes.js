class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

const dog = new Dog("Max", "Husky");
dog.eat();
dog.bark();
console.log(dog.name);
console.log(dog.breed);

console.log("\n _______________desctruction__________ ");
const user = {
  name: "sadik",
  age: 24,
};

const { age: userage } = user;

console.log(userage);

console.log("\n _______________desctruction__________\n  ");

const colors = ["blue", "red", "green", "yellow"];

const [firstColor, , thirdColor] = colors;

console.log(firstColor);
console.log(thirdColor);

console.log("\n _______________desctruction__________\n  ");

const user1 = {
  name: "Sadik",
  age: 24
};

const { name = "Unknown", country = "Nigeria" } = user1;

console.log(name);
console.log(country);



console.log("\n _____________for____________\n  ");

const games = ["GTA", "Minecraft", "Valorant"];

for (const game of games) {
  console.log(game);
}
