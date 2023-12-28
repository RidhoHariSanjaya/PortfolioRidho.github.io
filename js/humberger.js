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
  translateX: 600,
  autoplay: true,
  easing: 'easeInOutSine'
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzIyb1ouWooGQOucALsJosRXbU1CnjVVJowkIMd74chOm8M2ogi7KU5tryiQIadA4s/exec';
const form = document.forms['ridho-form-contact'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});