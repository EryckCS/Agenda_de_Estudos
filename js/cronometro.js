// Controla o cronômetro de estudos.
function inicializarCronometro() {
    let hora = 0;
    let minuto = 0;
    let segundo = 0;
    let cron = null;

    const visorHora = document.getElementById("hora");
    const visorMinuto = document.getElementById("minuto");
    const visorSegundo = document.getElementById("segundo");
    
    document.getElementById("btnIniciar").addEventListener("click", iniciar);
    document.getElementById("btnPausar").addEventListener("click", pausar);
    document.getElementById("btnResetar").addEventListener("click", resetar);
    document.getElementById("btnConfirmarTempo").addEventListener("click", escolha);

    function escolha (){
        const horasEscolhidas = Number(tempoHora.value);
        const minutosEscolhidos = Number(tempoMinuto.value);
        const segundosEscolhidos = Number(tempoSegundo.value);

        const valoresValidos =
            Number.isInteger(horasEscolhidas) &&
            Number.isInteger(minutosEscolhidos) &&
            Number.isInteger(segundosEscolhidos) &&
            horasEscolhidas >= 0 &&
            minutosEscolhidos >= 0 &&
            minutosEscolhidos <= 59 &&
            segundosEscolhidos >= 0 &&
            segundosEscolhidos <= 59;
                if (!valoresValidos) {
        alert("Confira os valores de horas, minutos e segundos.");
        return;
    }

        if (horasEscolhidas === 0 &&
            minutosEscolhidos === 0 &&
            segundosEscolhidos === 0) {
            alert("Escolha um tempo maior que zero.");
            return;
        }

        pausar();

        hora = horasEscolhidas;
        minuto = minutosEscolhidos;
        segundo = segundosEscolhidos;

        atualizarVisor();
    }

    function iniciar() {
        // Evita criar vários intervalos se clicar em Iniciar mais de uma vez.
        if (cron !== null) return;
        cron = setInterval(contar, 1000);
    }

    function pausar() {
        clearInterval(cron);
        cron = null;
    }

    function resetar() {
        pausar();
        hora = 0;
        minuto = 0;
        segundo = 0;
        atualizarVisor();
    }

    function contar() {

        if (hora === 0 && minuto === 0 && segundo === 0) {
            pausar();
            return;
        }

        segundo--;

        if (segundo < 0) {
            segundo = 59;
            minuto--;
        }

        if (minuto < 0) {
            minuto = 59;
            hora--;
        }
        atualizarVisor();
    }

    function atualizarVisor() {
        visorHora.textContent = String(hora).padStart(2, "0");
        visorMinuto.textContent = String(minuto).padStart(2, "0");
        visorSegundo.textContent = String(segundo).padStart(2, "0");
    }
}
