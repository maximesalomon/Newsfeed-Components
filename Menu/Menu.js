
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
}

// Start Here: Create a reference to the ".menu" class
const menu = document.getElementsByClassName('menu');

// create a reference to the ".menu-button" class
const menuButton = document.getElementsByClassName('menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu

console.log(menuButton[0]);

menuButton[0].addEventListener('click', function(){
  menu[0].classList.toggle('menu--open');
});
