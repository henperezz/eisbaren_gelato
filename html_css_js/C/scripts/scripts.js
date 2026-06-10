/* DARK MODE */
const buttonSwitch = document.getElementById("buttonSwitch");
if (buttonSwitch) {
  buttonSwitch.addEventListener("click", () => {
    buttonSwitch.classList.toggle("dark");
  });
}


const favoriteIcon = document.getElementById("favoriteIcon");
if (favoriteIcon) {
  favoriteIcon.addEventListener("click", () => {
    favoriteIcon.classList.toggle("favorited");
  });
}

/* SANDUÍCHE */
const btnSanduiche = document.querySelector(".sanduiche-container"); //o querySelector ele seleciona qualquer seletor do css
const dropdown = document.getElementById("dropdown"); //o getelemnt... eele seleciona apenas elementos pelo ID especificamente
 
if (btnSanduiche && dropdown) { //verifica se os dois elemntos existem mesmo
  btnSanduiche.addEventListener("click", () => { //coloquei uma ação no botão (sanduiche) pra que assim que houver o clique
    btnSanduiche.classList.toggle("aberto"); // acontece essas ações
    dropdown.classList.toggle("aberto"); //de abrir 
  });
}
