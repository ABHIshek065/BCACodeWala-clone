const menubar = document.getElementById('menubar')

menubar.addEventListener('click',() =>{
const link = document.getElementById('link')
link.classList.toggle('navLinks')

})




let darkBtn = document.getElementById('darkBtn')
let lightBtn = document.getElementById('lightBtn')

function changecolor (){
    document.body.style.backgroundColor = 'black'
    let text = document.querySelectorAll('.text')
    for(i=0; i<text.length; i++){
        text[i].style.color = 'white'
    }
   lightBtn.style.display = 'block'
   darkBtn.style.display = 'none'
}
function lightcolor (){
    document.body.style.backgroundColor = '#f0f4f5'
    let text = document.querySelectorAll('.text')
    for(i=0; i<text.length; i++){
        text[i].style.color = 'black'
    }
   lightBtn.style.display = 'none'
   darkBtn.style.display = 'block'
}



darkBtn.addEventListener('click', changecolor)
lightBtn.addEventListener('click', lightcolor)
