//create  variable for the welcome message
var greeting=' Howdy ';
var name=' Molly ';
var message= ' , please check your order:';
//concatenate the three variables above to create the welcome message
var welcome=greeting + name + message;

//create variables to hold details about the sign
var sign='Montage House';
var tiles=sign.length;
var subTotal=tiles*5;
var shipping=7;
var grandTotal =subTotal+shipping;

//Get the element that has an id of greeting
var el=document.getElementById('greeting');
//Replace the content of that element with the personalized welcome message
el.textContent=welcome;

//get the element that has an id of userSign then update its contents
var elSign=document.getElementById('userSign');
elSign.textContent=sign;

//get the element that has an id of tiles then update its contents
var elTiles=document.getElementById('tiles');
elTiles.textContent='$'+tiles;

//get the element that has an id of subTotal then update its contents
var elTiles=document.getElementById('subTotal');
elTiles.textContent='$'+subTotal;

//get the element that has an id of shipping then update its contents
var elshipping=document.getElementById('shipping');
elshipping.textContent='$'+shipping;


//get the element that has an id of grandTotal then update its contents
var elgrandTotal=document.getElementById('grandTotal');
elgrandTotal.textContent='$'+grandTotal;
