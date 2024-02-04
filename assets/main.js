
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.slider');
  let counter = 0;

  function nextSlide() {
    counter++;
    if (counter === slider.children.length) {
      counter = 0;
    }
    updateSlider();
  }

  function prevSlide() {
    counter--;
    if (counter < 0) {
      counter = slider.children.length - 1;
    }
    updateSlider();
  }

  function updateSlider() {
    const percentage = -counter * 100;
    slider.style.transform = `translateX(${percentage}%)`;
  }

  // Agrega eventos para los botones de siguiente y anterior
  document.querySelector('#nextBtn').addEventListener('click', nextSlide);
  document.querySelector('#prevBtn').addEventListener('click', prevSlide);

  // Configuración de la reproducción automática
  const autoPlay = true;
  const intervalTime = 5000; // Cambia esto para ajustar la velocidad de reproducción automática

  if (autoPlay) {
    setInterval(nextSlide, intervalTime);
  }
});

 

document.addEventListener('DOMContentLoaded', function() {
  var headerUp = document.querySelector('.header-up');
  var headerDown = document.querySelector('.header-down');
  var firstDiv = document.querySelector('body > div');
  var lastScrollTop = 0;

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function updateHeaderVisibility() {
      var scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop || scrollTop > 100 ) {
          // Scrolling hacia abajo
          if (isElementInViewport(firstDiv)) {
              headerUp.style.top = '-100px';
              headerDown.style.top = '0';
          } else {
              headerUp.style.top = '0';
              headerDown.style.top = '0';
          }
      } else {
          // Scrolling hacia arriba
          if (isElementInViewport(firstDiv)) {
              headerUp.style.top = '0';
              headerDown.style.top = '-100px';
          } else {
              headerUp.style.top = '0';
              headerDown.style.top = '0';
          }
      }

      lastScrollTop = scrollTop;
  }

  window.addEventListener('scroll', function() {
      updateHeaderVisibility();
  });

  window.addEventListener('resize', function() {
      updateHeaderVisibility();
  });

  // Llamada inicial para ajustar el estado del encabezado según la posición inicial
  updateHeaderVisibility();
});

