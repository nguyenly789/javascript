// create the array
var colors = ['white' , 'black' , 'custom'];

//update the third item in the arry
colors[2]= 'beige';

//get the element with an id of colors
var el= document.getElementById('colors');

//replace element with third item form the array
el.textContent =colors[2]


// textContent does not work in IE8 or earlier
// you can user innerHTML on line 11, but note the security issues on p228-231

