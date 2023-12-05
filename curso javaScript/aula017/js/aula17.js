let NumeroSecreto = 0
let contador = 1
let min = 1
let max = 10
let situacao = ''

//selecionar elementos

let inputNumero = document.querySelector('#inputNumero')
let btnChut = document.querySelector('#btnChutar')
let aviso = document.querySelector('#aviso')
let music = document.querySelector('#musicaDeFundo')


//funçoes ou metados para controlar o jogo 

function gerarNumeroSecreto() {
    //gerar numero
    NumeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(NumeroSecreto)
}

function bloquearBtnchutar() {
    btnChut.setAttribute('disabled', 'disabled')
    btnChut.style.background = '#ccc'
    btnChut.style.cursor = 'not-allowed'
}
function ativarBtnChutar() {
    btnChut.removeAttribute('disabled')
    btnChut.style.background = '#222'
    btnChut.style.cursor = 'pointer'
}

function validarNumeroDigitado(numero) {
    if (numero <= 0 || numero > 10) {
        console.log('Tentativa inválida!')
        aviso.classList.add('errou')
        mensagemRapida('Você não está sendo um(a) mentalista! digite um número inteiro entre 1 e 10.')
        bloquearBtnchutar()
        inputNumero.numero = ''
    } else {
        console.log('Número Válido')
    }
}

/* tocar para manipular  */
function tocarMusicaDeFundo() {
    music.play()
}

function ativarDesativarMusica() {
    if (music.muted) {
        music.muted = false;
    } else {
        music.muted = true;
    }
}

function pausarMusicaDeFundo() {
    music.pause()
    music.currentTime = 0;
}

function jogar() {
    console.log('Jogando')
    verificarSeAcertou()
}

function mensagemRapida(mensagem) {
    aviso.textContent = mensagem
    setTimeout(function () {
        aviso.textContent = ''
        aviso.classList.remove('acertou')
        aviso.classList.remove('errou')
        inputNumero.value = ''

    }, 3000)
}

function gamerOuver(situacao) {
    switch (situacao) {

        case 'Acertou':
            aviso.classList.add('acertou')
            mensagemRapida('Acertou, o número secreto era ' + NumeroSecreto)

            break

        case 'Chute maior':
            mensagemRapida('chute maior que o número secreto')
            aviso.classList.add('errou')
            break

        case 'Chute menor':
            aviso.classList.add('errou')
            mensagemRapida('chute menor que o número secreto')
            break

        default:
            console.log('Informa a sitauação')
    }
}

function verificarSeAcertou() {
    chute = parseInt(document.querySelector('#inputNumero').value)
    console.log('n° do chute ' + contador)
    console.log('chute ' + chute)

    if (NumeroSecreto === chute) {
        console.log('Acertou')
        situacao = 'Acertou'
        gamerOuver(situacao)
        gerarNumeroSecreto()// gerar novo nuemro secreto 
    } else if (chute > NumeroSecreto) {
        console.log('Chute maior')
        situacao = 'Chute maior'
        gamerOuver(situacao)

    } else if (chute < NumeroSecreto) {
        console.log('Chute menor')
        situacao = 'Chute menor'
        gamerOuver(situacao)
    } else {
        console.log('impossível verificar se acertou!')
    }
}