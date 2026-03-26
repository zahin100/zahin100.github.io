// Back to top button 
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// Navigation ham-menu
const burger = document.querySelector("#ham-menu");
const nav = document.querySelector("nav");
const ul = document.querySelector("nav ul");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

const navigationLink = document.querySelectorAll(".nav-link");

navigationLink.forEach((link) => link.addEventListener("click", () => {
    ul.classList.remove("show");
    })
);