console.log("hello from script.js")
//capture the navSession element inside the navbar component
let navItems = document.querySelector('#navSession');
console.log(navItems)

//lets take the access token from the local storage property.
let userToken = localStorage.getItem("token")
console.log(userToken)

//lets create a control structure that will determine which elements inside the nav bar will be displayed if a user token is found in the local storage.
if(!userToken) {
   navItems.innerHTML =
   `
    <li class="nav-item">
    	<a href="./login.html" class="nav-link">Log in</a>
    </li>
   `
}else{
   navItems.innerHTML =
   `
   <li class="nav-item">
   	    <a href="./logout.html" class="nav-link">Log Out</a>
   </li>
  `
}