let sit1 = document.querySelector('#sit1')
let sit2 = document.querySelector('#sit2')
let sit3 = document.querySelector('#sit3')
let escolha = document.querySelector('#escolha')

let notaFinal1 = 3
let notaFinal2 = 8
let notaFinal3 = 5

/*  CONDICIONAIS */
/* IF */
if (notaFinal1 >= 7) {
    sit1.textContent = 'APROVADO'
}
/* else if */
if (notaFinal2 >= 7) {
    sit2.textContent = 'APROVADO(a)'
} else (
    sit2.textContent = 'REPROVADO(a)'
)

if (notaFinal3 >= 7) {
    sit3.textContent = 'APROVADO(a)'
} else if (notaFinal3 <= 3) {
    sit3.textContent = 'REPROVADO(a)'
} else {
    sit3.textContent = 'RECUPERAÇÃO'
}


let situacao = ''
/* let situacao = 'aprovado'
let situacao = 'reprovado'
let situacao = 'recuperação' */

switch (situacao) {
    case 'aprovado':
        escolha.textContent = 'passou de ano'
        break
    case 'reprovado':
        escolha.textContent = 'Não passou de ano'
        break
    case 'recuperação':
        escolha.textContent = 'ainda tem uma chance'
        break
    default:
        escolha.textContent = 'estude'
}