let cache = {};

function square(number) {
  console.log("calculating...");
  return number * number;
}

function memoizedSquare(number) {
  if (number in cache) {
    return cache[number];
  }

  const result = square(number);
  cache[number] = result;
  return result;
}

export { memoizedSquare };