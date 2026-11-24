// O modo escuro agora é controlado por ../shared/theme.js (salva a escolha entre páginas)

document.querySelectorAll(".quantity").forEach((group) => {
  const display = group.querySelector("span"); // o contador dentro desse grupo
  let value = 1;

  group.querySelector(".buttonMinus").addEventListener("click", () => {
    if (value > 1) {
      value--;
      display.textContent = value;
    }
  });

  group.querySelector(".buttonPlus").addEventListener("click", () => {
    value++;
    display.textContent = value;
  });
});
