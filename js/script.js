const navToggle = document.createElement('button');
navToggle.innerText = '☰';
navToggle.id = 'navToggle';
document.querySelector('.header').prepend(navToggle);

const nav = document.querySelector('.header nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.header nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

const slideIndexes = { portfolio: 0, flash: 0 };

function changeSlide(n, containerId) {
  const slides = document.querySelectorAll(`#${containerId} .slide`);
  slideIndexes[containerId] += n;

  if (slideIndexes[containerId] >= slides.length) slideIndexes[containerId] = 0;
  if (slideIndexes[containerId] < 0) slideIndexes[containerId] = slides.length - 1;

  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndexes[containerId] ? 'block' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  ['portfolio', 'flash'].forEach(containerId => {
    const slides = document.querySelectorAll(`#${containerId} .slide`);
    slides.forEach((slide, index) => {
      slide.style.display = index === 0 ? 'block' : 'none';
    });
  });
});
