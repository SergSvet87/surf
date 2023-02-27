$(function () {

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/icons/header-arrow-prev.svg" alt="header-arrow"/>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/icons/header-arrow.svg" alt="header-arrow"/>',
    asNavFor: '.slider-dots',
  });

  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });

  $('.surf__map').slick({
    slidesToShow: 12,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf__slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        }
      },
      // {
      //   breakpoint: 961,
      //   settings: "unslick"
      // }
    ]
  });

  $('.surf__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/icons/header-arrow-prev.svg" alt="header-arrow"/>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/icons/header-arrow.svg" alt="header-arrow"/>',
    asNavFor: '.surf__map',
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.travel__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/icons/header-arrow-prev.svg" alt="header-arrow"/>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/icons/header-arrow.svg" alt="header-arrow"/>',
  })

  $('.sleep__slider, .shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/icons/header-arrow-prev.svg" alt="header-arrow"/>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/icons/header-arrow.svg" alt="header-arrow"/>',
  })

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/icons/plus.svg" alt="Star Icon"/></div><div class="quantity-button quantity-down"><img src="img/icons/minus.svg" alt="Star Icon"/></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $('.quantity-button').on('click', function () {
    let summ = $('.sleep__nights').val() * $('.sleep__summ').data('night') + ($('.sleep__guests').val() - 1) * $('.sleep__summ').data('guest');

    $('.sleep__summ').html('$' + summ);
  });

  let summ = $('.sleep__nights').val() * $('.sleep__summ').data('night') + ($('.sleep__guests').val() - 1) * $('.sleep__summ').data('guest');

  $('.sleep__summ').html('$' + summ);

  $('.surfboard-box__circle').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.mobile-menu').on('click', function () {
    $('.menu-header').toggleClass('active');
  });

  new WOW().init(); 

});
