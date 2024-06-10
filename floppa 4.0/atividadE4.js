let ano = document.querySelector("#ano");
let nom = document.querySelector("#nom");
let btt = document.querySelector("#btt");
let resposta1 = document.querySelector("#resposta1");

function idade(){
    let a1 = (nom.value);
    let a2 = Number(ano.value);
    let resp =  (a2 * 365);
    
    resposta1.textContent = a1 + " voce viveu " + resp + " dias";

    
}


btt.onclick = function(){
    idade();
}