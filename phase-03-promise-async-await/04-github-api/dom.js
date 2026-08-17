// =========================
// About Section
// =========================

// Get the About button and results container.
const aboutButton = document.querySelector("#about");
const resultContainer = document.querySelector("#results");

// Create the About heading.
const heading = document.createElement("h2");
heading.textContent = "About GitHub + Country Explorer";

// Create the About description.
const paragraph = document.createElement("p");

paragraph.textContent =
  "Welcome to GitHub + Country Explorer a powerful tool to search and explore GitHub profiles alongside country information. This application allows you to search for any GitHub user and view useful information about their profile, repositories, followers, following, and location.\n\n" +
  "The application also uses the user's profile location to explore information about their country, including its capital city, population, and region. This gives you a simple way to connect developer information with geographical information.\n\n" +
  "Built with modern web technologies, GitHub + Country Explorer fetches real-time data from public APIs, allowing the application to display up-to-date information whenever you perform a search.\n\n" +
  "This project was created by Sadik Baba as a demonstration of web development skills, DOM manipulation, API integration, asynchronous JavaScript, and responsive web design.\n\n" +
  "The goal of this project is to combine two different sources of information into one simple and useful experience.";

// Create the GitHub profile link.
const githubLink = document.createElement("a");

githubLink.href = "https://github.com/sadikbaba";
githubLink.textContent = "Visit SadikBaba GitHub Profile";
githubLink.target = "_blank";
githubLink.rel = "noopener noreferrer";

// Save the original result elements so they can be restored later.
const originalMainContent = Array.from(resultContainer.children);

// Create the About container.
const aboutText = document.createElement("div");
aboutText.classList.add("about-content");

// Add the About elements to the container.
aboutText.append(heading, paragraph, githubLink);

// Toggle between the search results and About information.
aboutButton.addEventListener("click", function () {
  if (resultContainer.contains(aboutText)) {
    // Restore the original search results.
    resultContainer.replaceChildren(...originalMainContent);
  } else {
    // Show the About information.
    resultContainer.replaceChildren(aboutText);
  }
});

// =========================
// search-form
// =========================

// Get the search form elements.
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

// country-results
const countryName = document.querySelector("#country");
const countryCapital = document.querySelector("#capital-city");
const countryPopulation = document.querySelector("#population");
const countryRegion = document.querySelector("#region");

// status
const status = document.querySelector("#status");

// Clear the search input and username placeholder.
clearButton.addEventListener("click", function () {
  searchInput.value = "";
  usernamePlaceholder.textContent = "";
  resultContainer.replaceChildren("");
});

// Add an event listener to the search form.
searchForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  status.textContent = "Loading...";
  status.style.color = "#b5a5ff";

  const username = searchInput.value.trim();
  if (username === "") {
    return;
  }

  try {
    const user = await getUserFromGithub(username);

    if (!user) {
      throw new Error("User not found");
    }

    usernamePlaceholder.textContent = `Full Name: ${user.login}`; //user.login;
    namePlaceholder.textContent = `Name: ${user.name}`; //user.name;
    bioPlaceholder.textContent = `Bio: ${user.bio}`; //user.bio;
    avatarPlaceholder.src = user.avatar_url;

    // Update the location, followers, following, and repositories
    if (user.location) {
      locationPlaceholder.textContent = `Location: ${user.location}`;
      locationPlaceholder.style.color = "#bcadfb";
    } else {
      locationPlaceholder.textContent = "Location: Not specified";
      locationPlaceholder.style.color = "tomato";
    }
    followersPlaceholder.textContent = `${user.followers} Followers`;
    followingPlaceholder.textContent = `${user.following} Following`;
    repositoriesPlaceholder.textContent = `${user.public_repos} Repositories`;

    resultContainer.replaceChildren(...originalMainContent);

    // Fetch country information

    // Country data we need:
    // name;
    // capital;
    // population;
    // region;
    const country = await getCountryInfo(user.location);
    if (!country) {
      throw new Error("Country not found");
    }

    console.log(country);

    const countryIndex = country[0];

    console.log(countryIndex);

    countryName.textContent = `Country: ${countryIndex.name}`;
    countryCapital.textContent = `Capital: ${countryIndex.capital}`;
    countryPopulation.textContent = `Population: ${countryIndex.population}`;
    countryRegion.textContent = `Region: ${countryIndex.region}`;

    // Update the location, followers, following, and repositories
  } catch (error) {
    status.textContent = "ERROR: " + error.message;
    status.style.color = "red";
  }

  searchInput.value = "";
  status.textContent = "";
});
