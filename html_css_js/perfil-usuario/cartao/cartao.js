document.addEventListener("DOMContentLoaded", () => {
    // Busca os dados salvos no navegador
    const dadosSalvos = JSON.parse(localStorage.getItem("usuarioDados"));

    // Se existir um nome salvo e o elemento do menu existir na página, atualiza o texto
    if (dadosSalvos && dadosSalvos.nome) {
        const nomeLateral = document.getElementById("nome-usuario-lateral");
        if (nomeLateral) {
            nomeLateral.textContent = dadosSalvos.nome;
        }
    }
});