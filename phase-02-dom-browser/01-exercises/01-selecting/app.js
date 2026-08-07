const title = document.querySelector("#title");
const button = document.querySelector("#btn");

title.textContent = "I control the DOM";
title.style.color = "darkblue";
title.style.fontSize = "28px";

button.style.backgroundColor = "green";
button.style.color = "white";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "16px";

button.style.transition = "background-color 0.3s ease";

button.addEventListener("click", function () {
  console.log("Button was clicked");
  title.textContent = "You clicked the button!";
  title.style.color = "green";
  button.style.backgroundColor = "red";
  button.textContent = " clicked";

  const addParagraph = document.createElement("p");

  addParagraph.textContent = "I was created with JavaScript";
  addParagraph.style.color = "darkblue";

  document.body.appendChild(addParagraph);
});
