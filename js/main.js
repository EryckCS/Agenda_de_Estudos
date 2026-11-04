//=====================ATIVIDADES DO DIA JAVASCRIPT==========================================
const botaoNovaAtividade = document.querySelector("#btnNovaAtividade");
const formularioAtividade = document.querySelector("#formAtividade");
const botaoCancelar = document.querySelector("#btnCancelarAtividade");
const listaAtividades = document.querySelector("#listaAtividades");
const tituloInput = document.querySelector("#tituloAtividade");
const descricaoInput = document.querySelector("#descricaoAtividade");
const dataInput = document.querySelector("#dataAtividade");
const horaInput = document.querySelector("#horaAtividade");
const botaoConcluir = document.createElement("button");

botaoNovaAtividade.addEventListener("click", function () {
    formularioAtividade.hidden = false;
});

botaoCancelar.addEventListener("click", function () {
    formularioAtividade.hidden = true;
});

formularioAtividade.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const atividade = document.createElement("article");
    atividade.classList.add("atividade");

    const titulo = document.createElement("h3");
    titulo.textContent = tituloInput.value;

    const descricao = document.createElement("p");
    descricao.textContent = descricaoInput.value;

    const prazo = document.createElement("p");
    prazo.textContent = `${dataInput.value} às ${horaInput.value}`;

    // Cria o botão e define o que acontece ao clicar
    const botaoConcluir = document.createElement("button");
    botaoConcluir.textContent = "Atividade Concluída";

    botaoConcluir.addEventListener("click", function () {
        atividade.remove();
    });

    // Coloca os elementos dentro do cartão
    atividade.append(titulo, descricao, prazo, botaoConcluir);

    // Coloca o cartão na lista
    listaAtividades.appendChild(atividade);

    formularioAtividade.reset();
    formularioAtividade.hidden = true;
});
//======================================================================================