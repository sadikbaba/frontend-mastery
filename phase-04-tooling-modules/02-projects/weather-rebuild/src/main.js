import { fetchWeather } from "./api/weather.js";
import { renderStatus, renderWeatherResult, clearStatus } from "./ui/render.js";
import { formatWeatherCode } from "./utils/format.js";
import { loadWeather, saveWeather } from "./utils/storage.js";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

const savedWeather = loadWeather();
if (savedWeather) {
  renderWeatherResult(
    savedWeather.city,
    savedWeather.temperature,
    formatWeatherCode(savedWeather.weatherCode),
    savedWeather.humidity,
    savedWeather.wind,
  );
  renderStatus("Showing your last saved weather. Search again for the latest conditions.");
}

searchForm.addEventListener("submit", async (event) => {
  // 1. prevent page refresh

  event.preventDefault();

  // 2. get city from searchInput and trim it
  const city = searchInput.value.trim();

  // 3. if city is empty:
  if (city === "") {
    renderStatus("Enter a city name");
    return;
  }

  // 4. renderStatus("Loading...")
  renderStatus("Loading...");

  try {
    // 5. await fetchWeather(city)

    const weather = await fetchWeather(city);
    const weatherCode = weather.weatherCode;

    // 6. convert weather.weatherCode using formatWeatherCode()

    const description = formatWeatherCode(weatherCode);

    // 7. renderWeatherResult(
    //      city,
    //      temperature,
    //      description,
    //      humidity,
    //      wind
    //    )
    renderWeatherResult(
      weather.city,
      weather.temperature,
      description,
      weather.humidity,
      weather.wind,
    );

    // 8. clearStatus()
    saveWeather(weather);
    searchInput.value = "";
    clearStatus();
  } catch (error) {
    // 9. renderStatus(error.message)
    renderStatus(error.message);
  }
});
