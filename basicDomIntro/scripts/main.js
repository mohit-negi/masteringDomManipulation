const list = document.querySelector('ul');
const newitem = document.createElement('li');

newitem.textContent = "Welp !";
list.appendChild(newitem);
newitem.setAttribute('class','dis');
console.log(newitem.getAttribute('class'));