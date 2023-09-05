//** = potencia
// % = resto de divisao
// ++ adiciona 1
//NaN = not a number 
let contador;
contador =1;
contador++;
++contador;
console.log(contador); // const não funciona para isso pq ele cria uma constante.
console.log(contador++);//primeiro ele executa a função console e depois adiciona o 1, por isso que não aparece nesse primerio momento
console.log(contador);//-- é a mesma coisa

let contador1 = 0;
contador1 += 2;
contador1 += 2;
contador1 += 2;//operadores de atribuição
console.log(contador1);

contador1 *= 2;
contador1 *= 2;
contador1 *= 2; // operadores que adicionam/multiplicam e já atualizam o valor 
console.log(contador1);

const x1 = 10;
const x2 = '2'; //podemos usar o parseInt para transformar a string em número inteiro (parseFloat, parseString)
const x3 = parseInt(x2);
console.log(x1 * x3);

const x4 = 10;
const x5 = '2'; //podemos usar Number, que considera o número todo
const x6 = Number(x5);
console.log(x4 * x6);