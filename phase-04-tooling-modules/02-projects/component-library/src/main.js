import { createButton } from "./components/button.js";
import { createBadge } from "./components/badge.js";
import { createCard } from "./components/card.js";

function sayHello() {
  alert("Hello World!");
}

const saveButton = createButton("Save", sayHello);
const badge = createBadge("this is a badge");
const secondBadge = createBadge("Featured");
const card = createCard("Title", "This is a card");
const secondCard = createCard(
  "Frontend",
  "Reusable UI components with vanilla JavaScript",
);

//appending the elements to the body
document.body.appendChild(saveButton);
document.body.appendChild(badge);
document.body.appendChild(card);
document.body.appendChild(secondBadge);
document.body.appendChild(secondCard);