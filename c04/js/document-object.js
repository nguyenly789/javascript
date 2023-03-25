//create a variable called msg to hold a message that will be shown on the page
//find the title of the document and put this in the msg variable
var msg ='<p><b>page title: </b>' + document.title + '<br />';
//find  the URL of the document and add it to the msg variable
msg += '<b>page address: </b>' +document.URL +'<br />';
//find a date the document was last modified and  it to the msg variable
msg+= '<b>last modified: </b>' +document.lastModified + '</p>';
//create a variable called  el to hold the element whose id has a value of footer
var el = document.getElementById('footer');
//write a message into that element
el.innerHTML =msg;
