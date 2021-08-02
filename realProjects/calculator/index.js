"use strict";

const previousOperandText = document.querySelector('.previous-operand-text');
const currentOperandText = document.querySelector('.current-operand-text');


const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const equalBtn = document.querySelector('[data-equals]');

class Calculator
{
	constructor(arg1,arg2)
	{
		this.previousOperandText = arg1;
		this.currentOperandText = arg2;
		this.previousOperand = "";
		this.currentOperand = "";

	}
	clear()
	{
		this.previousOperandText.textContent = "";
		this.currentOperandText.textContent = "";
		this.previousOperand = "";
		this.currentOperand = "";
	}
	delete()
	{
		const regex = /e/g;
		if(this.currentOperand.toString().match(regex)) return;
		this.currentOperand = this.currentOperand.toString().slice(0,-1);

	}
	addNumber(arg1)
	{
		this.number = arg1;
		if(this.number === "." && this.currentOperandText.textContent.includes('.')) return;
		if(this.number === "." && this.currentOperandText.textContent === "") this.currentOperand = 0;
		if(this.currentOperand.length > 20) return;
		this.currentOperand += this.number;
		
		this.currentOperand = this.currentOperand.replace(/[^e\+\d\.\-]/g,'');
		if(!this.currentOperand.includes('.')) this.currentOperand = parseFloat(this.currentOperand).toLocaleString();

		this.currFloat = this.currentOperand.replace(/[^\d\.]/g,'');
		this.currFloat = parseFloat(this.currFloat); 


	}
	operation(arg1)
	{
		if(this.currentOperand === "") return;
		this.operator = arg1;
		this.currentOperand += this.operator;
		if(this.previousOperand === "") this.previousOperand = this.currentOperand;
		this.currentOperand = "";
		this.prevFloat = this.previousOperand.replace(/[^e\+\d\.\-]/g,'');
		this.prevFloat = parseFloat(this.prevFloat);

		if(this.previousOperandText.textContent.includes("+")) 
		{
			this.currentOperand += this.prevFloat + this.currFloat;		
			this.currentOperand += this.operator;
			this.previousOperand = this.currentOperand;
			if(!this.previousOperand.includes('.')) this.previousOperand = parseFloat(this.previousOperand).toLocaleString();
			this.previousOperand += this.operator;
			if(this.previousOperand.length > 20) 
			{
				this.previousOperand = this.previousOperand.replace(/[^\d\.\-]/g,'');
				this.previousOperand = parseFloat(this.previousOperand).toExponential();
				this.previousOperand = parseFloat(this.previousOperand).toPrecision(7);
				this.previousOperand += this.operator;		
			}	
			this.currentOperand = "";
		}
		if(this.previousOperandText.textContent.includes("-")) 
		{
			this.currentOperand += this.prevFloat - this.currFloat;
			this.currentOperand += this.operator;
			this.previousOperand = this.currentOperand;
			this.previousOperand = parseFloat(this.previousOperand).toLocaleString();
			this.previousOperand += this.operator;
			if(this.previousOperand.length > 20) 
			{
				this.previousOperand = this.previousOperand.replace(/[^\d\.\-]/g,'');
				this.previousOperand = parseFloat(this.previousOperand).toExponential();
				this.previousOperand = parseFloat(this.previousOperand).toPrecision(7);
				this.previousOperand += this.operator;	
			}	
			this.currentOperand = "";
		}
		if(this.previousOperandText.textContent.includes("*")) 
		{
			this.currentOperand += this.prevFloat * this.currFloat;
			this.currentOperand += this.operator;
			this.previousOperand = this.currentOperand;
			this.previousOperand = parseFloat(this.previousOperand).toLocaleString();
			this.previousOperand += this.operator;
			if(this.previousOperand.length > 20) 
			{
				this.previousOperand = this.previousOperand.replace(/[^\d\.\-]/g,'');
				this.previousOperand = parseFloat(this.previousOperand).toExponential();
				this.previousOperand = parseFloat(this.previousOperand).toPrecision(7);
				this.previousOperand += this.operator;		
			}	
			this.currentOperand = "";
		}
		if(this.previousOperandText.textContent.includes("÷")) 
		{
			this.currentOperand += this.prevFloat / this.currFloat;
			this.currentOperand += this.operator;
			this.currentOperand = parseFloat(this.currentOperand).toPrecision(7);
			this.previousOperand = this.currentOperand;
			this.previousOperand += this.operator;
			
			if(this.previousOperand.length > 20) 
			{
				this.previousOperand = this.previousOperand.replace(/[^\d\.\-]/g,'');
				this.previousOperand = parseFloat(this.previousOperand).toExponential();
				this.previousOperand = parseFloat(this.previousOperand).toPrecision(7);
			}	
			this.currentOperand = "";
		}
	}

	equals()
	{	

		this.prevFloat = this.previousOperand.replace(/[^e\+\d\.\-]/g,'');
		this.prevFloat = parseFloat(this.prevFloat);


		this.currFloat = this.currentOperand.replace(/[^e\+\d\.\-]/g,'');
		this.currFloat = parseFloat(this.currFloat); 


		if(this.currentOperand === "") return;
		if(this.previousOperandText.textContent.includes("+")) 
		{
			this.currentOperand = this.prevFloat + this.currFloat;
			this.currentOperand = parseFloat(this.currentOperand).toLocaleString();	
			if(this.currentOperand.length > 20) 
			{
				this.currentOperand = this.currentOperand.replace(/[^\d\.\-]/g,'');
				this.currentOperand = parseFloat(this.currentOperand).toPrecision(7);
				this.currentOperand = parseFloat(this.currentOperand).toExponential();
			}	
			this.previousOperand = "";
		}
		if(this.previousOperandText.textContent.includes("-") && this.prevFloat > 0 ) 
		{
			console.log(this.prevFloat)
			this.currentOperand = this.prevFloat - this.currFloat;
			this.currentOperand = parseFloat(this.currentOperand).toLocaleString();	
			this.previousOperand = "";
		}
		if(this.previousOperandText.textContent.includes("*")) 
		{	
			this.currentOperand = this.prevFloat * this.currFloat;
			this.currentOperand = this.currentOperand.toString();
			if(!this.currentOperand.includes('e')) this.currentOperand = parseFloat(this.currentOperand).toLocaleString();	
			if(this.currentOperand.length > 20) 
			{
				this.currentOperand = this.currentOperand.replace(/[^\d\.\-]/g,'');
				this.currentOperand = parseFloat(this.currentOperand).toPrecision(7);
				this.currentOperand = parseFloat(this.currentOperand).toExponential();
			}
			this.previousOperand = "";
		}
		if(this.previousOperandText.textContent.includes("÷")) 
		{
			this.currentOperand = this.prevFloat / this.currFloat;
			this.currentOperand = parseFloat(this.currentOperand).toPrecision(7);

		
			this.previousOperand = "";
		}

	}
	display()
	{
		this.previousOperandText.textContent = this.previousOperand;
		this.currentOperandText.textContent = this.currentOperand; 
	}
}

const calculator = new Calculator(previousOperandText,currentOperandText);

clearBtn.addEventListener("click", ()=> calculator.clear());

deleteBtn.addEventListener("click", ()=>
{
	calculator.delete();
	calculator.display();
})

equalBtn.addEventListener("click", ()=>
{
	calculator.equals();
	calculator.display();
})

Array.from(numberBtns).forEach(btn=>
{
	btn.addEventListener("click",()=> 
	{
		calculator.addNumber(btn.textContent);
		calculator.display();
	});
})

Array.from(operatorBtns).forEach(btn=>
{
	btn.addEventListener("click",()=> 
	{
		calculator.operation(btn.textContent);
		calculator.display();
	});
})
