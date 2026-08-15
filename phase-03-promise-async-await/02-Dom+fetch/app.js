const btn = document.querySelector("#btn");

const displaydata = document.querySelector("#result");

async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

btn.addEventListener("click", async () => {
  displaydata.textContent = "Loading...";

  try {
    const result = await getData();
    displaydata.textContent = result.title;
  } catch (error) {
    displaydata.textContent = "ERROR: " + error.message;
  }
});

// another version of the code

const btn2 = document.querySelector("#btn-2");
const resultDiv = document.querySelector("#result-2");

async function getTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error; // pass the error to the caller
  }
}

btn2.addEventListener("click", async () => {
  // 1. Loading state
  resultDiv.textContent = "Loading...";
  resultDiv.style.color = "black";

  try {
    // 2. Success state
    const data = await getTodo();
    resultDiv.textContent = data.title;
    resultDiv.style.color = "green";
  } catch (error) {
    // 3. Error state
    resultDiv.textContent = "Error: " + error.message;
    resultDiv.style.color = "red";
  }
});
