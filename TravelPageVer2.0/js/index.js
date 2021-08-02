
var mySwiper1 = new Swiper('.one', {
  effect: 'coverflow',
  speed: 700,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  slidesPerView: 'auto',
  mousewheel: true,
  keyboard: true,
  coverflowEffect: {
    rotate: 60,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },

});

var mySwiper2 = new Swiper('.two', {
  loop: true,
  slidesPerView: 'auto',
  speed: 700,
  direction: 'vertical',
  autoHeight: true,
});
mySwiper1.controller.control = mySwiper2;




function addGlobalEventListener(type,selector,callback)
{
  document.addEventListener(type,e =>
  {
    if(e.target.matches(selector)) callback(e);
  })
}

const ctaInputBx = document.querySelectorAll('.home-cta-input-bx');
const ctaBtnBx = document.querySelectorAll('.home-cta-btn-bx button');

addGlobalEventListener('click','.cta-btn', e=>
{
    const btnIndex = Array.from(ctaBtnBx).indexOf(e.target); 
    for(let i=0; i<ctaInputBx.length; i++)
    {
      (btnIndex == i)? ctaBtnBx[i].classList.add('active'): ctaBtnBx[i].classList.remove('active');
      (btnIndex == i)? ctaInputBx[i].classList.add('visible') : ctaInputBx[i].classList.remove('visible');
      (btnIndex == i)? ctaInputBx[i].style.setProperty('--x','animate') : '';
    }
})

const destinationBtn = document.querySelectorAll('.des-btn');
const destinationGrid = document.querySelectorAll('.destination-grid');

addGlobalEventListener('click','.des-btn',e =>
{
  const btnIndex = Array.from(destinationBtn).indexOf(e.target);
  for(let i=0; i<destinationBtn.length; i++)
  {
    (btnIndex == i)? destinationBtn[i].classList.add('active'): destinationBtn[i].classList.remove('active');
    (btnIndex == i)? destinationGrid[i].classList.add('visible2'): destinationGrid[i].classList.remove('visible2');
    (btnIndex == i)? destinationGrid[i].style.setProperty('--y','translate') : '';
  }
})