export function throttle(callback, delay) {
  let canRun = true;

  return function () {
    if (canRun) {
      callback();
      canRun = false;
      setTimeout(() => {
        canRun = true;
      }, delay);
    }
  };
}
