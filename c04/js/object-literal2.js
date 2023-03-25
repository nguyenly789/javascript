//set up the object
var hotel={
    name: 'Park',
    rooms: 120,
    booked:77,
    checkAvailability: function(){
        return this.rooms -this.booked; //Need "this" c02 inside function
    }

};

//Update the HTML
var elName = document.getElementById('hotelName');//get element
elName.textContent=hotel.name;//Update HTML with property of the object

var elRooms= document.getElementById('rooms');//get element
elRooms.textContent=hotel.checkAvailability();//Update HTML with property of the object

