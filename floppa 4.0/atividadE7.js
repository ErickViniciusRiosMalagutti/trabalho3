let dia = document.querySelector("#dia");
let mes = document.querySelector("#mes");
let btt = document.querySelector("#btt");
let resposta = document.querySelector("#resposta");

function calcular(){
    let dia1 = number(dia.value);
    let mes1 = number(mes.value);
    if (mes1 !=12){
        let resp =(((MES1 - 1)* 30) + dia1);
        resposta.textContent = resp;
}else{
        let resp = ((11 * 30) + dia1 + 4);
        resposta.textContent = resp;
    }

}
btt.onclick = function(){
    calcular()
}
