
  // Entrada suave da interface 
  window.addEventListener("load", () => {
    document.querySelector(".perfil-container").style.opacity = "0";
    document.querySelector(".perfil-container").style.transform = "translateY(8px)";

    setTimeout(() => {
      const container = document.querySelector(".perfil-container");
      container.style.transition = "0.5s ease";
      container.style.opacity = "1";
      container.style.transform = "translateY(0)";
    }, 80);
  });

  // Hover  nos itens do menu
  const items = document.querySelectorAll(".menu-item");

  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.style.background = "#f6f6f6";
      item.style.borderRadius = "6px";
      item.style.paddingLeft = "10px";
      item.style.transition = "0.25s ease";
    });

    item.addEventListener("mouseleave", () => {
      item.style.background = "transparent";
      item.style.paddingLeft = "0px";
    });

    // clique suave  
    item.addEventListener("mousedown", () => {
      item.style.transform = "scale(0.99)";
    });

    item.addEventListener("mouseup", () => {
      item.style.transform = "scale(1)";
    });
  });
 // Botão editar perfil
const btn = document.querySelector(".btn-editar");

btn.addEventListener("click", () => {
  btn.style.transform = "scale(0.97)";

  setTimeout(() => {
    btn.style.transform = "scale(1)";
  }, 120);
});
  // Hover sutil na foto de perfil (para destacar a imagem )
  const foto = document.querySelector(".foto-perfil");

  foto.addEventListener("mouseenter", () => {
    foto.style.boxShadow = "0 6px 18px rgba(0,0,0,0.08)";
    foto.style.transition = "0.3s ease";
  });

  foto.addEventListener("mouseleave", () => {
    foto.style.boxShadow = "none";
  });

