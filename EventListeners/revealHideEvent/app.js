const revealbtn = document.querySelector('.reveal-btn');
const hiddencontent = document.querySelector('.hidden-content');

function revealContent()
{
    if(hiddencontent.classList.contains('.hiddencontent'))
    {
        console.log(hiddencontent.classList.value);
        hiddencontent.classList.add('.panic');
        hiddencontent.style.color = 'red';
    }
    if(hiddencontent.classList.contains('.panic'))
    {
        hiddencontent.classList.remove('.panic');

    }
}
revealbtn.addEventListener('click',revealContent);