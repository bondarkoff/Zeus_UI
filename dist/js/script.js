"use strict";

const accordionBtns = document.querySelectorAll(".hamburger"),
      text = document.querySelectorAll(".faq__item-text"),
      span = document.querySelector(".span");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("active");

    span.classList.toggle("active");
    
    let content = this.nextElementSibling;
    console.log(content);

    content.classList.toggle("active");

  };
});





