const formElemento = document.querySelector("form");
const inputsElementos = document.querySelectorAll("input");
const textAreaElemento = document.querySelector("textArea")

formElemento.addEventListener("submit", function (event) {
event.preventDefault();

valores = []

inputsElementos.forEach(function (input) {
  valores.push(input.value)//pucha os valores da lista
  //console.log(input.value);
});
  valores.push(textAreaElemento.value);

  console.log("dados do formulário: ", valores);
});
