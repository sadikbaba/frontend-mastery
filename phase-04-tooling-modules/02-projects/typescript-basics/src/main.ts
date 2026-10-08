interface User {
  name: string;
  age: number;
  email?: string;
  id: string | number;
}

let person1: User = {
  name: "sadik",
  age: 24,
  id: "sadik",
};


function getUserName(person: User): string {
  return person.name;
}

console.log(getUserName(person1));