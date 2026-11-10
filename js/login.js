function Logar_Cadastrar() {
    const botaoLogin = document.getElementById("btnLogin");
    const botaoCadastro = document.getElementById("btnCadastro");
    const formularioLogin = document.getElementById("login");
    const formularioCadastro = document.getElementById("cadastro");

    const campoEmailLogin = document.getElementById("emailLogin");
    const campoSenhaLogin = document.getElementById("senhaLogin");
    const campoNomeCadastro = document.getElementById("nomeCadastro");
    const campoEmailCadastro = document.getElementById("emailCadastro");
    const campoSenhaCadastro = document.getElementById("senhaCadastro");

    botaoLogin.addEventListener("click", function () {
        formularioCadastro.hidden = true;
        formularioLogin.hidden = false;
    });

    botaoCadastro.addEventListener("click", function () {
        formularioLogin.hidden = true;
        formularioCadastro.hidden = false;
    });

    formularioCadastro.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const usuario = {
            nome: campoNomeCadastro.value.trim(),
            email: campoEmailCadastro.value.trim(),
            senha: campoSenhaCadastro.value
        };

        localStorage.setItem("usuarioCadastro", JSON.stringify(usuario));

        campoEmailLogin.value = usuario.email;
        campoSenhaLogin.value = "";
        formularioCadastro.hidden = true;
        formularioLogin.hidden = false;

        alert("Cadastro salvo. Agora entre com seu e-mail e senha.");
    });

    formularioLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioCadastro"));

        if (!usuarioSalvo) {
            alert("Faça seu cadastro primeiro.");
            formularioLogin.hidden = true;
            formularioCadastro.hidden = false;
            return;
        }

        const emailCorreto = campoEmailLogin.value.trim() === usuarioSalvo.email;
        const senhaCorreta = campoSenhaLogin.value === usuarioSalvo.senha;

        if (!emailCorreto || !senhaCorreta) {
            alert("E-mail ou senha incorretos.");
            return;
        }

        const usuarioLogado = {
            nome: usuarioSalvo.nome,
            email: usuarioSalvo.email
        };

        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
        window.location.href = "../html/index.html";
    });
}

Logar_Cadastrar();
