// 1. SELECT DOM ELEMENTS
const form = document.querySelector("#weather-form");
const input = document.querySelector("#wether-id");

// Get data from API
async function getData(latitude, longitude) {
  const API = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  try {
    const response = await fetch(API);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

// get locaion
async function getLocation(city) {
  const encodedCity = encodeURIComponent(city);
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodedCity}`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Local storage
function getLocalStorage() {
  return localStorage.getItem("result");
}

// Result helper
function resultHelper() {
  let div = form.querySelector(".result");

  if (!div) {
    div = document.createElement("div");
    div.classList.add("result");
    form.appendChild(div);
  }

  return div;
}

// Submit
form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const city = input.value.trim();

  if (city === "") return;

  const div = resultHelper();

  div.textContent = "Loading...";
  div.style.color = "black";

  try {
    // location
    const location = await getLocation(city);
    if (!location.results || location.results.length === 0) {
      throw new Error("City not found");
    }

    const result = location.results[0];
    const latitude = result.latitude;
    const longitude = result.longitude;

    // weather

    const data = await getData(latitude, longitude);
    const formattedCity =
      city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

    div.textContent = `${result.name} temperature: ${data.current_weather.temperature}°C`;
    div.style.color = "green";

    localStorage.setItem(
      "result",
      JSON.stringify({
        city: result.name,
        weather: data,
      }),
    );
  } catch (error) {
    div.textContent = "Error: " + error.message;
    div.style.color = "red";
  }

  input.value = "";
});

// Init
function init() {
  const savedResult = getLocalStorage();

  if (savedResult) {
    const data = JSON.parse(savedResult);

    const div = resultHelper();

    div.textContent = `${data.city} temperature: ${data.weather.current_weather.temperature}°C`;
    div.style.color = "green";
  }
}

init();
