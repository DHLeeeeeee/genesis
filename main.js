$(function () {
  $('.mainSlide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    dots: true,
  });

  $('.modelSlideItms').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
  });

  $('.iconMenu a').mouseover(function () {
    $(this).find('img').attr('src', $(this).find('img').data('animated'));
  });
  $('.iconMenu a').mouseout(function () {
    $(this).find('img').attr('src', $(this).find('img').data('static'));
  });
});
