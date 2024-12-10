const slider = document.querySelector(".mainphotos");
const prevButton = document.querySelector(".prev__button");
const nextButton = document.querySelector(".next__button");
const slides = Array.from(slider.querySelectorAll("img"));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

updateSlider();

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger_menu");
  const logoText3 = document.querySelector(".logo-text3");

  burgerMenu.addEventListener("click", () => {
    logoText3.classList.toggle("active");
  });
});
