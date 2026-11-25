document.addEventListener("DOMContentLoaded", () => {
    try {
        const dados = JSON.parse(localStorage.getItem("usuarioDados"));
        const nomeLateral = document.getElementById("nome-usuario-lateral");
        if (dados && dados.nome && nomeLateral) {
            nomeLateral.textContent = dados.nome;
        }
    } catch (e) {}
});

document.addEventListener("DOMContentLoaded", () => {
    let logado = null;
    try {
        logado = JSON.parse(localStorage.getItem("usuarioDados"));
    } catch (e) {}

    if (!logado) return; // o menu-usuario.js já redireciona para o login

    const campos = ["cep", "rua", "numero"];

    // Lê a lista de usuários e acha o usuário logado
    const lerUsuarios = () => {
        try {
            return JSON.parse(localStorage.getItem("usuarios")) || [];
        } catch (e) {
            return [];
        }
    };

    const usuarios = lerUsuarios();
    const usuarioAtual = usuarios.find(
        u => u.email.toLowerCase() === logado.email.toLowerCase()
    );

    // Preenche os campos com o endereço salvo (se existir)
    const enderecoSalvo = (usuarioAtual && usuarioAtual.endereco) || {};
    const temEndereco = campos.some(id => enderecoSalvo[id]);

    campos.forEach(id => {
        const input = document.getElementById(id);
        input.value = enderecoSalvo[id] || "";
        // Se já tem endereço salvo, trava o campo até clicar em "Trocar"
        if (temEndereco) input.setAttribute("disabled", "true");
    });

    // Botão "Trocar"
    const botoesTrocar = document.querySelectorAll(".trocar-loc");
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

    // Salvar endereço
    const form = document.getElementById("form-localizacao");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const endereco = {
            cep: document.getElementById("cep").value.trim(),
            rua: document.getElementById("rua").value.trim(),
            numero: document.getElementById("numero").value.trim()
        };

        if (!endereco.cep || !endereco.rua || !endereco.numero) {
            alert("Preencha CEP, rua e número.");
            return;
        }

        // Relê a lista para não sobrescrever alterações feitas em outra aba
        const lista = lerUsuarios();
        const i = lista.findIndex(
            u => u.email.toLowerCase() === logado.email.toLowerCase()
        );

        if (i === -1) {
            alert("Não foi possível salvar. Faça login novamente.");
            return;
        }

        lista[i] = { ...lista[i], endereco };
        localStorage.setItem("usuarios", JSON.stringify(lista));

        // Trava os campos de novo
        campos.forEach(id => {
            document.getElementById(id).setAttribute("disabled", "true");
        });

        botoesTrocar.forEach(botao => {
            botao.textContent = "Trocar";
            botao.style.color = "";
        });

        alert("Endereço salvo com sucesso!");
    });
});