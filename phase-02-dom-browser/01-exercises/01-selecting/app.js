const title = document.querySelector("#title");
const paragraph = document.querySelector(".text");
const button = document.querySelector("#btn");
const box = document.querySelector(".box");
const paragraphs = document.querySelectorAll(".text");

console.log(paragraphs);

title.textContent = "DOM Mastery"; 

box.innerHTML = "<strong>JavaScript changed this!</strong>";