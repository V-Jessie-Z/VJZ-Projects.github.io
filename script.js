document.addEventListener('DOMContentLoaded', function() {
    // Toggle hamburger menu on click
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');
  
    hamburgerIcon.addEventListener('click', function() {
      hamburgerIcon.classList.toggle('open');
      menuLinks.classList.toggle('open');
    });
  
    // Close hamburger menu when a menu link is clicked
    const navLinks = document.querySelectorAll('.menu-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburgerIcon.classList.remove('open');
        menuLinks.classList.remove('open');
      });
    });
  });
  