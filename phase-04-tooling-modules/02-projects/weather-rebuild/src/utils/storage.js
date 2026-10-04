const STORAGE_KEY = "weather-rebuild:last-weather";

function isWeather(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    typeof value.city === "string" &&
    value.city.trim().length > 0 &&
    ["temperature", "humidity", "weatherCode", "wind"].every((key) =>
      Number.isFinite(value[key]),
    )
  );
}

export function loadWeather() {
  try {
    const weather = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return isWeather(weather) ? weather : null;
  } catch {
    return null;
  }
}

export function saveWeather(weather) {
  try {
    if (isWeather(weather)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(weather));
    }
  } catch {
    // Weather searches still work when browser storage is unavailable or full.
  }
}
