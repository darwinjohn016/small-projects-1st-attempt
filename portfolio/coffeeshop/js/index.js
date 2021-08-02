const productSwiper = new Swiper('.product-swiper', {
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 5,

  pagination: {
    el: '.product-pagination',
    clickable: true,
  },

  breakpoints:{
  	320:
  	{
  		direction: 'horizontal',
  		touchRatio: 1,
  	},
  	700:
  	{
  		direction: 'vertical',
  		touchRatio: 0,
  	},
  },
});

const testimonialSwiper = new Swiper('.testimonial-swiper', {
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 5,
  // loop: true,

  

  pagination:
  {
  	el:'.testimonial-pagination',
  },
});


const testimonialImgBx = new Swiper('.testimonial-img-bx', {
  speed: 700,
  slidesPerView: 'auto',
  spaceBetween: 5,

  touchRatio: 0,

});

testimonialSwiper.controller.control = testimonialImgBx;




// testimonialSwiper.on('slideChange', function () {

// 	const slidesLength = Math.ceil(testimonialSwiper.slides.length/2);

//   if(testimonialSwiper.activeIndex > slidesLength) testimonialSwiper.slideToLoop(0, 400, true);
  
//   if(testimonialSwiper.activeIndex === 0) testimonialSwiper.slideToLoop(2, 400, true);

// });

