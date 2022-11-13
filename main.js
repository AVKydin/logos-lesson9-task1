
let down = document.querySelector(".down");
let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let up = document.querySelector(".scroll-up");

window.addEventListener('scroll', function (e) {
    if (window.scrollY >= 50 && window.scrollY <= 400) {
      down.style.fontSize = `${window.scrollY / 5}px`;
    }

    if (window.scrollY >= 400 && window.scrollY <= 1000) {
        slide1.style.width = `${window.scrollY / 2}px`;
        slide1.style.marginLeft = `${window.scrollY / 3}px`;

        
    }

    if (window.scrollY >= 800 && window.scrollY <= 1400) {
        slide2.style.marginRight = `${window.scrollY / 2}px`;
    }
      if (window.scrollY >= 800 && window.scrollY <= 1500) {
        up.style.fontSize = `${window.scrollY / 30}px`;
      }
})

// "use strict";

// let scrollDown = document.querySelector(".scrollDown");
// let down = document.querySelector(".down");
// let slide = document.querySelector(".slide");
// let image = document.querySelector(".image");
// let up = document.querySelector(".up");

// window.addEventListener("scroll", () => {
//   if (window.scrollY < 400) {
//     down.style.fontSize = `${40 + window.scrollY / 12}px`;
//   }
//   if (window.scrollY > 300 && window.scrollY < 740) {
//     slide.style.width = `${290 + (window.scrollY - 300) / 2}px`;
//     slide.style.marginLeft = `${50 + (window.scrollY - 300) / 4}px`;
//     image.style.right = `${10 + (window.scrollY - 300) / 3}px`;
//   }
//   if (window.scrollY > 800 && window.scrollY < 1200) {
//     up.style.fontSize = `${74 - (window.scrollY - 800) / 12}px`;
//   }
// });

// down.addEventListener("click", () => {
//   slide.scrollIntoView({ behavior: "smooth" });
// });

// up.addEventListener("click", () => {
//   window.scroll({
//     top: 0,
//     behavior: "smooth",
//   });
// });

