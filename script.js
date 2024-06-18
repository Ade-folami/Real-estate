"use strict";

const collectionBtn = document.querySelector("#header__navigation-collection");
const collectionStn = document.querySelector(".section-collections");
const faqBtn = document.querySelector("#header__navigation-faq");
const faqStn = document.querySelector(".section-faq");

//Implementing smooth scrolling
collectionBtn.addEventListener("click", function (e) {
  e.preventDefault();
  collectionStn.scrollIntoView({ behavior: "smooth" });
});

faqBtn.addEventListener("click", function (e) {
  e.preventDefault();
  faqStn.scrollIntoView({ behavior: "smooth" });
});
