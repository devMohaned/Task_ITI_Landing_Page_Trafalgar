const burgerBtn = document.querySelector(".nav-links > img");
const outerContainer = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(
  ".nav-links > *:not(.nav-links > img)"
);

burgerBtn.addEventListener("click", () => {
  outerContainer.classList.contains("active")
    ? outerContainer.classList.remove("active")
    : outerContainer.classList.add("active");
});
