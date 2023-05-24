var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

var swiper2 = new Swiper(".mySlider", {
  spaceBetween: 30,
  centeredSlides: true,
  speed: 3000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

$(".slider-tum").hover(function (e) {
  var index = parseInt($(this).attr("x-index"));
  swiper2.slideTo(index - 1, 1000);
});

$(".province-block").click(function (e) {
  $(this).css("fill", "rgb(0, 182, 203)");
});

$(".province-block").on("click", function () {
  $(".ostan-item-contents").load("ajax/test.html");
});
