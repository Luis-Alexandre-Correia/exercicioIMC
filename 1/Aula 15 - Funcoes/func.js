function multiplicacao(x,y) {
resultado = x * y;
return resultado;

}



function saudacao(nome){
return `Bom dia ${nome}`;

}

const variavel = saudacao('Pedro');
console.log(variavel); 

console.log(multiplicacao(2,3));

//existe outra forma de declarar funçao

const raiz = function(n){ 
return n **0.5
}

console.log(raiz(9))

const raiz1 = n =>n **0.5;

console.log(raiz1(9))