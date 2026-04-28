// script.js

// Efeito de revelação ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
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
    const splash = document.getElementById("splash");
    if (splash) {
        setTimeout(() => {
            splash.style.display = "none";
        }, 1500); // tempo igual ao da animação
    }
});


