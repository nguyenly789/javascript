// create a variable called saying to hold the string that will be used
var saying = 'Home sweet home';


// create a variable called msg to hold a message that will shown on a page 

// Find the length of the string, and put this in the msg variable
var msg = '<h2>length</h2><p>' + saying.length + '</p>';
// Convert the string to uppercase and add is it to the msg variable convert the string to lowercase and add it to the msg variable
msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() +'</p>';
//convert the string to lowercase and add it to the msg variable
msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() +'</p>';
//find the character with an index of 12 in a string and add it to  the msg variable
msg += '<h2>character index: 1</h2><p>' +saying.charAt(1) +'</p>';
// find the index number of the first instance of the 'ee ' in the string and add it to the msg variable
msg +='<h2>first ee</h2><p>'+saying.indexOf('ee')+ '</p>';
// find the index number of the last instance of the 'e '  character in the string and add it to the msg variable
msg +='<h2>last e</h2><p>'+saying.lastIndexOf('e')+ '</p>';
//find the characters with an index number in the 8-14 range in the string and add it to the msg variable
msg +='<h2>character index: 8-14</h2><p>'+ saying.substring(8,14) +'</p>';
//find the  first characters of 'me' in the string and replace it with a'w' character and add it to the msg variable
msg+='<h2>replace</h2><p>'+ saying.replace('me' , 'w')+ '</p>';

//create a variable called el to hold the element whose id attribute  has a value of info
var el = document.getElementById('info');
//write the message into that element
el.innerHTML=msg;