const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> A raiz quadrada do seu número é ${numero ** 0.5}</br>
                    ${numero} é inteiro? ${Number.isInteger(numero)}</br>
                    ${numero} é NaN? ${Number.isNaN(numero)}</br>
                    ${numero} arredondando para baixo: ${Math.floor(numero)}</br>
                    ${numero} arredondando para cima ${Math.ceil(numero)}</br>
                    ${numero} com 2 casas decimais ${numero.toFixed(2)}</br></p>`