//скролл к якорям
$('#menu').on('click','a', function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 700);
});
//wow
new WOW().init();

//input mask
(function () {
  $('.input_phone-mask').inputmask('+7 (999) 999 99 99');
}());

//yandex-map
(function () {
  ymaps.ready(init);
  var myMap,
    myPlacemark;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [55.756994,37.614006],
      zoom: 16,
      controls: []
    });

    myMap.behaviors.disable(['scrollZoom']);
    // myMap.controls.remove('geolocationControl')
    //     .remove('searchControl')
    //     .remove('trafficControl')
    //     .remove('typeSelector')
    //     .remove('fullscreenControl')
    //     .remove('zoomControl')
    //     .remove('rulerControl');

    myPin = new ymaps.GeoObjectCollection({}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/icons/marker-placeholder-red.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-15, -55]
    });

    myTargetPlacemark1 = new ymaps.Placemark([55.756994, 37.614006], {});
    // myTargetPlacemark2 = new ymaps.Placemark([55.603989, 37.528133], {});
    // myTargetPlacemark3 = new ymaps.Placemark([55.604099, 37.539398], {});
    // myTargetPlacemark4 = new ymaps.Placemark([55.601183, 37.530150], {});

    myPin.add(myTargetPlacemark1);
    myMap.geoObjects.add(myPin);
  }
}());

//слайдер
var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  direction: 'horizontal',
  slidesPerView: 1,
  paginationElement:'div'
  // bulletClass: '.reviews__slider-controls-link',
  // bulletActiveClass: '.link_active'
});
