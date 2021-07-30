//clear/ wipeout all the data inside our local stoarge so that the session of the user will end.
localStorage.clear()
//the clear method will allow you to remove the contents of the storage object. 

//redirect the user to the login page just incase a new user wants to log in.
window.location.replace('./login.html'); 