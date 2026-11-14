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

  const buttonSwitch = document.getElementById("buttonSwitch");

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

    return productPrice + additionalTotal;

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

      selectedSize = button.querySelector(".textSizeButton")

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

        item.style.backgroundColor = "";

        plus.textContent = "+";

        return;

      }

      if (selectedAdditionals.length >= 5) {

        alert("Você pode escolher no máximo 5 adicionais!");

        return;

      }

      selectedAdditionals.push(item);

      item.style.backgroundColor = "#fce4ed";

      plus.textContent = "✓";

    });

  });

  // FAVORITAR PRODUTO

  favoriteIcon.addEventListener("click", () => {

    favoriteIcon.classList.toggle("favorited");

  });

  // MODO ESCURO

  buttonSwitch.addEventListener("click", () => {

    buttonSwitch.classList.toggle("dark");

    document.body.classList.toggle("dark");

  });

  // ADICIONAR AO CARRINHO

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

    alert("Produto adicionado ao carrinho!");

    // Reiniciar seleções

    quantity = 1;

    quantityValue.textContent = quantity;

  });

});
 