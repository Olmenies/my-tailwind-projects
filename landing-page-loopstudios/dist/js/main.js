const btn = document.getElementById('hamburgerButton');
const menu = document.getElementById('hamburgerMenu');
addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}
