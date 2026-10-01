export function startApp () {

const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const countElement = document.getElementById('count');
const appName = document.getElementById('app-name');

appName.textContent = import.meta.env.VITE_APP_NAME;

let count = 0;

decrementButton.addEventListener('click', () => {
    count--;
    countElement.innerText = count;
});

incrementButton.addEventListener('click', () => {
    count++;
    countElement.innerText = count;
});

countElement.textContent = count;
}