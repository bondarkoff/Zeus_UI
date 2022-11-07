"use strict";

// const accordionBtns = document.querySelectorAll(".hamburger"),
//       text = document.querySelectorAll(".faq__item-text"),
//       span = document.querySelector(".span");

// accordionBtns.forEach((accordion) => {
//   accordion.onclick = function () {
//     this.classList.toggle("active");

//     span.classList.toggle("active");
    
//     let content = this.nextElementSibling;
//     console.log(content);

//     content.classList.toggle("active");

//   };
// });

const accordionBtns = document.querySelectorAll(".faq__item-header");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("active");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});






