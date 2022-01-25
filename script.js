const nav = document.querySelector('.navbar');
const navToggle = document.querySelector('.navbar-menu-toggle');
const backdrop = document.querySelector('.backdrop');

navToggle.addEventListener('click', function () {
  const isOpen = nav.getAttribute('data-visible');
  if (isOpen === 'false') {
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

window.addEventListener('keydown', function (e) {
  if (!nav.getAttribute('data-visibility') && e.key === 'Escape') {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

backdrop.addEventListener('click', function () {
  if (!nav.getAttribute('data-visibility')) {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});
