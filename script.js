
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

 // Attach event listeners only after DOM is loaded
  window.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(slider => {
      let currentIndex = 0;
      const images = slider.querySelectorAll('.slider-image');
      const prevBtn = slider.querySelector('.prev');
      const nextBtn = slider.querySelector('.next');
      const navToggle = document.querySelector('.nav-toggle');
      const navMenu = document.querySelector('header nav ul');

       navToggle.addEventListener('click', () => {
       navMenu.classList.toggle('show');
     });

      function showSlide(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
      }

      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex);
      });

      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
      });

      // Show first slide by default
      showSlide(currentIndex);
    });
  });

  