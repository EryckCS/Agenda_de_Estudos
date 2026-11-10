// Confere quem entrou e inicia as partes da agenda.
function iniciarAplicacao() {
    if (!carregarUsuario()) return;

    inicializarAtividades();
    inicializarCronometro();
    inicializarCalendario();
}

function carregarUsuario() {
    const usuarioSalvo = localStorage.getItem("usuarioLogado");

    if (!usuarioSalvo) {
        window.location.href = "../html/login.html";
        return false;
    }

    const usuario = JSON.parse(usuarioSalvo);
    document.getElementById("nomeUsuario").textContent = usuario.nome;
    document.getElementById("emailUsuario").textContent = usuario.email;

    document.getElementById("btnSair").addEventListener("click", function () {
        localStorage.removeItem("usuarioLogado");
        window.location.href = "../html/login.html";
    });

    return true;
}

document.addEventListener("DOMContentLoaded", iniciarAplicacao);
