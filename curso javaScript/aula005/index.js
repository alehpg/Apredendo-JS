/* CRIAR OBJETOS */

let pessoa = {
    nome  : 'Alessandro',
    Idade : 18 ,
    peso  : 87.7  ,
    altura : 1.82,
    doador : false, 

}

let produtos = {
    descricao : [],
    preco : []
}
 const carro = {
    Marca : ['Ford' , 'Fiat' , 'GM'],
    Modelo : ['KA' , 'Uno',  'Corsa'],
    ano : [ 1999, 2005, 2014]
}

/* ACESSAR uma propriedade usando .  */
/* pessoa.nome()
pessoa.Idade()
pessoa.peso()
pessoa.altura() */

/* ACESSAR PROPRIEDADE usando [''] */
/* pessoa['nome']
pessoa['Idade']
pessoa['peso']
pessoa['altura'] */

/* OPERAÇÃO IMC = peso / (altura * altura) */
let IMC = pessoa.peso / (pessoa.altura * pessoa.altura)

/* .toFixed(X) */
/* limita o numero de casa decimais */
console.log("IMC " + IMC.toFixed(2))

/* ALTERAR/ATUALIZAR VALOR de propriedade */
pessoa.nome = 'Alessandro Cordeiro'
produtos.descricao = ['Arroz']
produtos.preco = ['4.99']

/* usando o operador spreed... */

produtos.descricao = [...produtos.descricao, 'Feijão' , 'Leite']
produtos.preco = [...produtos.preco, '5.99', '3.45']
/* usando o operador spreed em objetos const */
carro.Marca = [... carro.Marca, 'BMW']
carro.Modelo = [... carro.Modelo, 'X6']
carro.ano = [... carro.ano, 2020]