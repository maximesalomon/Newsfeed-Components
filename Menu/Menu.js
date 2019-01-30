TweenMax.to('.menu', 0, {x:-400});

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
  TweenMax.to('.menu', 2, {x:0});
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// Close Menu
const closeMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
}

const title = document.querySelector('h1');

title.addEventListener('click', closeMenu);