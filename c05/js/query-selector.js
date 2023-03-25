//querySelector only returns the first match
var el = document.querySelector('li.hot');
el.className = 'cool'

//querySelectorAll returns a NoteList.
//The third li element is the selected and changed
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';