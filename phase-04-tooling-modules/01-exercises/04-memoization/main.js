const input = document.querySelector("#input");
const output = document.querySelector("#output");

import { memoizedSquare } from "./memoize.js";

input.addEventListener("input", () => {
  if (input.value === "") {
    output.textContent = "";
    return;
  }

  
  const number = parseInt(input.value);
  output.textContent = memoizedSquare(number);
});
