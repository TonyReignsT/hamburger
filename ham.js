const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Activating X and the menu

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// Closing the navigation bar

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));