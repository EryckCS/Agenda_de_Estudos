// Mostra os dias do mês e marca quando existe uma atividade.
function inicializarCalendario() {
    const tituloMes = document.getElementById("mes_calendario");
    const gradeDias = document.getElementById("dias");
    const botaoVoltar = document.getElementById("voltar");
    const botaoProximo = document.getElementById("proximo");
    const textoData = document.getElementById("texto-data");

    if (!tituloMes || !gradeDias || !botaoVoltar || !botaoProximo) return;

    const hoje = new Date();
    let mesMostrado = new Date(hoje.getFullYear(), hoje.getMonth(), 1);

    if (textoData) {
        textoData.textContent = hoje.toLocaleDateString("pt-BR");
    }

    botaoVoltar.addEventListener("click", function () {
        mesMostrado.setMonth(mesMostrado.getMonth() - 1);
        mostrarDias();
    });

    botaoProximo.addEventListener("click", function () {
        mesMostrado.setMonth(mesMostrado.getMonth() + 1);
        mostrarDias();
    });

    document.addEventListener("atividadesAtualizadas", mostrarDias);

    function mostrarDias() {
        const ano = mesMostrado.getFullYear();
        const mes = mesMostrado.getMonth();
        const primeiroDia = new Date(ano, mes, 1).getDay();
        const diasNoMes = new Date(ano, mes + 1, 0).getDate();
        const atividades = document.querySelectorAll("#listaAtividades .atividade[data-data]");

        tituloMes.textContent = mesMostrado.toLocaleDateString("pt-BR", {
            month: "long",
            year: "numeric"
        });
        gradeDias.innerHTML = "";

        for (let i = 0; i < primeiroDia; i++) {
            const espacoVazio = document.createElement("span");
            espacoVazio.classList.add("dia-vazio");
            gradeDias.appendChild(espacoVazio);
        }

        for (let dia = 1; dia <= diasNoMes; dia++) {
            const data = new Date(ano, mes, dia);
            const dataTexto = formatarData(data);
            const numeroDia = document.createElement("span");

            numeroDia.classList.add("dia-calendario");
            numeroDia.textContent = dia;

            if (dataTexto === formatarData(hoje)) {
                numeroDia.classList.add("dia-hoje");
            }

            for (const atividade of atividades) {
                if (atividade.dataset.data === dataTexto) {
                    numeroDia.classList.add("dia-com-atividade");
                    break;
                }
            }

            gradeDias.appendChild(numeroDia);
        }
    }

    function formatarData(data) {
        const ano = data.getFullYear();
        const mes = String(data.getMonth() + 1).padStart(2, "0");
        const dia = String(data.getDate()).padStart(2, "0");

        return ano + "-" + mes + "-" + dia;
    }

    mostrarDias();
}
