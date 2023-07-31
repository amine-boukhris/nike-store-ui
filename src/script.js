// handle mobile menu visibility
const menuBars = document.querySelector(".header__mobile-menu-icon");
const mobileNav = document.querySelector(".mobile-nav");
console.log("test");
menuBars.addEventListener("click", () => {
    mobileNav.classList.toggle("displaynone");
    menuBars.classList.toggle("fa-bars")
    menuBars.classList.toggle("fa-xmark")
});

