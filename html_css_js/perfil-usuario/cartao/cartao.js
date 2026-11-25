document.addEventListener("DOMContentLoaded", () => {
    try {
        const dados = JSON.parse(localStorage.getItem("usuarioDados"));
        const nomeLateral = document.getElementById("nome-usuario-lateral");
        if (dados && dados.nome && nomeLateral) {
            nomeLateral.textContent = dados.nome;
        }
    } catch (e) {}
});