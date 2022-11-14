
let down = document.querySelector(".down");
let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let up = document.querySelector(".scroll-up");
let up2 = document.querySelector(".up");


window.addEventListener('scroll', function (e) {
    if (window.scrollY >= 50 && window.scrollY <= 400) {
      down.style.fontSize = `${26 + window.scrollY / 10}px`;
    }

    if (window.scrollY >= 400 && window.scrollY <= 1000) {
        slide1.style.width = `${200 + (window.scrollY - 400) / 3}px`;
        slide1.style.marginLeft = `${200 + (window.scrollY - 400) / 4}px`;
        slide2.style.marginRight = `${230 + (window.scrollY - 400) / 3}px`;
    }
  
    if (window.scrollY >= 800 && window.scrollY <= 1500) {
      up.style.fontSize = `${72 - (window.scrollY - 800) / 10}px`;
    }
})

down.addEventListener('click', () => {
  slide1.scrollIntoView({ behavior: 'smooth' });
})

up2.addEventListener('click', () => {
  window.scroll({top: 0, behavior: 'smooth'})
})
