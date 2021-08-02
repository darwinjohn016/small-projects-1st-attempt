import {addGlobalEventListener,addWindowEventListener} from './eventListener.js';


var mySwiper1 = new Swiper('.swiper-img-bx', {
  // Optional parameters
  grabCursor: true,
  speed: 700,
  slidesPerView: 'auto',
  updateOnWindowResize: false,
  spaceBetween: 30,
  mousewheel: true,
  keyboard: true,
  resistanceRatio: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
})
mySwiper1.snapGrid = [...mySwiper1.slidesGrid];

var mySwiper2 = new Swiper('.swiper-txt-bx', {
  // Optional parameters
  touchRatio: 0,
  speed: 700,
  direction: 'vertical',
  slidesPerView: 'auto',
})

var mySwiper3 = new Swiper('.swiper-bg', {
  // Optional parameters
  touchRatio: 0,
  speed: 700,
  direction: 'vertical',
  slidesPerView: 'auto',
})

mySwiper1.controller.control = mySwiper2;
mySwiper2.controller.control = mySwiper3;

const userNav = document.querySelector('.user-navigation');
const overlay = document.querySelector('.overlay');
const hamburgerNav = document.querySelector('.hamburger-navigation');
const body = document.documentElement;

addWindowEventListener('resize', e=>
{
  if(window.innerWidth > 1000) hamburgerNav.classList.add('disappear');
  else
  {
    userNav.classList.add('disappear');
    overlay.classList.add('disappear');
  }  
})

addWindowEventListener('fullscreenchange', e=>
{
  hamburgerNav.classList.add('disappear');
})

addGlobalEventListener('click','.overlay', e=>
{
  userNav.classList.toggle('disappear');
  overlay.classList.toggle('disappear');
})

addGlobalEventListener('click','.open', e=>{
  body.style.pointerEvents = 'none';
  hamburgerNav.style.pointerEvents = 'auto';
  hamburgerNav.classList.add('slideRight');
  hamburgerNav.classList.remove('slideLeft');
  hamburgerNav.classList.remove('disappear');
  body.style.position = "fixed";
})



addGlobalEventListener('click','.close', e=>{
  body.style.pointerEvents = 'auto';
  hamburgerNav.classList.add('slideLeft');
  hamburgerNav.classList.remove('slideRight');
  hamburgerNav.classList.remove('disappear');
  body.style.position = "relative";
})

addGlobalEventListener('click','.user-img', e=>
{
  userNav.classList.toggle('disappear');
  overlay.classList.toggle('disappear');
})

addGlobalEventListener('click','.user-img-icon', e=>
{
  userNav.classList.toggle('disappear');
  overlay.classList.toggle('disappear');
})

export{addGlobalEventListener};