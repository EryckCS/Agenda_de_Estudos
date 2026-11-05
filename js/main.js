// Ponto de entrada: inicializa cada funcionalidade da agenda.
function iniciarAplicacao() {
    inicializarAtividades();
    inicializarCronometro();
    inicializarCalendario();
}

document.addEventListener("DOMContentLoaded", iniciarAplicacao);
