function criaPessoa(nome, sobrenome, idade){ //O que está definido na função, são os parâmetros do objeto\
    return{nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luis', 'Pereira',30) //O que é passado para a função, é chamado de argumento

const pessoa2 = criaPessoa('Jean', 'Manja', 40);

console.log(pessoa1);
console.log(pessoa2.nome);
console.log(pessoa1.fala())

