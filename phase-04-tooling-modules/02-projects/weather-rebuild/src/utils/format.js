export function formatWeatherCode(code) {
  if (code === 0) {
    return "Clear sky";
  }

  if (code === 1) {
    return "Mainly clear";
  }

  if (code === 2) {
    return "Partly cloudy";
  }

  if (code === 3) {
    return "Overcast";
  }

  if (code === 45 || code === 48) {
    return "Fog";
  }

  if (code === 51 || code === 53 || code === 55) {
    return "Drizzle";
  }

  if (code === 61 || code === 63 || code === 65) {
    return "Rain";
  }

  if (code === 71 || code === 73 || code === 75) {
    return "Snow";
  }

  if (code === 80 || code === 81 || code === 82) {
    return "Rain showers";
  }

  if (code === 95) {
    return "Thunderstorm";
  }

  return "Unknown weather";
}