document.addEventListener("DOMContentLoaded", function () {
  const LeftSections = document.querySelectorAll('.leftSlide');
  const RightSections = document.querySelectorAll('.rightSlide');


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
});

LeftSections.forEach(section => {
  observer.observe(section);
});

RightSections.forEach(section => {
  observer.observe(section);
});

});


// remove class in-view when element is not in view

// Path: js/experience.js
document.addEventListener("DOMContentLoaded", function () {
  const LeftSections = document.querySelectorAll('.leftSlide');
  const RightSections = document.querySelectorAll('.rightSlide');


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove('in-view');
    }
  });
});

LeftSections.forEach(section => {
  observer.observe(section);
});

RightSections.forEach(section => {
  observer.observe(section);
});

});