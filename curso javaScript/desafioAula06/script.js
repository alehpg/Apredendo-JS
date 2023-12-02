document.write('<h1>Informações</h1>');
let pessoa = {
 nome :'Fedor Vladimirovich Emelianenko',
 uf : '',
 ano : '44',
 pes : '106',
 tamanho : '1.83',
}
document.write(`<h4> Lutador: ${pessoa.nome} </h3>` )
document.write(`<h4> Nacionalidade: ${pessoa.uf} Russo </h3>` )
document.write(`<h4> Idade: ${pessoa.ano} anos </h3>` )
document.write(`<h4> altura: ${pessoa.tamanho}  m </h3>` )

/* desafio 02 */
document.write('<h1>Frase do dia</h1>');
const dia = '10'
const meses = '9'
const ano = '2021' 
const frase = 'Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade.'
const autoria = 'Aron Swartz'
document.write(` <h4> ${dia}/${meses}/${ano} <br> ${frase} <br>${autoria} </h4>`);

/* desafio 03 */
document.write('<h1>Array de Meses do ano</h1>');
let mes = ['Janeiro, Fevereiro, Março, ...']
document.write(`<h4> ${mes[0]} </h4>`)

/* desafio 04 */
document.write('<h1>Objeto Jogo </h1>');
let jogar = {
     jogo : 'Valorant',
    empresa : 'Riot Games',
    lancamento : '2020',
}

document.write(`<h3>Nome do Jogo:  ${jogar.jogo}</h3> `)
document.write(`<h3>Nome da Empresa:  ${jogar.empresa}</h3> `)
document.write(`<h3>Ano de laçamento:  ${jogar.lancamento}</h3> `)




