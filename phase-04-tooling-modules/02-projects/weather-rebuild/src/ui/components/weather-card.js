export function createWeatherCard(
  city,
  temperature,
  description,
  humidity,
  wind,
) {
  const card = document.createElement("div");
  card.classList.add("weather-card");

  const h2 = document.createElement("h2");
  h2.textContent = city;
  card.appendChild(h2);

  const p = document.createElement("p");
  p.classList.add("temperature");
  p.textContent = `${temperature}°C`;
  card.appendChild(p);

  const p2 = document.createElement("p");
  p2.classList.add("description");
  p2.textContent = description;
  card.appendChild(p2);

  const details = document.createElement("dl");
  details.classList.add("weather-details");
  for (const [label, value] of [
    ["Humidity", `${humidity}%`],
    ["Wind speed", `${wind} km/h`],
  ]) {
    const item = document.createElement("div");
    const term = document.createElement("dt");
    term.textContent = label;
    const detail = document.createElement("dd");
    detail.textContent = value;
    item.append(term, detail);
    details.appendChild(item);
  }
  card.appendChild(details);

  return card;
}
