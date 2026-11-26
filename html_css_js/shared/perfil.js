document.addEventListener("DOMContentLoaded", () => {
  let usuarioDados = JSON.parse(localStorage.getItem("usuarioDados"));
  let links = document.querySelectorAll(".textLink");

  links.forEach((link) => {
    if (link.textContent.trim() === "PERFIL") {
      if (usuarioDados) {
        link.href = "../perfil-usuario/perfil/perfil.html";
      } else {
        link.href = "../cadastro/cadastro.html";
      }
    }
  });
});
