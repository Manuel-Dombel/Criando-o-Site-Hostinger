//Declarando variáveis
let botaopesq = document.querySelector(".pesquisar")
let txtpesq = document.getElementById("pesquisar")

botaopesq.addEventListener('click',function(){
    if(txtpesq.style.visibility =='visible')
        txtpesq.style.visibility = 'hidden';
    else
        txtpesq.style.visibility = 'visible';
})