let exemploString = 'um \texto' // a barra invertida '\' pula o caractere seguinte

console.log(exemploString);

exemploString = 'um \\texto' // com 2 barras invertidadas, isso não acontece

console.log(exemploString);


exemploString = 'um texto';
//as strings são indexadas, ou seja: 'um texto', 0 =u  1 = m, e assim por diant

console.log(exemploString[0]);

//mesma coisa com códigos nativos de sting no javaScript

console.log(exemploString.charAt(0));

//para encontrar o índice de uma palavra se utiliza
console.log(exemploString.indexOf('texto'));

//podemos ainda selecionar de qual indice será iniciada a pesquisa

console.log(exemploString.indexOf('o',3));

//contagem de trás para frente

console.log(exemploString.lastIndexOf('o'));

//formas de concatenação de texto

console.log(exemploString.concat(' em um papel.'));
console.log(exemploString + ' em um papel.');
console.log(`${exemploString} em um papel.`)


//expressões regulares wtf

console.log(exemploString.match(/[a-z]/));

console.log(exemploString.search(/[a-z]/));

console.log(exemploString.replace('um','outro'));

console.log(exemploString.replace(/um/,'outro'));

exemploString = 'O rato roeu a roupa do rei de roma'

console.log(exemploString.replace(/r/,'#')); // substitui apenas a primeira letra

console.log(exemploString.replace(/r/g,'#')); //substitui todas as inicidencias da letra r

console.log(exemploString.length);  // esse atributo da string que traz o cumprimento dela

console.log(exemploString.slice(2,6)); /*esse atributo retira uma fatia da string com os intervalos entre os indices
                                         com os indices negativos, a contagem vem de trrás para frente.*/

console.log(exemploString.split(' ')); //o comando split separa a sting segundo o caractere utilizado para a divisão

console.log(exemploString.split(' ', 2)); //podemos ainda colocar quantas vezes a fatia será feita

console.log(exemploString.toLocaleUpperCase()); //tudo para letra maiúscula

console.log(exemploString.toLocaleLowerCase()); // tudo para minúscula