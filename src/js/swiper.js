function remToPx(remValue) {
  // Получаем текущий базовый размер шрифта (font-size) из элемента <html>
  var htmlFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );

  // Переводим значение из rem в px
  var pxValue = remValue * htmlFontSize;

  // Округляем значение до целых пикселей (по желанию)
  return Math.round(pxValue) + 'px';
}

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

if (document.querySelector('.our-letters-swiper')) {
  new Swiper('.our-letters-swiper', {
    slidesPerView: 'auto',
    freemode: true,
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 'auto',
        speed: 1000,
        navigation: {
          nextEl: '.our-letters__controls .btn-next',
          prevEl: '.our-letters__controls .btn-prev',
        },
      },
    },
  });
}

if (document.querySelector('.grid-articles-swiper')) {
  new Swiper('.grid-articles-swiper', {
    slidesPerView: 'auto',
    freemode: true,
    spaceBetween: remToPx(4),
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
        spaceBetween: remToPx(4),
        speed: 1000,
        navigation: {
          nextEl: '.grid-articles__controls .btn-next',
          prevEl: '.grid-articles__controls .btn-prev',
        },
      },
    },
  });
}

if (document.querySelector('.grid-teams-swiper')) {
  new Swiper('.grid-teams-swiper', {
    slidesPerView: 'auto',
    freemode: true,
    spaceBetween: remToPx(4),
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
        spaceBetween: remToPx(4),
        speed: 1000,
        navigation: {
          nextEl: '.grid-teams__controls .btn-next',
          prevEl: '.grid-teams__controls .btn-prev',
        },
      },
    },
  });
}

if (document.querySelector('.grid-reviews-swiper')) {
  new Swiper('.grid-reviews-swiper', {
    slidesPerView: 'auto',
    freemode: true,
    spaceBetween: remToPx(4),
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 3,
        grid: {
          rows: 3,
        },
        spaceBetween: remToPx(4),
        speed: 1000,
        navigation: {
          nextEl: '.grid-reviews__controls .btn-next',
          prevEl: '.grid-reviews__controls .btn-prev',
        },
      },
    },
  });
}

if (document.querySelector('.basic-direction-swiper')) {
  new Swiper('.basic-direction-swiper', {
    slidesPerView: 'auto',
    spaceBetween: remToPx(4),
    freemode: true,
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: remToPx(4),
        speed: 1000,
        navigation: {
          nextEl: '.basic-direction__controls .btn-next',
          prevEl: '.basic-direction__controls .btn-prev',
        },
      },
    },
  });
}

if (document.querySelector('.completing-tasks-swiper')) {
  new Swiper('.completing-tasks-swiper', {
    slidesPerView: 'auto',
    spaceBetween: remToPx(4),
    freemode: true,
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
        spaceBetween: remToPx(4),
        speed: 1000,
      },
    },
  });
}

if (document.querySelector('.order-callback-swiper')) {
  new Swiper('.order-callback-swiper', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
    navigation: {
      nextEl: '.order-callback__controls .btn-next',
      prevEl: '.order-callback__controls .btn-prev',
    },
  });
}

if (document.querySelector('.providing-solutions-swiper')) {
  new Swiper('.providing-solutions-swiper', {
    slidesPerView: 'auto',
    spaceBetween: remToPx(4),
    freemode: true,
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: remToPx(4),
        speed: 1000,
        navigation: {
          nextEl: '.providing-solutions__controls .btn-next',
          prevEl: '.providing-solutions__controls .btn-prev',
        },
      },
    },
  });
}

if (document.querySelector('.baner-services-swiper')) {
  const servicesDetailsSwiper = new Swiper('.baner-services-swiper', {
    slidesPerView: 1,
    direction: 'vertical',
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: '.baner-services-pagination',
    },
  });

  servicesDetailsSwiper.on('slideChange', function () {
    const swiperDetailsServices = document.querySelector(
      '.baner-services-swiper'
    );

    if (servicesDetailsSwiper.activeIndex == 0) {
      swiperDetailsServices.classList.add('_first');
      swiperDetailsServices.classList.remove('_second');
      swiperDetailsServices.classList.remove('_third');
    } else if (servicesDetailsSwiper.activeIndex == 1) {
      swiperDetailsServices.classList.remove('_first');
      swiperDetailsServices.classList.add('_second');
      swiperDetailsServices.classList.remove('_third');
    } else if (servicesDetailsSwiper.activeIndex == 2) {
      swiperDetailsServices.classList.remove('_first');
      swiperDetailsServices.classList.remove('_second');
      swiperDetailsServices.classList.add('_third');
    }
  });
}

if (document.querySelector('.what-includes-swiper')) {
  new Swiper('.what-includes-swiper', {
    slidesPerView: 'auto',
    spaceBetween: remToPx(4),
    freemode: true,
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: remToPx(4),
        speed: 1000,
        navigation: {
          nextEl: '.what-includes__controls .btn-next',
          prevEl: '.what-includes__controls .btn-prev',
        },
      },
    },
  });
}
