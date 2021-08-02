"use strict";

const inputBx = document.querySelectorAll('.index-section-input-bx input');

class InputBoxListener
{
	constructor()
	{

	}
	blur(arg1)
	{
		if(arg1.value !== "")
		{
			arg1.nextElementSibling.style.transform = "translate("+8+"px"+","+-58+"px"+")";
			arg1.nextElementSibling.style.color = "rgb(239,213,213)";
		}
		else 
		{
			arg1.nextElementSibling.style.transform = "translate("+8+"px"+","+-28+"px"+")";
			arg1.nextElementSibling.style.color = "#333";
		}
	}
	focus(arg1)
	{
			arg1.nextElementSibling.style.transform = "translate("+8+"px"+","+-58+"px"+")";
			arg1.nextElementSibling.style.color = "rgb(239,213,213)";
	}

}

const inputBoxListener = new InputBoxListener();

Array.from(inputBx).forEach(bx=>
{
	bx.addEventListener("focus",()=> inputBoxListener.focus(bx));
	bx.addEventListener("blur", ()=> inputBoxListener.blur(bx));
})
