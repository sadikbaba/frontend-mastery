# GitHub + Country Explorer

A vanilla JavaScript app that searches public GitHub profiles and displays country information based on the profile's location.

## What it does

1. Searches the [GitHub Users API](https://docs.github.com/en/rest/users/users#get-a-user).
2. Sends the profile location to the [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api), which resolves a city or country name to an ISO country code.
3. Uses the no-key [World Bank Indicators API](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392) to retrieve the country name, capital, region, and latest available total-population estimate.
4. Saves the last successful search in `localStorage` and restores it when the page reloads.

The app uses `async`/`await` for the sequential profile/location flow and `Promise.all()` for the independent World Bank metadata and population requests.

## Run locally

Open `index.html` with a local development server, such as the VS Code Live Server extension. Do not open the file directly with `file://`, because browser requests to APIs can be blocked in that context.

## Error states handled

- Empty search input
- GitHub user not found
- GitHub rate limit
- Network failure
- No GitHub location
- A location that cannot be resolved to a country
- Missing population data
- Invalid saved browser data

## Important limitation

GitHub's `location` field is free text. A user can enter a city, a country, an ambiguous place, or any text at all. The app uses the first matching result from Open-Meteo, so a location can occasionally resolve to an unintended country. This is a limitation of the input data, not a guaranteed geographic address.

## Project structure

```text
04-github-api/
├── index.html    # Page structure and accessible status regions
├── styles.css    # Responsive styling
├── api.js        # GitHub, geocoding, and World Bank requests
├── dom.js        # Rendering, UI state, events, and localStorage cache
└── README.md     # Project documentation
```

## Why this app does not use REST Countries v3

REST Countries v3 is deprecated. Its maintained API is v5 and requires authorization, so this app uses Open-Meteo and the World Bank's public no-key APIs instead. See the [REST Countries version documentation](https://restcountries.com/docs/countries/api-versions).
