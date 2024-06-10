let quilo = document.querySelector("#quilo");
let btp = document.querySelector("#btp");
let resposta = document.querySelector("#resposta");

function peso(){
    let q1 = Number(quilo.value);
    let resp1 = (q1 * 12.00);
    let resp2 = (resp1 - 0.45 * (12.00))

    resposta.textContent = resp1.toFixed(2);
    resposta.textContent = resp2.toFixed(2) + "R$ é o preço da sua refeição";

}

btp.onclick = function(){
    peso();
}