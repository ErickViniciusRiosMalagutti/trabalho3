let cavalo = document.querySelector("#cavalo");
let btc = document.querySelector("#btc");
let respos = document.querySelector("#respos");

function ferraduras(){
    let olavac = Number(cavalo.value);
    let  resp = (olavac * 4);
    
respos.textContent = (resp +  " quantidade de ferraduras para os cavalos");
}

btc.onclick = function(){
    ferraduras();
}