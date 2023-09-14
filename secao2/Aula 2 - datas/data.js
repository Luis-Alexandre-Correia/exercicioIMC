const data = new Date();

console.log(data);

const data2 = new Date(2023,9,5,15,6,9,100);//ano, mes(o mês começa a ser contado do zero, por isso o 9 é o mês 10),dia,hora,min, sec)

console.log(data2.toString());//com o to string, a data é escrita por extenso

const data3 = new Date('2023-09-05 15:46:59');//a data pode ser digitada em string

console.log(data3);
console.log('Dia', data3.getDate()); //getDate extrai apenas o dia da data
console.log('Mês', data3.getMonth()+1); //Extrai o mes (a contagem do mês começa no zero, por isso adicionei 1)
console.log('Ano', data3.getFullYear()); //extrai o ano
console.log('Hora', data3.getHours());// extrai a hora
console.log('Minuto', data3.getMinutes());// extrai os minutos
console.log('Segundo', data3.getSeconds());// extrai os segundos
console.log('Milisegundos', data3.getMilliseconds());//extrai os milisegundos
console.log('Dia da semana', data3.getDay());//extrai o dia da semana
console.log(Date.now());//mostra os milesemos de segundos que estão além da data de marco zero
const data4 = new Date(1693943487775);//pega os milesemos e trasforma na data que eles representam
console.log(data4);