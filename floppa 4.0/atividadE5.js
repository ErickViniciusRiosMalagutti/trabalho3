let gas = document.querySelector("#gas");
let pre = document.querySelector("#pre");
let bttt = document.querySelector("#bttt");
let resposta = document.querySelector("#resposta");

function gasos(){
    let g1 = Number(gas.value);
    let p1 = Number(pre.value);
    let resp1 = (g1 * p1);

    resposta.textContent = resp1 + " foi a quantidade de litros colocados";
}

bttt.onclick = function(){
    gasos();
}