//dark mode
const buttonSwitch = document.getElementById("buttonSwitch");
if (buttonSwitch) {
  buttonSwitch.addEventListener("click", () => {
    buttonSwitch.classList.toggle("dark");
  });
}

const favoriteIcon = document.getElementById("favoriteIcon");
if (favoriteIcon) {
  favoriteIcon.addEventListener("click", () => {
    favoriteIcon.classList.toggle("favorited");
  });
}

//-------------------------------------------------------------------------

//sanduiche
const btnSanduiche = document.querySelector(".sanduiche-container"); // ele procura o elemento com a class sanduiche-container e guarda a variavel btn 
const dropdown = document.getElementById("dropdown"); //aqui é a mesma coisa, ele procura o id dropdown e guarda a variavel 

if (btnSanduiche && dropdown) { //esse comando evita erro, ele verifica se os elementos btn e dropdown existem de fato.
  btnSanduiche.addEventListener("click", () => { //faz com que o sanduiche assim que clicado execute o que ta dentro deles e executas os comandos dentro da chaves
    btnSanduiche.classList.toggle("aberto"); //ele é oq abre o btn
    dropdown.classList.toggle("aberto"); //mesma coisa esse que abre o drop down, ambos ao mesmo tempos
  });
}

//-------------------------------------------------------------------------

//fecha o dropdown quando clicar em um link 
const linksCategoria = document.querySelectorAll(".link-categoria"); //seleciona TODOS os links das categorias e guarda meio que em uma lista

linksCategoria.forEach((link) => { //passa por cada link um por um
  link.addEventListener("click", () => { //para cad alink, '''''escuta'''' um clique nele.
    btnSanduiche.classList.remove("aberto"); //remove a classe "aberto" do botão
    dropdown.classList.remove("aberto"); //remove a classe "aberto" do dropdown

    //obs: diferente do toggle, o remove só tira, e nunca adiciona
  });
});

//parte d efechar o dropdown quando clicar fora dele
document.addEventListener("click", (evento) => { //escuta clique em QUALQUER lugar da página, o document é  pagina inteira e o evento guarda a onde foi clicado.
  const cliquouDentro = btnSanduiche.contains(evento.target) || dropdown.contains(evento.target); //verifica se o clique foi dentro do botão ou do dropdown. esses dois traços || é basicamente um 'ou'. se isso acontecer vira true

  if (!cliquouDentro) { // esse ponto de exclamação ele fala pro programa que se NÃO foi dentro ou seja,ele inverte o valor e o cliqueDentro vira falso, e o codigo continua basicamente.
    btnSanduiche.classList.remove("aberto");
    dropdown.classList.remove("aberto");
    //aqui nessas duas linhas é basicmanete igual as outras, que ele remove o abert de ambas
  }
});
