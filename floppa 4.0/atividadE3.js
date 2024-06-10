let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let btt = document.querySelector("#btt");
let resposta = document.querySelector("#resposta");
let resposta2 = document.querySelector("#resposta2");

function paes(){
let m1 = Number(n1.value);
let m2 = Number(n2.value);
let resp = ((m1 * 0.12) + ((m2 * 1.50)));
let resp3 = (resp * 0.10);
    
    
   
resposta.textContent = resp.toFixed(2) + " quantidade total de vendas"
resposta2.textContent = resp3.toFixed(2) + " quantidade para a poupanca"
}

btt.onclick = function(){
    paes();
}