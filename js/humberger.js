document.addEventListener('DOMContentLoaded', function() {
  // Menu toggle
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

  // Menu button click
  const menuButton = document.querySelector('.humberger-menu');
  const menuElement = document.querySelector('.menu');

  menuButton.addEventListener('click', function() {
    menuElement.classList.toggle('active');
  });

  // Smooth scroll for menu links
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

  // Anime library animation
  anime({
    targets: '.underline-link',
    translateX: 600,
    autoplay: true,
    easing: 'easeInOutSine'
  });

  // Form submission
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzIyb1ouWooGQOucALsJosRXbU1CnjVVJowkIMd74chOm8M2ogi7KU5tryiQIadA4s/exec';

  // Form submission with SweetAlert
  const formWithAlert = document.getElementById('ridho-form-contact');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const commentTextarea = document.getElementById('comment');

  formWithAlert.addEventListener('submit', function(e) {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(formWithAlert) })
      .then(response => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Pesan berhasil terkirim!',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'custom-alert-popup',
              content: 'custom-alert-content',
              title: 'custom-alert-title'
            }
          }).then(() => {
            // Clear form after successful submission
            nameInput.value = '';
            emailInput.value = '';
            commentTextarea.value = '';
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Gagal mengirim pesan. Silakan coba lagi.'
          });
        }
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Gagal mengirim pesan. Silakan coba lagi.'
        });
        console.error('Error!', error.message);
      });
  });
});