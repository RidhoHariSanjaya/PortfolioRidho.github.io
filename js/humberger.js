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

document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.humberger-menu');
  const menu = document.querySelector('.menu');

  menuButton.addEventListener('click', function() {
    menu.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.menu a');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

anime({
  targets: '.underline-link',
  translateX: 250,
  autoplay: true,
  easing: 'easeInOutSine'
});
