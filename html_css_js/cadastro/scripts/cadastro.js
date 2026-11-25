// Mostrar / Esconder senha
document.querySelectorAll('.eye-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const input = icon.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            icon.textContent = 'visibility';
        } else {
            input.type = 'password';
            icon.textContent = 'visibility_off';
        }
    });
});

const form = document.getElementById('cadastroForm');
const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');
const btnEnviar = document.getElementById('btnEnviar');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailLimpo = email.value.trim();

    if (senha.value !== confirmarSenha.value) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        confirmarSenha.focus();
        return;
    }

    let usuarios = [];
    try {
        usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    } catch (e) {}

    // Impede email repetido
    if (usuarios.some(u => u.email.toLowerCase() === emailLimpo.toLowerCase())) {
        alert("Este email já está cadastrado. Faça login.");
        return;
    }

    const novoUsuario = {
        usuario: emailLimpo.split('@')[0],
        nome: `${nomeInput.value.trim()} ${sobrenomeInput.value.trim()}`,
        email: emailLimpo,
        senha: senha.value,
        telefone: "(19) 00000-0000"
    };

    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Já deixa logado, sem a senha
    const { senha: _, ...usuarioLogado } = novoUsuario;
    localStorage.setItem("usuarioDados", JSON.stringify(usuarioLogado));

    btnEnviar.disabled = true;
    btnEnviar.innerText = "CADASTRANDO...";
    btnEnviar.style.opacity = "0.7";
    btnEnviar.style.cursor = "not-allowed";

    setTimeout(() => {
        window.location.href = "../perfil-usuario/perfil/perfil.html";
    }, 1000);
});
    