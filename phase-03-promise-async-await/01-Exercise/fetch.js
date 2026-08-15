// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json(); // Convert response to JavaScript object
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// getUsers();

// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1",
//     );

//     if (!response.ok) {
//       throw new Error("Fetch Error");
//     }

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// fetchData();

function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

// async function sequential() {
//   console.time("sequential");

//   await wait(2000);
//   await wait(2000);

//   console.timeEnd("sequential");
// }

// sequential();

async function parallel() {
  console.time("parallel");

  const promise1 = wait(2000);
  const promise2 = wait(2000);

  await promise1;
  await promise2;

  console.timeEnd("parallel");
}

parallel();
