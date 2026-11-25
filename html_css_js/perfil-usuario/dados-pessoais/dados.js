document.addEventListener("DOMContentLoaded", () => {
    // 1. Carregar dados salvos do localStorage ao abrir a página
    const dadosSalvos = JSON.parse(localStorage.getItem("usuarioDados")) || {
        usuario: "joselvaldocosta123",
        nome: "Josevaldo Costa",
        email: "josevaldo123@gmail.com",
        telefone: "(19)99992253"
    };

    // Preenche os inputs com os dados salvos
    document.getElementById("usuario").value = dadosSalvos.usuario;
    document.getElementById("nome").value = dadosSalvos.nome;
    document.getElementById("email").value = dadosSalvos.email;
    document.getElementById("telefone").value = dadosSalvos.telefone;

    // Atualiza o nome no menu lateral
    document.getElementById("nome-usuario-lateral").textContent = dadosSalvos.nome;

    // 2. Funcionalidade do botão "Trocar" para habilitar a edição do campo correspondente
    const botoesTrocar = document.querySelectorAll(".btn-trocar");
    botoesTrocar.forEach(botao => {
        botao.addEventListener("click", (e) => {
            e.preventDefault();
            const idAlvo = botao.getAttribute("data-alvo");
            const inputAlvo = document.getElementById(idAlvo);

            // Habilita o input e foca nele
            inputAlvo.removeAttribute("disabled");
            inputAlvo.focus();
            
            // Muda o texto do botão para indicar que está editando
            botao.textContent = "OK";
            botao.style.color = "#22c55e"; // Cor verde opcional
        });
    });

    // 3. Salvar os dados ao enviar o formulário
    const formPerfil = document.getElementById("form-perfil");
    formPerfil.addEventListener("submit", (e) => {
        e.preventDefault();

        // Pega os novos valores dos inputs
        const novosDados = {
            usuario: document.getElementById("usuario").value,
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value
        };

        // Salva no localStorage
        localStorage.setItem("usuarioDados", JSON.stringify(novosDados));

        // Atualiza o nome no menu lateral instantaneamente
        document.getElementById("nome-usuario-lateral").textContent = novosDados.nome;

        // Desativa novamente os inputs
        document.querySelectorAll(".form-perfil input").forEach(input => {
            input.setAttribute("disabled", "true");
        });

        // Reseta os botões de trocar
        botoesTrocar.forEach(botao => {
            botao.textContent = "Trocar";
            botao.style.color = "";
        });

        alert("Dados salvos com sucesso!");
    });
});