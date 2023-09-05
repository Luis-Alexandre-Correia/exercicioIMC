let nome;//Nesse momento, apenas a variável está declarado, porém sem definição alguma, que pode ser definido posteriormente.
nome = 'Qualquer valor'; //Definindo a variável nome
console.log(nome);

nome = 'Redefinindo o valor'
console.log(nome)

//Depois que declarada a variável com a palavra let, não podemos declarar novamente com essa função
/*Regras: Não podemos declarar variáveis com palavras que são reservadas para a função. Ex: let if (if é uma palavra reservada da linguagem)
          Variáveis precisam ter nomes significativos, que representem corretamente o que pretendem definir
          Não podemos começar o nome da variável com número, mas podemos colocar no meio do nome
          Os nomes das variáveis não podem conter espaços e caracteres especiais, é utilizado letra maiuscula para separar as palavras
          As variáveis são case-sensitivas, ou seja, letras maiúsculas e minúsculas fazem diferença
          NÃO UTILIZE VAR, UTILIZE O LET, SEMPRE QUE O VALOR FOR VARIAR*/
        

let nomeCliente = 'Lucas';
    nomeCliente = 'Luís';//Essa redefinição de variável, sobrepõe o valor definido anteriormente
console.log(nomeCliente);