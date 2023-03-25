//Create a variable called msg to hold a new message

var msg = 'Sign up to receive our newsletter for 10% off';

//Create a function to update the cont of the element
function updateMessage() {
    var el = document.getElementById('message');
    el.textContent = msg;
}
 
//Call the function
updateMessage();