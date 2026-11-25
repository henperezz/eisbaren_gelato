document.addEventListener("DOMContentLoaded", () => {
    const dadosSalvos = JSON.parse(localStorage.getItem("usuarioDados")) || {
        usuario: "joselvaldocosta123",
        nome: "Josevaldo Costa",
        email: "josevaldo123@gmail.com",
        telefone: "(19)99992253"
    };

    document.getElementById("usuario").value = dadosSalvos.usuario;
    document.getElementById("nome").value = dadosSalvos.nome;
    document.getElementById("email").value = dadosSalvos.email;
    document.getElementById("telefone").value = dadosSalvos.telefone;

    const nomeLateral = document.getElementById("nome-usuario-lateral");
    if (nomeLateral) nomeLateral.textContent = dadosSalvos.nome;

    // Botão "Trocar"
    const botoesTrocar = document.querySelectorAll(".btn-trocar");
    botoesTrocar.forEach(botao => {
        botao.addEventListener("click", (e) => {
            e.preventDefault();
            const idAlvo = botao.getAttribute("data-alvo");
            const inputAlvo = document.getElementById(idAlvo);

            inputAlvo.removeAttribute("disabled");
            inputAlvo.focus();
            botao.textContent = "OK";
            botao.style.color = "#22c55e";
        });
    });

    // Salvar alterações
    const formPerfil = document.getElementById("form-perfil");
    formPerfil.addEventListener("submit", (e) => {
        e.preventDefault();

        const novosDados = {
            usuario: document.getElementById("usuario").value,
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value
        };

        localStorage.setItem("usuarioDados", JSON.stringify(novosDados));

        if (nomeLateral) nomeLateral.textContent = novosDados.nome;

        document.querySelectorAll(".form-perfil input").forEach(input => {
            input.setAttribute("disabled", "true");
        });

        botoesTrocar.forEach(botao => {
            botao.textContent = "Trocar";
            botao.style.color = "";
        });

        alert("Dados salvos com sucesso!");
    });
});