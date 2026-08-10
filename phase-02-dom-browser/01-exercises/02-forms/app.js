const form = document.querySelector("form");
const input = document.querySelector("#name");
const output = document.querySelector("#output");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = input.value.trim();

  if (name === "") {
    output.textContent = "Please enter your name";
    return;
  }
  output.textContent = `Hello, ${name}`;
});
