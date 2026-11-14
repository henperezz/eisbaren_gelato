

// BOTÃO DE MUDAR O TEMA

let buttonSwitch = document.getElementById("buttonSwitch");

if (buttonSwitch) {

  buttonSwitch.addEventListener("click", () => {

    buttonSwitch.classList.toggle("dark");

  });

}


// Nome usado para salvar os dados no navegador.

const chaveCarrinho = "carrinhoIceberg";

// Recupera os dados que já estavam salvos.

let carrinhoSalvo = JSON.parse(

  localStorage.getItem(chaveCarrinho) || "[]"

);


// Captura as imagens dos produtos.

const imagens = document.querySelectorAll(

  ".img, .Açaí-Kiwi, .Kit-Picolé, .pote"

);

// Captura os nomes e tamanhos.

const textos = document.querySelectorAll(".texto-milk");

// Captura os preços.

const precos = document.querySelectorAll(".item-price h3");

// Captura os controles de quantidade.

const quantidades = document.querySelectorAll(".quantity");

// Captura os valores totais.

const totais = document.querySelectorAll(".item-total h3");

// Captura os botões de remover.

const botoesRemover = document.querySelectorAll(".item-remove");

// Captura as linhas que separam os produtos.

const linhas = document.querySelectorAll(".linha-produto");


let produtos = [];

imagens.forEach((imagem, index) => {

  // Recupera o preço do produto.

  let precoTexto = precos[index].textContent;

  let preco = Number(

    precoTexto.replace("R$", "").replace(",", ".").trim()

  );

  // Recupera a quantidade salva.

  let dadosSalvos = carrinhoSalvo[index] || {};

  let quantidade = dadosSalvos.quantidade || 1;

  // Cria o objeto do produto.

  let produto = {

    id: index + 1,

    nome: textos[index].querySelector("h2").innerText,

    imagem: imagem.querySelector("img").src,

    preco: preco,

    quantidade: quantidade,

    removido: dadosSalvos.removido || false

  };

  produtos.push(produto);

});


function formatarPreco(valor) {

  return valor.toLocaleString("pt-BR", {

    style: "currency",

    currency: "BRL"

  });

}

function salvarCarrinho() {

  localStorage.setItem(

    chaveCarrinho,

    JSON.stringify(

      produtos.map(produto => ({

        quantidade: produto.quantidade,

        removido: produto.removido

      }))

    )

  );

}


function atualizarContador() {

  let quantidadeTotal = 0;

  produtos.forEach(produto => {

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

    quantidades[index].querySelector("span").textContent =

      produto.quantidade;

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
 
