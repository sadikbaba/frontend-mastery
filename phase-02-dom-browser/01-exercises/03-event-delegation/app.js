const list = document.querySelector("#list");

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log(" You clicked:", event.target.textContent);
    event.target.style.color = "tomato";
  }
});
