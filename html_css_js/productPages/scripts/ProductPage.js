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

let value = 1;

document.querySelector(".buttonMinus").addEventListener("click", () => {
  if (value == 1) {
    return;
  } else {
    value--;
  }
  document.getElementById("valueQuantity").textContent = value;
});

document.querySelector(".buttonPlus").addEventListener("click", () => {
  value++;
  document.getElementById("valueQuantity").textContent = value;
});

let additionals = document.querySelector(".additionals");
let additionalsList = document.querySelector(".additionalsList");
let arrowRight = document.querySelector(".arrowRight");

additionals.addEventListener("click", () => {
  additionalsList.classList.toggle("activated");
  arrowRight.classList.toggle("activated");
});
