// Organiza o formulário e a lista de atividades.
function inicializarAtividades() {
    const botaoNovaAtividade = document.querySelector("#btnNovaAtividade");
    const formularioAtividade = document.querySelector("#formAtividade");
    const botaoCancelar = document.querySelector("#btnCancelarAtividade");
    const listaAtividades = document.querySelector("#listaAtividades");
    const tituloInput = document.querySelector("#tituloAtividade");
    const descricaoInput = document.querySelector("#descricaoAtividade");
    const dataInput = document.querySelector("#dataAtividade");
    const horaInput = document.querySelector("#horaAtividade");

    if (
        !botaoNovaAtividade ||
        !formularioAtividade ||
        !botaoCancelar ||
        !listaAtividades ||
        !tituloInput ||
        !descricaoInput ||
        !dataInput ||
        !horaInput
    ) {
        return;
    }

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

        const botaoConcluir = document.createElement("button");
        botaoConcluir.type = "button";
        botaoConcluir.textContent = "Atividade Concluída";
        botaoConcluir.addEventListener("click", function () {
            atividade.remove();
        });

        atividade.append(titulo, descricao, prazo, botaoConcluir);
        listaAtividades.appendChild(atividade);

        formularioAtividade.reset();
        formularioAtividade.hidden = true;
    });

    // TODO: carregar e salvar as atividades no armazenamento local.
}
