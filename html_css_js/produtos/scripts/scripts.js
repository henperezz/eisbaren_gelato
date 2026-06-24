/* ── DARK MODE ── */
const buttonSwitch = document.getElementById("buttonSwitch");
if (buttonSwitch) {
  buttonSwitch.addEventListener("click", () => {
    buttonSwitch.classList.toggle("dark");
  });
}

/* ── FAVORITO ── */
const favoriteIcon = document.getElementById("favoriteIcon");
if (favoriteIcon) {
  favoriteIcon.addEventListener("click", () => {
    favoriteIcon.classList.toggle("favorited");
  });
}

/* ── SANDUÍCHE ── */
const btnSanduiche = document.querySelector(".sanduiche-container");
const dropdown = document.getElementById("dropdown");

if (btnSanduiche && dropdown) {
  btnSanduiche.addEventListener("click", () => {
    btnSanduiche.classList.toggle("aberto");
    dropdown.classList.toggle("aberto");
  });
}
