let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello from Promise!");
    //    reject("Error from Promise!");
  }, 2000);
});

p.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});

function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from Promise!");
    }, 5000);
  });
}

async function start() {
  console.log("Waiting...");

  const result = await waitTwoSeconds(); // waits here
  console.log(result); // "Hello from Promise!"

  console.log("Finished!");
}

start();

// exercise
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;

      if (success) {
        resolve("Data received!");
      } else {
        reject("Failed to get data");
      }
    }, 1500);
  });
}

// Convert this part to async/await
getData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// coverting done
async function start_() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

start_();

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Change to true or false to test
      const success = false;

      if (success) {
        resolve("Data received!");
      } else {
        reject("Failed to get data");
      }
    }, 1500);
  });
}

async function start() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

start();
