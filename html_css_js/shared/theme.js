const elementosDark =
  "body, .login-container, #headerContainer, #header_container, #img_initial, #img_inicial, #section_produtos, #saiba_mais, #footer_section, #main_footer, #hero_section, .card, .texto-sanduiche, .section-pink, .section-yellow, .section-blue, .section-brand, .produtos-Milk-Shakes, .produtos-açai, .produtos-potes, .produtos-casquinhas, .produtos-sundae, .produtos-kids, .produtos-kids-picole, .sessao, .sessao-picole, .sessao-açai, .sessao-potes, .sessao-casquinhas, .sessao-sundae, .sessao-kids, .conteudo-texto-kids, .conteudo-texto-sundae, .conteudo-texto-casquinhas, .conteudo-texto-potes, .conteudo-texto-açai, .conteudo-texto-picole, .conteudo-texto";

let temaSalvo = localStorage.getItem("eisbaren-theme");

if (temaSalvo !== "dark") {
  temaSalvo = "light";
}

document.documentElement.setAttribute("data-theme", temaSalvo);

let semAnimacao = document.createElement("style");
semAnimacao.textContent =
  "html.carregando *, html.carregando *::before, html.carregando *::after { transition: none !important; }";
document.head.appendChild(semAnimacao);
document.documentElement.classList.add("carregando");

function aplicarTema(tema) {
  let elementos = document.querySelectorAll(elementosDark);
  let buttonSwitch = document.getElementById("buttonSwitch");

  document.documentElement.setAttribute("data-theme", tema);

  elementos.forEach((elemento) => {
    if (tema === "dark") {
      elemento.classList.add("dark_mode");
    } else {
      elemento.classList.remove("dark_mode");
    }
  });

  if (buttonSwitch) {
    if (tema === "dark") {
      buttonSwitch.classList.add("dark");
    } else {
      buttonSwitch.classList.remove("dark");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let buttonSwitch = document.getElementById("buttonSwitch");

  aplicarTema(temaSalvo);

  setTimeout(() => {
    document.documentElement.classList.remove("carregando");
  }, 100);

  if (buttonSwitch) {
    buttonSwitch.addEventListener("click", () => {
      if (temaSalvo === "dark") {
        temaSalvo = "light";
      } else {
        temaSalvo = "dark";
      }

      localStorage.setItem("eisbaren-theme", temaSalvo);
      aplicarTema(temaSalvo);
    });
  }
});
