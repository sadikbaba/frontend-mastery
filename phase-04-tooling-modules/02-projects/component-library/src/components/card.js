export function createCard(title, text) {
  const card = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.textContent = title;

  const p = document.createElement("p");
  p.textContent = text;

  card.appendChild(h3);
  card.appendChild(p);

  return card;
}
