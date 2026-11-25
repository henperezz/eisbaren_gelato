document.addEventListener("DOMContentLoaded", () => {
    
    const dadosSalvos = JSON.parse(localStorage.getItem("usuarioDados"));


    if (dadosSalvos && dadosSalvos.nome) {
        const nomeLateral = document.getElementById("nome-usuario-lateral");
        if (nomeLateral) {
            nomeLateral.textContent = dadosSalvos.nome;
        }
    }
});