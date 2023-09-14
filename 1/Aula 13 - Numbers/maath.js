//objeto math e as suas funçOes

let num = 2.54213;

console.log(Math.floor(num)); //arredonda o número para baixo

console.log(Math.ceil(num)); //arredonda o número para cima

console.log(Math.round(num)); //arredonda os números conforme as casas decimais

console.log(Math.max(2,3,67,345,7,324,236,8,5,3456,7,345)); //retorna o maior valor de uma lista

console.log(Math.min(2,3,67,345,7,324,236,8,5,3456,7,345)); //retorna o menor valor de uma lista

console.log(Math.random()); //gera um número aleatório

console.log(Math.random()*(10-5) +5); /*essa expressão é doida, retorna um número entre o máximo (10)
                                        e o mínimo que é o menor número (5).*/

console.log(Math.round(Math.random()*(10-5) +5));

console.log(100 /0)//divisões por 0 dão o resultado infinito