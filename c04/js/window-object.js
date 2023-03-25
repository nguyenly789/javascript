//create a variable coalled msg to hold a message that will be shown on the page
//find the width with of the browser window, and put this in the msg variable
var msg ='<h2>browser window</h2><p>width : ' +window.innerWidth+ '</p>';
//find the height of the window and add it to the msg windown
msg +='<p>height : '+window.innerHeight+'</p>';
//find the number of items in the browser window's history and add it to the msg variable
msg+='<h2>history</h2><p>items : ' + window.history.length +'</p>'
//Find the width of the computer screen and add it to the msg variable
msg +='<h2>screen</h2><p>width : ' + window.screen.width + '</p>';
//find the height of the computer screen and add it to the msg variable
msg+= '<p>height : ' +window.screen.height +'</p>';

//create a variable call el to hold the element whose id attribute has the value of info
var el = document.getElementById('info');
//write the message into that element
el.innerHTML= msg;
//find the location of the current page and display it in an alert box
alert('Current page:' +window.location);