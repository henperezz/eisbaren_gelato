// Mostrar / Esconder senha
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
const senhaInput = document.getElementById("senha");
const lembrar = document.getElementById("lembrar");

// Preenche o email se o usuário marcou "Lembre de mim"
const emailLembrado = localStorage.getItem("emailLembrado");
if (emailLembrado) {
    emailInput.value = emailLembrado;
    lembrar.checked = true;
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
        alert("Email ou senha incorretos.");
        return;
    }

    if (lembrar.checked) {
        localStorage.setItem("emailLembrado", encontrado.email);
    } else {
        localStorage.removeItem("emailLembrado");
    }

    // Salva o usuário logado, sem a senha
    const { senha: _, ...usuarioLogado } = encontrado;
    localStorage.setItem("usuarioDados", JSON.stringify(usuarioLogado));

    window.location.href = "../perfil-usuario/perfil/perfil.html";
});