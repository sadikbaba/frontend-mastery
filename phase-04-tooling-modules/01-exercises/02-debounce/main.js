import { debounce } from "./debounce.js";

const input = document.getElementById("input");
const output = document.getElementById("output");

const updateOutput = debounce(() => {
  output.textContent = input.value;
}, 300);

input.addEventListener("input", updateOutput);
