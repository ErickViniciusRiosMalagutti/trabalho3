let v1 = document.querySelector("#v1");
let v2 = document.querySelector("#v2");
let but = document.querySelector("#but");
let respo = document.querySelector("#respo");

function sla (){
let n1 = Number(v1.value);
let n2 = Number(v2.value);
let resp = (n1 * n2);

respo.textContent = resp;
}

but.onclick = function(){
    sla();
}