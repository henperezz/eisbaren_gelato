
// Efeito de revelação ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
        }
    });
});

let buttonSwitch = document.getElementById("buttonSwitch");
let headerContainer = document.getElementById("headerContainer");

buttonSwitch.addEventListener("click", () => {
  buttonSwitch.classList.toggle("dark");
  /*headerContainer.classList.toggle("dark");*/
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.

// Navbar transparente ao rolar
window.addEventListener("scroll", function() {
    const headerContainer = document.querySelector(".headerContainer");
    if (window.scrollY > 50) {
        headerContainer.classList.add("transparent");
    } else {
        headerContainer.classList.remove("transparent");
    }
});
