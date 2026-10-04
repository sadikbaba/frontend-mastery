const status = document.getElementById("status");
const weatherResult = document.getElementById("weather-result");

import { createStatusMessage } from "./components/status-message.js";
import { createWeatherCard } from "./components/weather-card.js";

export function renderStatus(text) {
  status.innerHTML = "";
  status.appendChild(createStatusMessage(text));
}

export function renderWeatherResult(
  city,
  temperature,
  description,
  humidity,
  wind,
) {
  weatherResult.innerHTML = "";
  weatherResult.appendChild(
    createWeatherCard(city, temperature, description, humidity, wind),
  );
}

export function clearStatus() {
  status.innerHTML = "";
}
