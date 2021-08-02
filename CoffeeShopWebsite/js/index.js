const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  freeMode: true,
  grabCursor: true,
  resistanceRatio: 0,
  breakpoints: {
    601: {
      direction: 'vertical',
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function addGlobalEventListener(type,selector,callback)
{
    document.addEventListener(type,e=>
    {
        if(e.target.matches(selector)) callback(e);
    })
}

const mobileOpen = document.querySelector('#mobile-open');
const mobileClose = document.querySelector('#mobile-close');
const mobileHeader = document.querySelector('.mobile-header');

addGlobalEventListener('click','#mobile-open', e=>
{
    mobileOpen.style.display = 'none';
    mobileClose.style.display = 'block';
    mobileHeader.classList.add('mobile-header-slidedown');
    mobileHeader.style.display = "block";
})

addGlobalEventListener('click','#mobile-close', e=>
{
    mobileOpen.style.display = 'block';
    mobileClose.style.display = 'none';
    mobileHeader.classList.remove('mobile-header-slidedown');
    mobileHeader.style.display = "none";
})