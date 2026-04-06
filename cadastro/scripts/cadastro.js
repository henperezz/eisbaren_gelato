  
        // --- 1. LÓGICA PARA MOSTRAR/ESCONDER SENHA ---
        const eyeIcons = document.querySelectorAll('.eye-icon');

        eyeIcons.forEach(icon => {
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

        // --- 2. VALIDAÇÃO DE SENHAS E FEEDBACK DE ENVIO ---
        const form = document.getElementById('cadastroForm');
        const senha = document.getElementById('senha');
        const confirmarSenha = document.getElementById('confirmarSenha');
        const email = document.getElementById('email');
        const btnEnviar = document.getElementById('btnEnviar');

        form.addEventListener('submit', (event) => {
            // Limpa espaços em branco do email (Trim)
            email.value = email.value.trim();

            // Verifica se as senhas são iguais
            if (senha.value !== confirmarSenha.value) {
                event.preventDefault(); // Impede o envio
                alert("As senhas não coincidem. Por favor, tente novamente.");
                confirmarSenha.focus();
                return;
            }

            // simula o estado de "Carregando"
            btnEnviar.innerText = "CADASTRANDO...";
            btnEnviar.style.opacity = "0.7";
            btnEnviar.style.cursor = "not-allowed";
            
            alert("Cadastro realizado com sucesso!");
        });
    