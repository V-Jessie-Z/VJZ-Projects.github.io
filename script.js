function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('DOMContentLoaded', () => {
  // NAV TOGGLE LOGIC
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('header nav ul');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // SLIDER LOGIC
  const sliders = document.querySelectorAll('.slider-container');

  sliders.forEach(slider => {
    let currentIndex = 0;
    const images = slider.querySelectorAll('.slider-image');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');

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

    showSlide(currentIndex);
  });
});


  