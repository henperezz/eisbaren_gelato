// Mostrar e ocultar senha
const eyeIcons = document.querySelectorAll(".eye-icon");

eyeIcons.forEach((icon) => {
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

// Validação do formulário
const form = document.getElementById("resetPasswordForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const regex = /^(?=.*[A-Z])(?=.*\d).{8,12}$/;

    if (!regex.test(newPassword)) {
        alert("A nova senha deve ter entre 8 e 12 caracteres, pelo menos uma letra maiúscula e um número.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    if (currentPassword === newPassword) {
        alert("A nova senha deve ser diferente da senha atual.");
        return;
    }

    alert("Senha alterada com sucesso!");

    // Se desejar enviar o formulário para o servidor,
    // remova o event.preventDefault() e configure a ação do form.
});