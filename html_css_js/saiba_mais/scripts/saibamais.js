let buttonSwitch = document.getElementById("buttonSwitch");
let headerContainer = document.getElementById("headerContainer");
let hero_section = document.getElementById("hero_section");
let footer = document.getElementById("main_footer");

buttonSwitch.addEventListener("click", () => {
  buttonSwitch.classList.toggle("dark");
  headerContainer.classList.toggle("dark_mode");
  hero_section.classList.toggle("dark_mode");
  document
    .querySelectorAll(
      ".section-pink, .section-yellow, .section-blue, .section-brand",
    )
    .forEach((section) => section.classList.toggle("dark_mode"));
  footer.classList.toggle("dark_mode");
});
