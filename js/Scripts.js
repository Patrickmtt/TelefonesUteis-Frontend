const abreModal = document.querySelector("#esqueceuSenha");
const fechaModal = document.querySelector(".botaoModal");
const modal = document.querySelector("dialog");


abreModal.onclick = function(){
    modal.showModal()
};

fechaModal.onclick = function(){
    modal.close()
}