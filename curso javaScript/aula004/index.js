let produtos = ['Arroz' , 'Feijão' , 'Leite']
var codigos = Array(10, 20, 30)
let meses = ['Jan' , 'Fev' , 'Mar' , 'Abr']
meses[0] = "Janeiro"
var test = Array(10)
test[0] = "oi"
test[9] = "tudo bem ?"
test[10] = 'opa!'


/* ADICIONAR  no final push = empurre */
 produtos.push  ('Açucar' , 'Trigo' , 'Doce')
 codigos.push  (40, 50, 60 ,70 )
 meses.push ( 'Mai' , 'Jun' , 'Ago' )

 /* REMOVE do final pop = estorar */
 produtos.pop()
 codigos.pop()
 meses.pop()
 /* ADICIONAR no inicio unshift */
 produtos.unshift('Uva', 'Maçã')

 /* REMOVER do inicio  */
 produtos.shift()

 /* REMOVER de uma posição especifica splice */
 /* splice = emendar */
 /* posição inicial, qauntos remover */
  codigos.splice(1, 3)

/* COPIAR array slice = fatiar porção  */
/* posição inicial, quantos copiar */
let meses1 = meses.slice()
let meses2 = meses.slice(0,3)

/* VER O TAMANHO DA array length comprimento */
meses.length
meses1.length
meses2.length

/* spreed operator... copiar */
let teste = [...produtos, 'Ovo' , 'Pera']