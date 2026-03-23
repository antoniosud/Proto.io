const track = document.getElementById("track");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const slides = Array.from(track.children);
const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;

const updateSlide = (index) => {
  const width = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * width}px)`;

  // Update indicators
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
  });
};

const goToSlide = (index) => {
  currentIndex = index;
  updateSlide(currentIndex);
};

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(currentIndex);
});

// Indicator click handlers
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => goToSlide(index));
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevBtn.click();
  } else if (e.key === "ArrowRight") {
    nextBtn.click();
  }
});

// Ajuste responsivo automático
window.addEventListener("resize", () => updateSlide(currentIndex));

// Initialize
updateSlide(currentIndex);
