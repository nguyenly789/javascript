//set up the object
var hotel= {
    name : 'Park',
    rooms :120,
    booked : 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

//update the HTML
var elName = document.getElementById('hotelName');//get element
elName.textContent = hotel.name;

var elPool = document.getElementById('pool');
elPool.className = hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = hotel.gym;
