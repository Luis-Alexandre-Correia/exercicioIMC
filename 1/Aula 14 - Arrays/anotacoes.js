const alunos = ['Luis', 'Ana', 'Maria']; //os colchetes criam os arrays, 
                                         //pode ter mais de um tipo de dados, mas o ideal é não misturar os tipos de dados
console.log(alunos[1]);

alunos[1] = 'Pedro'; // esse comando substitui o indice dentro dos colchetes

console.log(alunos[1]);

alunos[3] = 'Luiza'; //insere um item no array

console.log(alunos.length); //mostra o comprimento do array

alunos[alunos.length] = 'Luana';//ele insere após o ultimo item do array, pois considera o comprimento dele (i+1)

alunos.push('Roy')//insere da mesma forma, após o ultimo

console.log(alunos);

alunos.unshift('Marcos');//insere o novo elemento no incio do array

console.log(alunos)

alunos.pop(); //Deleta o ultimo item da lista
const removido = alunos.pop();//pode ser usado para guardar a ultima variavel

console.log(alunos);//sem dois itens pq o pop foi usado duas vezes

console.log(removido);//ultimo item removido

const removido1 = alunos.shift();//mesma mecanica do pop, porem para o primeiro elemento
console.log(alunos);
console.log(removido1);

delete alunos[1]; // delete o item do array, porém o indice não é deletado, ficando assim, um item vazio
console.log(alunos);

console.log(alunos[50]);//itens que não existem apresentam o resultado de undefined

console.log(alunos.slice(0,3)); //corta uma fatia do array
console.log(alunos.slice(0,-1)); //mesma forma
console.log(typeof alunos);
console.log(alunos instanceof Array); //se retornar true, é um array