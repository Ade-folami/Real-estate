"use strict";

const collectionBtn = document.querySelector("#header__navigation-collection");
const collectionStn = document.querySelector(".section-collections");

collectionBtn.addEventListener("click", function (e) {
  collectionStn.scrollIntoView({ behavior: "smooth" });
});
