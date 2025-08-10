const slides = document.querySelectorAll(".slide");
const navButtons = document.querySelectorAll(".slide-nav button");

let currentIndex = 0;
let intervalId;

// show slide
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  currentIndex = index;
}

// autoplay
function startSlideshow() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 3000);
}

// nav click
navButtons.forEach(button => {
  button.addEventListener("click", () => {
    clearInterval(intervalId);
    showSlide(Number(button.dataset.slide));
    startSlideshow();
  });
});

startSlideshow();
