const criarConvite = document.querySelector("#botao-convite");
const modalConvite = document.querySelector("#criar-convite");
criarConvite.onclick = () => (modalConvite.showModal());

const adicionarContato = document.querySelector("#botao-contato");
const modalContato = document.querySelector("#adicionar-contato");
const cancelarUsuario = document.querySelector("#modal-contato__botao-cancelar")
adicionarContato.onclick = () => (modalContato.showModal());
cancelarUsuario.onclick = () => (modalContato.close());

const editarUsuario = document.querySelector(".modal-editar-usuario")
const sair = document.querySelector(".modal-email__fechar");
sair.onclick = () => (modalConvite.close());

document.querySelector("#modal-contato__botao-salvar").onclick = function(){

    let campos = [
        document.querySelector("#nome"),
        document.querySelector("#unidade"),
        document.querySelector("#ramal"),
        document.querySelector("#numero"),
        document.querySelector("#email")
    ]

    var areaCard = document.querySelector(".area-card-contato")
    let elements =`
    <img src="assets/adicionarFoto.png" alt="Adicionar Contato" class="foto-colaborador">
        <div class="card-contato__dados">
        <p id="card-contato__nome">${campos[0].value}</p>
        <p id="unidade">${campos[1].value}</p>
        <p class="card-contato__ramal">Ramal ${campos[2].value}</p>
        <p>${campos[3].value}</p>
        <p>${campos[4].value}</p>
    </div>
    </div>`
   
    var card = document.createElement("div");
    card.setAttribute("class", "card-contato");
    areaCard.appendChild(card);
    card.insertAdjacentHTML("beforeend",elements);
   
    var editar = document.createElement('img')
    editar.setAttribute("src", "assets/iconeEditar.png")
    editar.setAttribute("class", "card-contato__icon")
    editar.onclick = () =>(editarUsuario.showModal());
    var remover = document.createElement('img')
    remover.setAttribute("src", "assets/iconeDeletar.png")
    remover.setAttribute("class", "card-contato__icon")
    remover.onclick = () =>(card.remove());

    card.appendChild(editar);
    card.appendChild(remover);

    modalContato.close();

};
