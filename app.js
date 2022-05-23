const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelector(".nav-links");
const navBtn = document.querySelector(".nav-btn");

openBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show-navlinks");
});
closeBtn.addEventListener("click", function () {
  navLinks.classList.remove("show-navlinks");
});
