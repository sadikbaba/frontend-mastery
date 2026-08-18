async function fetchJson(url, serviceName) {
  let response;

  try {
    response = await fetch(url);
  } catch {
    throw new Error(
      `${serviceName} could not be reached. Check your internet connection.`,
    );
  }

  if (!response.ok) {
    if (serviceName === "GitHub" && response.status === 404) {
      throw new Error("GitHub user not found.");
    }

    if (serviceName === "GitHub" && response.status === 403) {
      throw new Error("GitHub API rate limit reached. Please try again later.");
    }

    throw new Error(`${serviceName} request failed (HTTP ${response.status}).`);
  }

  try {
    return await response.json();
  } catch {
    throw new Error(`${serviceName} returned invalid data.`);
  }
}

// Fetch a public GitHub profile by its username.
async function getUserFromGithub(username) {
  const encodedUsername = encodeURIComponent(username);
  const url = `https://api.github.com/users/${encodedUsername}`;

  return fetchJson(url, "GitHub");
}

// Resolve a GitHub location (for example, "New York City") to a country, then
// fetch the country metadata and its most recent population estimate.
async function getCountryInfo(location) {
  const encodedLocation = encodeURIComponent(location);
  const geocodingUrl =
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodedLocation}` +
    "&count=1&language=en&format=json";

  const geocodingData = await fetchJson(geocodingUrl, "Location service");
  const matchedLocation = geocodingData.results?.[0];

  if (!matchedLocation?.country_code) {
    return null;
  }

  const countryCode = matchedLocation.country_code;
  const countryUrl = `https://api.worldbank.org/v2/country/${countryCode}?format=json`;
  const populationUrl =
    `https://api.worldbank.org/v2/country/${countryCode}` +
    "/indicator/SP.POP.TOTL?format=json&per_page=1";

  const [countryResponse, populationResponse] = await Promise.all([
    fetchJson(countryUrl, "World Bank"),
    fetchJson(populationUrl, "World Bank"),
  ]);

  const country = countryResponse[1]?.[0];
  const population = populationResponse[1]?.find(
    (record) => record?.value !== null,
  );

  if (!country) {
    return null;
  }

  return {
    name: country.name,
    capital: country.capitalCity || "Not available",
    population: population?.value ?? null,
    region: country.region?.value || "Not available",
  };
}
