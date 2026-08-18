const STORAGE_KEY = "github-country-explorer:last-result";

const aboutButton = document.querySelector("#about");
const resultContainer = document.querySelector("#results");
const status = document.querySelector("#status");
const userResults = document.querySelector("#user-results");
const countryResults = document.querySelector("#country-results");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");
const clearButton = document.querySelector("#clear-btn");
const usernamePlaceholder = document.querySelector("#username");
const namePlaceholder = document.querySelector("#name");
const bioPlaceholder = document.querySelector("#bio");
const avatarPlaceholder = document.querySelector("#avatar");
const locationPlaceholder = document.querySelector("#p-location");
const followersPlaceholder = document.querySelector("#followers");
const followingPlaceholder = document.querySelector("#following");
const repositoriesPlaceholder = document.querySelector("#repositories");
const countryName = document.querySelector("#country");
const countryCapital = document.querySelector("#capital-city");
const countryPopulation = document.querySelector("#population");
const countryRegion = document.querySelector("#region");

let hasSearchResult = false;
let aboutIsOpen = false;

function setStatus(message = "", type = "loading") {
  status.textContent = message;
  status.dataset.state = type;
}

function formatNumber(value) {
  return value === null || value === undefined
    ? "Not available"
    : new Intl.NumberFormat().format(value);
}

function displayUser(user) {
  usernamePlaceholder.textContent = `GitHub username: ${user.login}`;
  namePlaceholder.textContent = `Name: ${user.name ?? "Not provided"}`;
  bioPlaceholder.textContent = `Bio: ${user.bio ?? "Not provided"}`;
  avatarPlaceholder.src = user.avatar_url;
  avatarPlaceholder.alt = `${user.login}'s GitHub avatar`;
  locationPlaceholder.textContent = `Location: ${user.location ?? "Not specified"}`;
  locationPlaceholder.style.color = user.location ? "#bcadfb" : "tomato";
  followersPlaceholder.textContent = `${user.followers} Followers`;
  followingPlaceholder.textContent = `${user.following} Following`;
  repositoriesPlaceholder.textContent = `${user.public_repos} Repositories`;
  userResults.hidden = false;
}

function displayCountry(country) {
  if (!country) {
    countryResults.hidden = true;
    return;
  }

  countryName.textContent = `Country: ${country.name}`;
  countryCapital.textContent = `Capital: ${country.capital}`;
  countryPopulation.textContent = `Population: ${formatNumber(country.population)}`;
  countryRegion.textContent = `Region: ${country.region}`;
  countryResults.hidden = false;
}

function clearDisplayedResults() {
  userResults.hidden = true;
  countryResults.hidden = true;
  status.textContent = "";
}

function saveResult(user, country) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, country }));
}

function restoreSavedResult() {
  try {
    const savedResult = localStorage.getItem(STORAGE_KEY);

    if (!savedResult) {
      return;
    }

    const { user, country } = JSON.parse(savedResult);

    if (!user?.login) {
      throw new Error("Invalid saved result");
    }

    displayUser(user);
    displayCountry(country);
    hasSearchResult = true;
    resultContainer.hidden = false;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function showSearchResults() {
  aboutIsOpen = false;
  aboutButton.setAttribute("aria-expanded", "false");
  resultContainer.replaceChildren(status, userResults, countryResults);
  resultContainer.hidden = !hasSearchResult && !status.textContent;
}

function createAboutContent() {
  const aboutContent = document.createElement("div");
  aboutContent.className = "about-content";

  const heading = document.createElement("h2");
  heading.textContent = "About GitHub + Country Explorer";

  const description = document.createElement("p");
  description.textContent =
    "Search a public GitHub profile, then use its location to find country information. " +
    "A city location such as New York City is resolved to its country before country data is displayed. " +
    "The latest successful result is saved in this browser.";

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/sadikbaba";
  githubLink.textContent = "Visit SadikBaba's GitHub profile";
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";

  aboutContent.append(heading, description, githubLink);
  return aboutContent;
}

const aboutContent = createAboutContent();

aboutButton.addEventListener("click", () => {
  if (aboutIsOpen) {
    showSearchResults();
    return;
  }

  aboutIsOpen = true;
  aboutButton.setAttribute("aria-expanded", "true");
  resultContainer.replaceChildren(aboutContent);
  resultContainer.hidden = false;
});

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  hasSearchResult = false;
  localStorage.removeItem(STORAGE_KEY);
  clearDisplayedResults();
  resultContainer.hidden = true;
  searchInput.focus();
});

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = searchInput.value.trim();

  if (!username) {
    return;
  }

  if (aboutIsOpen) {
    showSearchResults();
  }

  hasSearchResult = false;
  clearDisplayedResults();
  resultContainer.hidden = false;
  setStatus("Loading profile and location data...", "loading");
  searchButton.disabled = true;
  clearButton.disabled = true;

  try {
    const user = await getUserFromGithub(username);

    displayUser(user);
    hasSearchResult = true;
    setStatus("Finding country information...", "loading");

    let country = null;

    if (user.location) {
      try {
        country = await getCountryInfo(user.location);
      } catch (error) {
        setStatus(`Profile found. Country details unavailable: ${error.message}`, "error");
      }
    }

    displayCountry(country);

    if (!country && !status.textContent.includes("unavailable")) {
      setStatus("Profile found. Country details are unavailable for this location.", "notice");
    } else if (country) {
      setStatus();
    }

    saveResult(user, country);
  } catch (error) {
    clearDisplayedResults();
    setStatus(error.message, "error");
  } finally {
    searchButton.disabled = false;
    clearButton.disabled = false;
    searchInput.value = "";
  }
});

restoreSavedResult();
