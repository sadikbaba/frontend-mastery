
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const countElement = document.getElementById('count');

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