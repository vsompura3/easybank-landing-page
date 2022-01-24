const navToggle = document.querySelector('.navbar-menu-toggle');
const nav = document.querySelector('.navbar');
const menu = document.getElementById('primary-navigation');

navToggle.addEventListener('click', function () {
  const visibility = menu.getAttribute('data-visible');
  if (visibility === 'false') {
    nav.classList.add('show');
    menu.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    nav.classList.remove('show');
    menu.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});
