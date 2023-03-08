//Create  variables and assign them values
var inStock;

var shipping;

inStock=true;
shipping=false;

// some of the processing my go here and, as a result ,
// the script might need to change these values

inStock=false;
shipping=true;

//get the element with on id of stock
var elStock=document.getElementById('stock');
//set class name with value of inStock variable
elStock.className=inStock;
//get the element with on id of shipping
var elShip=document.getElementById('shipping');
////set class name with value of shipping variable
elShip.className=shipping;