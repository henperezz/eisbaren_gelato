document.addEventListener("DOMContentLoaded", () => {
    let dados = null;
    try {
        dados = JSON.parse(localStorage.getItem("usuarioDados"));
    } catch (e) {}

    if (!dados) return;

    const perfilNome = document.getElementById("perfil-nome");
    const perfilEmail = document.getElementById("perfil-email");

    if (perfilNome && dados.nome) {
        perfilNome.textContent = dados.nome;
    }

    if (perfilEmail && dados.email) {
        perfilEmail.textContent = dados.email;
    }
});
