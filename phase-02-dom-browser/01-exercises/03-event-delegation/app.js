const list = document.querySelector("#list");
const newItem = document.createElement("li");
newItem.textContent = "Grapes";
list.appendChild(newItem);


list.addEventListener("click", function (event) {

  event.preventDefault();
  const item = event.target;

  
  if (item.tagName === "LI") {
    console.log(" You clicked:", item.textContent);
    item.style.color = "tomato";
  }
});
