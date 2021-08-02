

function addGlobalEventListener(type,selector,callback)
{
	document.addEventListener(type,e=>
	{
		if(e.target.matches(selector)) callback(e);
	})
}

const mainNav = document.querySelector('.main-nav');
const mainNavOpen = document.querySelector('.main-nav-open');
const mainNavClose = document.querySelector('.main-nav-close');

addGlobalEventListener('click','.main-nav-open i',e=>
{
	mainNav.style.display = "flex";
	mainNavOpen.style.display = "none";
	mainNavClose.style.display = "block";
})

addGlobalEventListener('click','.main-nav-close i',e=>
{
	mainNav.style.display = "none";
	mainNavOpen.style.display = "block";
	mainNavClose.style.display = "none";
})



