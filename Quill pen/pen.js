// JavaScript to toggle the display of the menu on small screens
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
    
    // Add an event listener to the document body to close the menu on outside click or tap
    document.body.addEventListener('click', function (event) {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            // Check if the clicked element is NOT part of the navigation menu or hamburger icon
            navLinks.classList.remove('show'); // Close the menu
        }
    });

    // Prevent clicks inside the navigation menu from closing it
    navLinks.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from reaching the body click event
    });
    
    // Add touchstart event for mobile devices to close the menu on tap anywhere on the body
    document.body.addEventListener('touchstart', function (event) {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove('show'); // Close the menu on tap
        }
    });
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");




