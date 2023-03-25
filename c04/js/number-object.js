//create a variable to hold the number that will be used
var originingNumber =10.23456;
//create a variable to hold a message that will be shown on the page
var msg = '<h2>original number</h2></p>'+ originingNumber + '</p>';
// round the number to 3 decimal places and add it to the msg variable
msg+='<h2>3 decimal places</h2><p>' + originingNumber.toFixed(3)+ '</p>';
//round the number to a pre