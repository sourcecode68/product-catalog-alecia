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
  }, 4000);
}

// nav click
let started=1;
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearInterval(intervalId);
    showSlide(Number(button.dataset.slide));
    if(started==1)  
    startSlideshow();
  });
});

startSlideshow();
// stop button


const startButton = document.querySelector(".stop");
startButton.addEventListener("click", () => {
  if(started==1)
  {
    started=0;
    clearInterval(intervalId);
    showSlide(currentIndex);
    startButton.textContent = "Play";
    startButton.style.backgroundColor = "green";

  }
  else if(started==0)
  {
  started=1;
  currentIndex=(currentIndex+1)% slides.length;
  showSlide(currentIndex);
  startSlideshow();
  startButton.textContent = "Pause";
  startButton.style.backgroundColor = "red";
  }
});

const prevButton=document.querySelector(".prev");

const nextButton=document.querySelector(".next");

prevButton.addEventListener("click", () => {
  if(currentIndex==0)
  {
    currentIndex=slides.length-1;
    showSlide(currentIndex);
  }
  else{

    currentIndex=(currentIndex-1)% slides.length;
    showSlide(currentIndex);
  }
  
  });



nextButton.addEventListener("click", () => {
    currentIndex=(currentIndex+1)% slides.length;
    showSlide(currentIndex);
  
  
  });













  // Image click for modal with alternate image
document.querySelectorAll('.product-grid img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.getElementById('imgModal');
        const modalImg = document.getElementById('modalImg');
        modal.style.display = 'block';
        modalImg.src = this.dataset.large || this.src;
    });
});



function closeModal() {
    document.getElementById('imgModal').style.display = 'none';
}