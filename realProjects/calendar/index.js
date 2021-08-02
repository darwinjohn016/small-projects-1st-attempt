'use strict';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const week = date.getDay();
const day = date.getDate();
const weekArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const monthYearBx = document.querySelectorAll('.month-year-bx');
const dayWeekBx = document.querySelectorAll('.day-week-bx');

Array.from(monthYearBx).forEach(element =>
{
	element.children[0].textContent = monthArr[month] + ",";
	element.children[1].textContent = year;
})

Array.from(dayWeekBx).forEach(element =>
{
	element.children[0].textContent = day + ",";
	element.children[1].textContent = weekArr[week];
})

const dateCalendarDays = document.querySelectorAll('.date-calendar-days');
const dateCalendarWeek = document.querySelectorAll('.date-calendar-week');

class Calendar
{
	constructor(arg1,arg2,arg3)
	{
		this.year = arg1;
		this.month = arg2;
		this.day = arg3;
	}
	getNumberOfDays()
	{

		let daysInAMonth = new Date(this.year,this.month,28).getDate();
		if(this.month == 0 || this.month == 2 || this.month == 4 || this.month == 6 || this.month ==7 || this.month == 9 || this.month == 11 ) daysInAMonth = new Date(this.year,this.month,31).getDate();
		else if(this.month == 1 && this.year%4 == 0) daysInAMonth = new Date(this.year,this.month,29).getDate();
		else daysInAMonth = new Date(this.year,this.month,30).getDate();
		this.daysInAMonth = daysInAMonth;

	}
	getDays()
	{
		for(let i=1; i<=this.daysInAMonth; i++)
		{
			const dayNumber = document.createElement('div');
			dayNumber.textContent = i;
			if(dayNumber.textContent == day) dayNumber.style.color = "blue";
			
			const getDaysInWeek = new Date(this.year,this.month,i).getDay(); 
			const getDay = new Date(this.year,this.month,1).getDay();
			Array.from(dateCalendarDays).forEach(days =>
			{
			for(let i=0; i<7; i++)
			{
				if(getDaysInWeek === i) days.children[i].appendChild(dayNumber);
				if(i < getDay) days.children[i].style.justifyContent = "flex-end";		
			}

			})

			const getWeek = new Date(this.year,this.month,this.day).getDay();
			Array.from(dateCalendarWeek).forEach(week =>
			{
			for(let i=0 ;i<7; i++)
			{
				if(i == getWeek ) week.children[i].style.color = "blue";
			}
			})	

		}
		
	}
}

const calendar = new Calendar(year,month,day);
calendar.getNumberOfDays();
calendar.getDays();


/*getDaysInAMonth(year,month);

function getDaysInAMonth(year,month)
{
	let daysInAMonth = new Date(year,month,28).getDate();
	if(month == 0 || month == 2 || month == 4 || month == 6 || month ==7 || month == 9 || month == 11 ) daysInAMonth = new Date(year,month,31).getDate();
	else if(month == 1 && year%4 == 0) daysInAMonth = new Date(year,month,29).getDate();
	else daysInAMonth = new Date(year,month,30).getDate();

	for(let i=1; i<=daysInAMonth; i++)
	{
		const dayNumber = document.createElement('div');
		dayNumber.textContent = i;
		if(dayNumber.textContent == day) dayNumber.style.color = "blue";

		function getDay(year,month,i)
		{
			const getDaysInWeek = new Date(year,month,i).getDay(); 
			const getDay = new Date(year,month,1).getDay();
			Array.from(dateCalendarDays).forEach(days =>
			{
				for(let i=0; i<7; i++)
				{
					if(getDaysInWeek === i) days.children[i].appendChild(dayNumber);
					if(i < getDay) days.children[i].style.justifyContent = "flex-end";		
				}

			})

			const getWeek = new Date(year,month,day).getDay();
			Array.from(dateCalendarWeek).forEach(week =>
			{
				for(let i=0 ;i<7; i++)
				{
					if(i == getWeek ) week.children[i].style.color = "blue";
				}
			})

		}
		getDay(year,month,i);
	}
}*/

