const title = document.querySelector("#title");
const button = document.querySelector("#btn");
const removeButton = document.querySelector("#removeBtn");
const todo = document.querySelector(".todo");

const button2 = document.querySelector("#btn-2");

console.log(button2.parentElement);

todo.setAttribute("data-id", "99");
console.log(todo.dataset.id);
console.log(todo.getAttribute("data-id"));

title.textContent = "Hello from JavaScript";

title.insertAdjacentHTML(
  "afterend",
  "<p>This was inserted after the title</p>",
);

button.addEventListener("click", function () {
  title.textContent = "The button was clicked!";
  title.classList.toggle("active");

  const message = document.createElement("p");
  message.textContent = "This paragraph was created by JavaScript";
  title.after(message);
});

removeButton.addEventListener("click", function () {
  const message = document.querySelector("p");

  if (message) {
    message.remove();
  }
});
