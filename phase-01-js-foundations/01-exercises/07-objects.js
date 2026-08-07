const books = [
  {
    title: "python crash",
    author: "chatgpt",
    price: 50,
  },
  {
    title: "act of spending money",
    author: "gemini",
    price: 60,
  },
  {
    title: "javascript mastery",
    author: "grok",
    price: 100,
  },
];

console.log(books[0].title);
console.log(books[2].author);

books[1].price = 59.99;

for (let i = 0; i < books.length; i++) {
  console.log("-----");
  console.log(`Title : ${books[i].title}`);
  console.log(`Author: ${books[i].author}`);
  console.log(`Price : $${books[i].price}`);
}
