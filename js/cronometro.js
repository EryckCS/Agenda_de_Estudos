// Controla o cronômetro de estudo e inicia o descanso automaticamente.
function inicializarCronometro() {
    const PERCENTUAL_DESCANSO = 20;
    let hora = 0;
    let minuto = 0;
    let segundo = 0;
    let tempoDeEstudoEmSegundos = 0;
    let tempoDeDescansoEmSegundos = 0;
    let fase = "estudo";
    let cron = null;

    const visorHora = document.getElementById("hora");
    const visorMinuto = document.getElementById("minuto");
    const visorSegundo = document.getElementById("segundo");
    const statusCronometro = document.getElementById("statusCronometro");
    const textoDescanso = document.getElementById("tempoDescanso");
    const campoHora = document.getElementById("tempoHora");
    const campoMinuto = document.getElementById("tempoMinuto");
    const campoSegundo = document.getElementById("tempoSegundo");

    document.getElementById("btnIniciar").addEventListener("click", iniciar);
    document.getElementById("btnPausar").addEventListener("click", pausar);
    document.getElementById("btnResetar").addEventListener("click", resetar);
    document.getElementById("btnConfirmarTempo").addEventListener("click", escolherTempo);

    function escolherTempo() {
        const horasEscolhidas = Number(campoHora.value);
        const minutosEscolhidos = Number(campoMinuto.value);
        const segundosEscolhidos = Number(campoSegundo.value);
        const valoresValidos =
            Number.isInteger(horasEscolhidas) &&
            Number.isInteger(minutosEscolhidos) &&
            Number.isInteger(segundosEscolhidos) &&
            horasEscolhidas >= 0 &&
            minutosEscolhidos >= 0 && minutosEscolhidos <= 59 &&
            segundosEscolhidos >= 0 && segundosEscolhidos <= 59;

        if (!valoresValidos) {
            alert("Confira os valores de horas, minutos e segundos.");
            return;
        }

        if (horasEscolhidas === 0 && minutosEscolhidos === 0 && segundosEscolhidos === 0) {
            alert("Escolha um tempo maior que zero.");
            return;
        }

        pausar();
        tempoDeEstudoEmSegundos = horasEscolhidas * 3600 + minutosEscolhidos * 60 + segundosEscolhidos;
        tempoDeDescansoEmSegundos = Math.max(1, Math.round(tempoDeEstudoEmSegundos * PERCENTUAL_DESCANSO / 100));
        fase = "estudo";
        definirTempo(tempoDeEstudoEmSegundos);
        statusCronometro.textContent = "Tempo de estudo";
        textoDescanso.textContent = formatarTempo(tempoDeDescansoEmSegundos);
    }

    function iniciar() {
        if (cron !== null || (hora === 0 && minuto === 0 && segundo === 0)) return;
        cron = setInterval(contar, 1000);
    }

    function pausar() {
        clearInterval(cron);
        cron = null;
    }

    function resetar() {
        pausar();
        fase = "estudo";
        tempoDeEstudoEmSegundos = 0;
        tempoDeDescansoEmSegundos = 0;
        definirTempo(0);
        textoDescanso.textContent = "00:00:00";
        statusCronometro.textContent = "Cronômetro zerado";
    }

    function contar() {
        const restante = hora * 3600 + minuto * 60 + segundo - 1;
        definirTempo(restante);

        if (restante === 0) terminarFase();
    }

    function terminarFase() {
        if (fase === "estudo" && tempoDeDescansoEmSegundos > 0) {
            fase = "descanso";
            definirTempo(tempoDeDescansoEmSegundos);
            statusCronometro.textContent = "Hora do descanso";
            return;
        }

        pausar();
        fase = "estudo";
        definirTempo(tempoDeEstudoEmSegundos);
        statusCronometro.textContent = "Descanso concluído. Pronto para estudar novamente.";
    }

    function definirTempo(totalEmSegundos) {
        hora = Math.floor(totalEmSegundos / 3600);
        minuto = Math.floor((totalEmSegundos % 3600) / 60);
        segundo = totalEmSegundos % 60;
        atualizarVisor();
    }

    function formatarTempo(totalEmSegundos) {
        const horas = Math.floor(totalEmSegundos / 3600);
        const minutos = Math.floor((totalEmSegundos % 3600) / 60);
        const segundos = totalEmSegundos % 60;
        return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
    }

    function atualizarVisor() {
        visorHora.textContent = String(hora).padStart(2, "0");
        visorMinuto.textContent = String(minuto).padStart(2, "0");
        visorSegundo.textContent = String(segundo).padStart(2, "0");
    }
}