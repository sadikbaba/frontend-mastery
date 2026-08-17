const controller = new AbortController();

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    signal: controller.signal,
  });

  return response.json();
}

try {
  const promise = getData();

  setTimeout(() => {
    controller.abort();
  }, 5000);

  const data = await promise;

  console.log(data);
} catch (error) {
  console.log(error);
}
