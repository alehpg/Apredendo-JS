//selecionar input com o numero digitado
let valorDigitado = document.querySelector('#valorEmReal')
//selecionar os elementos radios (criar um array deles)
let moedaSele = document.getElementsByName('moedaEstrangeira')

let aviso = document.querySelector('#aviso')

//selecionar os botoes
let btnconvert = document.querySelector('#btnConverter') 
let btnlimpa = document.querySelector('#btnLimpar') 

// contador do dia 10/12/2023   11/12/2023
let valorDolar = 4.92
let valorEuro = 5.29
let valorLibra = 6.17
let valorReal = 0
let valorBitocin = 214.629

let moedaEstrangeira = ''
let moedaConvertida = ''

//mensagem foramtada para exibir valores monetario
function mensagemFortmatada(moedaConvertida){
    isNaN(valorReal) ? valorReal = 0 : ''
    console.log("Moeda Convertida " + moedaConvertida)
    aviso.textContent = "O valor " + (valorReal).toLocaleString('pt-BR' , {style:'currency', currency: 'BRL'}) + " covertido em " + moedaEstrangeira + " é " + moedaConvertida

}

/* verificar se foi digitado algum valor para poder converte  */

function bloquearBotao(){
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null ){
        btnconvert.setAttribute('disabled', 'disabled')
        btnconvert.style.background = '#ccc'
        btnconvert.style.cursos = 'not-allowed'
    }
}

/* reativar o botão  */
function ativarBotao() {
    if(valorDigitado.value > 0 ){
        btnconvert.removeAttribute('disabled')
        btnconvert.style.background = '#ffc107'
        btnconvert.style.cursos = 'pointer'
    } else {
         console.log('não ativou ')
    }
}

/* VERIFICAR QUAL BOTÃO RADIO ESTA MARCADO checked ou checked == true */
/* Vincular a verificação a um evento, click no botão converter */
btnconvert.addEventListener('click', function(){
    /* FAZER parseFloat dos valores monetario (converter string para float) */
    valorReal = parseFloat(valorDigitado.value)

    console.log('Escolhe a moeda estrangeira ')
    for(let i = 0 ; i < moedaSele.length; i++){
        if(moedaSele[i].checked){
            moedaEstrangeira = moedaSele[i].value
            console.log(moedaEstrangeira)
        }
    }

    /* use uma estrutura escolha caso para escolher 
    qual e a moeda estrangerira que foi selecionada */

    switch(moedaEstrangeira){
        case 'Dólar':
            moedaConvertida = valorReal / valorDolar
            mensagemFortmatada(moedaConvertida.toLocaleString('es-US', {style: 'currency', currency:'USD'}))
            break
        case 'Euro':
            moedaConvertida = valorReal / valorEuro
            mensagemFortmatada(moedaConvertida.toLocaleString('de-DE', {style: 'currency', currency:'EUR'}))
            break
        
        case 'Libra':
            moedaConvertida = valorReal / valorLibra
            mensagemFortmatada(moedaConvertida.toLocaleString('en-GB', {style:'currency', currency:'GBP'}))
            break
        case 'Bitcoins':
            moedaConvertida = valorReal / valorBitocin
            mensagemFortmatada(parseFloat(moedaConvertida).toFixed(5))
            break
        default:
            aviso.textContent = 'Escolha uma moeda estrangeira '
    }
    isNaN(moedaConvertida) ? moedaConvertida = 0 : ''
})


btnlimpa.addEventListener('click' , function(){
    valorDigitado.focus()
    valorDigitado.value = ''
    aviso.textContent = 'Digite um valor, escolha a moeda e converter'
    moedaSele[0].checked = false
    moedaSele[1].checked = false
    moedaSele[2].checked = false
    moedaSele[3].checked = false
})
