const closeX = document.getElementById('closeX');
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');

[closeX, menu, hamburger].forEach((elements) => {
  elements.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    closeX.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
  });
});
