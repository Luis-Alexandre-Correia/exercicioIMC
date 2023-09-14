function AjusteData(num){
return num >=10? num : `0${num}`;
}


function formataData(data){
    const dia = AjusteData(data.getDate());
    const mes = AjusteData(data.getMonth() +1);
    const ano = AjusteData(data.getFullYear());
    const hora = AjusteData(data.getHours());
    const min = AjusteData(data.getMinutes());
    const seg = AjusteData(data.getSeconds());
    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
