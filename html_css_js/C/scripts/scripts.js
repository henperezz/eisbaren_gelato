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

