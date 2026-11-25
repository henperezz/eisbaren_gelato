document.addEventListener("DOMContentLoaded", () => {
    let dadosSalvos = null;
    try {
        dadosSalvos = JSON.parse(localStorage.getItem("usuarioDados"));
    } catch (e) {}

    if (!dadosSalvos) return;

    const campos = ["usuario", "nome", "email", "telefone"];
    campos.forEach(id => {
        document.getElementById(id).value = dadosSalvos[id] || "";
    });

    const botoesTrocar = document.querySelectorAll(".btn-trocar");
    botoesTrocar.forEach(botao => {
        botao.addEventListener("click", (e) => {
            e.preventDefault();
            const inputAlvo = document.getElementById(botao.getAttribute("data-alvo"));

            inputAlvo.removeAttribute("disabled");
            inputAlvo.focus();
            botao.textContent = "OK";
            botao.style.color = "#22c55e";
        });
    });

    const formPerfil = document.getElementById("form-perfil");
    formPerfil.addEventListener("submit", (e) => {
        e.preventDefault();

        const novosDados = {
            usuario: document.getElementById("usuario").value.trim(),
            nome: document.getElementById("nome").value.trim(),
            email: document.getElementById("email").value.trim(),
            telefone: document.getElementById("telefone").value.trim()
        };

        let usuarios = [];
        try {
            usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        } catch (err) {}

        const emailAntigo = dadosSalvos.email;

        const emailEmUso = usuarios.some(
            u => u.email.toLowerCase() === novosDados.email.toLowerCase()
                && u.email.toLowerCase() !== emailAntigo.toLowerCase()
        );
        if (emailEmUso) {
            alert("Este email já está em uso por outra conta.");
            return;
        }

        localStorage.setItem("usuarioDados", JSON.stringify(novosDados));
        dadosSalvos = novosDados;

        const i = usuarios.findIndex(u => u.email.toLowerCase() === emailAntigo.toLowerCase());
        if (i !== -1) {
            usuarios[i] = { ...usuarios[i], ...novosDados };
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }

        const nomeLateral = document.getElementById("nome-usuario-lateral");
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