let manu = document.querySelector('#manue_bars');
let nevbar = document.querySelector('.nevbar');

manu.onclick = () => {
  manu.classList.toggle('fa-times');
  nevbar.classList.toggle('active');

}
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .nevbar a');

window.onscroll = () => {
  manu.classList.remove('fa-times');
  nevbar.classList.remove('active');
  section.forEach(sec => {
    let top = Window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top => offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .nevbar a[href*=' + id + ']').classList.add('.active');
      });
    };
  });
}
document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search_form').classList.toggle('active');
}
document.querySelector('#close').onclick = () => {
  document.querySelector('#search_form').classList.remove('active');
}
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,


});
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,


});
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,


});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: true,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },

  }
});
// function loader() {
//   document.querySelector('.loder-container').classList.add(fade - out);
// }
// function fadOut() {
//   setInterval(loader, 3000);
// }
// window.onload = fadOut;