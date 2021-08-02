'use strict';

const container = document.querySelector(".all-container");
const imageBx = document.querySelector('.main-section-img-bx')
const productBx = document.querySelectorAll('.main-product-bx ul li');
const sectionBtn = document.querySelector('.btn-1');
const modalBtn = document.querySelector('.main-modal-btn');
const modalSpecs = document.querySelector('.main-modal-specs');


class ClickBtn
{
	constructor(arg1,arg2,arg3,arg4)
	{
		this.container = arg1;
		this.imageBx = arg2;
		this.modalSpecs = arg3;
		this.productBx = arg4;
	}
	clickSectionBtn()
	{
		this.modalSpecs.style.transform = "translate("+"-50%"+","+"-50%"+")" + "scale("+ 0.9 +")";
		this.modalSpecs.style.transition = "transform 0.5s ease-in";
		this.container.style.pointerEvents = "none";
		this.container.style.filter = "blur("+ 5 + "px"+")";
	}
	clickModalBtn()
	{
		this.modalSpecs.style.transform = "translate("+"-50%"+","+"-50%"+")" + "scale("+ 0 +")";
		this.container.style.filter = "blur("+ 0 + "px"+")";
		this.container.style.pointerEvents = "auto";
		this.modalSpecs.style.transition = "none";
	}
	clickImgBx(bx)
	{
		this.bx = bx;
		this.imageBx.firstElementChild.src = this.bx.firstElementChild.src;
		this.imageBx.firstElementChild.style.animation = "fade 1s ease-in";

		setTimeout(()=>
		{
			this.imageBx.firstElementChild.style.animation = "none";
		},900)
	}
}

const clickbtn = new ClickBtn(container,imageBx,modalSpecs,productBx);

sectionBtn.addEventListener("click", () => clickbtn.clickSectionBtn());
modalBtn.addEventListener("click", () => clickbtn.clickModalBtn());

Array.from(productBx).forEach(bx =>
{
	bx.addEventListener("click", () => clickbtn.clickImgBx(bx));	
})


/*sectionBtn.addEventListener("click", clickSectionBtn);
modalBtn.addEventListener("click", clickModalBtn);

Array.from(productBx).forEach(bx =>
{
	bx.addEventListener("click", clickImgBx);	
})

function clickSectionBtn(e)
{
	modalSpecs.style.transform = "translate("+"-50%"+","+"-50%"+")" + "scale("+ 1 +")";
	container.style.pointerEvents = "none";
	container.style.filter = "blur("+ 5 + "px"+")";
}
function clickModalBtn(e)
{
	modalSpecs.style.transform = "translate("+"-50%"+","+"-50%"+")" + "scale("+ 0 +")";
 	container.style.filter = "blur("+ 0 + "px"+")";
 	container.style.pointerEvents = "auto";
}
function clickImgBx(e)
{
	imageBx.firstElementChild.src = e.target.src;
}
*/


