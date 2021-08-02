'use strict';

const header = document.querySelector('.home header');

function scrollHeader(e)
{
	if(window.scrollY > 25) header.classList.add('color');
	else header.classList.remove('color');
}

window.addEventListener('scroll',scrollHeader);


const anchors = document.querySelectorAll('nav a');
const indicator = document.querySelector('.home__indicator');

function indicators(e)
{
	const width = e.target.offsetWidth;
	const left = e.target.offsetLeft;

	indicator.style.left = left + 'px';
	indicator.style.width = width + 'px';
}

anchors.forEach(anchor =>
{
	anchor.addEventListener('click',indicators);
})

const section = document.querySelector('section');
const tilt = document.querySelector('.tilt');

function tiltEffect(e)
{
	const x = (window.innerWidth /2 - e.clientX) /15;
	const y = (window.innerHeight /2 - e.clientY) /15;

	tilt.style.transition = `none`;
	tilt.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
}

function tiltEffectOut(e)
{
	tilt.style.transition = `0.4s ease-in`;
	tilt.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
}

tilt.addEventListener('mousemove',tiltEffect);
tilt.addEventListener('mouseleave',tiltEffectOut);

const cube = document.querySelector('.home__cube');
const rotx = document.querySelector('.rotx');
const roty = document.querySelector('.roty');
const rotz = document.querySelector('.rotz');

function rotX()
{
	cube.style.setProperty('--x','rotatex');
}
function rotY()
{
	cube.style.setProperty('--x','rotatey');
}
function rotZ()
{
	cube.style.setProperty('--x','rotatez');
}



rotx.addEventListener('click',rotX);
roty.addEventListener('click',rotY);
rotz.addEventListener('click',rotZ);

const home = document.querySelector('.home__container-2');
const content = document.querySelector('.home__content');


// function wheelZ(e)
// {
// 	const xAxis = e.clientX/2;
// 	const yAxis = e.clientY/2;

// 	content.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg) rotateZ(${xAxis}deg)`;
// }

// home.addEventListener('mousemove',wheelZ);

const dropdown = document.querySelectorAll('.header ul li');

function hoverIn(e)
{
	if(e.target.children.length > 1) e.target.firstElementChild.nextElementSibling.classList.add('active');
}	
function hoverOut(e)
{
	if(e.target.children.length > 1) e.target.firstElementChild.nextElementSibling.classList.remove('active');
}	

dropdown.forEach(items=>
{
	items.addEventListener('mouseenter',hoverIn);
	items.addEventListener('mouseleave',hoverOut);
})

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');



const images = document.querySelectorAll('.content');
const dots = document.querySelectorAll('.dot-bx');

dots.forEach(dot=>
{
	for(let i=0; i< dot.children.length; i++)
	{
		dot.children[i].addEventListener('click',()=>
			{
				clickDots(i);
			});
	}
})

function clickDots(e)
{
	images.forEach(image=>
	{
		for(let i=0; i < image.children.length; i++)
		{
			image.children[i].classList.remove('show');
			image.children[e].classList.add('show');
		}
	})
}




var count = 0;

images.forEach(image=>
{
	image.children[count].classList.add('show');
})

/*
setInterval(()=>
{	
	count++;
	images.forEach(image=>
	{
		image.children[count].classList.toggle('show');
		if(count == image.children.length-1) count = 0;
	})

},1000)*/

function prevImage()
{
	images.forEach(image=>
	{
		if(count == 0)
		{
			for(let i=0; i<image.children.length;i++)
			{
				image.children[i].classList.add('show');
				count = image.children.length;
			}
		}
		else image.children[count].classList.remove('show');
		
	})
	count --;
	
}
	


function nextImage()
{
	count ++;
	images.forEach(image=>
	{
		if(count == image.children.length)
		{
			for(let i=0; i<image.children.length;i++)
			{
				image.children[i].classList.remove('show');
				image.children[0].classList.add('show');
				count = 0;
			}
		}
		else image.children[count].classList.add('show');

	})
}

// prev.addEventListener('click',prevImage);
// next.addEventListener('click',nextImage);


const items = 
[
"Item 1",
"Item 2",
"Item 3",
"Item 4",
"Item 5",
"Item 6",
"Item 7",
"Item 8",
"Item 9",
"Item 10",
"Item 11",
"Item 12",
"Item 13",
"Item 14",
"Item 15",
"Item 16",
"Item 17",
"Item 18",
"Item 19",
"Item 20",
"Item 21",
"Item 22",
"Item 23",
"Item 24",
"Item 25"
]

const simpleList = document.querySelector('.simple-list');
const simplePagination = document.querySelector('.simple-pagination');

var totalPageNumber;

function displayItems(pageNumber=1,noOfItems=2)
{
	const paginated = items.slice(0,noOfItems);
	var currentPage = pageNumber * paginated.length;
	const startNumber = currentPage - paginated.length;

	if(currentPage>items.length) currentPage = items.length;

	simpleList.innerHTML = "";
	for(let i=startNumber; i<currentPage;i++)
	{
		const simpleItems = document.createElement('div');
		const h1 = document.createElement('h1');
		h1.textContent = items[i];

		simpleItems.append(h1);
		simpleList.append(simpleItems);
	}

	totalPageNumber = Math.ceil(items.length/paginated.length);
}
displayItems();



function paginateButtons(numberofButtons=1)
{
	for(let i=0; i< numberofButtons; i++)
	{
		const simpleButton = document.createElement('button');
		simpleButton.textContent = i+1;


		if(i%8 == 0)
		{
			var div = document.createElement('div');
			simplePagination.append(div);
			div.append(simpleButton);
		}
		else div.append(simpleButton);


		simpleButton.addEventListener('click',(e)=>
		{
			const newNum = parseInt(e.target.textContent);
			displayItems(newNum);			
		})
	}
}
paginateButtons(totalPageNumber);

const prev1 = document.querySelector('.prev1');
const next1 = document.querySelector('.next1');
const btnBox = document.querySelectorAll('.simple-pagination');

var count = 1;

btnBox.forEach(btn=>
	{
		 btn.children[0].classList.add('block');
	})

function prevPagination(arg)
{
	arg--;
	if(arg < 0)
	{
		arg = 0;
		count = 0;
	}
	btnBox.forEach(btn=>
	{
		 for(let i=0; i< btn.children.length; i++)
		 {
		 		if(arg == i) btn.children[i].classList.add('block');
		 		else btn.children[i].classList.remove('block');
		 }
	})
}
function nextPagination(arg)
{
	btnBox.forEach(btn=>
	{
		if(arg > btn.children.length-1)
		{
			arg = btn.children.length-1;
			count = btn.children.length;
		}
		 for(let i=0; i< btn.children.length; i++)
		 {
		 		if(arg == i) btn.children[i].classList.add('block');
		 		else btn.children[i].classList.remove('block');
		 }
	})
}

prev1.addEventListener('click',()=>
	{
		prevPagination(--count);
	});
next1.addEventListener('click',()=>
	{
		nextPagination(count++);
	});