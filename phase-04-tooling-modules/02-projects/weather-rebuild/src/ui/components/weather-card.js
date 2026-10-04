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
  p.textContent = `temperature: ${temperature}°C`;
  card.appendChild(p);

  const p2 = document.createElement("p");
  p2.textContent = `description: ${description}`;
  card.appendChild(p2);

  const p3 = document.createElement("p");
  p3.textContent = `humidity: ${humidity}%`;
  card.appendChild(p3);

  const p4 = document.createElement("p");
  p4.textContent = `wind: ${wind} km/h`;
  card.appendChild(p4);

  return card;
}
