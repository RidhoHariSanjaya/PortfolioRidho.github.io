document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('.menu');
  const humbergerMenu = document.querySelector('.humberger-menu');
  const iconBars = document.querySelector('.icon-bars');
  const iconClose = document.querySelector('.icon-close');

  humbergerMenu.addEventListener('click', toggleMenu);

  function toggleMenu() {
    if (menu.classList.contains('tampil')) {
      menu.classList.remove('tampil');
      iconBars.style.display = 'inline';
      iconClose.style.display = 'none';
    } else {
      menu.classList.add('tampil');
      iconBars.style.display = 'none';
      iconClose.style.display = 'inline';
    }
  }
});

anime({
  targets: '.underline-link',
  translateX: 250,
  autoplay: true,
  easing: 'easeInOutSine'
});