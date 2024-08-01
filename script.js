"use strict";

const nav = document.querySelector(".header__navigation");

//Implementing smooth scrolling

nav.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("header__navigation-item")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
