// O modo escuro agora é controlado por ../shared/theme.js (salva a escolha entre páginas)

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",

    currency: "BRL",
  });
}

function salvarCarrinho() {
  localStorage.setItem(
    chaveCarrinho,

    JSON.stringify(
      produtos.map((produto) => ({
        quantidade: produto.quantidade,

        removido: produto.removido,
      })),
    ),
  );
}

function atualizarContador() {
  let quantidadeTotal = 0;

  produtos.forEach((produto) => {
    if (!produto.removido) {
      quantidadeTotal += produto.quantidade;
    }
  });

  document.getElementById("cart-count").textContent =
    `(${quantidadeTotal} Unid)`;
}

function atualizarCarrinho() {
  produtos.forEach((produto, index) => {
    if (produto.removido) return;

    // Atualiza a quantidade na tela.

    quantidades[index].querySelector("span").textContent = produto.quantidade;

    // Calcula o valor total do produto.

    let total = produto.preco * produto.quantidade;

    // Mostra o valor atualizado.

    totais[index].textContent = formatarPreco(total);
  });

  atualizarContador();

  salvarCarrinho();
}

quantidades.forEach((grupo, index) => {
  const botaoMenos = grupo.querySelector(".buttonMinus");

  const botaoMais = grupo.querySelector(".buttonPlus");

  // Botão de diminuir.

  botaoMenos.addEventListener("click", () => {
    if (produtos[index].quantidade > 1) {
      produtos[index].quantidade--;

      atualizarCarrinho();
    }
  });

  // Botão de aumentar.

  botaoMais.addEventListener("click", () => {
    produtos[index].quantidade++;

    atualizarCarrinho();
  });
});

botoesRemover.forEach((botao, index) => {
  botao.style.cursor = "pointer";

  botao.addEventListener("click", () => {
    // Marca o produto como removido.

    produtos[index].removido = true;

    // Esconde os elementos desse produto.

    imagens[index].style.display = "none";

    textos[index].style.display = "none";

    precos[index].parentElement.style.display = "none";

    quantidades[index].style.display = "none";

    totais[index].parentElement.style.display = "none";

    botao.style.display = "none";

    if (linhas[index]) {
      linhas[index].style.display = "none";
    }

    atualizarCarrinho();
  });
});

produtos.forEach((produto, index) => {
  if (produto.removido) {
    imagens[index].style.display = "none";

    textos[index].style.display = "none";

    precos[index].parentElement.style.display = "none";

    quantidades[index].style.display = "none";

    totais[index].parentElement.style.display = "none";

    botoesRemover[index].style.display = "none";

    if (linhas[index]) {
      linhas[index].style.display = "none";
    }
  }
});

// Atualiza todos os valores ao carregar.

atualizarCarrinho();
