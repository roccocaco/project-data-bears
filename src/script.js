import { bears } from "./data.js";

const divResultado = document.getElementById("div-resultado");
const inputNome = document.getElementById("input-nome");
const btnPesquisar = document.getElementById("btn-pesquisar");
const selectFiltros = document.getElementById("select-filtros");

function createElements(array) {
  divResultado.innerHTML = "";
  const resultado = array.map(
    (e) =>
      (divResultado.innerHTML += `
    <div>
      <img src="${e.url}">
      <p>${e.name} ${e.nome}</p>
    </div>
  `)
  );
}

function findElement() {
  const valorInput = inputNome.value;

  const findBear = bears.filter((e) => e.nome === valorInput);
  if (findBear.length === 0) {
    return (divResultado.innerHTML = "<p>Não existe esse Urso</p>");
  }
  createElements(findBear);
}

function sortedElements({ target }) {
  switch (target.value) {
    case "1":
      const orderA = bears;
      orderA.sort((a, b) => a.nome.localeCompare(b.nome));
      createElements(orderA);
      break;

    case "2":
      const orderZ = bears;
      orderZ.sort((a, b) => b.nome.localeCompare(a.nome));
      createElements(orderZ);
      break;

    default:
      break;
  }
}

createElements(bears);

btnPesquisar.addEventListener("click", findElement);
selectFiltros.addEventListener("change", sortedElements);
