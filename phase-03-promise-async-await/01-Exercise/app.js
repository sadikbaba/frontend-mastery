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
    }, 20000);
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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 1500);
  });
}

// Convert this part to async/await
getData().then((result) => {
  console.log(result);
});

// coverting done 
async function start_() {
  const result = await getData();

  console.log(result);
}


start_();