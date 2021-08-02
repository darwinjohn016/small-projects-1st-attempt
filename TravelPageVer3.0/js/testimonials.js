import {addGlobalEventListener,addWindowEventListener} from './eventListener.js';

const mediaPlayer = document.querySelector('.testimonials-video');
const videoBtn = document.querySelector('.video-btn');

mediaPlayer.style.filter = 'brightness(0.5)';
addGlobalEventListener('click','.video-btn i', e=>
{
	videoBtn.classList.add('disappear');
	mediaPlayer.play();
	mediaPlayer.style.filter = 'brightness(1)';
})

addGlobalEventListener('click','.testimonials-video', e=>
{
	videoBtn.classList.remove('disappear');
	mediaPlayer.pause();
	mediaPlayer.style.filter = 'brightness(0.5)';
})
