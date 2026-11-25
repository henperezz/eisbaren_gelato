document.addEventListener("DOMContentLoaded", () => {
    let dados = null;
    try {
        dados = JSON.parse(localStorage.getItem("usuarioDados"));
    } catch (e) {}

    if (!dados) {
        window.location.href = "../../login/login.html";
        return;
    }

    const nomeLateral = document.getElementById("nome-usuario-lateral");
    if (nomeLateral && dados.nome) {
        nomeLateral.textContent = dados.nome;
    }

    const btnSair = document.querySelector(".btn-sair");
    if (btnSair) {
        btnSair.setAttribute("href", "../../login/login.html");
        btnSair.addEventListener("click", () => {
            localStorage.removeItem("usuarioDados");
        });
    }
});