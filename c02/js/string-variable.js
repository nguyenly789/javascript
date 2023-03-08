var username;
var message;

//Assign values to these variable
username = 'Molly';
message ='See our upcoming range';

//Get the  element with on id  of name
var elName = document.getElementById("name");
//Replace the content of this element.
elName.textContent= username;


//Get the element with on id of note
var elNote = document.getElementById('note');
//Replace the content of this element
elNote.textContent = message;

// NOTE: textContent does not work in IE8 or earlier
// You can use innerHTML, but note the security issues on p228-231