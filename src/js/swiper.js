if (document.querySelector('.our-articles-swiper')) {
  new Swiper('.our-articles-swiper', {
    slidesPerView: 'auto',
    freemode: true,
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 'auto',
        speed: 1000,
        navigation: {
          nextEl: '.our-articles__controls .btn-next',
          prevEl: '.our-articles__controls .btn-prev',
        },
      },
    },
  });
}

if (document.querySelector('.our-teams-swiper')) {
  new Swiper('.our-teams-swiper', {
    slidesPerView: 'auto',
    freemode: true,
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 'auto',
        speed: 1000,
        navigation: {
          nextEl: '.our-teams__controls .btn-next',
          prevEl: '.our-teams__controls .btn-prev',
        },
      },
    },
  });
}
