const redefinirSenha = document.querySelector("#esqueceu-senha");
const modalRedefinirSenha = document.querySelector("#recuperar-senha");
const sair = document.querySelector(".modal-email__fechar");

redefinirSenha.onclick = function(){
    modalRedefinirSenha.showModal();
}

sair.onclick = function(){
    modalRedefinirSenha.close();
}

