// TODO: increment and decrement the count when the buttons are clicked
// Initialize the count variable
let count = 0;

// Get references to the counter display and buttons
const counter = document.querySelector('#count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// Add event listeners to the buttons
incrementButton.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

decrementButton.addEventListener('click', () => {
    count--;
    counter.textContent = count;
});

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
