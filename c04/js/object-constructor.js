//Set up the object
var hotel=new Object();

hotel.name= 'Park';
hotel.rooms= 120;
hotel.booked=77;
hotel.checkAvailability=function(){
    return this.rooms - this.booked;
};
//Update the HTML
var elName =document.getElementById('hotelName');//get element
elName.textContent=hotel.name; //Update HTML with property of the object

var elRoom =document.getElementById('rooms'); //get element
elRoom.textContent=hotel.checkAvailability();//Update HTML with property of the object