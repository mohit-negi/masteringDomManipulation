// To see how event delegation not only works on the present 
// but futute children of the same class
const list = document.querySelector('ul');
const newitem = document.createElement('li');

newitem.textContent = "YElP !";
newitem.classList.add('item');
//new item on the list

list.appendChild(newitem);

console.log("hell0");
document.querySelector('.sports').addEventListener('click',(e)=>{
    console.log(e.target.getAttribute('id')+" is clicked");
    const target = e.target;
    if(target.matches('li'))
    {
        target.style.backgroundColor = 'lightgrey';
        target.style.color = 'black';
    }
});