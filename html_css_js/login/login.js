document.querySelectorAll(".eye-icon").forEach(icon => {
    icon.addEventListener("click", () => {
        const input = icon.previousElementSibling;
        if (input.type === "password") {
            input.type = "text";
            icon.textContent = "visibility";
        } else {
            input.type = "password";
            icon.textContent = "visibility_off";
        }
    });
});

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const senhaInput =
    document.getElementById("senha") ||
    form.querySelector('input[type="password"], .input-group:nth-child(2) input');
const lembrar = document.getElementById("lembrar");


const emailLembrado = localStorage.getItem("emailLembrado");
if (emailLembrado && emailInput) {
    emailInput.value = emailLembrado;
    if (lembrar) lembrar.checked = true;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim().toLowerCase();
    const senha = senhaInput.value;

    let usuarios = [];
    try {
        usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    } catch (e) {}


    const encontrado = usuarios.find(
        u => u.email.toLowerCase() === email && u.senha === senha
    );

    if (!encontrado) {
        alert("Email ou senha incorretos (ou usuário não cadastrado neste navegador).");
        return;
    }

    if (lembrar) {
        if (lembrar.checked) {
            localStorage.setItem("emailLembrado", encontrado.email);
        } else {
            localStorage.removeItem("emailLembrado");
        }
    }

    const { senha: _, ...usuarioLogado } = encontrado;
    localStorage.setItem("usuarioDados", JSON.stringify(usuarioLogado));

    window.location.href = "../perfil-usuario/perfil/perfil.html";
});