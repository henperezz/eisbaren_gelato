
   // --- 1. MOSTRAR/ESCONDER SENHA ---
        const eyeIcon = document.querySelector('.eye-icon');
        eyeIcon.addEventListener('click', () => {
            const input = eyeIcon.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                eyeIcon.textContent = 'visibility';
            } else {
                input.type = 'password';
                eyeIcon.textContent = 'visibility_off';
            }
        });

        
// --- 2. LÓGICA DE LOGIN E FEEDBACK ---
        const loginForm = document.getElementById('loginForm');
        const emailInput = document.getElementById('email');
        const btnLogin = document.getElementById('btnLogin');

        loginForm.addEventListener('submit', (e) => {
            
            emailInput.value = emailInput.value.trim();

            btnLogin.innerText = "ENTRANDO...";
            btnLogin.style.opacity = "0.7";
            btnLogin.style.cursor = "not-allowed";

          
            console.log("Tentativa de login para:", emailInput.value);
        });