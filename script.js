const hamburgerIcon = document.getElementsByClassName("hamburger-icon")[0];
const mobileNav = document.getElementsByClassName("mobile-nav")[0];

hamburgerIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});
