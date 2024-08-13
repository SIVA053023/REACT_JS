import { createPopper } from '@popperjs/core';

// Get the button and dropdown menu elements
const button = document.getElementById('dropdownButton');
const menu = document.getElementById('dropdownMenu');

// Create the popper instance
const popperInstance = createPopper(button, menu, {
    placement: 'bottom-start', // Dropdown will appear below the button
});

// Toggle dropdown menu visibility on button click
button.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        popperInstance.update(); // Ensure the dropdown is positioned correctly
    } else {
        menu.style.display = 'none';
    }
});

// Optional: Hide the dropdown menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = 'none';
    }
});
