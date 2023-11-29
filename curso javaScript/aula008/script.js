 let title = document.querySelector('#title');
 title.textContent = 'DOM'

 let testando = document.querySelectorAll ('.box')
 document.write(testando[0].textContent)
 document.write(testando[1].textContent)// usado para mudar o conteudo HTML
 document.write(testando[2].textContent)

/* testando[0].textContent = 'Testando' */ // usado para mudar o conteudo HTML

 let tagname = document.getElementsByTagName ('div')
 document.write(tagname[0].textContent = 'Olá mundo')// usado para mudar o conteudo HTML