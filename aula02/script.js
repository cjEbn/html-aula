let botao = document.getElementById("botaoTema");
let icone = document.getElementById("iconeTema");
let textoBotao = document.getElementById("textoBotao");
let mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function(){
    document.body.classList.toggle("escuro");
    if(document.body.classList.contains("escuro")){
        icone.innerHTML = "&#9728;";
        textoBotao.textContent = "Modo claro";
        mensagem.textContent = "Estamos no tema escuro";
    }else{
        icone.innerHTML = "&#9790;";
        textoBotao.textContent = "Modo escuro";
        mensagem.textContent = "Estamos no tema claro";
    }
});

// animar cursor
let cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function(evento){
    cursor.style.left = evento.clientX + "px";
    cursor.style.top = evento.clientY + "px";
});
