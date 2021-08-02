import {addGlobalEventListener,addWindowEventListener} from './eventListener.js';

addGlobalEventListener('click','.footer-btn i',e=>
{
	const footerParent = e.target.closest('.footer-content-bx');
	const footerAnchors = footerParent.querySelectorAll('a');
	Array.from(footerAnchors).forEach(anchor=>
	{
		anchor.classList.toggle('appear');
	})
})

addGlobalEventListener('click','.footer-btn',e=>
{
	const footerParent = e.target.closest('.footer-content-bx');
	const footerAnchors = footerParent.querySelectorAll('a');
	Array.from(footerAnchors).forEach(anchor=>
	{
		anchor.classList.toggle('appear');
	})
})

