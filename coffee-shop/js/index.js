const swiper = new Swiper('.testimonial-swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  speed: 500,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
});