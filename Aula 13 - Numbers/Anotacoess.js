let num1 = 10.2158 // number
let num2 = 5

console.log(num1 + num2); //manipulação normal de números

console.log(num1.toString() + num2 );// essa manipulação transforma o numero em string e o '+' faz uma concatenaçao

console.log(num1.toString(2)); // transformação do numero para binario

console.log(num1.toFixed(2)); // arredonda o número para a quantidade de casas decimais desejadas

console.log(Number.isInteger(num1)); //esse metodo valida se o número é inteiro ou não

let temp = num1 * 'ola'; //essa conta gera um erro de NaN

console.log(Number.isNaN(temp));

let num3 = 0.7;
let num4 = 0.1
num3+=num4;
num3+=num4;
num3+=num4;

console.log(num3); // esse numero não dá inteiro, devido a aproximacao feita automaticamente pela linguagem

console.log(Number.isInteger(num3)); // aqui o teste

num3 = parseFloat(num3.toFixed(2)); //essa manipulação corrige as aproximações para números inteiros

console.log(num3);

console.log(Number.isInteger(num3));
