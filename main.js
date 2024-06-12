// Highlight the active navigation link
document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = window.location.pathname;
  const menuItem = document.querySelectorAll("nav ul li a");
  menuItem.forEach((item) => {
    if (item.getAttribute("href") === currentLocation) {
      item.classList.add("active");
    }
  });
});

// Testimonial Carousel Functionality
const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? "block" : "none";
  });
}

document.querySelector(".next").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

document.querySelector(".prev").addEventListener("click", () => {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

// Initialize the first testimonial
showTestimonial(currentTestimonial);
