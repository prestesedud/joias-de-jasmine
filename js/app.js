let swiper = new Swiper(".swiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    click(swiper, event) {
      if (swiper.clickedIndex !== undefined) {
        swiper.slideTo(swiper.clickedIndex);

        // console.log(swiper.)
      }
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

