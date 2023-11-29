let titulo = document.querySelector('h1')
titulo.textContent ='funções no JS'
let box = document.querySelectorAll('box')

/* funções sem parametros e sem retorno (procedure) */

function olamundo(){
    document.write('olá mundo sem restorno<br>')
}

/* funções sem parametros e com retorno (function) */

function olamundo2(){
    return 'olá mundo com retorno<br>'
}
/* chamar a função = executar ela */
olamundo()
document.write(olamundo2())

let x = 2
let y = 1
let messagem = 'valorant é horrivel'

function somar(a,b){
    document.write(a + b +'<br>')
}

function somar2(c,d){
    return c + d
}
somar(x,y)
somar(10,5)

document.write(`<p>${somar2(x, y)}</p>`)
document.write(`<p>${somar2(10, 5)}</p>`)

/* função anonima = não tem nomde 
pode ou não ter parametros
pode ou não ter retorno
 */

titulo.addEventListener('click', function (){
    alert('olá mundo')
})

/* Arrow functions ES6 2015 em diante */

const olaMundoArrow = () => document.write('Olá mundo!!!')

/* não precisa usar a palavara return
   não precisa colocar { } se for so uma instrução
*/

const olaMundoArrow2 = () => '<p> Olá mundo com Arrow function</p>'
olaMundoArrow()
document.write(olaMundoArrow2())