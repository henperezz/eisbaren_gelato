document.addEventListener("DOMContentLoaded", () => {
    let dados = null;
    try {
        dados = JSON.parse(localStorage.getItem("usuarioDados"));
    } catch (e) {}

    // Protege a página: sem login, volta para o login
    if (!dados) {
        window.location.href = "../../login/login.html";
        return;
    }

    // Nome no menu lateral
    const nomeLateral = document.getElementById("nome-usuario-lateral");
    if (nomeLateral && dados.nome) {
        nomeLateral.textContent = dados.nome;
    }

    // Botão Sair
    const btnSair = document.querySelector(".btn-sair");
    if (btnSair) {
        btnSair.setAttribute("href", "../../login/login.html");
        btnSair.addEventListener("click", () => {
            localStorage.removeItem("usuarioDados");
        });
    }
});