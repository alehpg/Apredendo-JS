let titulo = document.querySelector('h1')
titulo.textContent = 'Manipular CSS'

let imagem = document.querySelector('#foto')
imagem.setAttribute('src', '../aula009/aleatorio.jpg')
imagem.setAttribute('width' , '280')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = 'red' /* ou titulo.style.color = 'red' */
titulo.style.backgroundColor = 'blue'
titulo.style.borderRadius = '10px'
titulo.style.textAlign = 'center'

let box = document.querySelectorAll('.box')
box[0].setAttribute('class' , 'escura')
/* box[0].removeAttribute('class') */ //A retirada da class


/* modo de cor */

let tela = document.querySelector('.principal')
let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')

btnDark.addEventListener ('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark(){
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
}

function modoLight(){
    console.log('modo dark')
    tela.classList.remove("dark");
    tela.classList.add("light");
}

 
 