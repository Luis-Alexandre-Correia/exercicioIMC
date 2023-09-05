const data = new Date();

console.log(data);

const data2 = new Date(2023,9,5,15,6,9,100);//ano, mes(o mês começa a ser contado do zero, por isso o 9 é o mês 10),dia,hora,min, sec)

console.log(data2.toString());//com o to string, a data é escrita por extenso

const data3 = new Date('2023-09-05 15:46:59');//a data pode ser digitada em string

console.log(data3);
console.log('Dia', data3.getDate()); //getDate extrai apenas o dia da data
console.log('Mês', data3.getMonth());
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Minuto', data3.getMinutes());
console.log('Segundo', data3.getSeconds());
console.log('Milisegundos', data3.getMilliseconds())
console.log('Dia da semana', data3.getDay());