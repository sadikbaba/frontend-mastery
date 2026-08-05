const book = {
  title: "JavaScript Mastery",
  author: "Sadik",
  pages: 300,
  info: function () {
    console.log(`${this.title} by ${this.author}`);
  }
};

book.info();

const vehicle = {
  hasWheels: true
};

const car = Object.create(vehicle);
car.brand = "Toyota";

console.log(car.brand);
console.log(car.hasWheels);


// Exercise 3

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}


const person = new Person("Sadik", 25);
person.introduce();