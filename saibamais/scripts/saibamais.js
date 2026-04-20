// script.js

// Efeito de revelação ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Navbar transparente ao rolar
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("transparent");
    } else {
        navbar.classList.remove("transparent");
    }
});

// Remove splash após alguns segundos
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("splash").style.display = "none";
        document.getElementById("conteudo").style.display = "block";
    }, 1500); // tempo em milissegundos (1.5segundos)
});

