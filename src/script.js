import { bears } from "./data.js";

const divResultado = document.getElementById("div-resultado");
const inputNome = document.getElementById("input-nome");
const btnPesquisar = document.getElementById("btn-pesquisar");
const selectFiltros = document.getElementById("select-filtros");

// Função para criar elementos HTML com base no array fornecido
function createElements(array) {
  divResultado.innerHTML = "";
  array.forEach((e) => {
    divResultado.innerHTML += `
      <div>
        <img src="${e.url}" alt="${e.name}">
        <p>${e.name} ${e.nome}</p>
      </div>
    `;
  });
}

// Função para buscar e exibir ursos pelo nome
function findElement() {
  const valorInput = inputNome.value.trim(); // Obtém o valor do input, removendo espaços extras

  const findBear = bears.filter((e) => e.nome === valorInput); // Filtra os ursos com o nome correspondente
  if (findBear.length === 0) {
    return (divResultado.innerHTML = "<p>Não existe esse Urso</p>"); // Exibe uma mensagem se nenhum urso for encontrado
  }
  createElements(findBear); // Chama a função para criar os elementos HTML com o resultado da pesquisa
}

// Função para ordenar os elementos de acordo com a opção selecionada no select
function sortedElements({ target }) {
  switch (target.value) {
    case "1":
      const orderA = [...bears]; // Cria uma cópia do array para ordenação A-Z
      orderA.sort((a, b) => a.nome.localeCompare(b.nome)); // Ordena A-Z usando o método localeCompare para ordem alfabética
      createElements(orderA); // Atualiza a exibição dos elementos ordenados
      break;

    case "2":
      const orderZ = [...bears]; // Cria uma cópia do array para ordenação Z-A
      orderZ.sort((a, b) => b.nome.localeCompare(a.nome)); // Ordena Z-A usando o método localeCompare para ordem alfabética invertida
      createElements(orderZ); // Atualiza a exibição dos elementos ordenados
      break;

    default:
      break;
  }
}

createElements(bears); // Inicializa a página exibindo todos os ursos ao carregar

// Adiciona event listeners para botão de pesquisa e select de ordenação
btnPesquisar.addEventListener("click", findElement);
selectFiltros.addEventListener("change", sortedElements);

//createElements(array): Função para criar elementos HTML baseados no array fornecido (bears). Essa função é chamada para atualizar a exibição sempre que há uma pesquisa ou mudança na ordenação.
//findElement(): Função que busca e exibe ursos cujo nome corresponde ao valor inserido no campo de entrada. Se nenhum urso for encontrado, exibe uma mensagem de aviso.
//sortedElements(event): Função para ordenar os ursos de acordo com a opção selecionada no seletor (selectFiltros). As opções são A-Z (ordem alfabética crescente) e Z-A (ordem alfabética decrescente).
//Event Listeners: São adicionados para o botão de pesquisa (btnPesquisar) e para o seletor de ordenação (selectFiltros). Quando o usuário interage com esses elementos, as funções correspondentes são chamadas para atualizar a exibição dos ursos conforme necessário.
//Este código cria uma aplicação simples para visualizar e interagir com uma lista de ursos, permitindo a pesquisa por nome e a ordenação dos resultados de forma dinâmica.
