// GitHub user data we need:
// login;
// name;
// bio;
// avatar_url;
// public_repos;
// followers;
// following;
// location;

// Fetch GitHub user information using their username.
async function getUserFromGithub(username) {
  const API = `https://api.github.com/users/${username}`;

  try {
    const response = await fetch(API);

    // Check whether the request was successful.
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Convert the response from JSON into a JavaScript object.
    const data = await response.json();

    // Return the GitHub user data to the caller.
    return data;
  } catch (error) {
    // Pass the error to the code that called this function.
    throw error;
  }
}

// Country data we need:
// name;
// capital;
// population;
// region;




// Fetch country information using the country name.
async function getCountryInfo(country) {
  const API = `https://restcountries.com/v3.1/name/${country}`;

  try {
    const response = await fetch(API);

    // Check whether the request was successful.
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Convert the response from JSON into a JavaScript object.
    const data = await response.json();

    // Return the country data to the caller.
    return data;
  } catch (error) {
    // Pass the error to the code that called this function.
    throw error;
  }
}

// API flow:
//
//             GitHub API
//                 ↓
//          Search username
//                 ↓
//       Get user's location
//                 ↓
//              "Nigeria"
//                 ↓
//          REST Countries
//                 ↓
//    Get country information
