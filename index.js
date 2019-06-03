// Write your code here!
let element = document.getElementById('main');
element.remove();
let newHeader = document.createElement('h1');
newHeader.innerHTML = 'victory';
newHeader.id = 'victory';
document.body.appendChild(newHeader);
newHeader.innerHTML= 'nick is the champion';