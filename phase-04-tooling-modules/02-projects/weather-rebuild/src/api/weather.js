async function getCoordinates(city) {
  const encodedCity = encodeURIComponent(city);
  const api = `https://geocoding-api.open-meteo.com/v1/search?name=${encodedCity}&count=1&language=en&format=json`;

  try {
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      throw new Error("City not found");
    }
    return data.results[0];
  } catch (error) {
    throw error;
  }
}

async function getWeather(latitude, longitude) {
  const api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;

  try {
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchWeather(city) {
  // get coordinates first

  const location = await getCoordinates(city);
  const weather = await getWeather(location.latitude, location.longitude);

  return {
    city: location.name,
    temperature: weather.current.temperature_2m,
    humidity: weather.current.relative_humidity_2m,
    weatherCode: weather.current.weather_code,
    wind: weather.current.wind_speed_10m,
  };
}
