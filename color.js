const button = document.querySelector('button') ;
button.addEventListener('click' , function()
{
    const hi = document.querySelector('h1') ;
    const r = Math.floor(Math.random() * 255) ;
    const g = Math.floor(Math.random() * 255) ;
    const b = Math.floor(Math.random() * 255) ;
    if(r < 100 && g < 100 && b < 100){
        document.body.style.color = 'white';
    }
    else{
        document.body.style.color = `rgb(0,0,0)`;
    }
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    hi.innerText = `RGB(${r},${g},${b})`;
})