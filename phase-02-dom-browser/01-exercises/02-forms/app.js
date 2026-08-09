const input = document.querySelector("#nameInput");
const output = document.querySelector("#output");

input.addEventListener("input", function () {
  const name = input.value.trim();

  if (name === "") {
    output.textContent = "Hello stranger";
  } else {
    output.textContent = "Hello, " + name;
  }
});
