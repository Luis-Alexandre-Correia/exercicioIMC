//Depois que declarada a constante com a palavra const, não podemos modificar o valor da constante
/*Regras: Não podemos declarar variáveis com palavras que são reservadas para a função. Ex: const if (if é uma palavra reservada da linguagem)
          Constantes precisam ter nomes significativos, que representem corretamente o que pretendem definir
          Não podemos começar o nome da constante com número, mas podemos colocar no meio do nome
          Os nomes das constantes não podem conter espaços e caracteres especiais, é utilizado letra maiuscula para separar as palavras
          As const são case-sensitivas, ou seja, letras maiúsculas e minúsculas fazem diferença
          NÃO UTILIZE VAR, UTILIZE O CONST, SEMPRE QUE O VALOR FOR CONSTANTE*/



const nome = 'Luis';
//Depois de declarada a constante, eu não posso vir aqui e colocar "nome = 'Marcos'", porque a constante já é = 'Luis'
console.log(nome);

const primeiroNumero = 3;
const segundoNumero = 2;
const resultado = primeiroNumero + segundoNumero;
console.log(resultado);

const resultadox2 = resultado * 2;
const resultadox3 = resultadox2 + resultado;
console.log(resultadox2,resultadox3);

let tri = 3;

const rersultadoTriplicado = resultado * tri
console.log(rersultadoTriplicado);

console.log(typeof primeiroNumero);