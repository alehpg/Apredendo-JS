let carro = ['Fusca', 'Brasilia', 'Gurgel']

/* for = para faça */
/*  i = iterador, interação ou index */

for(let i = 1; i <= 5; i++){
document.write(i + " ")
}

for( let i = 0; i < carro.length; i++){
    document.write(`<li>${carro[i]}</li>`)
}

/* FOREACH foreach = para cada */

let fruta = ['Maçã', 'Pera', 'Banana', 'Melancia', 'Limão']
fruta.forEach(function(fruta ,i){
    document.write(`${i} ${fruta} <br>`)
})

carro.forEach(function(carro){
    document.write(`${carro} <br>`)
})

/* while = enquanto */

let contador = 0;

/* while(contador < fruta.length){
    console.log(fruta[contador])
    contador++
}
 */

let interador = 0 

 do{
    console.log(carro[interador])
    interador++
}while(interador < carro.length)

//aqui o interador esta com valor 3
console.log(interador) 