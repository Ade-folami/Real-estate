"use strict";
const collectionBtn = document.querySelector("#header__navigation-collection");
const collectionStn = document.querySelector(".section-collections");
collectionBtn.addEventListener("click", function(e) {
    collectionStn.scrollIntoView({
        behavior: "smooth"
    });
});
const faqBtn = document.querySelector("#header__navigation-faq");
const faqStn = document.querySelector(".section-faq");
faqBtn.addEventListener("click", function(e) {
    faqStn.scrollIntoView({
        behavior: "smooth"
    });
});
if (module.hot) module.hot.accept();

//# sourceMappingURL=index.672d4772.js.map
