'use strict';

const hourArrow = document.querySelector('.analog-hr-arrow');
const minArrow = document.querySelector('.analog-min-arrow');
const secArrow = document.querySelector('.analog-sec-arrow');

class AnalogClock
{
	constructor(arg1,arg2,arg3)
	{
		this.hourArrow = arg1;
		this.minArrow = arg2;
		this.secArrow = arg3;
	}
	moveClockArrows(arg1,arg2,arg3)
	{
		this.secondsCount = arg1;
		this.minutesCount = arg2;
		this.hoursCount = arg3;
		this.secArrow.style.transform = "rotate("+ this.secondsCount * 6 +"deg"+")";
		this.minArrow.style.transform = "rotate("+ this.minutesCount * 6 +"deg"+")";
		this.hourArrow.style.transform = "rotate("+ this.hoursCount * 30 +"deg"+")";
	}
}

const analogClock = new AnalogClock(hourArrow,minArrow,secArrow);

const hourText = document.querySelector('.digital-hr-txt');
const minText = document.querySelector('.digital-min-txt');
const secText = document.querySelector('.digital-sec-txt');

class DigitalClock
{
	constructor(arg1,arg2,arg3)
	{
		this.hourText = arg1;
		this.minText = arg2;
		this.secText = arg3;
	}
	moveClockTexts(arg1,arg2,arg3)
	{
		this.secondsCount = arg1;
		this.minutesCount = arg2;
		this.hoursCount = arg3;
		this.hourText.textContent = this.hoursCount;
		if(this.minutesCount < 10) this.minText.textContent = "0" + this.minutesCount;
		else this.minText.textContent = this.minutesCount;
		this.secText.textContent = this.secondsCount;
	}
}

const digitalClock = new DigitalClock(hourText,minText,secText);



setInterval(()=>
{
	const secondsCount = new Date().getSeconds();
	const minutesCount = new Date().getMinutes();
	const hoursCount = new Date().getHours();
	analogClock.moveClockArrows(secondsCount,minutesCount,hoursCount);
	digitalClock.moveClockTexts(secondsCount,minutesCount,hoursCount);
},1000)


