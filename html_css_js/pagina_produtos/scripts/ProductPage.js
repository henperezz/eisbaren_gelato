document.addEventListener("DOMContentLoaded", () => {

  // ELEMENTOS DA PÁGINA

  const quantityValue = document.getElementById("valueQuantity");

  const buttonMinus = document.querySelector(".buttonMinus");

  const buttonPlus = document.querySelector(".buttonPlus");

  const buttonAddCart = document.getElementById("buttonAddCart");

  const sizeButtons = document.querySelectorAll(".sizeButton");

  const additionalsButton = document.querySelector(".additionals");

  const additionalsArrow = document.querySelector(".arrowRight");

  const additionalsList = document.querySelector(".additionalsList");

  const additionalsItems = document.querySelectorAll(".additionalsItems");

  const favoriteIcon = document.getElementById("favoriteIcon");

  const productNameElement = document.querySelector(".productName");

  const productPriceElement = document.querySelector(".priceTag");

  const productImageElement = document.querySelector(".product");

  // DADOS DO PRODUTO

  const productName = productNameElement.textContent

    .replace("favorite", "")

    .trim();

  const productPrice = Number(

    productPriceElement.textContent

      .replace("R$", "")

      .replace(",", ".")

      .trim()

  );

  const productImage = productImageElement.getAttribute("src");

  // VARIÁVEIS

  let quantity = 1;

  let selectedSize = "";

  let selectedAdditionals = [];

  // FORMATAÇÃO DO PREÇO

  function formatPrice(value) {

    return value.toLocaleString("pt-BR", {

      style: "currency",

      currency: "BRL"

    });

  }

  // PREÇO DOS ADICIONAIS

  function getAdditionalPrice(item) {

    const priceElement = item.querySelector("#valueAdditionals");

    if (!priceElement) return 0;

    return Number(

      priceElement.textContent

        .replace("R$", "")

        .replace(",", ".")

        .trim()

    );

  }

  // CALCULAR PREÇO TOTAL UNITÁRIO

  function calculateUnitPrice() {

    const additionalTotal = selectedAdditionals.reduce(

      (total, item) => total + getAdditionalPrice(item),

      0

    );

    return Math.round((productPrice + additionalTotal) * 100) / 100;

  }

  // CONTADOR DE QUANTIDADE

  buttonPlus.addEventListener("click", () => {

    quantity++;

    quantityValue.textContent = quantity;

  });

  buttonMinus.addEventListener("click", () => {

    if (quantity > 1) {

      quantity--;

      quantityValue.textContent = quantity;

    }

  });

  // SELEÇÃO DO TAMANHO

  sizeButtons.forEach((button) => {

    button.addEventListener("click", () => {

      sizeButtons.forEach((item) => {

        item.style.backgroundColor = "";

        item.style.borderColor = "#e3e4e5";

        item.style.color = "";

      });

      button.style.backgroundColor = "#f967a6";

      button.style.borderColor = "#f967a6";

      button.style.color = "#ffffff";

      selectedSize = button.querySelector("p")

        .textContent.trim();

    });

  });

  // ABRIR E FECHAR MENU DE ADICIONAIS

  function toggleAdditionals() {

    additionalsList.classList.toggle("activated");

    additionalsArrow.classList.toggle("activated");

  }

  additionalsButton.addEventListener("click", toggleAdditionals);

  // SELECIONAR ADICIONAIS

  additionalsItems.forEach((item) => {

    item.addEventListener("click", () => {

      const alreadySelected = selectedAdditionals.includes(item);

      const plus = item.querySelector(".plusAdditionals");

      if (alreadySelected) {

        selectedAdditionals = selectedAdditionals.filter(

          (selected) => selected !== item

        );

        item.classList.remove("selecionado");

        plus.textContent = "+";

        return;

      }

      if (selectedAdditionals.length >= 5) {

        alert("Você pode escolher no máximo 5 adicionais!");

        return;

      }

      selectedAdditionals.push(item);

      item.classList.add("selecionado");

      plus.textContent = "✓";

    });

  });

  // FAVORITAR PRODUTO

  favoriteIcon.addEventListener("click", () => {

    favoriteIcon.classList.toggle("favorited");

  });

  // ADICIONAR AO CARRINHO

  function mostrarPopup(nome, tamanho, quantidade) {
    let popupAntigo = document.querySelector(".popup-fundo");
    if (popupAntigo) {
      popupAntigo.remove();
    }

    let popup = document.createElement("div");
    popup.className = "popup-fundo";
    popup.innerHTML = `
      <div class="popup-caixa" role="dialog" aria-modal="true">
        <div class="popup-icone">
          <span>✓</span>
        </div>
        <h2>Produto adicionado!</h2>
        <p>${quantidade}x ${nome} (${tamanho})</p>
        <div class="popup-botoes">
          <button class="popup-continuar">Continuar comprando</button>
          <a class="popup-carrinho" href="../carrinho/Carrinhocompras.html">Ver carrinho</a>
        </div>
      </div>
    `;
    document.body.appendChild(popup);

    let botaoContinuar = popup.querySelector(".popup-continuar");
    botaoContinuar.focus();

    function fecharPopup() {
      popup.remove();
      document.removeEventListener("keydown", aoApertarTecla);
    }

    function aoApertarTecla(evento) {
      if (evento.key === "Escape") {
        fecharPopup();
      }
    }

    botaoContinuar.addEventListener("click", fecharPopup);

    popup.addEventListener("click", (evento) => {
      if (evento.target === popup) {
        fecharPopup();
      }
    });

    document.addEventListener("keydown", aoApertarTecla);
  }

  buttonAddCart.addEventListener("click", () => {

    if (!selectedSize) {

      alert("Por favor, escolha um tamanho!");

      return;

    }

    const unitPrice = calculateUnitPrice();

    const additionalNames = selectedAdditionals.map((item) =>

      item.querySelector("p").textContent.trim()

    );

    const productId = [

      productName,

      selectedSize,

      ...additionalNames

    ].join("-");

    const newProduct = {

      id: productId,

      name: productName,

      price: unitPrice,

      image: productImage,

      size: selectedSize,

      additionals: additionalNames,

      quantity: quantity

    };

    // Recuperar produtos já salvos

    let cart = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Verificar se o mesmo produto já existe

    const existingProduct = cart.find(

      (item) => item.id === productId

    );

    if (existingProduct) {

      existingProduct.quantity += quantity;

    } else {

      cart.push(newProduct);

    }

    // Salvar carrinho

    localStorage.setItem("carrinho", JSON.stringify(cart));

    mostrarPopup(productName, selectedSize, quantity);

    // Reiniciar seleções

    quantity = 1;

    quantityValue.textContent = quantity;

  });

});
 