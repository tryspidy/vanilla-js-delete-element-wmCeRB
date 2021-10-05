// delete an element from the dom
var elem = document.querySelector('#some-element');
elem.parentNode.removeChild(elem);


// keep element in dom
var elem = document.querySelector('#some-element');
elem.style.display = 'none';
