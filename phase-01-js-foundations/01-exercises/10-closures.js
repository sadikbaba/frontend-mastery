function createWallet() {
  let balance = 0;

  function deposit(amount) {
    if (amount > 0) {
      balance += amount;
      console.log(` amount $${amount} deposited`);
    } else {
      console.log(` you can deposite only positive amount`);
      return;
    }
  }

  function getBalance() {
    if (balance >= 0) {
      return `your balance is : $${balance}`;
    }
  }

  function withdraw(amount) {
    if (amount > 0 && balance >= amount) {
      balance -= amount;
      console.log(` amount $${amount} withdrawn`);
    } else {
      console.log(` you can withdraw only positive amount`);
      return;
    }
  }

  return {
    deposit,
    getBalance,
    withdraw,
  };
}

const myWallet = createWallet();
myWallet.deposit(100);
myWallet.withdraw(50);
console.log(myWallet.getBalance());

myWallet.deposit(-100);
myWallet.withdraw(-50);
console.log(myWallet.getBalance());

function createCounter() {
  let num = 0;

  function increment() {
    num += 1;
  }

  function decrement() {
    num -= 1;
  }

  function getCount() {
    return num;
  }

  return {
    increment,
    decrement,
    getCount,
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getCount());

console.log(counter.num);

const userMethods = {
  greet() {
    console.log(`Hello, ${this.name}`);
  },

  showAge() {
    console.log(`Age: ${this.age}`);
  },
};

const user1 = Object.create(userMethods);
const user2 = Object.create(userMethods);

user1.name = "Sadik";
user1.age = 24;

user2.name = "Ahmed";
user2.age = 30;

user1.greet();
user2.greet();

user1.showAge();
user2.showAge();
