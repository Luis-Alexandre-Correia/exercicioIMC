// valores primitivos: strings, number, boolean,undefined, null
let a = 1;
let b = a;
//nesse caso, se alteramos o a, após atribuilos ao b, o valor de b não se altera, pois os valores são copiados

//valores por referencia: array, object, function

let c = [1,2,3,4];
let d = c;

//se alterarmos o valor de c, os valores de d se alteram automaticamente pois referenciam o mesmo local