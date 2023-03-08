// create vaiables to hold the title and note text
var title;
var message;

//assign value to these variables
title='Molly Special Offer ';
message= '<a href=\"sale.html\">55% off!</a>';


//Get element with an id of title
var elTitle =document.getElementById('title')
//Replace the content of this element
elTitle.textContent= title;

//Get element with an id of note
var elNote=document.getElementById('note');
//Replace the content of this element
elNote.innerHTML=message;