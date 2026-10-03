import { throttle } from "./throttle.js";

const countElement = document.getElementById("count");
let count = 0;

const throttledScroll = throttle(() => {
  // increase count
  count++;
  // update screen
  countElement.textContent = count;
  
}, 1000);

window.addEventListener("scroll", throttledScroll);
