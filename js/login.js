function Logar_Cadastrar () {
    const botaoLogin = document.getElementById("btnLogin");
    const botaoCadastro = document.getElementById("btnCadastro");
    const formularioLogin = document.querySelector("#login");
    const formularioCadastrar = document.querySelector("#cadastro");


    botaoLogin.addEventListener("click", function () {
        formularioLogin.hidden = false;
    });
}

Logar_Cadastrar();