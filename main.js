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
