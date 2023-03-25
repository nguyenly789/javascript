//Set up the object
var hotel= {
    name :'Quay',
    rooms :40,
    booked: 25,
    checkAvailability: function(){
        return this.rooms - this.booked; //Need "this" c02 inside function
    }
};

//Update the HTML
var elName =document.getElementById('hotelName');//get element
elName.textContent=hotel.name; //Update HTML with property of the object

var elRoom =document.getElementById('rooms'); //get element
elRoom.textContent=hotel.checkAvailability();//Update HTML with property of the object