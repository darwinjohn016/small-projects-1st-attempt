"use strict";

const search = document.querySelector('input[type=search]');
const select = document.querySelector('select');
const form = document.querySelector('form');
const content = document.querySelector('.content');
const noContent = document.querySelector('.noContent');
const text = document.querySelector('input[type=text]');
const button = document.querySelector('button');
var contentArr = [];

class List
{
	constructor(content)
	{
		this.content = content;
	}
	addValue(value)
	{
		const value1 = value.replace(/[^-:0-9A-Za-z]/g,"");
		const regex = /\S/;
		if(!value1.match(regex)) return;
		const box = document.createElement('div');
		const btnBox = document.createElement('div');
		box.classList.add('box');
		btnBox.classList.add('btnBox');
		const h2 = document.createElement('h2');
		h2.textContent = value1;
		const checkBtn = document.createElement('button');
		const deleteBtn = document.createElement('button');
		checkBtn.innerHTML = '<i class="fas fa-check"></i>';
		deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
		this.content.appendChild(box);
		box.appendChild(h2);
		box.appendChild(btnBox);
		btnBox.appendChild(checkBtn);
		btnBox.appendChild(deleteBtn);
		text.value = '';
		content.scrollTop = content.scrollHeight;
		contentArr.push(value1);
		const contentStorage = JSON.stringify(contentArr);
		localStorage.setItem("to do list", contentStorage);

		checkBtn.onclick = (e) =>
		{
			h2.classList.toggle('lineThrough');
		}

		deleteBtn.onclick = (e) =>
		{
			const deleteBox = deleteBtn.closest(`.box`);
			deleteBox.classList.add(`deleteAnimation`);
			deleteBox.ontransitionend = () =>
			{ 
				deleteBox.remove(deleteBox);
				if(this.content.children.length === 1) noContent.style.display = "flex";
			}
			if(this.content.children.length === 1) noContent.style.display = "flex";
			const deleteH2 = deleteBox.firstChild.textContent;
			const contentMap = contentArr.filter(x => x !== deleteH2);
			contentArr = contentMap;
			const contentStorage = JSON.stringify(contentMap);
			localStorage.setItem("to do list", contentStorage);
			if(contentArr.length === 0) localStorage.removeItem("to do list");
		}
	}

	searchValue()
	{
		const searchVal = search.value.toLowerCase();
		const searchBox = document.querySelectorAll('.box');
		const searchArr = Array.from(searchBox);
		searchArr.forEach(element=>
		{
			const searchH2 = element.firstChild.textContent.toLowerCase();
			searchH2.indexOf(searchVal) !== -1 ? element.style.display = "flex" : element.style.display = "none"; 
		});
	}

	selectValue(optionValue)
	{
		const optionBox = document.querySelectorAll('.box');
		const optionArr = Array.from(optionBox);
		optionArr.forEach(element =>
		{
			const optionH2 = element.firstChild;
			const optionBox2 = optionH2.closest('.box');
	
			if(optionValue === "ongoing" && optionH2.className === "lineThrough") optionBox2.style.display = "none";
			else if(optionValue === "ongoing" && optionH2.className === "") optionBox2.style.display = "flex";
			else if(optionValue === "completed" && optionH2.className === "") optionBox2.style.display = "none";
			else if(optionValue === "completed" && optionH2.className === "lineThrough") optionBox2.style.display = "flex";
			else optionBox2.style.display = "flex";

		})
	}
}

const list = new List(content);

form.onsubmit = (e => e.preventDefault());

button.onclick = (e) =>
{
	const value = text.value;
	list.addValue(value);
	if(content.children.length === 2) noContent.style.display = "none";
}

search.onkeyup = (e =>list.searchValue());

select.onchange = (e) =>
{
	const optionValue = e.target.value;
	list.selectValue(optionValue);
}









