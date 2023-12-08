// Проверка поддержки webp, добавление класса webp или no-webp для HTML
function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  // Добавлние класса _webp или _no-webp для HTML
  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
}
isWebp();

$(document).ready(function () {
  $('#prices-list-accordion').accordionjs({
    closeAble: true,
    closeOther: false,
  });

  $('#ask-questions-accordion').accordionjs({
    activeIndex: false,
    closeAble: true,
    closeOther: true,
  });

  $('#baner-services-accordion').accordionjs({
    activeIndex: false,
    closeAble: true,
    closeOther: true,
  });

  // Убавляем кол-во по клику
  $('.accordion-range-box .range-btn-minus').click(function () {
    let $input = $(this).parent().find('.range-value');
    let count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);

    // Управление классом _disactive для кнопки -
    if (count === 0) {
      $(this).addClass('_disactive');
    } else {
      $(this).removeClass('_disactive');
    }

    // Удаление класса _disactive с кнопки +
    $(this).parent().find('.range-btn-plus').removeClass('_disactive');
  });
  // Прибавляем кол-во по клику
  $('.accordion-range-box .range-btn-plus').click(function () {
    let $input = $(this).parent().find('.range-value');
    let count = parseInt($input.val()) + 1;
    count =
      count > parseInt($input.data('max-count'))
        ? parseInt($input.data('max-count'))
        : count;
    $input.val(parseInt(count));

    // Управление классом _disactive для кнопки +
    if (count === 20) {
      $(this).addClass('_disactive');
    } else {
      $(this).removeClass('_disactive');
    }

    // Удаление класса _disactive с кнопки -
    $(this).parent().find('.range-btn-minus').removeClass('_disactive');
  });
  // Убираем все лишнее и невозможное при изменении поля
  $('.accordion-range-box .range-value').bind(
    'change keyup input click',
    function () {
      if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
      }
      if (this.value == '') {
        this.value = 1;
      }
      if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'));
      }
    }
  );
});

if (document.querySelector('.choose-tariffs')) {
  const tariffsButtons = document.querySelectorAll(
    '.choose-tariffs__btn .component--green-btn'
  );
  const tariffElements = document.querySelectorAll('.choose-tariffs__element');

  tariffsButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // Удаляем класс "_active" у всех элементов
      tariffElements.forEach((element) => {
        element.classList.remove('_active');
      });

      // Изменяем текст всех кнопок на "Выбрать"
      tariffsButtons.forEach((button) => {
        button.querySelector('.green-btn__text').textContent = 'Выбрать';
      });

      // Добавляем класс "_active" только к элементу, на котором нажата кнопка
      tariffElements[index].classList.add('_active');

      // Изменяем текст выбранной кнопки на "Выбран"
      const buttonText = btn.querySelector('.green-btn__text');
      if (tariffElements[index].classList.contains('_active')) {
        buttonText.textContent = 'Выбран';
      }
    });
  });
}

if (document.querySelector('.our-contacts__map')) {
  let center = [48.8866527839977, 2.34310679732974];

  function init() {
    let map = new ymaps.Map('our-contacts__map', {
      center: center,
      zoom: 10,
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }

  ymaps.ready(init);
}

if (document.querySelector('.header')) {
  const header = document.querySelector('.header');
  const headerBurger = header.querySelector('.header__burger');
  const headerBurgerContent = header.querySelector('.header__burger-content');

  headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('_open');
    headerBurgerContent.classList.toggle('_show');
    document.documentElement.classList.toggle('lock');
  });
}

if (document.querySelector('.order-callback-swiper')) {
  let arrayTexts = [
    'Телефон<br />для звонков<br />по России',
    'Телефон<br />для звонков<br />за территоией РФ',
    'Наша почта<br />для связи<br />по email',
  ];
  const arrayElements = document.querySelectorAll(
    '.order-callback__slide .content-left__text'
  );

  if (window.innerWidth < 769) {
    for (let i = 0; i < arrayElements.length; i++) {
      arrayElements[i].innerHTML = arrayTexts[i];
    }
  }
}

if (document.querySelector('.component--swap-btn')) {
  const swapButton = document.querySelector('.component--swap-btn');
  swapButton.addEventListener('click', () => {
    // Прокручиваем страницу к началу
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const sections = document.querySelectorAll('section');

  // Проверяем, если количество секций больше двух, показываем блок
  if (sections.length > 3) {
    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY || window.pageYOffset;
      const scrolled =
        (scrollPosition /
          (document.documentElement.scrollHeight - windowHeight)) *
        100;

      if (scrolled >= 33) {
        swapButton.style.display = 'flex';
      } else {
        swapButton.style.display = 'none';
      }
    });
  } else {
    swapButton.style.display = 'none';
  }

  // if (window.innerWidth > 768) {
  //   // Проверяем, если количество секций больше двух, показываем блок
  //   if (sections.length > 3) {
  //     window.addEventListener('scroll', () => {
  //       const windowHeight = window.innerHeight;
  //       const scrollPosition = window.scrollY || window.pageYOffset;
  //       const scrolled =
  //         (scrollPosition /
  //           (document.documentElement.scrollHeight - windowHeight)) *
  //         100;

  //       if (scrolled >= 33) {
  //         swapButton.style.display = 'flex';
  //       } else {
  //         swapButton.style.display = 'none';
  //       }
  //     });
  //   } else {
  //     swapButton.style.display = 'none';
  //   }
  // } else {
  //   swapButton.style.display = 'none';
  // }
}

if ( document.querySelector('.baner-services') && document.querySelector('.header')) {
  const header = document.querySelector('.header');
  window.innerWidth > 768
    ? header.classList.add('_services')
    : header.classList.remove('_services');
}

if (document.querySelector('.baner-details-services__swiper-desc')) {
  const slides = document.querySelectorAll(
    '.baner-details-services__swiper-desc .baner-details-services__slide'
  );

  function removeActiveClass() {
    slides.forEach((slide) => {
      slide.classList.remove('_active');
    });
  }

  // Добавляем обработчики событий для каждого блока
  slides.forEach((slide) => {
    slide.addEventListener('mouseover', function () {
      // Удаляем класс active у всех блоков
      removeActiveClass();
      // Добавляем класс active только к текущему блоку
      this.classList.add('_active');
    });
  });
}
