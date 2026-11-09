function Logar_Cadastrar () {
    const botaoLogin = document.getElementById("btnLogin");
    const botaoCadastro = document.getElementById("btnCadastro");
    const formularioLogin = document.querySelector("#login");
    const formularioCadastrar = document.querySelector("#cadastro");


    botaoLogin.addEventListener("click", function () {
        formularioCadastrar.hidden = true;
        formularioLogin.hidden = false;
    });

    botaoCadastro.addEventListener("click", function () {
        formularioLogin.hidden = true;
        formularioCadastrar.hidden = false;
    });

}
Logar_Cadastrar();