let numeroSorteado = 0 
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function(){
    //adicionar a animação
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')


    //tocar o efeito sonoro
    dadoRolando.play()

    //ocultar o botão soretar 
    btnSortear.style.display = 'none'

    //usar setTimeout para excutar a ação 
    setTimeout(function(){
        //Armazenar numero sorteado na var
        numeroSorteado = getRandomInt(1,6)

        //escrever o numero sorteado no console
        console.log(numeroSorteado)

        //definir atributo src com base no numero
        imgDado.setAttribute('src' , '../dado/'+numeroSorteado+'.png')
        //escrever no paraggrafo o numero sorteado
        sorteado.textContent = numeroSorteado

        //exibir o botão sortear 
        btnSortear.style.display = 'inline-block'

        //retirar a animação
        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    

    },1750)
})
//função que gera numero randomico inteiro
//incluindo o minimo e o maximo
function getRandomInt(min, max){
    min = Math.ceil(min) // arredondar para cima ceil = teto
    max = Math.floor(max) //arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
}