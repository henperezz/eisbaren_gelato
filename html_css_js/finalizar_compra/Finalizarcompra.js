let valorFrete = 15;

let resumoItens = document.getElementById("resumoItens");
let resumoSubtotal = document.getElementById("resumoSubtotal");
let resumoEnvio = document.getElementById("resumoEnvio");
let resumoTotal = document.getElementById("resumoTotal");
let formPedido = document.getElementById("formPedido");
let btnConfirmar = document.getElementById("btnConfirmar");
let btnFinalizar = document.getElementById("btnFinalizar");

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function lerCarrinho() {
  return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function desenharResumo() {
  let carrinho = lerCarrinho();
  let subtotal = 0;
  let envio = 0;
  let html = "";

  carrinho.forEach((produto) => {
    let totalProduto = produto.price * produto.quantity;
    subtotal += totalProduto;

    html += `
      <div class="resumo-item">
        <span>${produto.quantity}x ${produto.name} (${produto.size})</span>
        <strong>${formatarPreco(totalProduto)}</strong>
      </div>
    `;
  });

  if (carrinho.length === 0) {
    html = `
      <div class="resumo-item">
        <span>Seu carrinho está vazio.</span>
      </div>
    `;
  } else {
    envio = valorFrete;
  }

  resumoItens.innerHTML = html;
  resumoSubtotal.textContent = formatarPreco(subtotal);
  resumoEnvio.textContent = formatarPreco(envio);
  resumoTotal.textContent = formatarPreco(subtotal + envio);
}

function finalizarPedido(evento) {
  evento.preventDefault();

  if (lerCarrinho().length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  if (!formPedido.reportValidity()) {
    return;
  }

  localStorage.removeItem("carrinho");
  desenharResumo();

  alert("Pedido realizado com sucesso!");

  window.location.href = "../index/index.html";
}

btnConfirmar.addEventListener("click", finalizarPedido);
btnFinalizar.addEventListener("click", finalizarPedido);

desenharResumo();
