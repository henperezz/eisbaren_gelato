const elementosDark =
  "body, .login-container, #headerContainer, #header_container, #img_initial, #img_inicial, #section_produtos, #saiba_mais, #footer_section, #main_footer, #hero_section, .card, .texto-sanduiche, .section-pink, .section-yellow, .section-blue, .section-brand, .produtos-Milk-Shakes, .produtos-açai, .produtos-potes, .produtos-casquinhas, .produtos-sundae, .produtos-kids, .produtos-kids-picole, .sessao, .sessao-picole, .sessao-açai, .sessao-potes, .sessao-casquinhas, .sessao-sundae, .sessao-kids, .conteudo-texto-kids, .conteudo-texto-sundae, .conteudo-texto-casquinhas, .conteudo-texto-potes, .conteudo-texto-açai, .conteudo-texto-picole, .conteudo-texto";

let semAnimacao = document.createElement("style");
semAnimacao.textContent =
  "html.carregando *, html.carregando *::before, html.carregando *::after { transition: none !important; }";
document.head.appendChild(semAnimacao);
document.documentElement.classList.add("carregando");

let temaSalvo = localStorage.getItem("eisbaren-theme");
document.documentElement.setAttribute(
  "data-theme",
  temaSalvo === "dark" ? "dark" : "light",
);

const aplicarTema = (tema) => {
  let escuro = tema === "dark";
  let buttonSwitch = document.getElementById("buttonSwitch");

  document.documentElement.setAttribute("data-theme", tema);

  document
    .querySelectorAll(elementosDark)
    .forEach((elemento) => elemento.classList.toggle("dark_mode", escuro));

  if (buttonSwitch) {
    buttonSwitch.classList.toggle("dark", escuro);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let buttonSwitch = document.getElementById("buttonSwitch");

  aplicarTema(localStorage.getItem("eisbaren-theme") === "dark" ? "dark" : "light");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("carregando");
    });
  });

  if (buttonSwitch) {
    buttonSwitch.addEventListener("click", () => {
      let novoTema =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";

      localStorage.setItem("eisbaren-theme", novoTema);
      aplicarTema(novoTema);
    });
  }
});

window.addEventListener("storage", (evento) => {
  if (evento.key === "eisbaren-theme") {
    aplicarTema(evento.newValue === "dark" ? "dark" : "light");
  }
});
