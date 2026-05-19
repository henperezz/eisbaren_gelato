let buttonSwitch = document.getElementById("buttonSwitch");
let headerContainer = document.getElementById("headerContainer");

buttonSwitch.addEventListener("click", () => {
  buttonSwitch.classList.toggle("dark");
  /*headerContainer.classList.toggle("dark");*/
});

let favoriteIcon = document.getElementById("favoriteIcon");

favoriteIcon.addEventListener("click", () => {
  favoriteIcon.classList.toggle("favorited");
});

//parte do sanduiche

