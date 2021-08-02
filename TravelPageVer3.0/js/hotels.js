import {addGlobalEventListener,addWindowEventListener} from './eventListener.js';

const mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  slidesPerView: 1,	
  slidesPerColumn:1,
  spaceBetween: 10,
  pagination:{
  	el: '.swiper-pagination',
  	clickable: true,
  	renderBullet: function (index, className) {
		return '<span class="' + className + '">' + (index + 1) + '</span>';				 
        },
  },
  noSwiping: true,
});




const pageBullets = document.querySelectorAll('.swiper-pagination span');
const pagination = document.querySelector('.swiper-pagination');

const firstElement = pagination.firstElementChild;
const lastElement = pagination.lastElementChild;

const firstElementNum = parseInt(firstElement.textContent);
const lastElementNum = parseInt(lastElement.textContent);


Array.from(pageBullets).forEach(bullets =>
{
	const bulletWidth = bullets.offsetWidth;
	const paginationWidth = bulletWidth * 5;
	pagination.style.width = paginationWidth + 'px';
})

var count = 0;

function prevPaginateBtn()
{
	if(lastElementNum < 5) return;
	if(count < 0) count = 0;
	Array.from(pageBullets).forEach(bullets =>
	{
		const bulletWidth = bullets.offsetWidth;
		if(count >= 0)bullets.style.transform = 'translateX('+ -bulletWidth * count + 'px' +')';
	})	
}

function nextPaginateBtn()
{
	if(lastElementNum < 5) return;
	const lastBulletNum = lastElementNum - 5;
	Array.from(pageBullets).forEach(bullets =>
	{
		const bulletWidth = bullets.offsetWidth;
		if(count<=lastBulletNum)bullets.style.transform = 'translateX('+ -bulletWidth * count + 'px' +')';
		else count = lastBulletNum;
	})
}

addGlobalEventListener('click','.prev-btn',e=>
{
	prevPaginateBtn(count--);	
})

addGlobalEventListener('click','.next-btn',e=>
{
	nextPaginateBtn(count++);
})

function firstPaginateBtn()
{
	count = 0;
	if(lastElementNum < 5) return;
	Array.from(pageBullets).forEach(bullets =>
	{
		const bulletWidth = bullets.offsetWidth;
		bullets.style.transform = 'translateX('+ 0 + 'px' +')';
	})
}

function lastPaginateBtn()
{

	const lastBulletNum = lastElementNum - 5;
	count = lastBulletNum;
	if(lastElementNum < 5) return;
	Array.from(pageBullets).forEach(bullets =>
	{
		const lastBulletNum = lastElementNum - 5;
		const bulletWidth = bullets.offsetWidth;
		bullets.style.transform = 'translateX('+ -bulletWidth * lastBulletNum + 'px' +')';
	})
}

addGlobalEventListener('click','.first-btn',e=>
{
	firstPaginateBtn();
})

addGlobalEventListener('click','.last-btn',e=>
{
	lastPaginateBtn();
})