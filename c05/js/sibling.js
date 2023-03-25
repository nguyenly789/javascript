//Select the starting point and find its sibling.
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

//change the values of the sibling' class attribute.
prevItem.className= 'complete';
nextItem.className= 'cool';