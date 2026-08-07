function greet(name) {
  console.log(`Hello, ${name}!`);
}

function multiply(a, b) {
  return a * b;
}

function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

greet("Sadik");
console.log(multiply(2, 3));
let vote = canVote(17);

if (vote) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}


 