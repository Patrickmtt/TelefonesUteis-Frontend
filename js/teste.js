const criarConvite = document.querySelector("#botao-convite");
const modalConvite = document.querySelector("#criar-convite")
const adicionarContato = document.querySelector("#botao-contato");
const modalContato = document.querySelector("#adicionar-contato");
const sair = document.querySelector(".modal-email__fechar");

adicionarContato.onclick = function(){
    modalContato.showModal();
}

criarConvite.onclick = function(){
    modalConvite.showModal();
}

sair.onclick = function(){
    modalConvite.close();
}