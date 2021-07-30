console.log("addSong.js is linked properly");

// capture the html elements that we are going to use

let addSongForm = document.querySelector("#addSong");

// we are going to use an addEventListener() to check if the user interacted with the application.
/*2 parameters, the element (button type submit) and what will happen when the event is triggered*/
addSongForm.addEventListener("submit", (e) => {
	// lets describe what will happen next if the event has been triggered
	e.preventDefault(); /*to avoid page redirection*/
	// 1. to get the values of all the input fields.
	let sName = document.querySelector("#songName").value
	let sGenre = document.querySelector("#songGenre").value
	let sLength = document.querySelector("#songLength").value	
	/*console.log(sName) => gagamitin as checker so disable na muna
	console.log(sGenre)
	console.log(sLength)*/
	// fetch() has 2 parameters => route/destination of request, requestMethod/method na mangyayari upon sending the message, how to communicate to the backend project.
	fetch("http://localhost:3000/api/songs/addSong", {
		// here we built the structure of our request.
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			// once you have identified the properties of the document, what will we do next? 
			name: sName,
			genre: sGenre,
			length: sLength
		})
		// next is to create a promise to identify what will happen if the response from the backend is positive or negative.
	}).then(res => {
		return res.json() /*the response I got is either true or false*/
		// then lets create another promise that will display the response from the backend to our front end. 
	}).then(data => {
		console.log(data) /*check if we were able to get the data from our backend project.*/
		// create a control structure that will determine the response in my frontend app. 
		if(data === true){
			alert("New song inserted successfully.")
		} else {
			alert("Something went wrong, HALA!")
		}
	})
}) 

// Separation of Concerns
// => The SOC is one of the most fundamental structure principles in software development.

// SOLID Principles
// S -> Single Responsibility Principle (check)
	// "A class should only have one and only one reason to change, meaning that a class should only have one job."
// O -> Open Closed Principle
// L -> Liskov Substitution Principle
// I -> Interface Segregation Principle (check)
// D -> Dependency Inversion Principle

// It is crucial to have separation of concerns because in including it in the structure of your application, you are already follwoing the Single Responsibility Principle and Interface Segregation Principle (2 out of 5 solid principles)
// => it is crucial 