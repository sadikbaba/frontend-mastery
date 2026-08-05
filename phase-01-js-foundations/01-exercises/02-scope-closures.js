const x = 10;

function test() {
  const y = 20;
  console.log(x); // What will this print?
  console.log(y);
}

test();
// console.log(y); // Uncomment this and see what happens

function makeGreeter(name) {
  return function () {
    console.log("Hello, " + name);
  };
}

const greetSadik = makeGreeter("Sadik");
const greetAli = makeGreeter("Ali");

greetSadik();
greetAli();

// exercise 3
function createCounter(start = 0) {
  let count = start; // this is private

  return {
    increment: function () {
      count = count + 1;
      return count;
    },
    reset: function () {
      count = start;
      return count;
    },
    getCount: function () {
      return count;
    }
  };
}

const counter = createCounter(0);

console.log(counter.increment()); // should be 1
console.log(counter.increment()); // should be 2
console.log(counter.increment()); // should be 3
console.log(counter.getCount());  // should be 3
console.log(counter.reset());     // should be 0
console.log(counter.increment()); // should be 1