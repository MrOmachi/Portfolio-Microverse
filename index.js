let closeX = document.getElementById('closeX');
let menu = document.getElementById('menu');
let hamburger = document.getElementById('hamburger');
let menu1 = document.getElementById("menu-link1");
let menu2 = document.getElementById("menu-link2");
let menu3 = document.getElementById("menu-link3");

[closeX, menu, hamburger].forEach((elements) => {
  elements.addEventListener('click', function () {
    menu.classList.toggle("hidden");
    closeX.classList.toggle("hidden");
    hamburger.classList.toggle('hidden');
  });
}) 
