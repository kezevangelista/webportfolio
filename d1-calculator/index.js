// task: create a calculator
let numberA = null; /*operand 1*/
let numberB = null; /*operand 2*/
let operation = null; /*the mathematical operator that we are goint to apply to our expression*/


// 1. using getElementById() target all elements that has an id value of txt-data
// lets capture all of the number components inside the doc
let btnNumbers = document.querySelectorAll(".btn-numbers");
// lets capture all of the operations.
// we have 7 different operations/functions
let btnClearAll = document.querySelector('#btn-clear-all');
let btnBackspace = document.querySelector('#btn-backspace');
let btnMultiply = document.querySelector('#btn-multiply');
let btnDivide = document.querySelector('#btn-divide');
let btnAdd = document.querySelector('#btn-add');
let btnSubtract = document.querySelector('#btn-subtract');
let btnEqual = document.querySelector('#btn-equal');
let btnDecimal = document.querySelector('#btn-decimal');

// task # 2: create a logic using forEach to get the value of each number component and display it in the input display
let inputDisplay = document.querySelector('#txt-input-display')
btnNumbers.forEach(function(btnNumber){
		// the forEach() executes a provided function once for each element inside an array.
		// syntax: callback, current value, index/array(optional)
	btnNumber.onclick = () => {
		// the "onclick" event will trigger the function
		// what will happen upon triggering the event?
		inputDisplay.value += btnNumber.textContent;
		// textContent property of the node interface represents the "text content" section of the node and its descendants. this returns a string or null.
	}
})

// Create a button function that allows you to clear out the last character inserted.
// Let's create the backspace
// 1. target the element and let's invoke an event property.
// 2. create a function that will be triggered in the event.
// note: for this example let's use the slice() method
// syntax of slice: arr.slice(startIndex, endIndex)
// startIndex will be 0 because array starts its index with 0
btnBackspace.onclick = () => {
	inputDisplay.value = inputDisplay.value.slice(0,-1)
	// -> the zero-based index at which where it will begin the extraction.
}

// 3rd task: Clear ALL ENTRY
// 1. target the element and assign an event
// 2. create a function that will be triggered upon the event
btnClearAll.onclick = () => {
	// this block of code will describe what will be performed in the event.
	inputDisplay.value = null; /*the value null represents the "intentional" absence of any object value. null is part of JS's primitive values.*/
}

// task 4: decimal point
// 1. target the element and acquire an event property.
// 2. create a function to be triggered in the event.
// 3. get the current value of the input display.
// 4. we will concatenate the input display with the text content of the decimal button
// 5. create a logic that will allow you to include only 1 decimal point
btnDecimal.onclick = () => {
	// to accomplish #5 let's create a control structure.
	// the include() will assess if the values inside the string holds/has a "."
	// if true yung result noong if statement, irereturn niya yung nasa body bracket. 
	if(!inputDisplay.value.includes('.')){
		// this block of code will run if the condition is met.
		inputDisplay.value = inputDisplay.value + btnDecimal.textContent;
	}
}

// doing task #4
btnAdd.onclick = () => {
	// lets create a control structure
	if(numberA == null){
		// this block of code will run if the condition is met.
		numberA = Number(inputDisplay.value);
		operation = "addition";
		inputDisplay.value = null;		
	}
	else if(numberB == null) { 
		numberB = Number(inputDisplay.value);
		numberA = numberA + numberB;
		operation = "addition";
		numberB.value = null;
		inputDisplay.value = null;
	}
}

// this section is for the equal (=) button component.
btnEqual.onclick = () => {
	if (numberB == null && inputDisplay.value !== "") {
		numberB = inputDisplay.value 
		/*null VS "" empty string*/
		/*null --> is used to "explicitly" define nothing */
		/*undefined --> refers to a value that has not yet been assigned.*/
		/*empty "" --> refers to an empty string.*/
		/*null is an object, empty is a string data type, undefined = undefine (hindi naaindentify ang state)*/
		/*null == undefined (true) correct*/
		/*null === undefined (false), pwede madeclare ang variable, di lang binibigyan ng value*/
		/*an empty string("") is "totally" not equals to null and undefined*/


	}
	if(operation == "addition"){
		inputDisplay.value = Number(numberA) + Number(numberB)
	}
	if (operation == "subtraction"){
		inputDisplay.value = Number(numberA) - Number(numberB)
	}
	if (operation == "multiplication"){
		inputDisplay.value = Number(numberA) * Number(numberB)
	}
	if (operation == "division"){
		inputDisplay.value = Number(numberA) / Number(numberB)
	}
}
// subtraction
btnSubtract.onclick = () => {
	if (numberA == null){
		numberA = Number(inputDisplay.value);
		operation = "subtraction";
		inputDisplay.value = null;
	}
	else if (numberB == null){
		numberB = Number(inputDisplay.value);
		numberA = numberA - numberB;
		operation = "subtraction";
		numberB = null;
		inputDisplay.value = null;
	}
}
// multiplication
btnMultiply.onclick = () => {
	if (numberA == null){
		numberA = Number(inputDisplay.value);
		operation = "multiplication";
		inputDisplay.value = null;
	}
	else if (numberB == null){
		numberB = Number(inputDisplay.value);
		numberA = numberA * numberB;
		operation = "multiplication";
		numberB = null;
		inputDisplay.value = null;
	}
}

// division
btnDivide.onclick = () => {
	if (numberA == null){
		numberA = Number(inputDisplay.value);
		operation = "division";
		inputDisplay.value = null;
	}
	else if (numberB == null){
		numberB = Number(inputDisplay.value);
		numberA = numberA / numberB;
		operation = "division";
		numberB = null;
		inputDisplay.value = null;
	}
}

const firstName = document.querySelector("#txt-first-name");
const spanName = document.querySelector("#span-full-name");
const lastName = document.querySelector("#txt-last-name");

/*spanName.addEventListener("keyup", (event) => {
	// now we need to get the value of the html element.
	let fNameInfo = firstName.value
	let lNameInfo = lastName.value
	// to display the value of the first name element on the webpage apply an innerHTML property.
	spanName.innerHTML = `Hi My name is ${fNameInfo} ${lNameInfo}`; 
})
*/

// Sir's Answer:
firstName.addEventListener("keyup", (e) => {
	spanName.innerHTML = `Hi My Name is ${firstName.value} ${lastName.value}`;
})

lastName.addEventListener("keyup", (e) => {
	spanName.innerHTML = `Hi My Name is ${firstName.value} ${lastName.value}`;
})