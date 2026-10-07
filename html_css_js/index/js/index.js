let buttonSwitch = document.getElementById("buttonSwitch");
let headerContainer = document.getElementById("headerContainer");
let img_initial = document.getElementById("img_initial");
let section_produtos = document.getElementById("section_produtos");
let saiba_mais = document.getElementById("saiba_mais");
let footer_section = document.getElementById("footer_section");
let cards = document.getElementsByClassName("card");

buttonSwitch.addEventListener("click", () => {
  buttonSwitch.classList.toggle("dark");
  headerContainer.classList.toggle("dark_mode");
  img_initial.classList.toggle("dark_mode");
  section_produtos.classList.toggle("dark_mode");
  saiba_mais.classList.toggle("dark_mode");
  footer_section.classList.toggle("dark_mode");
  cards.classList.toggle("dark_mode");
});
