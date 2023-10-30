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
