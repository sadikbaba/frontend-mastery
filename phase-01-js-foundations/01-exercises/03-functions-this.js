const person = {
  name: "Sadik",
  sayName: function () {
    console.log(this.name);
  },
};

person.sayName(); // What will this print?

const say = person.sayName;
say(); // What will this print? Why?

function sayName() {
  console.log(this.name);
}

const person2 = {
  name: "Sadik",
};

sayName.call(person2);
sayName.apply(person2);

const boundSayName = sayName.bind(person2);
boundSayName();

const user = {
  name: "Sadik",
  greet: function () {
    console.log(this.name);
  },
};

const greetFn = user.greet.bind(user);
greetFn();
