let listaCarrinho = document.getElementById("listaCarrinho");
let carrinhoVazio = document.getElementById("carrinhoVazio");
let cartResumo = document.getElementById("cartResumo");
let cartCount = document.getElementById("cart-count");
let cartTotal = document.getElementById("cart-total");
let linkFinalizar = document.getElementById("linkFinalizar");

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function lerCarrinho() {
  return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function salvarCarrinho(carrinho) {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function desenharCarrinho() {
  let carrinho = lerCarrinho();
  let quantidadeTotal = 0;
  let valorTotal = 0;
  let html = "";

  carrinho.forEach((produto) => {
    quantidadeTotal += produto.quantity;
    valorTotal += produto.price * produto.quantity;

    let adicionais = "";
    if (produto.additionals.length > 0) {
      adicionais = `<span class="item-adicionais">+ ${produto.additionals.join(", ")}</span>`;
    }

    html += `
      <div class="item-carrinho">
        <div class="item-detalhes">
          <div class="img-item">
            <img src="${produto.image}" alt="${produto.name}">
          </div>
          <div class="texto-milk">
            <h2>${produto.name}</h2>
            <span>Tamanho: ${produto.size}</span>
            ${adicionais}
          </div>
        </div>
        <div class="item-price">
          <h3>${formatarPreco(produto.price)}</h3>
        </div>
        <div class="quantity">
          <button class="buttonMinus buttonQuantity">-</button>
          <span>${produto.quantity}</span>
          <button class="buttonPlus buttonQuantity">+</button>
        </div>
        <div class="item-total">
          <h3>${formatarPreco(produto.price * produto.quantity)}</h3>
        </div>
        <div class="item-remove">
          <img src="img/Button.png" alt="Botão para remover o item do carrinho">
        </div>
      </div>
      <div class="linha-produto"></div>
    `;
  });

  listaCarrinho.innerHTML = html;
  cartCount.textContent = `(${quantidadeTotal} Unid)`;
  cartTotal.textContent = formatarPreco(valorTotal);

  if (carrinho.length === 0) {
    carrinhoVazio.style.display = "block";
    cartResumo.style.display = "none";
  } else {
    carrinhoVazio.style.display = "none";
    cartResumo.style.display = "flex";
  }

  ativarBotoes();
}

function ativarBotoes() {
  let botoesMais = document.querySelectorAll(".buttonPlus");
  let botoesMenos = document.querySelectorAll(".buttonMinus");
  let botoesRemover = document.querySelectorAll(".item-remove img");

  botoesMais.forEach((botao, index) => {
    botao.addEventListener("click", () => {
      let carrinho = lerCarrinho();
      carrinho[index].quantity++;
      salvarCarrinho(carrinho);
      desenharCarrinho();
    });
  });

  botoesMenos.forEach((botao, index) => {
    botao.addEventListener("click", () => {
      let carrinho = lerCarrinho();
      if (carrinho[index].quantity > 1) {
        carrinho[index].quantity--;
        salvarCarrinho(carrinho);
        desenharCarrinho();
      }
    });
  });

  botoesRemover.forEach((botao, index) => {
    botao.style.cursor = "pointer";
    botao.addEventListener("click", () => {
      let carrinho = lerCarrinho();
      carrinho.splice(index, 1);
      salvarCarrinho(carrinho);
      desenharCarrinho();
    });
  });
}

linkFinalizar.addEventListener("click", (evento) => {
  if (lerCarrinho().length === 0) {
    evento.preventDefault();
    alert("Seu carrinho está vazio!");
  }
});

desenharCarrinho();
